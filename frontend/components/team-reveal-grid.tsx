"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Sparkles,
  Scissors,
  Award,
  ArrowUpRight,
  Star,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Stylist {
  id: string
  name: string
  role: string
  experience: string
  specialty: string
  bio: string
  image: string
  certifications: string[]
}

const STYLISTS: Stylist[] = [
  {
    id: "stylist-agnes",
    name: "Agnes Burke",
    role: "Founder & Creative Director",
    experience: "15+ Years Mastery",
    specialty: "Dimensional Balayage & French Scissor Technique",
    bio: "Agnes founded the studio on Ross Rd to bring haute couture hair artistry and bespoke color chemistry to Mullingar.",
    image: "/images/service_cut.jpg",
    certifications: ["Master Color Degree", "L'Oréal Pro Artist", "Editorial Director"],
  },
  {
    id: "stylist-clara",
    name: "Clara Devlin",
    role: "Master Colorist",
    experience: "8 Years",
    specialty: "Platinum Blonding & Lived-in Foilayage",
    bio: "Renowned for seamless root melt gradients, ice-blonde toning, and custom colour corrections.",
    image: "/images/service_balayage.jpg",
    certifications: ["Olaplex Certified", "Balayage Specialist"],
  },
  {
    id: "stylist-liam",
    name: "Liam Thorne",
    role: "Senior Precision Stylist",
    experience: "9 Years",
    specialty: "Architectural Bobs & Modern Layering",
    bio: "Trained in classical Vidal Sassoon precision techniques, focusing on structure, geometry, and effortless grow-out.",
    image: "/images/gallery_hair_4.jpg",
    certifications: ["Sassoon Graduate", "Dry Cutting Artisan"],
  },
  {
    id: "stylist-sophie",
    name: "Sophie Moore",
    role: "Texture & Scalp Specialist",
    experience: "6 Years",
    specialty: "Keratin Reformation & Basin Spa Therapy",
    bio: "Dedicated to holistic hair vitality, deep scalp treatments, and liquid keratin anti-frizz transformations.",
    image: "/images/service_treatment.jpg",
    certifications: ["Keratin Complex", "Scalp Health Specialist"],
  },
]

export function TeamRevealGrid() {
  return (
    <section id="stylists" className="py-24 sm:py-32 relative bg-background border-t border-border/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/5 dark:bg-zinc-800/80 border border-border text-xs font-mono tracking-wider uppercase text-foreground">
              <Scissors className="w-3.5 h-3.5 text-cyan-500" />
              <span>Artistic Direction</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-foreground uppercase">
              MEET THE STYLISTS
            </h2>
            <p className="text-base text-muted-foreground">
              Our multidisciplinary team combines London &amp; Dublin editorial training with Mullingar&apos;s warm, individualized hospitality.
            </p>
          </div>

          <Badge variant="outline" className="font-mono text-xs px-3.5 py-1.5 h-fit self-start md:self-auto border-border">
            All Master Stylists Verified
          </Badge>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STYLISTS.map((stylist) => (
            <div
              key={stylist.id}
              className="group rounded-3xl bg-card border border-border/80 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-300 overflow-hidden shadow-lg flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900">
                <Image
                  src={stylist.image}
                  alt={stylist.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Badges */}
                <div className="absolute top-3.5 left-3.5">
                  <Badge variant="vengence" className="bg-black/60 backdrop-blur-md font-mono text-[10px]">
                    {stylist.experience}
                  </Badge>
                </div>

                <div className="absolute bottom-3.5 inset-x-3.5 text-white">
                  <p className="text-[11px] font-mono text-cyan-400 tracking-wider uppercase font-semibold">
                    {stylist.role}
                  </p>
                  <h3 className="text-xl font-sans font-bold text-white tracking-tight">
                    {stylist.name}
                  </h3>
                </div>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <p className="text-xs font-mono font-medium text-foreground">
                    {stylist.specialty}
                  </p>
                  <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                    {stylist.bio}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-border/60">
                  <div className="flex flex-wrap gap-1">
                    {stylist.certifications.map((cert, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border/50"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>

                  <Button asChild size="sm" variant="vengence" className="w-full rounded-xl text-xs h-9 gap-1.5 shadow-sm">
                    <Link href={`/booking?stylist=${stylist.id}`}>
                      <span>Book with {stylist.name.split(" ")[0]}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
