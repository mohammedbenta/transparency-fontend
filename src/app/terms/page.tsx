"use client";

import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";

export default function TermsPage() {
  const { lang, t } = useLang();
  return (
    <article className="mx-auto max-w-3xl px-5 py-32 lg:px-8">
      <h1 className="text-4xl font-light">{t("terms")}</h1>
      <div className="gold-rule mt-6" />
      <div className="mt-10 space-y-5 text-sm leading-8 text-muted">
        {lang === "ar" ? (
          <>
            <p>
              محتوى هذا الموقع للتعريف بعيادات الشفافية لطب الأسنان في جدة. لا يُعد
              استشارة طبية ولا يضمن نتيجة علاجية.
            </p>
            <p>
              الحجز عبر هذه النسخة التجريبية طلب تواصل فقط، وليس تأكيداً في نظام
              المواعيد. للتأكيد تواصل عبر الهاتف أو واتساب: {site.phoneDisplay}.
            </p>
          </>
        ) : (
          <>
            <p>
              This website introduces Transparency Dental Clinics in Jeddah. It is not
              medical advice and does not guarantee a treatment outcome.
            </p>
            <p>
              Booking on this demonstration is a contact request, not a confirmed slot
              in the clinic’s scheduling system. Confirm by phone or WhatsApp:{" "}
              {site.phoneDisplay}.
            </p>
          </>
        )}
      </div>
    </article>
  );
}
