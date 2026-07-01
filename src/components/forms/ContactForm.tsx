"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactSchema, type ContactFormData } from "@/lib/validations";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Contact submitted:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card-premium p-12 text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-novo-gold" />
        <h3 className="mt-6 font-display text-2xl">Message Sent</h3>
        <p className="mt-4 text-novo-muted">
          Thank you for reaching out. We&apos;ll get back to you as soon as
          possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" {...register("name")} placeholder="Your full name" />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" type="email" {...register("email")} placeholder="you@email.com" />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" {...register("phone")} placeholder="+256 700 000 000" />
      </div>
      <div>
        <Label htmlFor="subject">Subject *</Label>
        <Input id="subject" {...register("subject")} placeholder="How can we help?" />
        {errors.subject && (
          <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Your message..."
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>
      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
