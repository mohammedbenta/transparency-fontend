import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الأطباء",
  description: "د. أحمد نواوي — الرئيس التنفيذي والشريك المؤسس لعيادات الشفافية لطب الأسنان في جدة.",
};

export default function DoctorsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
