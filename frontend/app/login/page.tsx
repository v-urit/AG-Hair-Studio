"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "framer-motion"
import {
  Smartphone,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  RotateCcw,
  Scissors,
} from "lucide-react"
import {
  phoneAuthSchema,
  otpVerifySchema,
  type PhoneAuthInput,
  type OtpVerifyInput,
} from "@/lib/validations"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MOCK_ADMIN_USER, MOCK_CLIENT_USER } from "@/lib/mock-data"

export default function LoginPage() {
  const router = useRouter()
  const [step, setStep] = React.useState<"phone" | "otp">("phone")
  const [submittedPhone, setSubmittedPhone] = React.useState("")
  const [clientName, setClientName] = React.useState("")
  const [serverError, setServerError] = React.useState("")
  const [resendCooldown, setResendCooldown] = React.useState(60)
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  // Countdown timer for OTP resend
  React.useEffect(() => {
    let timer: NodeJS.Timeout
    if (step === "otp" && resendCooldown > 0) {
      timer = setInterval(() => {
        setResendCooldown((prev) => prev - 1)
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [step, resendCooldown])

  // Step 1: Phone Form (shadcn Form + zod)
  const phoneForm = useForm<PhoneAuthInput>({
    resolver: zodResolver(phoneAuthSchema),
    defaultValues: {
      phone: "+353 87 123 4567",
      name: "",
    },
  })

  // Step 2: OTP Form (shadcn Form + zod)
  const otpForm = useForm<OtpVerifyInput>({
    resolver: zodResolver(otpVerifySchema),
    defaultValues: {
      phone: "",
      code: "123456",
    },
  })

  const onSendOtp = async (data: PhoneAuthInput) => {
    setServerError("")
    setIsSubmitting(true)
    try {
      // Simulate network request for SMS OTP
      await new Promise((r) => setTimeout(r, 600))
      setSubmittedPhone(data.phone)
      setClientName(data.name || "")
      otpForm.setValue("phone", data.phone)
      otpForm.setValue("code", "123456") // pre-fill demo OTP for seamless testing
      setResendCooldown(60)
      setStep("otp")
    } catch {
      setServerError("Failed to send verification SMS. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const onVerifyOtp = async (data: OtpVerifyInput) => {
    setServerError("")
    setIsSubmitting(true)
    try {
      await new Promise((r) => setTimeout(r, 700))

      // Check if phone matches Admin or regular client
      const isAdmin = data.phone.replace(/[\s-]/g, "").includes("870000001")
      const user = isAdmin
        ? MOCK_ADMIN_USER
        : {
            ...MOCK_CLIENT_USER,
            phone: data.phone,
            name: clientName || MOCK_CLIENT_USER.name,
          }

      if (typeof window !== "undefined") {
        localStorage.setItem("demo_mode", "true")
        localStorage.setItem("access_token", `demo-token-${user.role}-${Date.now()}`)
        localStorage.setItem("refresh_token", `demo-refresh-${Date.now()}`)
        localStorage.setItem("user", JSON.stringify(user))
      }

      if (isAdmin) {
        router.push("/admin")
      } else {
        router.push("/dashboard")
      }
    } catch {
      setServerError("Invalid verification code. Please check and re-enter.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Quick Demo account filler
  const handleQuickDemo = (role: "admin" | "customer") => {
    if (role === "admin") {
      phoneForm.setValue("phone", "+353 87 000 0001")
      phoneForm.setValue("name", "Agnes Burke")
    } else {
      phoneForm.setValue("phone", "+353 87 123 4567")
      phoneForm.setValue("name", "Elena Rostova")
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden bg-background">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        {/* Salon Branding Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 group mb-3">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#b88e3e] to-[#dfba58] flex items-center justify-center text-[#0c0b0a] font-serif font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
              AG
            </span>
            <span className="font-serif tracking-widest text-2xl font-bold uppercase text-foreground">
              AG Hair Studio
            </span>
          </Link>
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Scissors className="w-3.5 h-3.5 text-primary" />
            <span>Ross Rd, Mullingar • Agnes Burke Hairdressing</span>
          </div>
        </div>

        {/* Authentication Card */}
        <Card className="border-border/70 shadow-2xl backdrop-blur-md bg-card/95">
          <CardHeader className="text-center pb-4">
            <Badge variant="outline" className="w-fit mx-auto mb-2 border-primary/40 text-primary px-3 py-0.5 text-xs">
              <Sparkles className="w-3 h-3 mr-1.5" />
              Unified Instant Access
            </Badge>
            <CardTitle className="text-2xl font-serif">
              {step === "phone" ? "Welcome to AG Hair Studio" : "Verify Your Number"}
            </CardTitle>
            <CardDescription className="text-sm">
              {step === "phone"
                ? "Enter your mobile phone number to sign in or register in seconds."
                : `We sent a 6-digit SMS verification code to ${submittedPhone}`}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {serverError && (
              <div className="p-3 text-xs rounded-xl bg-destructive/10 text-destructive border border-destructive/20 font-medium">
                {serverError}
              </div>
            )}

            <AnimatePresence mode="wait">
              {step === "phone" ? (
                /* STEP 1: PHONE NUMBER FORM (shadcn Form) */
                <motion.div
                  key="phone-step"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.25 }}
                >
                  <Form {...phoneForm}>
                    <form onSubmit={phoneForm.handleSubmit(onSendOtp)} className="space-y-4">
                      <FormField
                        control={phoneForm.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">Mobile Phone Number</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Smartphone className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                  {...field}
                                  type="tel"
                                  placeholder="+353 87 123 4567"
                                  className="pl-10 h-11 text-base tracking-wide"
                                  autoComplete="tel"
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={phoneForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">
                              Full Name <span className="text-xs text-muted-foreground font-normal">(Optional for new clients)</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="e.g. Elena Rostova"
                                className="h-11"
                                autoComplete="name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        variant="luxury"
                        className="w-full h-12 text-base font-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending SMS Code..." : "Continue with Mobile"}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </form>
                  </Form>
                </motion.div>
              ) : (
                /* STEP 2: OTP VERIFICATION FORM (shadcn Form) */
                <motion.div
                  key="otp-step"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  <Form {...otpForm}>
                    <form onSubmit={otpForm.handleSubmit(onVerifyOtp)} className="space-y-5">
                      <FormField
                        control={otpForm.control}
                        name="code"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">6-Digit SMS Verification Code</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="text"
                                maxLength={6}
                                placeholder="123456"
                                className="h-13 text-center text-2xl font-mono tracking-[0.4em] font-bold border-primary/50 focus:border-primary"
                                autoFocus
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <button
                          type="button"
                          onClick={() => setStep("phone")}
                          className="hover:text-foreground underline underline-offset-4 cursor-pointer"
                        >
                          Change phone number
                        </button>
                        {resendCooldown > 0 ? (
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            Resend in {resendCooldown}s
                          </span>
                        ) : (
                          <button
                            type="button"
                            onClick={() => {
                              setResendCooldown(60)
                              otpForm.setValue("code", "123456")
                            }}
                            className="text-primary hover:underline font-medium cursor-pointer"
                          >
                            Resend code
                          </button>
                        )}
                      </div>

                      <Button
                        type="submit"
                        variant="luxury"
                        className="w-full h-12 text-base font-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Verifying..." : "Verify & Enter Studio"}
                        <CheckCircle2 className="w-4 h-4 ml-2" />
                      </Button>
                    </form>
                  </Form>
                </motion.div>
              )}
            </AnimatePresence>

            <Separator className="my-4" />

            {/* Quick Demo Fillers for Easy Testing */}
            <div className="bg-secondary/50 rounded-xl p-3 border border-border/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  Instant One-Click Demo
                </span>
                <span className="text-[10px] text-muted-foreground">Code: 123456</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleQuickDemo("customer")}
                  className="px-2.5 py-1.5 rounded-lg bg-card border border-border text-xs font-medium hover:border-primary/50 text-left transition-colors cursor-pointer"
                >
                  <span className="block font-semibold text-foreground">Client Demo</span>
                  <span className="text-[10px] text-muted-foreground">+353 87 123 4567</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickDemo("admin")}
                  className="px-2.5 py-1.5 rounded-lg bg-card border border-border text-xs font-medium hover:border-primary/50 text-left transition-colors cursor-pointer"
                >
                  <span className="block font-semibold text-foreground">Salon Director</span>
                  <span className="text-[10px] text-muted-foreground">+353 87 000 0001</span>
                </button>
              </div>
            </div>
          </CardContent>

          <CardFooter className="justify-center border-t border-border/40 py-3">
            <Link
              href="/"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              Return to AG Hair Studio Homepage
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
