import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { IBM_Plex_Sans_Arabic, Cormorant_Garamond } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { IntroSplash } from "@/components/IntroSplash";
import { StickyActions } from "@/components/StickyActions";
import { JsonLd } from "@/components/JsonLd";
import { BookingProvider } from "@/components/BookingModal";
import { LanguageProvider } from "@/lib/i18n";
import { SkipLink } from "@/components/SkipLink";
import { site } from "@/lib/site";
import type { Lang } from "@/lib/content";
import "./globals.css";

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1c3b34",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "عيادات الشفافية لطب الأسنان | جدة",
    template: "%s | عيادات الشفافية",
  },
  description:
    "عيادات الشفافية لطب الأسنان في جدة — رعاية أسنان لكبار الشخصيات، وتجربة شخصية راقية في حي الأندلس.",
  keywords: [
    "عيادة أسنان جدة",
    "عيادات الشفافية",
    "طب الأسنان جدة",
    "تصميم الابتسامة جدة",
    "تجميل الأسنان جدة",
    "Transparency Dental Clinics",
    "dentist Jeddah",
    "Al Andalus dental clinic",
  ],
  openGraph: {
    locale: "ar_SA",
    alternateLocale: ["en_US"],
    type: "website",
    siteName: site.nameAr,
    title: "عيادات الشفافية لطب الأسنان | جدة",
    description:
      "رعاية أسنان لكبار الشخصيات في جدة — تجربة مصممة حول راحتك ودقتك وابتسامتك.",
    images: [{ url: "/images/clinic/reception.jpg", alt: site.nameAr }],
  },
  twitter: {
    card: "summary_large_image",
    title: "عيادات الشفافية لطب الأسنان",
    description: "رعاية أسنان راقية في حي الأندلس، جدة.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const cookieStore = await cookies();
  const lang: Lang = cookieStore.get("lang")?.value === "en" ? "en" : "ar";
  const introDone = cookieStore.get("tclinics-intro")?.value === "1";

  return (
    <html
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={`${arabic.variable} ${serif.variable} ${arabic.className} h-full antialiased ${introDone ? "intro-done" : ""}`}
    >
      <body className="flex min-h-full flex-col bg-ivory font-sans text-ink">
        <LanguageProvider initialLang={lang}>
          <BookingProvider>
            <SkipLink />
            <JsonLd />
            {!introDone && <IntroSplash />}
            <Header />
            <main id="content" className="flex-1">
              {children}
            </main>
            <Footer />
            <StickyActions />
          </BookingProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
