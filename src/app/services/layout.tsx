import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "خدماتنا",
  description:
    "تصميم الابتسامة، التركيبات، علاج الجذور، التقويم، الزراعة، والعناية العامة في عيادات الشفافية بجدة.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
