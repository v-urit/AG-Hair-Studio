/**
 * Central API type definitions for AG Hair Studio (Agnes Burke Hairdressing).
 *
 * Provides type-safety for hair salon booking, stylist rosters, customer
 * accounts, phone OTP auth, and admin management.
 */

/* ---------- Auth & Users ---------- */

export type UserRole = "customer" | "admin" | "stylist" | "staff"

export interface UserDTO {
  id: string
  name: string
  email?: string
  phone: string
  phone_verified: boolean
  role: UserRole
  avatar_url?: string
  created_at?: string
}

export interface ClientDetailDTO extends UserDTO {
  created_at?: string
  hair_profile?: {
    hair_type?: string
    color_history?: string
    allergies?: string
  }
}

export interface AuthResponse {
  access_token: string
  refresh_token: string
  user: UserDTO
}

/* ---------- Stylists ---------- */

export interface StylistDTO {
  id: string
  name: string
  title: string
  bio: string
  avatar_url: string
  specialties: string[]
  rating: number
  review_count: number
}

/* ---------- Services / Catalog ---------- */

export type ServiceCategory =
  | "Precision Cut & Styling"
  | "Artisan Color & Balayage"
  | "Hair & Scalp Rejuvenation"
  | "Bridal & Event Glamour"
  | string

export interface ServiceDTO {
  id: string
  title: string
  description: string
  /** Formatted display price, e.g. "€65.00" */
  price: string
  duration_minutes: number
  image_url: string
  category: ServiceCategory
  popular?: boolean
}

export interface GalleryItemDTO {
  id: string
  url: string
  caption: string
  category: string
  order_index: number
}

export type CatalogService = Pick<ServiceDTO, "id" | "title" | "category" | "price"> &
  Partial<ServiceDTO> & { duration?: number; image?: string }

/* ---------- Bookings ---------- */

export type BookingStatus = "pending" | "confirmed" | "completed" | "cancelled"

export interface BookingDTO {
  id: string
  user_id: string
  service_id: string
  service_title: string
  service_price: string
  service_duration: number
  service_image_url?: string
  service_category?: string
  stylist_id?: string
  stylist_name?: string
  /** ISO-8601 (UTC) */
  booking_time: string
  status: BookingStatus
  notes?: string
  created_at: string
  user_name?: string
  user_email?: string
  user_phone?: string
  user_phone_verified?: boolean
}

export interface CreateBookingRequest {
  service_id: string
  stylist_id?: string
  booking_time: string
  notes?: string
  client_name?: string
  client_phone?: string
}

/* ---------- Admin Stats ---------- */

export interface DailyRevenuePoint {
  date: string
  short_date?: string
  day_name?: string
  revenue: number
  booking_count?: number
  bookings_count?: number
  top_service?: string
  manicure_revenue?: number
  pedicure_revenue?: number
  treatment_revenue?: number
  color_revenue?: number
  cut_revenue?: number
}

export interface CategoryRevenueSummary {
  category: string
  revenue: number
  booking_count?: number
  bookings?: number
  percentage?: number
  color?: string
}

export interface AdminStatsDTO {
  total_revenue: number
  total_bookings: number
  today_bookings?: number
  confirmed_bookings: number
  cancelled_bookings: number
  pending_bookings: number
  average_ticket: number
  unique_clients: number
  total_clients?: number
  past_30_days_revenue?: number
  avg_daily_revenue?: number
  peak_day?: DailyRevenuePoint | null | string
  daily_revenue: DailyRevenuePoint[]
  category_breakdown: CategoryRevenueSummary[]
}

/* ---------- Support / Consultation Tickets ---------- */

export type TicketStatus = "open" | "in_progress" | "resolved" | "closed" | "answered"
export type TicketPriority = "low" | "medium" | "high" | "urgent" | "normal"

export interface TicketMessageDTO {
  id: string
  ticket_id: string
  sender_id: string
  sender_name: string
  sender_role: UserRole
  content?: string
  message?: string
  is_email_sent?: boolean
  created_at: string
}

export interface TicketDTO {
  id: string
  user_id: string
  user_name: string
  user_email?: string
  user_phone?: string
  subject: string
  status: TicketStatus
  priority: TicketPriority
  created_at: string
  updated_at: string
  messages: TicketMessageDTO[]
}

/* ---------- Utility / API Helpers ---------- */

export interface ApiError {
  error: string
  message?: string
  status_code?: number
}

export function apiErrorMessage(err: unknown, fallback = "A server error occurred. Please try again."): string {
  if (typeof err === "string") return err
  if (err && typeof err === "object") {
    const obj = err as Record<string, unknown>
    if (typeof obj.message === "string") return obj.message
    if (typeof obj.error === "string") return obj.error
    if (obj.response && typeof obj.response === "object") {
      const resp = obj.response as Record<string, unknown>
      if (resp.data && typeof resp.data === "object") {
        const data = resp.data as Record<string, unknown>
        if (typeof data.message === "string") return data.message
        if (typeof data.error === "string") return data.error
      }
    }
  }
  return fallback
}
