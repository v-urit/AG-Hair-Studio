import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book Hair Appointment | AG Hair Studio",
  description:
    "Reserve your precision haircut, French balayage, or restorative hair therapy at AG Hair Studio on Ross Rd, Mullingar. Instant 24/7 online booking.",
}

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
