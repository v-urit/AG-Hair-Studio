"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Calendar,
  User,
  LogOut,
  Phone,
  Menu,
  X,
  Sparkles,
  ArrowUpRight,
  Shield,
  Clock,
  MapPin,
  Star,
  Scissors,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function Navbar() {
  const pathname = usePathname()
  const [user, setUser] = React.useState<{ name: string; phone?: string; role?: string } | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const rawUser = localStorage.getItem("user")
    if (rawUser) {
      try {
        setUser(JSON.parse(rawUser))
      } catch {
        setUser(null)
      }
    } else {
      setUser(null)
    }
  }, [pathname])

  // Prevent background scrolling when mobile drawer is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const handleLogout = () => {
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
    localStorage.removeItem("user")
    setUser(null)
    window.location.href = "/"
  }

  const navLinks = [
    { href: "#services", label: "Services Bento", desc: "Balayage, Cuts & Scalp Rituals" },
    { href: "#stylists", label: "Artistic Team", desc: "Agnes Burke & Master Stylists" },
    { href: "#gallery", label: "Transformations", desc: "Editorial Client Gallery" },
    { href: "#location", label: "Studio & Hours", desc: "Ross Rd, Mullingar Location" },
  ]

  return (
    <>
      <header className="sticky top-2 sm:top-3 z-50 w-full px-3 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-2xl glass-dock px-3 sm:px-4 py-2 transition-all duration-300">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Brand Logo - Vengence Next-Gen Minimalist */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-zinc-950 dark:bg-white flex items-center justify-center text-white dark:text-zinc-950 font-mono font-bold text-xs sm:text-sm tracking-tighter shadow-md border border-zinc-800 dark:border-zinc-200 group-hover:scale-105 transition-all">
                <span>AG</span>
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-xs sm:text-sm tracking-wider uppercase text-foreground group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                  AG Hair Studio
                </span>
                <span className="text-[9px] sm:text-[10px] text-muted-foreground font-mono tracking-wider sm:tracking-widest uppercase">
                  Agnes Burke • Mullingar
                </span>
              </div>
            </Link>

            {/* Desktop Center Navigation - High-Contrast Pill Style */}
            <nav className="hidden md:flex items-center gap-1 bg-zinc-100 dark:bg-white/[0.06] p-1 rounded-full border border-zinc-200/90 dark:border-white/[0.08] shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] dark:shadow-none">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold text-zinc-950 dark:text-zinc-200 hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-white/15 border border-transparent hover:border-zinc-300/80 dark:hover:border-white/10 hover:shadow-xs transition-all duration-150"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action Stack */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              
              {/* Quick Call Mullingar Salon (Desktop & Tablet) */}
              <a
                href="tel:+353449345678"
                className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-transparent hover:border-border/60 transition-all"
                title="Call Agnes Burke Hairdressing"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-500" />
                <span>(044) 934 5678</span>
              </a>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* User Dropdown or Booking Button */}
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="rounded-xl gap-2 pl-2 pr-3 h-8 sm:h-9">
                      <Avatar className="h-5 w-5 sm:h-6 sm:w-6">
                        <AvatarFallback className="bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 text-[9px] sm:text-[10px] font-bold">
                          {user.name?.slice(0, 2).toUpperCase() || "AG"}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs font-medium max-w-[80px] sm:max-w-[100px] truncate hidden sm:inline">
                        {user.name}
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-52 rounded-xl">
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-xs font-semibold leading-none">{user.name}</p>
                        <p className="text-[11px] leading-none text-muted-foreground">{user.phone || "Verified Client"}</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {user.role === "admin" ? (
                      <DropdownMenuItem asChild>
                        <Link href="/admin" className="cursor-pointer flex items-center gap-2 text-xs">
                          <Shield className="w-3.5 h-3.5 text-cyan-500" />
                          <span>Salon Admin Console</span>
                        </Link>
                      </DropdownMenuItem>
                    ) : (
                      <DropdownMenuItem asChild>
                        <Link href="/dashboard" className="cursor-pointer flex items-center gap-2 text-xs">
                          <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                          <span>My Hair Bookings</span>
                        </Link>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem asChild>
                      <Link href="/booking" className="cursor-pointer flex items-center gap-2 text-xs">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                        <span>Book New Hair Service</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-destructive text-xs flex items-center gap-2">
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sign Out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="hidden xl:inline-flex rounded-xl text-xs h-8 sm:h-9 px-3 border-border/80"
                >
                  <Link href="/login">Client Portal</Link>
                </Button>
              )}

              {/* Direct Booking CTA (Visible across viewports) */}
              <Button
                asChild
                size="sm"
                variant="vengence"
                className="rounded-xl text-xs h-8 sm:h-9 px-3 sm:px-4 gap-1.5 shadow-md font-semibold"
              >
                <Link href="/booking">
                  <span>Book</span>
                  <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </Link>
              </Button>

              {/* Mobile Menu Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-1.5 sm:p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Glass Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xl md:hidden flex flex-col justify-between pt-20 pb-6 px-5 overflow-y-auto"
          >
            <div className="space-y-6 pt-4">
              
              {/* Studio Live Trust Pill in Drawer */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-900/60 border border-white/10 text-white">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <div>
                    <p className="text-xs font-mono font-bold">Open • Closes 5:30 PM</p>
                    <p className="text-[10px] text-zinc-400 font-mono">Late Thursday Until 8:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-lg border border-amber-400/20">
                  <Star className="w-3 h-3 fill-current" />
                  <span>4.9★ (227)</span>
                </div>
              </div>

              {/* Navigation Links with Descriptions */}
              <div className="flex flex-col space-y-2">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3.5 rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/80 border border-white/5 hover:border-white/15 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <p className="text-base font-sans font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {link.label}
                      </p>
                      <p className="text-xs text-zinc-400 font-mono mt-0.5">
                        {link.desc}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                  </motion.a>
                ))}
              </div>

              {/* Direct Booking & Portal Actions */}
              <div className="pt-2 flex flex-col gap-3">
                <Button
                  asChild
                  size="lg"
                  variant="vengence"
                  className="w-full h-12 rounded-2xl text-sm uppercase tracking-wider font-bold gap-2 shadow-xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href="/booking">
                    <Sparkles className="w-4 h-4" />
                    <span>Reserve Hair Appointment</span>
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full h-12 rounded-2xl text-xs font-mono text-white border-white/15 bg-zinc-900/60 hover:bg-zinc-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href="/login">
                    <User className="w-4 h-4 mr-2" />
                    <span>Client Portal &amp; SMS OTP</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Bottom Contact in Mobile Menu */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <a
                href="tel:+353449345678"
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold"
              >
                <Phone className="w-4 h-4" />
                <span>Call Salon: (044) 934 5678</span>
              </a>

              <div className="text-center text-[11px] font-mono text-zinc-400">
                Ross Rd, Scregg, Mullingar, Co. Westmeath, Ireland
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
