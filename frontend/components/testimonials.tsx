"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Star, CheckCircle2, MessageSquare } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Aoife Nally",
    location: "Mullingar",
    service: "French Balayage & Acidic Gloss",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Agnes is truly a master colorist! My balayage turned out so seamless and naturally dimensional without a hint of brassiness. The Ross Rd studio is peaceful, chic, and relaxed. Best salon in Westmeath hands down.",
  },
  {
    name: "Sinead Connolly",
    location: "Kinnegad",
    service: "Couture Bridal Hair Updo",
    rating: 5,
    date: "1 month ago",
    comment:
      "Agnes styled my wedding hair along with my bridesmaids. She was calm, punctual, and our styles stayed immaculate all night through dinner and dancing. Everyone complimented my textured waves!",
  },
  {
    name: "Sarah Maguire",
    location: "Enfield",
    service: "Precision Bob & Olaplex Ritual",
    rating: 5,
    date: "3 weeks ago",
    comment:
      "Liam did an incredible job restyling my long hair into a chic textured bob, followed by a very thorough and relaxing wash and head massage. The whole team at Agnes Burke is exceptionally skilled.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background border-t border-border/60 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/5 dark:bg-zinc-800/80 border border-border text-xs font-mono tracking-wider uppercase text-foreground">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-500" />
            <span>Verified Google Reputation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-foreground uppercase">
            COMMUNITY ENDORSEMENTS
          </h2>
          <div className="flex items-center justify-center gap-2 pt-1 text-sm font-mono font-semibold text-foreground">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span>4.9 ★ (227 Reviews) • Agnes Burke Hairdressing</span>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-card border border-border/80 hover:border-zinc-400 dark:hover:border-zinc-500 shadow-lg flex flex-col justify-between space-y-6 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground">{t.date}</span>
                </div>

                <p className="text-sm text-foreground leading-relaxed font-normal">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9 border border-border">
                    <AvatarFallback className="bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 font-bold text-xs">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-sans font-bold text-xs text-foreground flex items-center gap-1">
                      <span>{t.name}</span>
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    </p>
                    <p className="text-[10px] text-muted-foreground font-mono">{t.location}</p>
                  </div>
                </div>

                <Badge variant="outline" className="text-[10px] font-mono border-border">
                  {t.service.split("&")[0]}
                </Badge>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
