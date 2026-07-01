"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  bookingSchema,
  type BookingFormData,
} from "@/lib/validations";
import {
  eventTypes,
  districts,
  guestRanges,
  budgetRanges,
  serviceOptions,
} from "@/data/site";

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { services: [] },
  });

  const selectedServices = watch("services") || [];

  const toggleService = (service: string) => {
    const current = selectedServices;
    const updated = current.includes(service)
      ? current.filter((s) => s !== service)
      : [...current, service];
    setValue("services", updated, { shouldValidate: true });
  };

  const onSubmit = async (data: BookingFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Booking submitted:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card-premium p-12 text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-novo-gold" />
        <h3 className="mt-6 font-display text-2xl">Booking Request Received</h3>
        <p className="mt-4 text-novo-muted">
          Thank you for choosing Novo Events. Our team will review your
          requirements and contact you within 24 hours to discuss your event.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" {...register("name")} placeholder="Your full name" />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input id="phone" {...register("phone")} placeholder="+256 700 000 000" />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" type="email" {...register("email")} placeholder="you@email.com" />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="organization">Organization</Label>
          <Input id="organization" {...register("organization")} placeholder="Company or organization" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Label>Event Type *</Label>
          <Select onValueChange={(v) => setValue("eventType", v, { shouldValidate: true })}>
            <SelectTrigger>
              <SelectValue placeholder="Select event type" />
            </SelectTrigger>
            <SelectContent>
              {eventTypes.map((type) => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.eventType && (
            <p className="mt-1 text-xs text-red-400">{errors.eventType.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="eventDate">Event Date *</Label>
          <Input id="eventDate" type="date" {...register("eventDate")} />
          {errors.eventDate && (
            <p className="mt-1 text-xs text-red-400">{errors.eventDate.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="venue">Venue *</Label>
          <Input id="venue" {...register("venue")} placeholder="Event venue name" />
          {errors.venue && (
            <p className="mt-1 text-xs text-red-400">{errors.venue.message}</p>
          )}
        </div>
        <div>
          <Label>District *</Label>
          <Select onValueChange={(v) => setValue("district", v, { shouldValidate: true })}>
            <SelectTrigger>
              <SelectValue placeholder="Select district" />
            </SelectTrigger>
            <SelectContent>
              {districts.map((d) => (
                <SelectItem key={d} value={d}>{d}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.district && (
            <p className="mt-1 text-xs text-red-400">{errors.district.message}</p>
          )}
        </div>
        <div>
          <Label>Estimated Guests *</Label>
          <Select onValueChange={(v) => setValue("estimatedGuests", v, { shouldValidate: true })}>
            <SelectTrigger>
              <SelectValue placeholder="Select guest count" />
            </SelectTrigger>
            <SelectContent>
              {guestRanges.map((g) => (
                <SelectItem key={g} value={g}>{g}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.estimatedGuests && (
            <p className="mt-1 text-xs text-red-400">{errors.estimatedGuests.message}</p>
          )}
        </div>
        <div>
          <Label>Budget Range *</Label>
          <Select onValueChange={(v) => setValue("budgetRange", v, { shouldValidate: true })}>
            <SelectTrigger>
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              {budgetRanges.map((b) => (
                <SelectItem key={b} value={b}>{b}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.budgetRange && (
            <p className="mt-1 text-xs text-red-400">{errors.budgetRange.message}</p>
          )}
        </div>
      </div>

      <div>
        <Label>Services Required *</Label>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {serviceOptions.map((service) => (
            <label
              key={service}
              className="flex cursor-pointer items-center gap-3 rounded-sm border border-black/8 p-3 transition-colors hover:border-novo-gold/30"
            >
              <Checkbox
                checked={selectedServices.includes(service)}
                onCheckedChange={() => toggleService(service)}
              />
              <span className="text-sm">{service}</span>
            </label>
          ))}
        </div>
        {errors.services && (
          <p className="mt-1 text-xs text-red-400">{errors.services.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="additionalNotes">Additional Notes</Label>
        <Textarea
          id="additionalNotes"
          {...register("additionalNotes")}
          placeholder="Tell us more about your event vision, special requirements, or any questions..."
        />
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Booking Request"
        )}
      </Button>
    </form>
  );
}
