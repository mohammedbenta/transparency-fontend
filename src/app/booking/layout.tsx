import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "احجز موعدك",
  description: "اطلب موعداً في عيادات الشفافية لطب الأسنان في جدة عبر النموذج أو واتساب أو الهاتف.",
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
