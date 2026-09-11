"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "framer-motion"
import {
  Calendar as CalendarIcon,
  Clock,
  Check,
  Sparkles,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Scissors,
  User,
  Star,
  CheckCircle2,
  Phone,
} from "lucide-react"
import { format, isBefore, startOfToday, addDays } from "date-fns"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  bookingFormSchema,
  type BookingFormInput,
} from "@/lib/validations"
import { MOCK_SERVICES, MOCK_STYLISTS, MockStore } from "@/lib/mock-data"
import { ServiceDTO, StylistDTO, BookingDTO } from "@/lib/types"

const timeSlots = [
  "09:30",
  "10:30",
  "11:30",
  "12:30",
  "14:00",
  "15:00",
  "16:30",
  "17:30",
]

function BookingContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialServiceId = searchParams.get("service") || "sig-cut-blowdry"
  const initialStylistId = searchParams.get("stylist") || ""

  const [step, setStep] = React.useState<1 | 2 | 3 | 4 | 5>(1)
  const [selectedService, setSelectedService] = React.useState<ServiceDTO>(
    () => MOCK_SERVICES.find((s) => s.id === initialServiceId) || MOCK_SERVICES[0]
  )
  const [selectedStylist, setSelectedStylist] = React.useState<StylistDTO | null>(
    () => MOCK_STYLISTS.find((s) => s.id === initialStylistId) || null
  )
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(() => addDays(new Date(), 1))
  const [selectedTime, setSelectedTime] = React.useState<string>("11:30")
  const [createdBooking, setCreatedBooking] = React.useState<BookingDTO | null>(null)
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  // React Hook Form for Step 4 Client details (shadcn Form + zod)
  const form = useForm<BookingFormInput>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      service_id: selectedService.id,
      stylist_id: selectedStylist?.id || "",
      date: selectedDate ? format(selectedDate, "yyyy-MM-dd") : "",
      time_slot: selectedTime,
      client_name: "",
      client_phone: "+353 87 ",
      client_email: "",
      notes: "",
    },
  })

  // Pre-fill if client is already logged in
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const rawUser = localStorage.getItem("user")
      if (rawUser) {
        try {
          const user = JSON.parse(rawUser)
          if (user.name) form.setValue("client_name", user.name)
          if (user.phone) form.setValue("client_phone", user.phone)
          if (user.email) form.setValue("client_email", user.email)
        } catch {}
      }
    }
  }, [form])

  // Sync form state when user changes selections
  React.useEffect(() => {
    form.setValue("service_id", selectedService.id)
    if (selectedStylist) form.setValue("stylist_id", selectedStylist.id)
    if (selectedDate) form.setValue("date", format(selectedDate, "yyyy-MM-dd"))
    form.setValue("time_slot", selectedTime)
  }, [selectedService, selectedStylist, selectedDate, selectedTime, form])

  const onFinalSubmit = async (values: BookingFormInput) => {
    setIsSubmitting(true)
    try {
      await new Promise((r) => setTimeout(r, 600))
      const newBooking = MockStore.createBooking({
        service_id: selectedService.id,
        service_title: selectedService.title,
        service_price: selectedService.price,
        service_duration: selectedService.duration_minutes,
        service_image_url: selectedService.image_url,
        service_category: selectedService.category,
        stylist_id: selectedStylist?.id || "stylist-agnes",
        stylist_name: selectedStylist?.name || "Agnes Burke",
        user_name: values.client_name,
        user_phone: values.client_phone,
        user_email: values.client_email,
        notes: values.notes,
        booking_time: `${values.date}T${values.time_slot}:00.000Z`,
        status: "confirmed",
      })
      setCreatedBooking(newBooking)
      setStep(5)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 md:px-8 py-12 max-w-5xl">
        {/* Title & Stepper Header */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
          <Badge variant="outline" className="border-primary/40 text-primary px-3 py-0.5 text-xs font-semibold uppercase">
            <Scissors className="w-3.5 h-3.5 mr-1.5" />
            Ross Rd Hair Studio
          </Badge>
          <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-foreground">
            Reserve Your Hair Experience
          </h1>

          {/* Step Progress Bar */}
          {step < 5 && (
            <div className="flex items-center justify-center gap-2 pt-4">
              {[
                { num: 1, label: "Service" },
                { num: 2, label: "Stylist" },
                { num: 3, label: "Date & Time" },
                { num: 4, label: "Your Details" },
              ].map((s) => (
                <div key={s.num} className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                      step >= s.num
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {step > s.num ? <Check className="w-3.5 h-3.5" /> : s.num}
                  </div>
                  <span
                    className={`text-xs hidden sm:inline font-medium ${
                      step >= s.num ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {s.label}
                  </span>
                  {s.num < 4 && <div className="w-6 sm:w-10 h-[1px] bg-border" />}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Dynamic Stepper Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {/* STEP 1: SERVICE SELECTION */}
            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {MOCK_SERVICES.map((srv) => (
                    <div
                      key={srv.id}
                      onClick={() => setSelectedService(srv)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex gap-4 items-center bg-card ${
                        selectedService.id === srv.id
                          ? "border-primary ring-2 ring-primary/20 shadow-lg"
                          : "border-border/70 hover:border-primary/40 shadow-sm"
                      }`}
                    >
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-secondary">
                        <Image src={srv.image_url} alt={srv.title} fill className="object-cover" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-semibold text-primary uppercase tracking-wider">
                            {srv.category}
                          </span>
                          <span className="font-serif font-bold text-base text-foreground">{srv.price}</span>
                        </div>
                        <h4 className="text-sm font-serif font-semibold text-foreground mt-0.5">{srv.title}</h4>
                        <p className="text-xs text-muted-foreground line-clamp-1 mt-1">{srv.description}</p>
                        <div className="flex items-center gap-1 text-[11px] text-muted-foreground mt-1.5">
                          <Clock className="w-3 h-3 text-primary" />
                          <span>{srv.duration_minutes} mins</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end pt-4">
                  <Button variant="luxury" size="lg" onClick={() => setStep(2)}>
                    Continue to Stylist Selection
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: STYLIST SELECTION */}
            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Any Stylist Option */}
                  <div
                    onClick={() => setSelectedStylist(null)}
                    className={`p-5 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center space-y-3 bg-card ${
                      selectedStylist === null
                        ? "border-primary ring-2 ring-primary/20 shadow-lg"
                        : "border-border/70 hover:border-primary/40 shadow-sm"
                    }`}
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center font-serif font-bold text-xl">
                      <Sparkles className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-serif font-semibold text-base text-foreground">Any Master Stylist</h4>
                      <p className="text-xs text-muted-foreground mt-1">Earliest available appointment slot</p>
                    </div>
                  </div>

                  {/* Master Stylists */}
                  {MOCK_STYLISTS.map((sty) => (
                    <div
                      key={sty.id}
                      onClick={() => setSelectedStylist(sty)}
                      className={`p-5 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-between space-y-3 bg-card ${
                        selectedStylist?.id === sty.id
                          ? "border-primary ring-2 ring-primary/20 shadow-lg"
                          : "border-border/70 hover:border-primary/40 shadow-sm"
                      }`}
                    >
                      <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-primary/30">
                        <Image src={sty.avatar_url} alt={sty.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-serif font-semibold text-base text-foreground">{sty.name}</h4>
                        <p className="text-[11px] text-primary font-medium">{sty.title}</p>
                        <div className="flex items-center justify-center gap-1 text-xs text-[#dfba58] mt-1 font-bold">
                          <Star className="w-3 h-3 fill-current" />
                          <span>{sty.rating.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  <Button variant="luxury" size="lg" onClick={() => setStep(3)}>
                    Continue to Date & Time
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: DATE & TIME */}
            {step === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  {/* Calendar (7 cols) */}
                  <Card className="md:col-span-7 border-border/70 p-4">
                    <CardHeader className="p-2 pb-4">
                      <CardTitle className="text-base font-serif">Select Date</CardTitle>
                      <CardDescription className="text-xs">Studio is open Tuesday through Saturday on Ross Rd</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 flex justify-center">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={(d) => d && setSelectedDate(d)}
                        disabled={(date) => {
                          const today = startOfToday()
                          const day = date.getDay()
                          // Closed on Sundays (0) and Mondays (1)
                          return isBefore(date, today) || day === 0 || day === 1
                        }}
                        className="rounded-xl border border-border/60"
                      />
                    </CardContent>
                  </Card>

                  {/* Time Slots (5 cols) */}
                  <Card className="md:col-span-5 border-border/70 p-4">
                    <CardHeader className="p-2 pb-4">
                      <CardTitle className="text-base font-serif">Available Time Slots</CardTitle>
                      <CardDescription className="text-xs">
                        {selectedDate ? format(selectedDate, "EEEE, MMMM d") : "Choose a date"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="grid grid-cols-2 gap-2.5">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                              selectedTime === time
                                ? "bg-primary text-primary-foreground shadow-md"
                                : "bg-secondary text-secondary-foreground hover:bg-primary/20"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <Button variant="outline" onClick={() => setStep(2)}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  <Button variant="luxury" size="lg" onClick={() => setStep(4)}>
                    Continue to Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* STEP 4: CLIENT DETAILS FORM (shadcn Form + zod) */}
            {step === 4 && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="max-w-2xl mx-auto space-y-6"
              >
                {/* Booking Summary Box */}
                <div className="p-4 rounded-2xl bg-secondary/60 border border-border/70 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-primary tracking-wider">Service Summary</span>
                    <h4 className="text-base font-serif font-bold text-foreground">{selectedService.title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Stylist: {selectedStylist ? selectedStylist.name : "First Available"} •{" "}
                      {selectedDate ? format(selectedDate, "EEE, MMM d") : ""} at {selectedTime}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-serif font-bold text-foreground">{selectedService.price}</span>
                    <span className="block text-[10px] text-muted-foreground">{selectedService.duration_minutes} mins</span>
                  </div>
                </div>

                {/* Form */}
                <Card className="border-border/70 p-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onFinalSubmit)} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="client_name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium">Your Full Name</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="e.g. Aoife Nally" className="h-11" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="client_phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium">Contact Phone Number</FormLabel>
                              <FormControl>
                                <Input {...field} type="tel" placeholder="+353 87 123 4567" className="h-11" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="client_email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">Email Address (Optional)</FormLabel>
                            <FormControl>
                              <Input {...field} type="email" placeholder="aoife@example.ie" className="h-11" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="notes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">Hair Notes / Consultation Request</FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                placeholder="Tell us about your hair type, current color, or special event requirements..."
                                className="min-h-[90px]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex items-center justify-between pt-4">
                        <Button type="button" variant="outline" onClick={() => setStep(3)}>
                          <ArrowLeft className="w-4 h-4 mr-2" />
                          Back
                        </Button>
                        <Button type="submit" variant="luxury" size="lg" disabled={isSubmitting}>
                          {isSubmitting ? "Confirming..." : "Confirm & Reserve Appointment"}
                          <CheckCircle2 className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </form>
                  </Form>
                </Card>
              </motion.div>
            )}

            {/* STEP 5: CONFIRMATION */}
            {step === 5 && createdBooking && (
              <motion.div
                key="step-5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md mx-auto text-center space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <Badge variant="outline" className="border-emerald-500/30 text-emerald-500 mb-2">
                    Appointment Confirmed
                  </Badge>
                  <h2 className="text-3xl font-serif font-bold text-foreground">We Can&apos;t Wait to Welcome You!</h2>
                  <p className="text-sm text-muted-foreground mt-2">
                    Your appointment has been reserved at AG Hair Studio on Ross Rd. An SMS confirmation was sent to{" "}
                    <span className="font-semibold text-foreground">{createdBooking.user_phone}</span>.
                  </p>
                </div>

                <Card className="border-border/70 p-5 text-left space-y-3 bg-card">
                  <div className="flex justify-between text-xs pb-2 border-b border-border/50">
                    <span className="text-muted-foreground">Booking ID:</span>
                    <span className="font-mono font-bold">{createdBooking.id}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Service:</span>
                    <span className="font-semibold">{createdBooking.service_title}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Stylist:</span>
                    <span className="font-semibold">{createdBooking.stylist_name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Date & Time:</span>
                    <span className="font-semibold">
                      {format(new Date(createdBooking.booking_time), "EEEE, MMM d")} at {selectedTime}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm pt-2 border-t border-border/50">
                    <span className="text-muted-foreground">Price:</span>
                    <span className="font-bold text-primary text-base">{createdBooking.service_price}</span>
                  </div>
                </Card>

                <div className="flex flex-col gap-3">
                  <Button asChild variant="luxury" size="lg" className="w-full">
                    <Link href="/dashboard">View in Client Portal</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/">Return to Homepage</Link>
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function BookingPage() {
  return (
    <React.Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground font-mono text-xs">
          Loading Booking Concierge...
        </div>
      }
    >
      <BookingContent />
    </React.Suspense>
  )
}
