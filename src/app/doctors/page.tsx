"use client";

import { DoctorsSection } from "@/components/home/DoctorsSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function DoctorsPage() {
  return (
    <>
      <DoctorsSection className="pt-32 lg:pt-40" />
      <FinalCTA />
    </>
  );
}
