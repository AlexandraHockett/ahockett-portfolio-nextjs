import { NextRequest, NextResponse } from "next/server";

const BOT_UA = /HeadlessChrome|Googlebot|bingbot|bot|crawler|spider|python|curl|wget|node-fetch|GPTBot|ClaudeBot|SemrushBot|AhrefsBot|ByteSpider/i;

export async function middleware(req: NextRequest) {
  // Only track the main portfolio page
  if (req.nextUrl.pathname === "/") {
    const userAgent = req.headers.get("user-agent") || "";

    // Skip known bots
    if (!BOT_UA.test(userAgent)) {
      const ip =
        req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        req.headers.get("x-real-ip") ||
        "unknown";

      const country = req.headers.get("x-vercel-ip-country") || null;
      const salt = process.env.IP_SALT || "portfolio-salt";

      // Web Crypto API — works in Edge Runtime (no Node.js crypto needed)
      const encoder = new TextEncoder();
      const data = encoder.encode(ip + salt);
      const hashBuffer = await crypto.subtle.digest("SHA-256", data);
      const ipHash = Array.from(new Uint8Array(hashBuffer))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("")
        .slice(0, 16);

      const supabaseUrl = process.env.SUPABASE_URL;
      const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

      if (supabaseUrl && supabaseKey) {
        // Fire-and-forget — don't await so we don't slow down the page
        fetch(`${supabaseUrl}/rest/v1/portfolio_visits`, {
          method: "POST",
          headers: {
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
            "Content-Type": "application/json",
            Prefer: "return=minimal",
          },
          body: JSON.stringify({ ip_hash: ipHash, user_agent: userAgent, country }),
        }).catch(() => {});
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
