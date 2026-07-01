export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqCategories = ["General", "Services", "Booking", "Equipment"];

export const faqItems: FAQItem[] = [
  {
    id: "faq1",
    category: "General",
    question: "What areas do you serve?",
    answer:
      "Novo Events is based in Kampala, Uganda, and serves clients across Uganda and East Africa. We regularly work in Kampala, Entebbe, Jinja, and other major cities. For events outside our standard service area, please contact us to discuss logistics.",
  },
  {
    id: "faq2",
    category: "General",
    question: "What makes Novo Events different from other event companies?",
    answer:
      "We combine international production standards with deep local expertise. Our philosophy — Precision in Every Detail — means we never cut corners. From equipment quality to crew professionalism, every element is executed to the highest standard.",
  },
  {
    id: "faq3",
    category: "Services",
    question: "Do you offer full event production or individual services?",
    answer:
      "Both. We provide complete end-to-end event production as well as individual services such as sound hire, lighting, staging, photography, and videography. You can mix and match based on your needs.",
  },
  {
    id: "faq4",
    category: "Services",
    question: "Can you handle large-scale concerts and festivals?",
    answer:
      "Yes. We have the equipment, crew, and experience to produce large-scale outdoor concerts and festivals. Our inventory includes line array sound systems, truss lighting rigs, and modular stage structures.",
  },
  {
    id: "faq5",
    category: "Booking",
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 4–6 weeks in advance for standard events and 2–3 months for large productions. However, we understand urgent needs arise — contact us and we'll do our best to accommodate.",
  },
  {
    id: "faq6",
    category: "Booking",
    question: "Do you have fixed packages or pricing?",
    answer:
      "No. Every event is unique, and we believe in customized solutions. After understanding your requirements, we provide a detailed quotation tailored to your event, venue, and budget.",
  },
  {
    id: "faq7",
    category: "Booking",
    question: "What is the difference between booking and requesting a quote?",
    answer:
      "A quote request is for clients who want pricing information before committing. A booking is for clients ready to reserve our services for a specific date. Both forms help us understand your needs — choose whichever fits your stage in the planning process.",
  },
  {
    id: "faq8",
    category: "Equipment",
    question: "Can I hire equipment without booking full production services?",
    answer:
      "Absolutely. Our Equipment Hire service allows you to rent professional speakers, mixers, microphones, lighting, stage platforms, instruments, trusses, and accessories independently. Delivery and setup options are available.",
  },
  {
    id: "faq9",
    category: "Equipment",
    question: "Do you provide technical support with equipment hire?",
    answer:
      "Yes. You can hire equipment with or without technical operators. We recommend professional operators for complex setups, and we're happy to advise on the best option for your event.",
  },
  {
    id: "faq10",
    category: "General",
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers, mobile money (MTN, Airtel), and cash payments. Payment terms are outlined in your quotation, typically requiring a deposit to confirm booking with the balance due before or on the event date.",
  },
];
