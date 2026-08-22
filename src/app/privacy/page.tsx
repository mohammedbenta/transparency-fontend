"use client";

import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";

export default function PrivacyPage() {
  const { lang, t } = useLang();
  const name = lang === "ar" ? site.nameAr : site.nameEn;
  return (
    <article className="mx-auto max-w-3xl px-5 py-32 lg:px-8">
      <h1 className="text-4xl font-light">{t("privacy")}</h1>
      <div className="gold-rule mt-6" />
      <div className="mt-10 space-y-5 text-sm leading-8 text-muted">
        {lang === "ar" ? (
          <>
            <p>
              تجمع {name} البيانات التي ترسلها عبر نماذج الموقع أو واتساب أو الهاتف
              بغرض التواصل وترتيب المواعيد. لا نبيع بياناتك.
            </p>
            <p>
              هذا العرض التجريبي لا يخزّن الطلبات في نظام العيادة. عند الإطلاق الفعلي
              تُحدَّث هذه الصفحة لتعرض سياسة العيادة المعتمدة.
            </p>
          </>
        ) : (
          <>
            <p>
              {name} collects information you send through site forms, WhatsApp, or
              phone in order to communicate and arrange visits. We do not sell your data.
            </p>
            <p>
              This demonstration does not store requests in the clinic’s system. At
              launch this page should carry the clinic’s adopted privacy policy.
            </p>
          </>
        )}
      </div>
    </article>
  );
}
