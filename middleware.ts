import { NextRequest, NextResponse, NextFetchEvent } from "next/server";

const BOT_UA = /HeadlessChrome|Googlebot|bingbot|bot|crawler|spider|python|curl|wget|node-fetch|GPTBot|ClaudeBot|SemrushBot|AhrefsBot|ByteSpider/i;

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  const accept = req.headers.get("accept") || "";
  if (
    req.nextUrl.pathname === "/" &&
    accept.includes("text/html") &&
    !req.headers.get("RSC") &&
    !req.headers.get("Next-Router-Prefetch")
  ) {
    const userAgent = req.headers.get("user-agent") || "";

    if (!BOT_UA.test(userAgent)) {
      const ip =
        req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        req.headers.get("x-real-ip") ||
        "unknown";

      const country = req.headers.get("x-vercel-ip-country") || null;
      const salt = process.env.IP_SALT || "portfolio-salt";

      const encoder = new TextEncoder();
      const data = encoder.encode(ip + salt);
      const hashBuffer = await crypto.subtle.digest("SHA-256", data);
      const ipHash = Array.from(new Uint8Array(hashBuffer))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("")
        .slice(0, 16);

      const supabaseUrl = process.env.SUPABASE_URL;
      const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

      if (supabaseUrl && supabaseKey && ip !== "unknown") {
        // Runs after the response is sent — waitUntil keeps the Edge
        // isolate alive so this isn't killed mid-flight (it was silently
        // dropping the VPN/ISP lookup for most requests without this).
        event.waitUntil(
          (async () => {
            // Skip if this IP already logged a visit in the last 5s —
            // collapses browser prefetch/duplicate-request bursts into one row.
            const recentCheck = await fetch(
              `${supabaseUrl}/rest/v1/portfolio_visits?ip_hash=eq.${ipHash}&created_at=gte.${new Date(
                Date.now() - 5000
              ).toISOString()}&select=id&limit=1`,
              {
                headers: {
                  apikey: supabaseKey,
                  Authorization: `Bearer ${supabaseKey}`,
                },
              }
            )
              .then((r) => r.json())
              .catch(() => []);

            if (Array.isArray(recentCheck) && recentCheck.length > 0) return;

            let isVpn = false;
            let isp: string | null = null;

            try {
              const ipInfo = await fetch(
                `http://ip-api.com/json/${ip}?fields=proxy,hosting,org`,
                { signal: AbortSignal.timeout(2000) }
              ).then((r) => r.json());

              isVpn = !!(ipInfo?.proxy || ipInfo?.hosting);
              isp = ipInfo?.org || null;
            } catch {
              // ip-api.com failed — continue without VPN info
            }

            await fetch(`${supabaseUrl}/rest/v1/portfolio_visits`, {
              method: "POST",
              headers: {
                apikey: supabaseKey,
                Authorization: `Bearer ${supabaseKey}`,
                "Content-Type": "application/json",
                Prefer: "return=minimal",
              },
              body: JSON.stringify({
                ip_hash: ipHash,
                user_agent: userAgent,
                country,
                is_vpn: isVpn,
                isp,
              }),
            }).catch(() => {});
          })()
        );
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
