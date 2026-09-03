"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BookingPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#quick-book");
  }, [router]);

  return null;
}
