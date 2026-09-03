export const BOOKING_ID = "quick-book";

export function bookingHref(service?: string) {
  const query = service ? `?service=${encodeURIComponent(service)}` : "";
  return `/${query}#${BOOKING_ID}`;
}

export function scrollToBooking() {
  const form = document.getElementById(BOOKING_ID);
  if (!form) return false;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  form.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  return true;
}

export function handleBookingClick(
  event: { preventDefault: () => void },
  service?: string,
) {
  if (!scrollToBooking()) return;
  event.preventDefault();
  if (!service) return;
  const url = new URL(window.location.href);
  url.searchParams.set("service", service);
  url.hash = BOOKING_ID;
  window.history.replaceState(null, "", `${url.pathname}?${url.searchParams.toString()}#${BOOKING_ID}`);
  window.dispatchEvent(
    new CustomEvent("tclinics:booking-service", { detail: { service } }),
  );
}
