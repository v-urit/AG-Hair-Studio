import { redirect } from "next/navigation"

export default function SignupPage() {
  // Seamlessly route to unified Phone + OTP authentication page
  redirect("/login")
}
