"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        setError("Wrong password");
      }
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#000319] flex items-center justify-center p-4">
      <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-xl font-bold text-white mb-1">Admin Access</h1>
        <p className="text-white/40 text-sm mb-6">alexandrahockett.com</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm outline-none focus:border-purple-400/50 placeholder-white/30"
          />
          {error && <p className="text-red-400 text-xs">{error}</p>}
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full bg-purple-600 hover:bg-purple-500 text-white rounded-lg py-2.5 text-sm font-medium transition-colors disabled:opacity-40"
            style={{ backgroundColor: "#7c3aed" }}
          >
            {loading ? "Logging in…" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
