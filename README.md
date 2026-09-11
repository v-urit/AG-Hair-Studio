# AG Hair Studio ✂️✨
### Agnes Burke Hairdressing — Next-Gen Luxury Salon Web Application

[![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Google Rating](https://img.shields.io/badge/Google_Rating-4.9%E2%98%85_(227_Reviews)-f59e0b?logo=google)](https://www.google.com/maps/place/Agnes+Burke+Hairdressing/data=!4m7!3m6!1s0x485deaa7061cc971:0x58a972d7f17701b5!8m2!3d53.5259941!4d-7.3340708)

A high-performance, editorial-grade web application built for **AG Hair Studio (Agnes Burke Hairdressing)** located at Ross Rd, Scregg, Mullingar, Co. Westmeath, Ireland. Engineered with Next.js 16 (Turbopack), React 19, Tailwind CSS v4, Framer Motion, Radix UI primitives, React Hook Form, and Zod.

---

## 📍 About The Studio

- **Location:** Ross Rd, Scregg, Mullingar, Co. Westmeath, Ireland (`53.5259941, -7.3340708`)
- **Direct Salon Phone:** `(044) 934 5678` / `+353 44 934 5678`
- **Reputation:** 4.9★ rating with 227+ verified Google reviews
- **Hours of Operation:**
  - Monday – Wednesday: `09:00 AM – 05:30 PM`
  - Thursday: `09:00 AM – 08:00 PM` *(Late Opening)*
  - Friday – Saturday: `09:00 AM – 05:30 PM`
  - Sunday: `Closed`

---

## 🚀 Key Features & Architecture

### 1. High-Fashion Editorial Experience
- **Floating Glass Dock Navigation:** High-contrast pill navigation, responsive mobile drawer with live opening hours and Google rating badge, instant call trigger, and seamless theme switching.
- **Architectural Hero Section:** Micro-animations, dynamic perspective typography, and dual direct-booking call-to-actions.
- **Asymmetrical Services Bento Grid:** Balayage, Precision Cut & Sculpting, Restorative Scalp Rituals, Bridal Masterclasses, and Bespoke Color Correction.
- **Master Stylist Reveal Grid:** Interactive profiles for Agnes Burke and senior editorial stylists with direct booking shortcuts.
- **60fps Magnetic Marquee:** Continuous hardware-accelerated client transformation gallery.
- **Interactive Google Maps Embed:** Live studio location on Ross Rd, Mullingar with route links.
- **Zero-Gold Contemporary Aesthetic:** Obsidian dark mode, crisp titanium light mode, and electric cyan accents.

### 2. Multi-Step Online Booking (`/booking`)
- Integrated with **React Hook Form** + **Zod** schema validation.
- Live category selector, stylist assignment, calendar date picker (`react-day-picker`), and dynamic time slot reservation.
- Instant price calculation and appointment summary.

### 3. Passwordless Phone + OTP Authentication (`/login` & `/signup`)
- Unified mobile-first authentication with SMS verification simulation and resend countdown timers.
- **Instant One-Click Demo Mode:** Pre-configured demo profiles for immediate exploration.

> [!IMPORTANT]
> ### 🔑 Quick Demo Login Walkthrough (راهنمای ورود با اکانت دمو)
> For testing without entering a real phone number:
> 1. Navigate to the **[Login Page](/login)** (or click **Client Portal** in the header).
> 2. At the bottom of the card under **"Instant One-Click Demo"**, click on either:
>    - **`Client Demo`** (Elena Rostova — `+353 87 123 4567`)
>    - **`Salon Director`** (Agnes Burke — `+353 87 000 0001`)
> 3. After selecting a role, the phone and name fields will autofill. **You must then click the "Continue with Mobile" button** to proceed to the OTP verification step.
> 4. On the OTP screen, the code `123456` is automatically filled for you. **Click the "Verify & Enter Studio" button** to complete verification and enter the portal!
>    - Selecting **Client Demo** redirects to `/dashboard` (client appointments).
>    - Selecting **Salon Director** redirects to `/admin` (executive management console).

### 4. Client Dashboard (`/dashboard`)
- Real-time appointment tracking and status chips (Confirmed, Pending, In Progress, Completed).
- Quick re-booking and client appointment history.

### 5. Salon Director Admin Console (`/admin`)
- Interactive revenue analytics and peak-day booking trends powered by **Recharts**.
- Ticket workflow status updating (Confirmed / Pending / In Progress / Completed / Cancelled).
- Client directory with detailed CRM profile views (`/admin/clients/[id]`).

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **Runtime / Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + CSS Custom Properties |
| **Animations** | [Framer Motion 13](https://www.framer.com/motion/) |
| **UI Components** | [Radix UI](https://www.radix-ui.com/) & [shadcn/ui](https://ui.shadcn.com/) |
| **Form Handling** | [React Hook Form](https://react-hook-form.com/) + [Zod 4](https://zod.dev/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Charts** | [Recharts](https://recharts.org/) |
| **Themes** | [next-themes](https://github.com/pacocoursey/next-themes) (Class-based Dark & Light mode) |

---

## 💻 Getting Started

### Prerequisites
- **Node.js**: `v18.18.0` or later
- **Package Manager**: `pnpm` (recommended), `npm`, or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/v-urit/AG-Hair-Studio.git
   cd AG-Hair-Studio
   ```

2. **Navigate into the frontend folder:**
   ```bash
   cd frontend
   ```

3. **Install dependencies:**
   ```bash
   pnpm install
   ```

4. **Start the local development server:**
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 📦 Project Directory Structure

```text
AG-Hair-Studio/
├── frontend/
│   ├── app/
│   │   ├── admin/                    # Salon Director management console & client CRM
│   │   ├── booking/                  # Multi-step hair reservation flow
│   │   ├── dashboard/                # Client portal for viewing appointments
│   │   ├── login/                    # Unified Phone + OTP authentication page
│   │   ├── signup/                   # Redirects cleanly to /login
│   │   ├── globals.css               # Design system tokens, @custom-variant dark & keyframes
│   │   ├── layout.tsx                # Root layout with ThemeProvider, Metadata & JsonLd
│   │   └── page.tsx                  # Landing page (Hero, Bento, Stylists, Marquee, Hours)
│   ├── components/
│   │   ├── admin/                    # Admin revenue charts, metrics & client lists
│   │   ├── ui/                       # Radix UI + shadcn atomic components (button, card, dialog...)
│   │   ├── footer.tsx                # Minimalist grid footer
│   │   ├── hero-section.tsx          # Architectural hero banner
│   │   ├── location-hours.tsx        # Ross Rd live hours & Google Maps integration
│   │   ├── marquee-gallery.tsx       # 60fps continuous transformation marquee
│   │   ├── navbar.tsx                # Responsive floating glass dock header
│   │   ├── services-bento.tsx        # 5-card luxury services bento grid
│   │   ├── team-reveal-grid.tsx      # Agnes Burke & artistic team showcase
│   │   ├── testimonials.tsx          # Verified Google reviews
│   │   └── theme-toggle.tsx          # Smooth light/dark theme switch
│   ├── lib/
│   │   ├── mock-data.ts              # In-memory reactive demo store & seed records
│   │   ├── utils.ts                  # cn (clsx + twMerge) utility helper
│   │   └── validations.ts            # Zod validation schemas for forms
│   ├── public/                       # Static imagery and assets
│   ├── package.json
│   ├── postcss.config.mjs
│   ├── tsconfig.json
│   └── next.config.ts
├── .agents/                          # Agentic workflow protocols
└── README.md                         # Project documentation
```

---

## 🧪 Production Build & Validation

To test and compile a production bundle:

```bash
cd frontend
pnpm build
```

This verifies full TypeScript type safety, static optimization, and route rendering across all 11 application routes.

---

## 📄 License & Attribution

Designed and developed for **Agnes Burke Hairdressing (AG Hair Studio)**, Mullingar, Ireland. All rights reserved.
