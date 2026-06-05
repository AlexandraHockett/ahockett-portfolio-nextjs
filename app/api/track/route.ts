import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

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

    await supabaseAdmin.from("portfolio_visits").insert({
      ip_hash: ipHash,
      user_agent: userAgent,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false });
  }
}
