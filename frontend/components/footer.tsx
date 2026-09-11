import Link from "next/link"
import { Phone, MapPin, Mail, Scissors, ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card text-foreground border-t border-border/60 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center font-mono font-bold text-sm tracking-tighter shadow-md border border-zinc-800 dark:border-zinc-200 group-hover:scale-105 transition-all">
                AG
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-sm tracking-wider uppercase text-foreground">
                  AG Hair Studio
                </span>
                <span className="text-[10px] text-muted-foreground font-mono">
                  Agnes Burke Hairdressing
                </span>
              </div>
            </Link>
            
            <p className="text-xs text-muted-foreground leading-relaxed">
              Mullingar&apos;s premier hair atelier for bespoke dimensional balayage, architectural scissor techniques, and restorative scalp therapy rituals.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/AgnesBurkeHairdressing/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-muted border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-muted border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Services Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-foreground">
              Services Bento
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/booking" className="hover:text-foreground transition-colors">
                  Signature Dimensional Balayage
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-foreground transition-colors">
                  Precision Architectural Scissor Cut
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-foreground transition-colors">
                  Olaplex Molecular Bond &amp; Scalp Ritual
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-foreground transition-colors">
                  Haute Couture Bridal &amp; Red Carpet Updos
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-foreground transition-colors">
                  Keratin Complex Anti-Frizz Smoothing
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation & Portal */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-foreground">
              Platform &amp; Client Access
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/booking" className="hover:text-foreground transition-colors flex items-center gap-1">
                  <span>Reserve Hair Appointment</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-foreground transition-colors">
                  Client Portal (Phone &amp; OTP Access)
                </Link>
              </li>
              <li>
                <a href="#stylists" className="hover:text-foreground transition-colors">
                  Artistic Team &amp; Certifications
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-foreground transition-colors">
                  Opening Hours &amp; Parking Guide
                </a>
              </li>
              <li>
                <Link href="/admin" className="hover:text-foreground transition-colors">
                  Salon Administration
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-foreground">
              Studio Location
            </h4>
            <div className="space-y-2 text-xs text-muted-foreground">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                <span>Ross Rd, Scregg, Mullingar, Co. Westmeath, Ireland</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-500 shrink-0" />
                <a href="tel:+353449345678" className="hover:text-foreground font-mono">
                  (044) 934 5678
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-500 shrink-0" />
                <span className="font-mono">concierge@aghair.ie</span>
              </p>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Open Tuesday – Saturday
              </span>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="mt-16 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <p className="font-mono">
            © {new Date().getFullYear()} AG Hair Studio (Agnes Burke Hairdressing). All rights reserved.
          </p>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>Ross Rd, Mullingar</span>
            <span>•</span>
            <span>5.0 Google Rating</span>
            <span>•</span>
            <span>Next-Gen UI Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
