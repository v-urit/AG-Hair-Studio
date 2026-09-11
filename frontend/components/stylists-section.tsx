"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Star, Award, Scissors, Calendar, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MOCK_STYLISTS } from "@/lib/mock-data"

export function StylistsSection() {
  return (
    <section id="stylists" className="py-24 px-4 md:px-8 bg-secondary/30 relative overflow-hidden border-y border-border/60">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <Badge variant="outline" className="border-primary/40 text-primary px-3.5 py-1 text-xs uppercase tracking-widest font-semibold">
            <Award className="w-3.5 h-3.5 mr-1.5" />
            The Master Artists
          </Badge>
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-foreground">
            Meet the Stylists Behind the Studio
          </h2>
          <p className="text-base text-muted-foreground font-light leading-relaxed">
            Our award-winning team brings international training, artistic precision, and attentive care to every chair on Ross Rd.
          </p>
        </div>

        {/* Stylists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_STYLISTS.map((stylist, index) => (
            <motion.div
              key={stylist.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="h-full flex flex-col border-border/70 bg-card hover:border-primary/60 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
                <div className="relative h-72 w-full overflow-hidden bg-secondary">
                  <Image
                    src={stylist.avatar_url}
                    alt={stylist.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 text-xs text-[#dfba58] border border-white/10 font-semibold">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{stylist.rating.toFixed(1)}</span>
                    <span className="text-white/60 text-[10px]">({stylist.review_count})</span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-xl font-serif font-bold">{stylist.name}</h3>
                    <p className="text-xs text-[#dfba58] font-medium tracking-wide">{stylist.title}</p>
                  </div>
                </div>

                <CardContent className="p-5 flex flex-col flex-grow justify-between space-y-4">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {stylist.bio}
                  </p>

                  <div className="space-y-3 pt-2 border-t border-border/50">
                    <div className="flex flex-wrap gap-1.5">
                      {stylist.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground text-[10px] font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    <Button asChild variant="outline" size="sm" className="w-full text-xs font-semibold rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Link href={`/booking?stylist=${stylist.id}`}>
                        <Calendar className="w-3 h-3 mr-1.5" />
                        Book With {stylist.name.split(" ")[0]}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
