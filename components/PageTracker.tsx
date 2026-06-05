"use client";

import { useEffect } from "react";

export default function PageTracker() {
  useEffect(() => {
    try {
      // sendBeacon is less likely to be blocked than fetch
      if (navigator.sendBeacon) {
        navigator.sendBeacon("/api/ping");
      } else {
        fetch("/api/ping", { method: "POST" }).catch(() => {});
      }
    } catch {
      // silently fail
    }
  }, []);
  return null;
}
