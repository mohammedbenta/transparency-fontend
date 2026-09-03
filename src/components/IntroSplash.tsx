"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

function markIntroSeen() {
  sessionStorage.setItem("tclinics-intro", "1");
  document.cookie = "tclinics-intro=1; Path=/; SameSite=Lax";
  document.documentElement.classList.add("intro-done");
}

export function IntroSplash() {
  const [gone, setGone] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem("tclinics-intro");
    if (reduce || seen) {
      markIntroSeen();
      setGone(true);
      return;
    }

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const leave = window.setTimeout(() => setLeaving(true), 2400);
    const end = window.setTimeout(() => {
      markIntroSeen();
      document.body.style.overflow = prev;
      setGone(true);
    }, 3300);

    return () => {
      window.clearTimeout(leave);
      window.clearTimeout(end);
      document.body.style.overflow = prev;
    };
  }, []);

  if (gone) return null;

  return (
    <div className={cn("intro-splash", leaving && "is-leaving")} aria-hidden>
      <span className="intro-glow" />
      <div className="intro-mark">
        <Image
          src="/images/brand/logo-wordmark.png"
          alt=""
          width={927}
          height={170}
          priority
          className="intro-logo"
        />
        <span className="intro-rule" />
      </div>
    </div>
  );
}
