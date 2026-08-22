export const site = {
  nameAr: "عيادات الشفافية لطب الأسنان",
  nameEn: "Transparency Dental Clinics",
  shortAr: "الشفافية",
  shortEn: "Transparency",
  url: "https://www.tclinics.net",
  instagram: "https://www.instagram.com/tclinics_/",
  instagramHandle: "@tclinics_",
  linkedin: "https://www.linkedin.com/company/tclinics",
  email: "info@tclinics.net",
  phoneDisplay: "055 881 7388",
  phoneIntl: "+966 55 881 7388",
  phoneTel: "+966558817388",
  whatsapp: "966558817388",
  addressAr: "٢٧١٨ عبدالرحمن الطبيشي، الأندلس، جدة ٢٣٣٢٦",
  addressEn: "2718 Abdulrahman Al Tubayshi, Al Andalus, Jeddah 23326",
  cityAr: "جدة",
  cityEn: "Jeddah",
  districtAr: "الأندلس",
  districtEn: "Al Andalus",
  countryAr: "المملكة العربية السعودية",
  countryEn: "Saudi Arabia",
  mapsQuery:
    "2718 Abdulrahman Al Tubayshi, Al Andalus, Jeddah 23326",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=2718+Abdulrahman+Al+Tubayshi,+Al+Andalus,+Jeddah+23326",
  mapsEmbed:
    "https://maps.google.com/maps?q=2718%20Abdulrahman%20Al%20Tubayshi%2C%20Al%20Andalus%2C%20Jeddah%2023326&t=&z=16&ie=UTF8&iwloc=&output=embed",
  /**
   * Google rating as listed by Zavis healthcare directory (sourced from Google,
   * last verified May 2026). Replace if the live Google listing changes.
   */
  reviews: {
    rating: 4.9,
    count: 418,
    platform: "Google",
    mapsReviewsUrl:
      "https://www.google.com/maps/search/?api=1&query=Transparency+Dental+Clinics+Jeddah",
  },
} as const;

export const whatsappHref = (message?: string) => {
  const text = encodeURIComponent(
    message ??
      "مرحباً، أرغب في حجز موعد في عيادات الشفافية لطب الأسنان.",
  );
  return `https://wa.me/${site.whatsapp}?text=${text}`;
};

export const telHref = `tel:${site.phoneTel}`;
export const mailHref = `mailto:${site.email}`;
