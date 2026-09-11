import { z } from "zod"

// Strict name regex: Unicode letters (\p{L}), spaces, hyphens, apostrophes.
const nameRegex = /^[\p{L}\s'-]{2,60}$/u

// Flexible and robust phone regex supporting Irish (+353) and international mobile formats
const phoneRegex = /^\+?[0-9\s-]{8,18}$/

export const phoneAuthSchema = z.object({
  phone: z
    .string()
    .trim()
    .min(8, "Please enter a valid phone number (minimum 8 digits)")
    .max(18, "Phone number cannot exceed 18 characters")
    .regex(phoneRegex, "Phone number must contain only digits and optional + sign (e.g. +353 87 123 4567)"),
  name: z
    .string()
    .trim()
    .optional()
    .refine(
      (val) => !val || (val.length >= 2 && nameRegex.test(val)),
      "Name must be at least 2 characters and contain only letters"
    ),
})

export type PhoneAuthInput = z.infer<typeof phoneAuthSchema>

export const otpVerifySchema = z.object({
  phone: z.string().trim().min(8, "Phone number is required"),
  code: z
    .string()
    .trim()
    .min(6, "Please enter the complete 6-digit verification code")
    .max(6, "Verification code must be exactly 6 digits")
    .regex(/^[0-9]{6}$/, "Verification code must consist of 6 numeric digits"),
})

export type OtpVerifyInput = z.infer<typeof otpVerifySchema>

export const bookingFormSchema = z.object({
  service_id: z.string().min(1, "Please select a hair service"),
  stylist_id: z.string().optional(),
  date: z.string().min(1, "Please select a preferred date"),
  time_slot: z.string().min(1, "Please select a preferred appointment time"),
  client_name: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .regex(nameRegex, "Please enter a valid name without symbols or numbers"),
  client_phone: z
    .string()
    .trim()
    .min(8, "Please enter a valid contact phone number")
    .regex(phoneRegex, "Valid phone number required"),
  client_email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  notes: z
    .string()
    .trim()
    .max(500, "Notes cannot exceed 500 characters")
    .optional(),
})

export type BookingFormInput = z.infer<typeof bookingFormSchema>

export const profileSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .regex(nameRegex, "Name cannot contain numbers or special symbols"),
  phone: z
    .string()
    .trim()
    .min(8, "Please enter a valid phone number")
    .regex(phoneRegex, "Phone number format is invalid"),
  otp_code: z.string().optional(),
})

export type ProfileInput = z.infer<typeof profileSchema>

export const editProfileSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .regex(nameRegex, "Name cannot contain numbers or special symbols"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  phone: z
    .string()
    .trim()
    .min(8, "Please enter a valid phone number")
    .regex(phoneRegex, "Phone number format is invalid"),
  hair_type_notes: z
    .string()
    .trim()
    .max(300, "Hair notes cannot exceed 300 characters")
    .optional(),
})

export type EditProfileInput = z.infer<typeof editProfileSchema>

// Legacy aliases to prevent compile errors in any existing consumers
export const loginPhoneSchema = phoneAuthSchema
export type LoginPhoneInput = PhoneAuthInput
export const signupSchema = phoneAuthSchema
export type SignupInput = PhoneAuthInput
export const loginEmailSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})
export type LoginEmailInput = z.infer<typeof loginEmailSchema>
