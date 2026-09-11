"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  ExternalLink,
  Navigation,
  Star,
  CheckCircle2,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function LocationHours() {
  const mapUrl =
    "https://www.google.com/maps/place/Agnes+Burke+Hairdressing/data=!4m7!3m6!1s0x485deaa7061cc971:0x58a972d7f17701b5!8m2!3d53.5259941!4d-7.3340708!16s%2Fg%2F11g6j72t49!19sChIJcckcBqfqXUgRtQF38ddyqVg?authuser=0&hl=en&g_ep=EgoyMDI2MDkwMi4wIJJjKgBIAVAD&rclk=1"

  const schedule = [
    { day: "Tuesday", hours: "9:00 AM – 5:30 PM", status: "open" },
    { day: "Wednesday", hours: "9:00 AM – 5:30 PM", status: "open" },
    { day: "Thursday (Late Night)", hours: "9:00 AM – 8:00 PM", status: "late" },
    { day: "Friday", hours: "9:00 AM – 5:30 PM", status: "open" },
    { day: "Saturday", hours: "8:30 AM – 5:30 PM", status: "open" },
    { day: "Sunday – Monday", hours: "Closed (Editorial & Private Rest)", status: "closed" },
  ]

  return (
    <section id="location" className="py-20 sm:py-28 lg:py-32 bg-background border-t border-border/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/5 dark:bg-zinc-800/80 border border-border text-xs font-mono tracking-wider uppercase text-foreground">
              <MapPin className="w-3.5 h-3.5 text-cyan-500" />
              <span>Studio Headquarters</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-foreground uppercase">
              VISIT AG HAIR STUDIO
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Located on Ross Road, Mullingar, Co. Westmeath. Designed for peaceful, unhurried consultations and couture hair transformations.
            </p>
          </div>

          {/* Live Status Pill */}
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-card border border-border/80 shadow-md self-start md:self-auto">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <div className="flex flex-col">
              <span className="text-xs font-mono font-bold text-foreground">SALON ACTIVE NOW</span>
              <span className="text-[10px] text-muted-foreground font-mono">Closes 5:30 PM • Late Thu 8:00 PM</span>
            </div>
          </div>
        </div>

        {/* Bento Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Schedule & Contact Bento Cards (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Studio Hours Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border/80 shadow-lg space-y-6">
              <div className="flex items-center justify-between border-b border-border/60 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-base text-foreground">Operating Schedule</h3>
                    <p className="text-xs text-muted-foreground font-mono">Agnes Burke Hairdressing</p>
                  </div>
                </div>

                <Badge variant="outline" className="font-mono text-[11px]">
                  Appointments &amp; Walk-ins
                </Badge>
              </div>

              <div className="space-y-3">
                {schedule.map((slot, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs py-2 border-b border-border/40 last:border-0"
                  >
                    <span className="font-semibold text-foreground">{slot.day}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-muted-foreground">{slot.hours}</span>
                      {slot.status === "late" && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono font-bold">
                          LATE THURSDAY
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact & Directions Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 rounded-2xl bg-card border border-border/80 shadow-md space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-cyan-600 dark:text-cyan-400 font-bold">
                  <Phone className="w-4 h-4" />
                  <span>Telephone</span>
                </div>
                <p className="text-base font-mono font-bold text-foreground">
                  (044) 934 5678
                </p>
                <p className="text-xs text-muted-foreground">
                  Front desk concierge for scheduling &amp; consultations.
                </p>
                <div className="pt-2">
                  <a
                    href="tel:+353449345678"
                    className="text-xs font-semibold text-foreground underline underline-offset-4 hover:text-cyan-500 transition-colors"
                  >
                    Call Salon Now →
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-card border border-border/80 shadow-md space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-cyan-600 dark:text-cyan-400 font-bold">
                  <Navigation className="w-4 h-4" />
                  <span>Directions</span>
                </div>
                <p className="text-xs font-mono text-foreground font-semibold">
                  Ross Rd, Mullingar
                </p>
                <p className="text-xs text-muted-foreground">
                  Co. Westmeath, Ireland. Dedicated client parking on premises.
                </p>
                <div className="pt-2">
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-foreground underline underline-offset-4 hover:text-cyan-500 transition-colors flex items-center gap-1"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>

            {/* Google Reviews Badge Card */}
            <div className="p-5 rounded-2xl bg-card border border-border/80 shadow-md flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div>
                  <p className="font-sans font-bold text-sm text-foreground">4.9 Star Rated (227 Reviews)</p>
                  <p className="text-xs text-muted-foreground font-mono">Agnes Burke Hairdressing on Google</p>
                </div>
              </div>

              <Button asChild size="sm" variant="outline" className="rounded-xl text-xs h-9">
                <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </Button>
            </div>

          </div>

          {/* Right Live Map Embed (6 cols) */}
          <div className="lg:col-span-6 rounded-3xl bg-card border border-border/80 shadow-xl overflow-hidden p-2 sm:p-3">
            <div className="relative aspect-[4/3] lg:aspect-[1/1] w-full rounded-2xl overflow-hidden bg-zinc-900">
              <iframe
                title="Agnes Burke Hairdressing Google Maps Location"
                src="https://maps.google.com/maps?q=53.5259941,-7.3340708&hl=en&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter contrast-[1.05] grayscale-[0.15] dark:invert-[0.9] dark:hue-rotate-180"
              />

              <div className="absolute top-4 left-4 z-10 p-3 rounded-xl bg-background/90 backdrop-blur-md border border-border text-foreground shadow-lg">
                <p className="font-sans font-bold text-xs">AG Hair Studio Atelier</p>
                <p className="text-[10px] text-muted-foreground font-mono">Ross Rd, Mullingar, Co. Westmeath</p>
              </div>

              <div className="absolute bottom-4 right-4 z-10">
                <Button asChild size="sm" variant="vengence" className="rounded-xl text-xs h-9 px-4 gap-1.5 shadow-xl">
                  <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                    <span>Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
