"use client";

import { useEffect } from "react";

export default function PageTracker() {
  useEffect(() => {
    fetch("/api/ping", { method: "POST" }).catch(() => {});
  }, []);
  return null;
}
