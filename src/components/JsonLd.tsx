"use client";

import { useEffect } from "react";
import { faqs, featuredServices } from "@/lib/content";
import { site } from "@/lib/site";

export function JsonLd() {
  useEffect(() => {
    const dentist = {
      "@context": "https://schema.org",
      "@type": ["Dentist", "LocalBusiness"],
      name: site.nameEn,
      alternateName: site.nameAr,
      description:
        "Premium VIP dental clinic in Al Andalus, Jeddah. Personalized, high-end dental care in a refined environment.",
      url: site.url,
      telephone: site.phoneTel,
      email: site.email,
      image: `${site.url}/images/clinic/reception.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "2718 Abdulrahman Al Tubayshi",
        addressLocality: "Jeddah",
        addressRegion: "Makkah",
        postalCode: "23326",
        addressCountry: "SA",
      },
      geo: {
        "@type": "GeoCoordinates",
        address: site.addressEn,
      },
      sameAs: [site.instagram, site.linkedin],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...site.hours.daysOfWeek],
        opens: site.hours.opens,
        closes: site.hours.closes,
      },
      areaServed: { "@type": "City", name: "Jeddah" },
      priceRange: "$$$",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: String(site.reviews.rating),
        reviewCount: String(site.reviews.count),
        bestRating: "5",
      },
    };

    const catalog = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Dental services",
      itemListElement: featuredServices.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.name.en,
        url: `${site.url}/services/${s.slug}`,
      })),
    };

    const faq = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q.en,
        acceptedAnswer: { "@type": "Answer", text: item.a.en },
      })),
    };

    const nodes = [dentist, catalog, faq].map((data, i) => {
      const el = document.createElement("script");
      el.type = "application/ld+json";
      el.id = ["ld-dentist", "ld-catalog", "ld-faq"][i]!;
      el.text = JSON.stringify(data);
      document.head.appendChild(el);
      return el;
    });

    return () => {
      for (const el of nodes) el.remove();
    };
  }, []);

  return null;
}
