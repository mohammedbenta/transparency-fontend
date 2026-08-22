import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description:
    "تواصل مع عيادات الشفافية لطب الأسنان في حي الأندلس، جدة — هاتف، واتساب، أو نموذج الرسالة.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
