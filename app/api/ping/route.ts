import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const salt = process.env.IP_SALT || "portfolio-salt";
    const ipHash = createHash("sha256")
      .update(ip + salt)
      .digest("hex")
      .slice(0, 16);

    const userAgent = req.headers.get("user-agent") || "";

    // Skip Vercel's own deploy/health checks
    const isVercelBot =
      req.headers.get("x-vercel-deployment-url") !== null ||
      req.headers.get("x-vercel-internal") !== null ||
      userAgent.includes("HeadlessChrome") ||
      userAgent.includes("Googlebot") ||
      userAgent.includes("node-fetch");
    if (isVercelBot) return NextResponse.json({ ok: true, skipped: true });

    const country = req.headers.get("x-vercel-ip-country") || null;

    await getSupabaseAdmin().from("portfolio_visits").insert({
      ip_hash: ipHash,
      user_agent: userAgent,
      country,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false });
  }
}
