import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export const dynamic = "force-dynamic";

async function getStats() {
  const { count: totalVisits } = await supabaseAdmin
    .from("portfolio_visits")
    .select("*", { count: "exact", head: true });

  const { data: ipData } = await supabaseAdmin
    .from("portfolio_visits")
    .select("ip_hash");
  const uniqueIPs = new Set(ipData?.map((r) => r.ip_hash)).size;

  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  const { count: todayVisits } = await supabaseAdmin
    .from("portfolio_visits")
    .select("*", { count: "exact", head: true })
    .gte("created_at", todayStart.toISOString());

  const weekStart = new Date();
  weekStart.setDate(weekStart.getDate() - 7);
  const { count: weekVisits } = await supabaseAdmin
    .from("portfolio_visits")
    .select("*", { count: "exact", head: true })
    .gte("created_at", weekStart.toISOString());

  // One row per unique IP — most recent visit + total count per IP
  const { data: allVisits } = await supabaseAdmin
    .from("portfolio_visits")
    .select("ip_hash, user_agent, created_at")
    .order("created_at", { ascending: false });

  // Group by IP: keep most recent visit + count total visits
  const ipMap = new Map<string, { user_agent: string; last_seen: string; visits: number }>();
  for (const v of allVisits ?? []) {
    if (!ipMap.has(v.ip_hash)) {
      ipMap.set(v.ip_hash, { user_agent: v.user_agent, last_seen: v.created_at, visits: 1 });
    } else {
      ipMap.get(v.ip_hash)!.visits++;
    }
  }
  const perIp = Array.from(ipMap.entries())
    .map(([ip_hash, data]) => ({ ip_hash, ...data }))
    .sort((a, b) => new Date(b.last_seen).getTime() - new Date(a.last_seen).getTime());

  return { totalVisits: totalVisits ?? 0, uniqueIPs, todayVisits: todayVisits ?? 0, weekVisits: weekVisits ?? 0, perIp };
}

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  if (!token || token !== process.env.ADMIN_PASSWORD) redirect("/admin/login");

  const stats = await getStats();

  return (
    <div className="min-h-screen bg-[#000319] text-white p-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">Portfolio Analytics</h1>
            <p className="text-white/40 text-sm mt-0.5">alexandrahockett.com</p>
          </div>
          <a
            href="/api/admin/logout"
            className="text-xs text-white/40 hover:text-white/70 border border-white/10 rounded-lg px-3 py-1.5 transition-colors"
          >
            Logout
          </a>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Views", value: stats.totalVisits },
            { label: "Unique Visitors", value: stats.uniqueIPs },
            { label: "Today", value: stats.todayVisits },
            { label: "This Week", value: stats.weekVisits },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-white/40 text-xs mb-1">{label}</p>
              <p className="text-2xl font-bold">{value.toLocaleString()}</p>
            </div>
          ))}
        </div>

        {/* Per-IP table */}
        <div className="rounded-2xl border border-white/10 overflow-hidden">
          <div className="px-5 py-3 border-b border-white/10 bg-white/5 flex items-center justify-between">
            <h2 className="font-semibold text-sm">Visitors — one row per IP</h2>
            <span className="text-xs text-white/40">{stats.uniqueIPs} unique</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5 text-white/40 text-xs">
                  <th className="text-left px-5 py-2.5 font-medium">IP (hashed)</th>
                  <th className="text-left px-5 py-2.5 font-medium">Visits</th>
                  <th className="text-left px-5 py-2.5 font-medium">Last seen</th>
                  <th className="text-left px-5 py-2.5 font-medium hidden sm:table-cell">Browser</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {stats.perIp.map((row) => (
                  <tr key={row.ip_hash} className="hover:bg-white/[0.03] transition-colors">
                    <td className="px-5 py-3 font-mono text-purple text-xs">{row.ip_hash}</td>
                    <td className="px-5 py-3">
                      <span className="bg-purple/20 text-purple text-xs px-2 py-0.5 rounded-full">{row.visits}</span>
                    </td>
                    <td className="px-5 py-3 text-white/60 text-xs">
                      {new Date(row.last_seen).toLocaleString("en-GB", { dateStyle: "short", timeStyle: "short" })}
                    </td>
                    <td className="px-5 py-3 text-white/40 text-xs truncate max-w-[200px] hidden sm:table-cell">
                      {row.user_agent?.split(" ").slice(0, 2).join(" ")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a href="/" className="text-xs text-white/20 hover:text-white/40">← Back to portfolio</a>
        </div>
      </div>
    </div>
  );
}
