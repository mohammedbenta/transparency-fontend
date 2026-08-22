import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "خدماتنا",
  description:
    "تصميم الابتسامة، تجميل الأسنان، التركيبات، علاج الجذور، التقويم، الزراعة والمزيد في عيادات الشفافية بجدة.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
