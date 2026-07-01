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
import { quoteSchema, type QuoteFormData } from "@/lib/validations";
import { eventTypes, budgetRanges, serviceOptions } from "@/data/site";
import { equipment } from "@/data/equipment";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { services: [], equipment: [] },
  });

  const selectedServices = watch("services") || [];
  const selectedEquipment = watch("equipment") || [];

  const toggleItem = (
    field: "services" | "equipment",
    item: string,
    current: string[]
  ) => {
    const updated = current.includes(item)
      ? current.filter((s) => s !== item)
      : [...current, item];
    setValue(field, updated, { shouldValidate: true });
  };

  const onSubmit = async (data: QuoteFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Quote submitted:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card-premium p-12 text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-novo-gold" />
        <h3 className="mt-6 font-display text-2xl">Quote Request Received</h3>
        <p className="mt-4 text-novo-muted">
          Thank you for your interest. We&apos;ll prepare a customized quotation
          based on your requirements and get back to you within 48 hours.
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
          <Label htmlFor="eventDate">Event Date (if known)</Label>
          <Input id="eventDate" type="date" {...register("eventDate")} />
        </div>
        <div>
          <Label>Budget Range</Label>
          <Select onValueChange={(v) => setValue("budgetRange", v)}>
            <SelectTrigger>
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              {budgetRanges.map((b) => (
                <SelectItem key={b} value={b}>{b}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label>Services of Interest *</Label>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {serviceOptions.map((service) => (
            <label
              key={service}
              className="flex cursor-pointer items-center gap-3 rounded-sm border border-black/8 p-3 transition-colors hover:border-novo-gold/30"
            >
              <Checkbox
                checked={selectedServices.includes(service)}
                onCheckedChange={() =>
                  toggleItem("services", service, selectedServices)
                }
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
        <Label>Equipment of Interest</Label>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {equipment.map((item) => (
            <label
              key={item.id}
              className="flex cursor-pointer items-center gap-3 rounded-sm border border-black/8 p-3 transition-colors hover:border-novo-gold/30"
            >
              <Checkbox
                checked={selectedEquipment.includes(item.name)}
                onCheckedChange={() =>
                  toggleItem("equipment", item.name, selectedEquipment)
                }
              />
              <span className="text-sm">{item.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="message">Tell Us About Your Event *</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Describe your event, venue, expected attendance, and any specific requirements..."
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Request Quotation"
        )}
      </Button>
    </form>
  );
}
