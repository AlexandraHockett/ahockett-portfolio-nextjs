import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import { NoteCell } from "@/components/admin/NoteCell";

export const dynamic = "force-dynamic";

const toFlag = (code: string) =>
  code.toUpperCase().replace(/./g, (c) =>
    String.fromCodePoint(c.charCodeAt(0) + 127397)
  );

function parseUA(ua: string | null): string {
  if (!ua) return "Unknown";
  if (/HeadlessChrome/i.test(ua)) return "Headless Chrome";
  if (/node-fetch|python|curl|wget/i.test(ua)) return ua.split("/")[0];

  const browser =
    ua.match(/Edg\/[\d.]+/) ? "Edge" :
    ua.match(/Chrome\/[\d.]+/) ? `Chrome ${ua.match(/Chrome\/([\d]+)/)?.[1] ?? ""}` :
    ua.match(/Firefox\/[\d.]+/) ? `Firefox ${ua.match(/Firefox\/([\d]+)/)?.[1] ?? ""}` :
    ua.match(/Safari\/[\d.]+/) ? "Safari" :
    ua.match(/([A-Za-z]+Bot)/i)?.[1] ?? "Unknown";

  const os =
    ua.includes("Windows") ? "Windows" :
    ua.includes("iPhone") ? "iPhone" :
    ua.includes("Android") ? "Android" :
    ua.includes("Mac") ? "Mac" :
    ua.includes("X11") ? "Linux" : "";

  return os ? `${browser} / ${os}` : browser;
}

const BOT_PATTERNS = [
  /bot/i, /crawler/i, /spider/i, /scraper/i,
  /curl/i, /wget/i, /python-requests/i, /python\//i,
  /java\//i, /go-http/i, /libwww/i, /httpunit/i,
  /nutch/i, /slurp/i, /baiduspider/i, /yandex/i,
  /facebookexternalhit/i, /twitterbot/i, /slackbot/i,
  /discordbot/i, /whatsapp/i, /telegrambot/i,
  /linkedinbot/i, /applebot/i, /semrushbot/i,
  /ahrefsbot/i, /mj12bot/i, /dotbot/i, /ia_archiver/i,
  /pingdom/i, /uptimerobot/i, /gptbot/i, /claudebot/i,
  /bytespider/i, /petalbot/i, /dataforseo/i,
  /HeadlessChrome/i, /node-fetch/i, /vercel/i,
];

const detectBot = (ua: string): { isBot: boolean; label: string } => {
  if (!ua) return { isBot: false, label: "Unknown" };
  const match = BOT_PATTERNS.find((p) => p.test(ua));
  if (match) {
    const name = ua.match(/([A-Za-z]+[Bb]ot|[A-Za-z]+[Cc]rawler|[A-Za-z]+[Ss]pider)/)?.[0];
    return { isBot: true, label: name || "Bot" };
  }
  return { isBot: false, label: "Human" };
};

async function getStats() {
  const db = getSupabaseAdmin();

  const { count: totalVisits } = await db
    .from("portfolio_visits")
    .select("*", { count: "exact", head: true });

  const { data: ipData } = await db.from("portfolio_visits").select("ip_hash");
  const uniqueIPs = new Set(ipData?.map((r) => r.ip_hash)).size;

  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  const { count: todayVisits } = await db
    .from("portfolio_visits")
    .select("*", { count: "exact", head: true })
    .gte("created_at", todayStart.toISOString());

  const weekStart = new Date();
  weekStart.setDate(weekStart.getDate() - 7);
  const { count: weekVisits } = await db
    .from("portfolio_visits")
    .select("*", { count: "exact", head: true })
    .gte("created_at", weekStart.toISOString());

  const { data: allVisits } = await db
    .from("portfolio_visits")
    .select("ip_hash, user_agent, country, is_vpn, isp, created_at")
    .order("created_at", { ascending: false });

  const { data: notesData } = await db
    .from("visitor_notes")
    .select("ip_hash, note");
  const notesMap = new Map(notesData?.map((n) => [n.ip_hash, n.note]) ?? []);

  const ipMap = new Map<string, { user_agent: string; country: string | null; is_vpn: boolean; isp: string | null; last_seen: string; visits: number }>();
  for (const v of allVisits ?? []) {
    if (!ipMap.has(v.ip_hash)) {
      ipMap.set(v.ip_hash, { user_agent: v.user_agent, country: v.country, is_vpn: !!v.is_vpn, isp: v.isp, last_seen: v.created_at, visits: 1 });
    } else {
      const entry = ipMap.get(v.ip_hash)!;
      entry.visits++;
      if (v.is_vpn) entry.is_vpn = true; // flag VPN if any visit was via VPN
    }
  }

  const perIp = Array.from(ipMap.entries())
    .map(([ip_hash, data]) => ({ ip_hash, ...data, note: notesMap.get(ip_hash) ?? "" }))

    .sort((a, b) => new Date(b.last_seen).getTime() - new Date(a.last_seen).getTime());

  return {
    totalVisits: totalVisits ?? 0,
    uniqueIPs,
    todayVisits: todayVisits ?? 0,
    weekVisits: weekVisits ?? 0,
    perIp,
  };
}

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  if (!token || token !== process.env.ADMIN_PASSWORD) redirect("/admin/login");

  const stats = await getStats();

  return (
    <div className="min-h-screen bg-[#000319] text-white p-6">
      <div className="max-w-5xl mx-auto">

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

        {/* Visitors section */}
        <div className="rounded-2xl border border-white/10 overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 border-b border-white/10 bg-white/5 flex items-center justify-between">
            <h2 className="font-semibold text-sm">Visitors</h2>
            <div className="flex items-center gap-3 text-xs">
              <span className="text-green-400">
                👤 {stats.perIp.filter(r => !detectBot(r.user_agent).isBot).length} humans
              </span>
              <span className="text-yellow-400">
                🤖 {stats.perIp.filter(r => detectBot(r.user_agent).isBot).length} bots
              </span>
            </div>
          </div>

          {/* Mobile: cards */}
          <div className="md:hidden divide-y divide-white/5">
            {stats.perIp.map((row) => {
              const { isBot, label } = detectBot(row.user_agent);
              return (
                <div key={row.ip_hash} className="p-4 space-y-2.5">
                  {/* Row 1: IP + flag + type */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-purple text-xs truncate">{row.ip_hash}</span>
                    <div className="flex items-center gap-2 shrink-0 flex-wrap justify-end">
                      <span className="text-base">{row.country ? toFlag(row.country) : "—"}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                        isBot
                          ? "bg-yellow-500/15 text-yellow-400 border border-yellow-500/20"
                          : "bg-green-500/15 text-green-400 border border-green-500/20"
                      }`}>
                        {isBot ? `🤖 ${label}` : "👤 Human"}
                      </span>
                      {!isBot && row.is_vpn && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-orange-500/15 text-orange-400 border border-orange-500/20" title={row.isp || "VPN/Proxy"}>
                          🔒 VPN
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Row 2: visits + last seen + browser */}
                  <div className="flex items-center gap-3 text-xs text-white/50">
                    <span className="bg-purple/20 text-purple px-2 py-0.5 rounded-full font-medium">
                      {row.visits}×
                    </span>
                    <span>{new Date(row.last_seen).toLocaleString("en-GB", { dateStyle: "short", timeStyle: "short" })}</span>
                    <span className="truncate text-white/30" title={row.user_agent || ""}>{parseUA(row.user_agent)}</span>
                  </div>
                  {/* Row 3: note */}
                  <NoteCell ipHash={row.ip_hash} initialNote={row.note} />
                </div>
              );
            })}
          </div>

          {/* Desktop: table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5 text-white/40 text-xs">
                  <th className="text-left px-5 py-2.5 font-medium">IP (hashed)</th>
                  <th className="text-left px-5 py-2.5 font-medium">Country</th>
                  <th className="text-left px-5 py-2.5 font-medium">Type</th>
                  <th className="text-left px-5 py-2.5 font-medium">Visits</th>
                  <th className="text-left px-5 py-2.5 font-medium">Last seen</th>
                  <th className="text-left px-5 py-2.5 font-medium">Browser</th>
                  <th className="text-left px-5 py-2.5 font-medium">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {stats.perIp.map((row) => {
                  const { isBot, label } = detectBot(row.user_agent);
                  return (
                    <tr key={row.ip_hash} className="hover:bg-white/[0.03] transition-colors">
                      <td className="px-5 py-3 font-mono text-purple text-xs">{row.ip_hash}</td>
                      <td className="px-5 py-3 text-center text-base" title={row.country ?? "Unknown"}>
                        {row.country ? toFlag(row.country) : <span className="text-white/20 text-xs">—</span>}
                      </td>
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                            isBot
                              ? "bg-yellow-500/15 text-yellow-400 border border-yellow-500/20"
                              : "bg-green-500/15 text-green-400 border border-green-500/20"
                          }`}>
                            {isBot ? `🤖 ${label}` : "👤 Human"}
                          </span>
                          {!isBot && row.is_vpn && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-orange-500/15 text-orange-400 border border-orange-500/20" title={row.isp || "VPN/Proxy"}>
                              🔒 VPN
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-5 py-3">
                        <span className="bg-purple/20 text-purple text-xs px-2 py-0.5 rounded-full">{row.visits}</span>
                      </td>
                      <td className="px-5 py-3 text-white/60 text-xs whitespace-nowrap">
                        {new Date(row.last_seen).toLocaleString("en-GB", { dateStyle: "short", timeStyle: "short" })}
                      </td>
                      <td className="px-5 py-3 text-white/40 text-xs max-w-[180px]" title={row.user_agent || ""}>
                        <span className="block truncate cursor-help">{parseUA(row.user_agent)}</span>
                      </td>
                      <td className="px-5 py-3 min-w-[140px]">
                        <NoteCell ipHash={row.ip_hash} initialNote={row.note} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a href="/" className="text-xs text-white/20 hover:text-white/40">
            ← Back to portfolio
          </a>
        </div>
      </div>
    </div>
  );
}
