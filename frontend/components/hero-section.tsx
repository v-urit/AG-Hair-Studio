"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowUpRight,
  Sparkles,
  Star,
  MapPin,
  Clock,
  ShieldCheck,
  Scissors,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32 bg-vengence-grid">
      {/* Subtle top ambient radial lighting (Titanium / Ice Cyan, NO gold) */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-gradient-to-b from-cyan-500/10 via-zinc-500/5 to-transparent blur-3xl opacity-60 dark:opacity-35" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Editorial Content */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-left"
          >
            {/* Real Trust Badge: 4.9★, 227 reviews, Ross Rd */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-zinc-900/5 dark:bg-zinc-800/60 border border-border shadow-sm backdrop-blur-md">
              <span className="flex items-center text-amber-500">
                <Star className="w-3.5 h-3.5 fill-current" />
              </span>
              <span className="text-xs font-mono font-bold tracking-wide text-foreground">
                4.9 ★ · 227 GOOGLE REVIEWS
              </span>
              <span className="hidden sm:inline w-1 h-1 rounded-full bg-zinc-400" />
              <span className="text-xs text-muted-foreground font-mono">
                Ross Rd, Mullingar
              </span>
            </div>

            {/* Architectural Headline (Responsive typography) */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold tracking-tight leading-[1.08] text-foreground uppercase">
                SCULPTING <br />
                <span className="bg-gradient-to-r from-foreground via-zinc-500 to-foreground/70 bg-clip-text text-transparent dark:from-white dark:via-zinc-300 dark:to-zinc-500">
                  FORM &amp; IDENTITY
                </span>
              </h1>
            </div>

            {/* Studio Concept Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl font-normal leading-relaxed">
              Agnes Burke Hairdressing on Ross Rd, Mullingar. A bespoke atelier for dimensional balayage, high-precision architectural scissor work, and restorative scalp therapy rituals.
            </p>

            {/* Quick Metrics Bar (Responsive grid) */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 py-2.5 max-w-lg border-y border-border/60">
              <div>
                <p className="text-lg sm:text-2xl font-mono font-bold text-foreground">15+ Yrs</p>
                <p className="text-[10px] sm:text-[11px] text-muted-foreground uppercase tracking-wider">Couture Mastery</p>
              </div>
              <div className="border-x border-border/60 px-2 sm:px-3">
                <p className="text-lg sm:text-2xl font-mono font-bold text-foreground">5:30 PM</p>
                <p className="text-[10px] sm:text-[11px] text-muted-foreground uppercase tracking-wider">Closes (Late Thu)</p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-mono font-bold text-foreground">100%</p>
                <p className="text-[10px] sm:text-[11px] text-muted-foreground uppercase tracking-wider">Cruelty-Free</p>
              </div>
            </div>

            {/* Call to Action Buttons (Full-width mobile, inline desktop) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <Button
                asChild
                size="lg"
                variant="vengence"
                className="h-12 sm:h-13 rounded-2xl px-8 text-sm uppercase tracking-wider gap-2 shadow-xl font-bold w-full sm:w-auto"
              >
                <Link href="/booking">
                  <span>Reserve Hair Session</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 sm:h-13 rounded-2xl px-6 text-sm font-medium border-border/80 hover:bg-muted/60 w-full sm:w-auto"
              >
                <a href="#services">Explore Services Bento</a>
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                Instant SMS Confirmation
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                Olaplex Certified Salon
              </span>
            </div>
          </motion.div>

          {/* Right Perspective Interactive Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
          >
            {/* Frame with high-fashion imagery */}
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none rounded-3xl p-2 sm:p-2.5 bg-gradient-to-b from-zinc-200/80 via-zinc-200/30 to-zinc-300/40 dark:from-zinc-800/80 dark:via-zinc-800/20 dark:to-zinc-900/60 border border-border shadow-2xl">
              
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900">
                <Image
                  src="/images/hero_hair_studio.jpg"
                  alt="AG Hair Studio interior Agnes Burke Hairdressing Ross Rd Mullingar"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 450px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Floating Status Pill Top Left */}
                <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-[11px] font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>OPEN • CLOSES 5:30 PM</span>
                </div>

                {/* Floating Artist Tag Bottom */}
                <div className="absolute bottom-3.5 inset-x-3.5 z-20 p-3.5 sm:p-4 rounded-xl bg-zinc-950/80 backdrop-blur-xl border border-white/10 text-white space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Founder &amp; Creative Director</p>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/10 font-mono text-zinc-200">
                      Master Stylist
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-sans font-bold text-white tracking-wide">
                    Agnes Burke &amp; Team
                  </p>
                  <p className="text-xs text-zinc-300 line-clamp-1">
                    Specializing in dimensional balayage &amp; face-contouring precision.
                  </p>
                </div>
              </div>
            </div>

            {/* Corner Decorative Element (Hidden on small mobile to avoid overflow) */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 p-3.5 rounded-2xl glass-dock shadow-xl items-center gap-3 z-30">
              <div className="w-9 h-9 rounded-xl bg-zinc-900 dark:bg-white flex items-center justify-center text-white dark:text-zinc-950">
                <Scissors className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">Custom Consultation</p>
                <p className="text-[10px] text-muted-foreground font-mono">Skin patch test &amp; strand analysis</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
