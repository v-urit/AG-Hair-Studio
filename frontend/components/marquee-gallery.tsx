"use client"

import * as React from "react"
import Image from "next/image"
import { Sparkles, Eye, Scissors, Camera } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const row1 = [
  { src: "/images/gallery_hair_1.jpg", title: "Glossy Chocolate Melt", desc: "Keratin & Luminous Liquid Silk" },
  { src: "/images/service_balayage.jpg", title: "French Lived-In Balayage", desc: "Seamless root shadow & acidic gloss" },
  { src: "/images/gallery_hair_2.jpg", title: "Architectural Platinum Bob", desc: "Glass hair precision cutting" },
  { src: "/images/service_cut.jpg", title: "French Shear Sculpting", desc: "Organic face-framing layers" },
  { src: "/images/service_bridal.jpg", title: "Haute Couture Bridal Updo", desc: "Romantic textured runway chignon" },
  { src: "/images/gallery_hair_3.jpg", title: "Dimensional Amber Copper", desc: "Deep multi-tonal reflection" },
]

const row2 = [
  { src: "/images/hero_hair_studio.jpg", title: "Ross Rd Salon Atelier", desc: "Minimalist Scandinavian studio architecture" },
  { src: "/images/gallery_hair_4.jpg", title: "Executive Scissor Taper", desc: "High-precision geometric fade" },
  { src: "/images/service_treatment.jpg", title: "Botanical Head Spa Ritual", desc: "Olaplex bond rejuvenation therapy" },
  { src: "/images/gallery_hair_1.jpg", title: "Runway Volume Blowout", desc: "Tensile vitality & effortless movement" },
  { src: "/images/service_balayage.jpg", title: "Cool Ash Blonde Glaze", desc: "Tailored micro-foil placement" },
  { src: "/images/gallery_hair_2.jpg", title: "Nordic Ice Tone", desc: "Bond-fortified bleach & tone" },
]

export function MarqueeGallery() {
  return (
    <section id="gallery" className="py-24 sm:py-32 bg-background overflow-hidden border-t border-border/60 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/5 dark:bg-zinc-800/80 border border-border text-xs font-mono tracking-wider uppercase text-foreground mb-4">
          <Camera className="w-3.5 h-3.5 text-cyan-500" />
          <span>Magnetic Portfolio Marquee</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-foreground uppercase">
          CLIENT TRANSFORMATIONS
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto mt-3 font-normal leading-relaxed">
          Authentic studio captures from Ross Rd, Mullingar. Hover over any frame to inspect textural precision and color depth.
        </p>
      </div>

      {/* Marquee Row 1 - Leftward */}
      <div className="relative w-full overflow-hidden mb-5">
        <div className="animate-marquee-left flex gap-6">
          {[...row1, ...row1].map((item, idx) => (
            <div
              key={`r1-${idx}`}
              className="relative w-72 sm:w-80 h-96 flex-shrink-0 rounded-3xl overflow-hidden shadow-xl border border-border/80 group bg-card"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="320px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-75 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-3.5 right-3.5">
                <span className="p-2 rounded-full bg-black/50 backdrop-blur-md text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3.5 h-3.5" />
                </span>
              </div>

              <div className="absolute bottom-4 inset-x-4 text-white space-y-1">
                <h4 className="font-sans font-bold text-base tracking-tight text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-300 font-mono">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 - Rightward */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee-right flex gap-6">
          {[...row2, ...row2].map((item, idx) => (
            <div
              key={`r2-${idx}`}
              className="relative w-72 sm:w-80 h-96 flex-shrink-0 rounded-3xl overflow-hidden shadow-xl border border-border/80 group bg-card"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="320px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-75 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-3.5 right-3.5">
                <span className="p-2 rounded-full bg-black/50 backdrop-blur-md text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3.5 h-3.5" />
                </span>
              </div>

              <div className="absolute bottom-4 inset-x-4 text-white space-y-1">
                <h4 className="font-sans font-bold text-base tracking-tight text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-300 font-mono">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
