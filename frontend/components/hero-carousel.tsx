"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Calendar, Sparkles, Star, Scissors, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const slides = [
  {
    image: "/images/hero_hair_studio.jpg",
    tag: "ROSS RD • MULLINGAR",
    title: "Master Hair Artistry & Precision Cutting",
    subtitle:
      "Westmeath's premier salon sanctuary. Bespoke haircuts, signature bouncy blowouts, and editorial hair transformations by Agnes Burke.",
    cta: "Book Signature Cut",
    href: "/booking?service=sig-cut-blowdry",
  },
  {
    image: "/images/service_balayage.jpg",
    tag: "FRENCH BALAYAGE SPECIALISTS",
    title: "Luminous Blonde & Dimensional Color",
    subtitle:
      "Artisan hand-painted balayage, seamless root melts, and custom acidic gloss toners for radiant, long-lasting brilliance.",
    cta: "Reserve Balayage Session",
    href: "/booking?service=french-balayage",
  },
  {
    image: "/images/service_treatment.jpg",
    tag: "BOND RESTORATION & HEAD SPA",
    title: "Therapeutic Scalp & Olaplex Rituals",
    subtitle:
      "Rebuild broken disulfide bonds and soothe your scalp with restorative botanical steam treatments and Brazilian Keratin smoothing.",
    cta: "Explore Hair Treatments",
    href: "/booking?service=olaplex-ritual",
  },
  {
    image: "/images/service_bridal.jpg",
    tag: "WEDDINGS & RED CARPET",
    title: "Couture Bridal Updos & Event Styling",
    subtitle:
      "Timeless Hollywood waves, soft romantic textured chignons, and dedicated bridal trials for your unforgettable celebration.",
    cta: "Book Bridal Consultation",
    href: "/booking?service=bridal-trial-styling",
  },
]

export function HeroCarousel() {
  const [current, setCurrent] = React.useState(0)
  const [direction, setDirection] = React.useState(1)

  // Auto-scroll every 7 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const slide = slides[current]

  return (
    <section className="relative w-full h-[86vh] min-h-[580px] max-h-[820px] overflow-hidden bg-[#0c0b0a]">
      {/* Background Image Carousel with Parallax Crossfade */}
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={current}
          custom={direction}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.78] contrast-[1.05]"
          />
          {/* Editorial vignette gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0a] via-[#0c0b0a]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0b0a]/90 via-[#0c0b0a]/50 to-transparent w-full md:w-3/4" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content Overlay */}
      <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-6 md:px-12 max-w-7xl">
        <motion.div
          key={`content-${current}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl space-y-5 text-white"
        >
          {/* Top Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge
              variant="outline"
              className="bg-white/10 text-white border-white/25 backdrop-blur-md px-3.5 py-1 text-xs font-semibold tracking-widest uppercase"
            >
              <Sparkles className="w-3 h-3 mr-1.5 text-[#dfba58]" />
              {slide.tag}
            </Badge>

            <div className="inline-flex items-center gap-1.5 bg-[#dfba58]/20 text-[#f5e6c8] border border-[#dfba58]/40 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md">
              <div className="flex text-[#dfba58]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span>5.0 Rating • Verified</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-white leading-[1.12]">
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed max-w-xl">
            {slide.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="pt-3 flex flex-wrap items-center gap-4">
            <Button asChild variant="luxury" size="lg" className="h-14 px-8 text-sm font-semibold tracking-wider">
              <Link href={slide.href}>
                <Calendar className="mr-2 h-4 w-4" />
                {slide.cta}
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 px-7 text-sm font-medium border-white/30 text-white bg-white/5 hover:bg-white/15 backdrop-blur-md"
            >
              <Link href="/#services">
                <Scissors className="mr-2 h-4 w-4 text-[#dfba58]" />
                Explore All Services
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Left/Right Carousel Controls */}
      <div className="absolute bottom-8 right-6 md:right-12 z-20 flex items-center gap-3">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2 px-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > current ? 1 : -1)
                setCurrent(idx)
              }}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === current ? "w-8 bg-[#dfba58]" : "w-2 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  )
}
