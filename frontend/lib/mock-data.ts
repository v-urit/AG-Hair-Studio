import {
  AdminStatsDTO,
  BookingDTO,
  BookingStatus,
  CatalogService,
  CategoryRevenueSummary,
  ClientDetailDTO,
  DailyRevenuePoint,
  GalleryItemDTO,
  ServiceDTO,
  StylistDTO,
  TicketDTO,
  TicketMessageDTO,
  TicketStatus,
  UserDTO,
} from "./types"

// Storage keys
const STORAGE_KEY_STATE = "ag_hair_studio_demo_store_v2"
const STORAGE_KEY_DEMO_MODE = "demo_mode"

// Seed Users
export const MOCK_ADMIN_USER: UserDTO = {
  id: "admin-demo-id",
  name: "Agnes Burke",
  email: "agnes@aghair.ie",
  phone: "+353870000001",
  phone_verified: true,
  role: "admin",
  avatar_url: "/images/service_cut.jpg",
}

export const MOCK_CLIENT_USER: UserDTO = {
  id: "client-demo-id",
  name: "Elena Rostova",
  email: "elena@aghair.ie",
  phone: "+353871234567",
  phone_verified: true,
  role: "customer",
  avatar_url: "/images/gallery_hair_1.jpg",
}

// Master Stylists at AG Hair Studio
export const MOCK_STYLISTS: StylistDTO[] = [
  {
    id: "stylist-agnes",
    name: "Agnes Burke",
    title: "Founder & Master Hair Artist",
    bio: "Over 18 years mastering dimensional color formulation, precision geometry, and bespoke hair transformations on Ross Rd.",
    avatar_url: "/images/service_cut.jpg",
    specialties: ["Balayage", "Color Correction", "Bridal Artistry"],
    rating: 5.0,
    review_count: 412,
  },
  {
    id: "stylist-clara",
    name: "Clara Devlin",
    title: "Senior Balayage & Blonding Specialist",
    bio: "Renowned for sun-kissed French balayage, seamless root melts, and luminous platinum tones with natural health.",
    avatar_url: "/images/service_balayage.jpg",
    specialties: ["French Balayage", "Blonde Artistry", "Gloss Toning"],
    rating: 5.0,
    review_count: 285,
  },
  {
    id: "stylist-liam",
    name: "Liam Thorne",
    title: "Creative Cutting Director",
    bio: "Master of structural bobs, internal weight removal, and tailored executive men's scissor work.",
    avatar_url: "/images/gallery_hair_4.jpg",
    specialties: ["Precision Bobs", "Men's Styling", "Texturizing"],
    rating: 4.9,
    review_count: 198,
  },
  {
    id: "stylist-sophie",
    name: "Sophie Moore",
    title: "Texture & Scalp Therapy Artist",
    bio: "Expert in restorative scalp detox rituals, Brazilian Keratin transformations, and red-carpet Hollywood waves.",
    avatar_url: "/images/service_treatment.jpg",
    specialties: ["Scalp Spa", "Keratin Smoothing", "Hollywood Waves"],
    rating: 5.0,
    review_count: 174,
  },
]

// Bespoke Hair Studio Services Catalog
export const MOCK_SERVICES: ServiceDTO[] = [
  {
    id: "sig-cut-blowdry",
    title: "Signature Precision Cut & Blowdry",
    description: "Personalized consultation, invigorating scalp shampoo massage, tailored structural haircut, and signature voluminous blowout finish.",
    price: "€65",
    duration_minutes: 60,
    image_url: "/images/service_cut.jpg",
    category: "Precision Cut & Styling",
    popular: true,
  },
  {
    id: "french-balayage",
    title: "French Freehand Balayage & Gloss Melt",
    description: "Bespoke hand-painted dimensional highlights, custom acidic gloss toner melt, Olaplex protection, and radiant editorial styling.",
    price: "€165",
    duration_minutes: 180,
    image_url: "/images/service_balayage.jpg",
    category: "Artisan Color & Balayage",
    popular: true,
  },
  {
    id: "full-highlights",
    title: "Bespoke Foil Highlighting & Bond Treatment",
    description: "Full head precision micro-weave foils, root smudge, customized toning, and deep moisture conditioning mask.",
    price: "€145",
    duration_minutes: 150,
    image_url: "/images/gallery_hair_3.jpg",
    category: "Artisan Color & Balayage",
  },
  {
    id: "olaplex-ritual",
    title: "Olaplex Bond Intense Scalp & Hair Therapy",
    description: "Multi-step salon bond repair rebuilding broken disulfide bonds, clarifying scalp exfoliation, and hot steam infusion.",
    price: "€55",
    duration_minutes: 45,
    image_url: "/images/service_treatment.jpg",
    category: "Hair & Scalp Rejuvenation",
    popular: true,
  },
  {
    id: "keratin-smoothing",
    title: "Brazilian Keratin Silk Smoothing Blowout",
    description: "Eliminates frizz and seals damaged cuticles for up to 4 months of weather-proof, mirror-like smoothness and shine.",
    price: "€195",
    duration_minutes: 150,
    image_url: "/images/gallery_hair_1.jpg",
    category: "Hair & Scalp Rejuvenation",
  },
  {
    id: "bridal-trial-styling",
    title: "Couture Bridal Hair & Event Styling",
    description: "Detailed bridal consultation, veil placement, romantic textured updo or vintage Hollywood waves for wedding parties.",
    price: "€120",
    duration_minutes: 90,
    image_url: "/images/service_bridal.jpg",
    category: "Bridal & Event Glamour",
    popular: true,
  },
  {
    id: "mens-executive-cut",
    title: "Executive Scissor Cut & Scalp Invigoration",
    description: "Scissor-over-comb precision haircut, tapered neckline, cooling tea tree scalp wash, and matte styling product application.",
    price: "€38",
    duration_minutes: 40,
    image_url: "/images/gallery_hair_4.jpg",
    category: "Precision Cut & Styling",
  },
  {
    id: "gloss-toner-refresh",
    title: "Luminous Shine Gloss & Blowout Refresh",
    description: "Ammonia-free clear or tinted gloss glaze to revive dull tone, seal split ends, and deliver instantaneous glass hair shine.",
    price: "€50",
    duration_minutes: 45,
    image_url: "/images/gallery_hair_2.jpg",
    category: "Artisan Color & Balayage",
  },
]

// Marquee Gallery Showcase
export const MOCK_GALLERY: GalleryItemDTO[] = [
  {
    id: "gal-1",
    url: "/images/gallery_hair_1.jpg",
    caption: "Luminous Chocolate Waves — Keratin & Gloss",
    category: "Styling",
    order_index: 1,
  },
  {
    id: "gal-2",
    url: "/images/gallery_hair_2.jpg",
    caption: "Platinum Blonde Architectural Bob",
    category: "Cutting",
    order_index: 2,
  },
  {
    id: "gal-3",
    url: "/images/service_balayage.jpg",
    caption: "Sun-Drenched Honey French Balayage",
    category: "Color",
    order_index: 3,
  },
  {
    id: "gal-4",
    url: "/images/service_cut.jpg",
    caption: "Precision Textured Bob & Soft Fringe",
    category: "Cutting",
    order_index: 4,
  },
  {
    id: "gal-5",
    url: "/images/service_bridal.jpg",
    caption: "Bespoke Romantic Bridal Chignon",
    category: "Bridal",
    order_index: 5,
  },
  {
    id: "gal-6",
    url: "/images/gallery_hair_3.jpg",
    caption: "Dimensional Copper Amber Balayage",
    category: "Color",
    order_index: 6,
  },
  {
    id: "gal-7",
    url: "/images/service_treatment.jpg",
    caption: "Restorative Botanical Scalp Massage Ritual",
    category: "Treatment",
    order_index: 7,
  },
  {
    id: "gal-8",
    url: "/images/gallery_hair_4.jpg",
    caption: "Gentlemen's Executive Scissor Finish",
    category: "Cutting",
    order_index: 8,
  },
]

// 12 Realistic Irish Clients
export const INITIAL_CLIENTS: ClientDetailDTO[] = [
  {
    id: "client-demo-id",
    name: "Elena Rostova",
    email: "elena@aghair.ie",
    phone: "+353871234567",
    phone_verified: true,
    role: "customer",
    avatar_url: "/images/gallery_hair_1.jpg",
    created_at: new Date(Date.now() - 90 * 86400000).toISOString(),
    hair_profile: {
      hair_type: "Thick, wavy, color-treated brunette",
      color_history: "Level 4 mocha with subtle caramel balayage",
      allergies: "None",
    },
  },
  {
    id: "client-2",
    name: "Saoirse O'Connor",
    email: "saoirse.oc@mullingar.ie",
    phone: "+353872345678",
    phone_verified: true,
    role: "customer",
    avatar_url: "/images/gallery_hair_2.jpg",
    created_at: new Date(Date.now() - 120 * 86400000).toISOString(),
  },
  {
    id: "client-3",
    name: "Ciara Walsh",
    email: "ciara.walsh@westmeath.ie",
    phone: "+353873456789",
    phone_verified: true,
    role: "customer",
    avatar_url: "/images/gallery_hair_3.jpg",
    created_at: new Date(Date.now() - 60 * 86400000).toISOString(),
  },
  {
    id: "client-4",
    name: "Niamh Gallagher",
    email: "niamh.g@domain.ie",
    phone: "+353874567890",
    phone_verified: true,
    role: "customer",
    avatar_url: "/images/gallery_hair_4.jpg",
    created_at: new Date(Date.now() - 45 * 86400000).toISOString(),
  },
  {
    id: "client-5",
    name: "Aoife Kelly",
    email: "aoife.kelly@mullingar.ie",
    phone: "+353875678901",
    phone_verified: true,
    role: "customer",
    avatar_url: "/images/service_balayage.jpg",
    created_at: new Date(Date.now() - 30 * 86400000).toISOString(),
  },
]

// Seed Bookings
export const INITIAL_BOOKINGS: BookingDTO[] = [
  {
    id: "book-101",
    user_id: "client-demo-id",
    user_name: "Elena Rostova",
    user_phone: "+353871234567",
    user_phone_verified: true,
    service_id: "french-balayage",
    service_title: "French Freehand Balayage & Gloss Melt",
    service_price: "€165",
    service_duration: 180,
    service_image_url: "/images/service_balayage.jpg",
    service_category: "Artisan Color & Balayage",
    stylist_id: "stylist-agnes",
    stylist_name: "Agnes Burke",
    booking_time: new Date(Date.now() + 86400000 * 2).toISOString(),
    status: "confirmed",
    notes: "Toner refresh with warm caramel gloss and Olaplex treatment.",
    created_at: new Date(Date.now() - 86400000 * 3).toISOString(),
  },
  {
    id: "book-102",
    user_id: "client-2",
    user_name: "Saoirse O'Connor",
    user_phone: "+353872345678",
    user_phone_verified: true,
    service_id: "sig-cut-blowdry",
    service_title: "Signature Precision Cut & Blowdry",
    service_price: "€65",
    service_duration: 60,
    service_image_url: "/images/service_cut.jpg",
    service_category: "Precision Cut & Styling",
    stylist_id: "stylist-liam",
    stylist_name: "Liam Thorne",
    booking_time: new Date(Date.now() + 86400000 * 4).toISOString(),
    status: "confirmed",
    notes: "Taking 2 inches off length, shaping long curtain bangs.",
    created_at: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    id: "book-103",
    user_id: "client-3",
    user_name: "Ciara Walsh",
    user_phone: "+353873456789",
    user_phone_verified: true,
    service_id: "olaplex-ritual",
    service_title: "Olaplex Bond Intense Scalp & Hair Therapy",
    service_price: "€55",
    service_duration: 45,
    service_image_url: "/images/service_treatment.jpg",
    service_category: "Hair & Scalp Rejuvenation",
    stylist_id: "stylist-sophie",
    stylist_name: "Sophie Moore",
    booking_time: new Date(Date.now() + 86400000).toISOString(),
    status: "confirmed",
    notes: "Post-holiday dry hair recovery ritual.",
    created_at: new Date(Date.now() - 86400000 * 1).toISOString(),
  },
  {
    id: "book-104",
    user_id: "client-demo-id",
    user_name: "Elena Rostova",
    user_phone: "+353871234567",
    user_phone_verified: true,
    service_id: "sig-cut-blowdry",
    service_title: "Signature Precision Cut & Blowdry",
    service_price: "€65",
    service_duration: 60,
    service_image_url: "/images/service_cut.jpg",
    service_category: "Precision Cut & Styling",
    stylist_id: "stylist-clara",
    stylist_name: "Clara Devlin",
    booking_time: new Date(Date.now() - 86400000 * 14).toISOString(),
    status: "completed",
    notes: "Initial consultation and shape reset.",
    created_at: new Date(Date.now() - 86400000 * 20).toISOString(),
  },
]

// Support / Hair Consultation Tickets
export const INITIAL_TICKETS: TicketDTO[] = [
  {
    id: "tkt-1",
    user_id: "client-demo-id",
    user_name: "Elena Rostova",
    user_phone: "+353871234567",
    subject: "Color consultation for upcoming wedding",
    status: "open",
    priority: "high",
    created_at: new Date(Date.now() - 86400000).toISOString(),
    updated_at: new Date(Date.now() - 3600000 * 2).toISOString(),
    messages: [
      {
        id: "msg-1",
        ticket_id: "tkt-1",
        sender_id: "client-demo-id",
        sender_name: "Elena Rostova",
        sender_role: "customer",
        content: "Hi Agnes, I'd like to schedule a patch test and balayage touch-up 2 weeks before my sister's wedding in October.",
        created_at: new Date(Date.now() - 86400000).toISOString(),
      },
      {
        id: "msg-2",
        ticket_id: "tkt-1",
        sender_id: "admin-demo-id",
        sender_name: "Agnes Burke",
        sender_role: "admin",
        content: "Hello Elena! We would love to take care of you. We have slots open with Clara and myself on Ross Rd. I'll reserve Thursday afternoon for you.",
        created_at: new Date(Date.now() - 3600000 * 2).toISOString(),
      },
    ],
  },
]

interface StoreData {
  services: ServiceDTO[]
  stylists: StylistDTO[]
  bookings: BookingDTO[]
  clients: ClientDetailDTO[]
  tickets: TicketDTO[]
}

/**
 * MockStore singleton with static methods matching mock-adapter and demo-badge requirements
 */
class MockStoreClass {
  private static data: StoreData = {
    services: MOCK_SERVICES,
    stylists: MOCK_STYLISTS,
    bookings: INITIAL_BOOKINGS,
    clients: INITIAL_CLIENTS,
    tickets: INITIAL_TICKETS,
  }

  private static isInitialized = false

  private static init() {
    if (this.isInitialized) return
    this.isInitialized = true
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem(STORAGE_KEY_STATE)
        if (stored) {
          const parsed = JSON.parse(stored)
          this.data = { ...this.data, ...parsed }
        }
      } catch {
        // ignore
      }
    }
  }

  private static persist() {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY_STATE, JSON.stringify(this.data))
      } catch {
        // ignore
      }
    }
  }

  static reset() {
    this.data = {
      services: MOCK_SERVICES,
      stylists: MOCK_STYLISTS,
      bookings: INITIAL_BOOKINGS,
      clients: INITIAL_CLIENTS,
      tickets: INITIAL_TICKETS,
    }
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY_STATE)
    }
  }

  static getServices(): ServiceDTO[] {
    this.init()
    return this.data.services
  }

  static getStylists(): StylistDTO[] {
    this.init()
    return this.data.stylists
  }

  static saveService(service: CatalogService): ServiceDTO {
    this.init()
    const index = this.data.services.findIndex((s) => s.id === service.id)
    const fullService: ServiceDTO = {
      id: service.id || `srv-${Date.now()}`,
      title: service.title,
      description: service.description || "Premium bespoke hair styling and consultation.",
      price: service.price || "€65",
      duration_minutes: service.duration_minutes || service.duration || 60,
      image_url: service.image_url || service.image || "/images/service_cut.jpg",
      category: service.category || "Precision Cut & Styling",
    }

    if (index >= 0) {
      this.data.services[index] = fullService
    } else {
      this.data.services.push(fullService)
    }
    this.persist()
    return fullService
  }

  static deleteService(id: string): boolean {
    this.init()
    const initialLen = this.data.services.length
    this.data.services = this.data.services.filter((s) => s.id !== id)
    this.persist()
    return this.data.services.length < initialLen
  }

  static getBookings(): BookingDTO[] {
    this.init()
    return this.data.bookings
  }

  static getUserBookings(userId: string): BookingDTO[] {
    this.init()
    return this.data.bookings.filter((b) => b.user_id === userId)
  }

  static createBooking(data: Partial<BookingDTO>): BookingDTO {
    this.init()
    const newBooking: BookingDTO = {
      id: `book-${Date.now().toString(36)}`,
      user_id: data.user_id || "client-demo-id",
      user_name: data.user_name || "Guest Client",
      user_phone: data.user_phone || "+353871234567",
      user_email: data.user_email || "guest@aghair.ie",
      user_phone_verified: true,
      service_id: data.service_id || "sig-cut-blowdry",
      service_title: data.service_title || "Signature Precision Cut & Blowdry",
      service_price: data.service_price || "€65",
      service_duration: data.service_duration || 60,
      service_image_url: data.service_image_url || "/images/service_cut.jpg",
      service_category: data.service_category || "Precision Cut & Styling",
      stylist_id: data.stylist_id || "stylist-agnes",
      stylist_name: data.stylist_name || "Agnes Burke",
      booking_time: data.booking_time || new Date().toISOString(),
      status: (data.status as BookingStatus) || "confirmed",
      notes: data.notes || "",
      created_at: new Date().toISOString(),
    }
    this.data.bookings.unshift(newBooking)
    this.persist()
    return newBooking
  }

  static updateBookingStatus(bookingId: string, status: BookingStatus): BookingDTO | null {
    this.init()
    const booking = this.data.bookings.find((b) => b.id === bookingId)
    if (booking) {
      booking.status = status
      this.persist()
      return booking
    }
    return null
  }

  static getClients(): ClientDetailDTO[] {
    this.init()
    return this.data.clients
  }

  static getClientById(id: string): ClientDetailDTO | undefined {
    this.init()
    return this.data.clients.find((c) => c.id === id)
  }

  static updateClient(id: string, updates: Partial<ClientDetailDTO>): ClientDetailDTO | null {
    this.init()
    const index = this.data.clients.findIndex((c) => c.id === id)
    if (index >= 0) {
      this.data.clients[index] = { ...this.data.clients[index], ...updates }
      this.persist()
      return this.data.clients[index]
    }
    return null
  }

  static getStats(): AdminStatsDTO {
    this.init()
    const totalRev = this.data.bookings
      .filter((b) => b.status === "completed" || b.status === "confirmed")
      .reduce((sum, b) => {
        const num = parseFloat(b.service_price.replace(/[^0-9.]/g, "")) || 0
        return sum + num
      }, 0)

    const confirmed = this.data.bookings.filter((b) => b.status === "confirmed").length
    const pending = this.data.bookings.filter((b) => b.status === "pending").length
    const cancelled = this.data.bookings.filter((b) => b.status === "cancelled").length

    return {
      total_revenue: totalRev,
      total_bookings: this.data.bookings.length,
      confirmed_bookings: confirmed,
      cancelled_bookings: cancelled,
      pending_bookings: pending,
      average_ticket: this.data.bookings.length ? Math.round(totalRev / this.data.bookings.length) : 0,
      unique_clients: this.data.clients.length,
      daily_revenue: [
        { date: "Mon", revenue: 480, booking_count: 5 },
        { date: "Tue", revenue: 890, booking_count: 8 },
        { date: "Wed", revenue: 1150, booking_count: 11 },
        { date: "Thu", revenue: 1420, booking_count: 14 },
        { date: "Fri", revenue: 1680, booking_count: 16 },
        { date: "Sat", revenue: 1950, booking_count: 18 },
      ],
      category_breakdown: [
        { category: "Color & Balayage", revenue: 3850, booking_count: 24 },
        { category: "Precision Cut & Styling", revenue: 1950, booking_count: 31 },
        { category: "Hair & Scalp Rejuvenation", revenue: 980, booking_count: 16 },
        { category: "Bridal & Event Glamour", revenue: 1200, booking_count: 10 },
      ],
    }
  }

  static getTickets(): TicketDTO[] {
    this.init()
    return this.data.tickets
  }

  static getUserTickets(userId: string): TicketDTO[] {
    this.init()
    return this.data.tickets.filter((t) => t.user_id === userId)
  }

  static createTicket(ticket: Partial<TicketDTO>): TicketDTO {
    this.init()
    const newTicket: TicketDTO = {
      id: `tkt-${Date.now().toString(36)}`,
      user_id: ticket.user_id || "client-demo-id",
      user_name: ticket.user_name || "Elena Rostova",
      user_phone: ticket.user_phone || "+353871234567",
      subject: ticket.subject || "Hair consultation request",
      status: "open",
      priority: ticket.priority || "medium",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      messages: ticket.messages || [],
    }
    this.data.tickets.unshift(newTicket)
    this.persist()
    return newTicket
  }

  static getTicketById(id: string): TicketDTO | undefined {
    this.init()
    return this.data.tickets.find((t) => t.id === id)
  }

  static addTicketMessage(ticketId: string, content: string, senderRole: "customer" | "admin"): TicketMessageDTO | null {
    this.init()
    const ticket = this.data.tickets.find((t) => t.id === ticketId)
    if (ticket) {
      const msg: TicketMessageDTO = {
        id: `msg-${Date.now().toString(36)}`,
        ticket_id: ticketId,
        sender_id: senderRole === "admin" ? MOCK_ADMIN_USER.id : MOCK_CLIENT_USER.id,
        sender_name: senderRole === "admin" ? MOCK_ADMIN_USER.name : MOCK_CLIENT_USER.name,
        sender_role: senderRole,
        content,
        created_at: new Date().toISOString(),
      }
      ticket.messages.push(msg)
      ticket.updated_at = new Date().toISOString()
      this.persist()
      return msg
    }
    return null
  }

  static updateTicketStatus(ticketId: string, status: TicketStatus): TicketDTO | null {
    this.init()
    const ticket = this.data.tickets.find((t) => t.id === ticketId)
    if (ticket) {
      ticket.status = status
      ticket.updated_at = new Date().toISOString()
      this.persist()
      return ticket
    }
    return null
  }
}

// Export MockStore as constant class reference and demoStore alias for full Next.js/Turbopack compatibility
export const MockStore = MockStoreClass
export const demoStore = MockStoreClass
export type MockStore = typeof MockStoreClass

