import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

export async function PUT(req: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  if (!token || token !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { ip_hash, note } = await req.json();

  await getSupabaseAdmin()
    .from("visitor_notes")
    .upsert({ ip_hash, note, updated_at: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
