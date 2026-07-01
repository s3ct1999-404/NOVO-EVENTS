import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().optional(),
  eventType: z.string().min(1, "Please select an event type"),
  eventDate: z.string().min(1, "Please select an event date"),
  venue: z.string().min(2, "Please enter the venue"),
  district: z.string().min(1, "Please select a district"),
  estimatedGuests: z.string().min(1, "Please select guest count"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  budgetRange: z.string().min(1, "Please select a budget range"),
  additionalNotes: z.string().optional(),
});

export const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().optional(),
  eventType: z.string().min(1, "Please select an event type"),
  eventDate: z.string().optional(),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  equipment: z.array(z.string()).optional(),
  budgetRange: z.string().optional(),
  message: z.string().min(10, "Please provide more details about your requirements"),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Please enter a subject"),
  message: z.string().min(10, "Please enter your message"),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
export type QuoteFormData = z.infer<typeof quoteSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;
