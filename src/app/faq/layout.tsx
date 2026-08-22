import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الأسئلة الشائعة",
  description: "كيف تحجز، أين العيادة، وماذا تتوقع في زيارتك الأولى لعيادات الشفافية في جدة.",
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
