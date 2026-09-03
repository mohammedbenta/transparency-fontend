import { redirect } from "next/navigation";
import { BOOKING_ID } from "@/lib/booking";

export default function BookingPage() {
  redirect(`/#${BOOKING_ID}`);
}
