import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Client Portal | AG Hair Studio",
  description:
    "Instant SMS OTP sign-in for AG Hair Studio clients. View your hair appointments, styling records, and consultations on Ross Rd.",
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
