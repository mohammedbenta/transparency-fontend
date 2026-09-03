"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

function markIntroDone() {
  document.documentElement.classList.add("intro-done");
}

export function IntroSplash() {
  const [gone, setGone] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      markIntroDone();
      setGone(true);
      return;
    }

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const leave = window.setTimeout(() => setLeaving(true), 1800);
    const end = window.setTimeout(() => {
      markIntroDone();
      document.body.style.overflow = prev;
      setGone(true);
    }, 2500);

    return () => {
      window.clearTimeout(leave);
      window.clearTimeout(end);
      document.body.style.overflow = prev;
    };
  }, []);

  if (gone) return null;

  return (
    <div className={cn("intro-splash", leaving && "is-leaving")} aria-hidden>
      <div className="intro-mark">
        <div className="intro-logo-frame">
          <Image
            src="/images/brand/logo-wordmark.png"
            alt=""
            width={927}
            height={170}
            priority
            className="intro-logo"
          />
        </div>
        <span className="intro-rule" />
      </div>
    </div>
  );
}
