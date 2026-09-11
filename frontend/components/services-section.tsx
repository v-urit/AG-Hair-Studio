"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, Sparkles, ArrowRight, CheckCircle2, Scissors } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MOCK_SERVICES } from "@/lib/mock-data"

const categories = [
  "All Services",
  "Precision Cut & Styling",
  "Artisan Color & Balayage",
  "Hair & Scalp Rejuvenation",
  "Bridal & Event Glamour",
]

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = React.useState("All Services")

  const filteredServices =
    activeCategory === "All Services"
      ? MOCK_SERVICES
      : MOCK_SERVICES.filter((s) => s.category === activeCategory)

  return (
    <section id="services" className="py-24 px-4 md:px-8 bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <Badge variant="outline" className="border-primary/40 text-primary px-3.5 py-1 text-xs uppercase tracking-widest font-semibold">
            <Scissors className="w-3.5 h-3.5 mr-1.5" />
            Curated Hair Catalog
          </Badge>
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-foreground">
            Bespoke Services for Exceptional Hair
          </h2>
          <p className="text-base text-muted-foreground font-light leading-relaxed">
            Every appointment at AG Hair Studio begins with an in-depth consultation tailored to your facial geometry, hair texture, and lifestyle.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "bg-card border border-border/80 text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card className="h-full flex flex-col border-border/70 bg-card hover:border-primary/60 hover:shadow-xl transition-all duration-300 group overflow-hidden rounded-2xl">
                  {/* Image Container */}
                  <div className="relative h-60 w-full overflow-hidden bg-secondary">
                    <Image
                      src={service.image_url}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                    {service.popular && (
                      <div className="absolute top-3.5 right-3.5">
                        <Badge className="bg-primary text-primary-foreground font-semibold px-2.5 py-0.5 text-xs shadow-md">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Signature
                        </Badge>
                      </div>
                    )}

                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                      <span className="text-xs font-medium tracking-wider uppercase opacity-90">
                        {service.category}
                      </span>
                      <span className="text-2xl font-serif font-bold text-[#dfba58]">
                        {service.price}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <CardHeader className="p-5 pb-3">
                    <CardTitle className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground pt-1">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      <span>{service.duration_minutes} minutes duration</span>
                    </div>
                  </CardHeader>

                  <CardContent className="p-5 pt-0 flex-grow">
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>

                  <CardFooter className="p-5 pt-0 border-t border-border/40 mt-auto">
                    <Button
                      asChild
                      variant="luxury"
                      className="w-full h-11 text-xs font-semibold tracking-wider rounded-xl cursor-pointer"
                    >
                      <Link href={`/booking?service=${service.id}`}>
                        Book Appointment
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
