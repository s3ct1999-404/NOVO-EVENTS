export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  content: string;
  rating: number;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Nakato",
    role: "Events Director",
    organization: "Leading Corporate Firm",
    content:
      "Novo Events transformed our annual conference into an experience our delegates still talk about. Their attention to detail and technical expertise is unmatched in Uganda.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Rev. James Okello",
    role: "Senior Pastor",
    organization: "Faith Community Church",
    content:
      "From sound quality to stage presentation, Novo Events delivered excellence for our worship conference. They understand the unique needs of church events.",
    rating: 5,
  },
  {
    id: "t3",
    name: "David Muwonge",
    role: "Wedding Client",
    organization: "Private",
    content:
      "Our wedding day was flawless. The lighting, sound, and décor created the magical atmosphere we dreamed of. Novo Events made our vision a reality.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Grace Achieng",
    role: "Program Manager",
    organization: "International NGO",
    content:
      "Professional, reliable, and creative. Novo Events handled our charity gala with the sophistication our international donors expected.",
    rating: 5,
  },
  {
    id: "t5",
    name: "Peter Ssemwogerere",
    role: "Concert Promoter",
    organization: "Live Events Uganda",
    content:
      "The sound and lighting for our festival was world-class. Novo Events has the equipment and the team to deliver at any scale.",
    rating: 5,
  },
  {
    id: "t6",
    name: "Dr. Anita Tumusiime",
    role: "Dean of Students",
    organization: "University",
    content:
      "Our graduation ceremony was executed perfectly. Novo Events managed a complex outdoor setup with professionalism and precision.",
    rating: 5,
  },
];
