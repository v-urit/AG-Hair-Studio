"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Sparkles,
  ArrowUpRight,
  Clock,
  Check,
  Flame,
  ShieldCheck,
  Scissors,
  Droplets,
  HeartHandshake,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface BentoService {
  id: string
  title: string
  subtitle: string
  price: string
  duration: string
  category: string
  image: string
  tag?: string
  features: string[]
}

const BENTO_SERVICES: BentoService[] = [
  {
    id: "srv-balayage",
    title: "Signature Balayage & Dimension",
    subtitle: "Hand-painted multi-tonal blonding, face-framing foilayage, and neutralizing acidic gloss glaze.",
    price: "From €165",
    duration: "180 mins",
    category: "Color Artistry",
    image: "/images/service_balayage.jpg",
    tag: "Studio Signature",
    features: ["Personalized root shadow", "Olaplex bond builder included", "Blowout & runway wave finish"],
  },
  {
    id: "srv-cut",
    title: "Precision Architectural Cut",
    subtitle: "Bespoke scissor and razor sculpting tailored to facial bone structure and natural hair movement.",
    price: "€65",
    duration: "60 mins",
    category: "Cutting & Shape",
    image: "/images/service_cut.jpg",
    tag: "Most Popular",
    features: ["Deep detox cleanse", "Blowout & thermal shape", "Home maintenance prescription"],
  },
  {
    id: "srv-treatment",
    title: "Olaplex Bond & Scalp Ritual",
    subtitle: "High-concentration molecular bond repair paired with soothing botanical scalp micro-massage.",
    price: "€85",
    duration: "45 mins",
    category: "Hair Health",
    image: "/images/service_treatment.jpg",
    tag: "Restorative",
    features: ["Deep cuticle reseal", "Relieves dry scalp irritation", "Restores tensile elasticity"],
  },
  {
    id: "srv-bridal",
    title: "Couture Bridal & Red Carpet Updo",
    subtitle: "Editorial event styling, architectural chignons, and Hollywood waves built to last all night.",
    price: "€120",
    duration: "90 mins",
    category: "Event Styling",
    image: "/images/service_bridal.jpg",
    tag: "Haute Couture",
    features: ["Pre-event veil consultation", "Thermal humidity lockdown", "Complimentary touch-up kit"],
  },
  {
    id: "srv-keratin",
    title: "Keratin Complex Smoothing",
    subtitle: "Zero-frizz liquid silk treatment that infuses hydrolysed keratin deep into the cortex.",
    price: "€195",
    duration: "150 mins",
    category: "Texture Reform",
    image: "/images/gallery_hair_1.jpg",
    tag: "Transformative",
    features: ["Up to 5 months humidity immunity", "Halves daily blow-dry duration", "Mirror-finish gloss"],
  },
]

export function ServicesBento() {
  return (
    <section id="services" className="py-24 sm:py-32 relative bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-border/60 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/5 dark:bg-zinc-800/80 border border-border text-xs font-mono tracking-wider uppercase text-foreground">
              <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
              <span>Service Bento Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-foreground uppercase">
              HAIR ARTISTRY ARCHITECTURE
            </h2>
            <p className="text-base text-muted-foreground">
              Every appointment is a private masterclass in bespoke cutting, custom chemistry, and dimensional illumination.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <Button asChild variant="outline" className="rounded-xl font-mono text-xs h-9 sm:h-10 px-3.5 sm:px-4 flex-1 sm:flex-initial">
              <Link href="/booking">Full Pricing Guide</Link>
            </Button>
            <Button asChild variant="vengence" className="rounded-xl font-mono text-xs h-9 sm:h-10 px-4 sm:px-5 gap-1.5 flex-1 sm:flex-initial font-semibold">
              <Link href="/booking">
                <span>Book Hair</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Featured Balayage (Span 7 cols) */}
          <div className="md:col-span-7 group rounded-3xl bg-card border border-border/80 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-300 overflow-hidden shadow-lg flex flex-col justify-between">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-900">
              <Image
                src={BENTO_SERVICES[0].image}
                alt={BENTO_SERVICES[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 700px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2">
                <Badge variant="vengence" className="bg-black/60 backdrop-blur-md font-mono text-[10px] sm:text-[11px]">
                  {BENTO_SERVICES[0].tag}
                </Badge>
                <Badge variant="outline" className="bg-black/40 backdrop-blur-md text-white border-white/20 font-mono text-[10px] sm:text-[11px]">
                  {BENTO_SERVICES[0].duration}
                </Badge>
              </div>
              <div className="absolute bottom-3.5 right-3.5">
                <span className="font-mono font-bold text-sm sm:text-lg text-white bg-black/70 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-white/10 backdrop-blur-md">
                  {BENTO_SERVICES[0].price}
                </span>
              </div>
            </div>

            <div className="p-5 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold mb-1">
                  {BENTO_SERVICES[0].category}
                </p>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-foreground tracking-tight">
                  {BENTO_SERVICES[0].title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                  {BENTO_SERVICES[0].subtitle}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-border/60">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {BENTO_SERVICES[0].features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-border/40">
                <span className="text-[11px] text-muted-foreground font-mono">
                  Consultation &amp; patch test required for first-time color.
                </span>
                <Button asChild size="sm" variant="vengence" className="rounded-xl text-xs h-9 px-4 gap-1.5 w-full sm:w-auto font-semibold">
                  <Link href="/booking">
                    <span>Reserve Balayage</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Precision Cut (Span 5 cols) */}
          <div className="md:col-span-5 group rounded-3xl bg-card border border-border/80 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-300 overflow-hidden shadow-lg flex flex-col justify-between">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
              <Image
                src={BENTO_SERVICES[1].image}
                alt={BENTO_SERVICES[1].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge variant="vengence" className="bg-black/60 backdrop-blur-md font-mono text-[11px]">
                  {BENTO_SERVICES[1].tag}
                </Badge>
              </div>
              <div className="absolute bottom-4 right-4">
                <span className="font-mono font-bold text-lg text-white bg-black/70 px-3 py-1.5 rounded-xl border border-white/10 backdrop-blur-md">
                  {BENTO_SERVICES[1].price}
                </span>
              </div>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold mb-1">
                  {BENTO_SERVICES[1].category}
                </p>
                <h3 className="text-xl font-sans font-bold text-foreground tracking-tight">
                  {BENTO_SERVICES[1].title}
                </h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  {BENTO_SERVICES[1].subtitle}
                </p>
              </div>

              <div className="pt-2 border-t border-border/60 flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {BENTO_SERVICES[1].duration}
                </span>
                <Button asChild size="sm" variant="outline" className="rounded-xl text-xs h-9 px-4">
                  <Link href="/booking">Book Cut</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Bento Card 3: Olaplex & Scalp Basin Ritual (Span 4 cols) */}
          <div className="md:col-span-4 group rounded-3xl bg-card border border-border/80 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-300 overflow-hidden shadow-lg flex flex-col justify-between">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
              <Image
                src={BENTO_SERVICES[2].image}
                alt={BENTO_SERVICES[2].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute top-4 left-4">
                <Badge variant="vengence" className="bg-black/60 backdrop-blur-md font-mono text-[11px]">
                  {BENTO_SERVICES[2].tag}
                </Badge>
              </div>
              <div className="absolute bottom-4 right-4">
                <span className="font-mono font-bold text-base text-white bg-black/70 px-2.5 py-1 rounded-xl border border-white/10 backdrop-blur-md">
                  {BENTO_SERVICES[2].price}
                </span>
              </div>
            </div>

            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold mb-1">
                  {BENTO_SERVICES[2].category}
                </p>
                <h4 className="text-lg font-sans font-bold text-foreground">
                  {BENTO_SERVICES[2].title}
                </h4>
                <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">
                  {BENTO_SERVICES[2].subtitle}
                </p>
              </div>

              <div className="pt-2 border-t border-border/60 flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">{BENTO_SERVICES[2].duration}</span>
                <Button asChild size="sm" variant="outline" className="rounded-xl text-xs h-8 px-3">
                  <Link href="/booking">Book Ritual</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Bento Card 4: Bridal & Event (Span 4 cols) */}
          <div className="md:col-span-4 group rounded-3xl bg-card border border-border/80 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-300 overflow-hidden shadow-lg flex flex-col justify-between">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
              <Image
                src={BENTO_SERVICES[3].image}
                alt={BENTO_SERVICES[3].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute top-4 left-4">
                <Badge variant="vengence" className="bg-black/60 backdrop-blur-md font-mono text-[11px]">
                  {BENTO_SERVICES[3].tag}
                </Badge>
              </div>
              <div className="absolute bottom-4 right-4">
                <span className="font-mono font-bold text-base text-white bg-black/70 px-2.5 py-1 rounded-xl border border-white/10 backdrop-blur-md">
                  {BENTO_SERVICES[3].price}
                </span>
              </div>
            </div>

            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold mb-1">
                  {BENTO_SERVICES[3].category}
                </p>
                <h4 className="text-lg font-sans font-bold text-foreground">
                  {BENTO_SERVICES[3].title}
                </h4>
                <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">
                  {BENTO_SERVICES[3].subtitle}
                </p>
              </div>

              <div className="pt-2 border-t border-border/60 flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">{BENTO_SERVICES[3].duration}</span>
                <Button asChild size="sm" variant="outline" className="rounded-xl text-xs h-8 px-3">
                  <Link href="/booking">Book Bridal</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Bento Card 5: Keratin Smoothing (Span 4 cols) */}
          <div className="md:col-span-4 group rounded-3xl bg-card border border-border/80 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-300 overflow-hidden shadow-lg flex flex-col justify-between">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
              <Image
                src={BENTO_SERVICES[4].image}
                alt={BENTO_SERVICES[4].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute top-4 left-4">
                <Badge variant="vengence" className="bg-black/60 backdrop-blur-md font-mono text-[11px]">
                  {BENTO_SERVICES[4].tag}
                </Badge>
              </div>
              <div className="absolute bottom-4 right-4">
                <span className="font-mono font-bold text-base text-white bg-black/70 px-2.5 py-1 rounded-xl border border-white/10 backdrop-blur-md">
                  {BENTO_SERVICES[4].price}
                </span>
              </div>
            </div>

            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold mb-1">
                  {BENTO_SERVICES[4].category}
                </p>
                <h4 className="text-lg font-sans font-bold text-foreground">
                  {BENTO_SERVICES[4].title}
                </h4>
                <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">
                  {BENTO_SERVICES[4].subtitle}
                </p>
              </div>

              <div className="pt-2 border-t border-border/60 flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">{BENTO_SERVICES[4].duration}</span>
                <Button asChild size="sm" variant="outline" className="rounded-xl text-xs h-8 px-3">
                  <Link href="/booking">Book Keratin</Link>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
