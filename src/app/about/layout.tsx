import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "عن العيادة",
  description:
    "عيادات الشفافية لطب الأسنان في جدة: مؤسسة متميزة متخصصة في رعاية أسنان لكبار الشخصيات وتجربة شخصية راقية.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
