import { images } from "./images";

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  client: string;
  location: string;
  year: string;
  description: string;
  image: string;
  services: string[];
  featured?: boolean;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "corporate-summit-2025",
    title: "East Africa Business Summit",
    category: "Corporate",
    client: "Confidential",
    location: "Kampala Serena Hotel",
    year: "2025",
    description:
      "Full production for a 500-delegate international business summit featuring multi-track audio, intelligent lighting, and live streaming.",
    image: images.portfolio.corporate,
    services: ["Sound", "Lighting", "Stage", "Videography"],
    featured: true,
  },
  {
    id: "wedding-garden-2025",
    title: "Garden Estate Wedding",
    category: "Wedding",
    client: "Private Client",
    location: "Entebbe",
    year: "2025",
    description:
      "Elegant outdoor wedding production with ambient lighting, live band sound, and cinematic videography.",
    image: images.portfolio.wedding,
    services: ["Sound", "Lighting", "Decoration", "Photography", "Videography"],
    featured: true,
  },
  {
    id: "concert-festival-2024",
    title: "Kampala Music Festival",
    category: "Concert",
    client: "Event Organizer",
    location: "Lugogo Cricket Oval",
    year: "2024",
    description:
      "Large-scale concert production with line array sound, truss lighting rigs, and multi-camera live stream.",
    image: images.portfolio.concert,
    services: ["Sound", "Stage", "Lighting", "Videography"],
    featured: true,
  },
  {
    id: "church-conference-2024",
    title: "National Worship Conference",
    category: "Church",
    client: "Faith Community",
    location: "Kampala",
    year: "2024",
    description:
      "Three-day conference production with worship band sound, stage design, and broadcast-quality recording.",
    image: images.portfolio.church,
    services: ["Sound", "Stage", "Lighting", "Videography"],
    featured: false,
  },
  {
    id: "ngo-gala-2024",
    title: "Annual Charity Gala",
    category: "NGO",
    client: "International NGO",
    location: "Sheraton Kampala",
    year: "2024",
    description:
      "Premium gala dinner with ambient décor, presentation AV, and professional photography coverage.",
    image: images.portfolio.ngo,
    services: ["Sound", "Lighting", "Decoration", "Photography"],
    featured: false,
  },
  {
    id: "university-graduation-2024",
    title: "University Graduation Ceremony",
    category: "Education",
    client: "University",
    location: "Makerere University",
    year: "2024",
    description:
      "Large outdoor graduation ceremony with PA systems, stage construction, and multi-camera coverage.",
    image: images.portfolio.education,
    services: ["Sound", "Stage", "Videography"],
    featured: false,
  },
];

export const portfolioCategories = [
  "All",
  "Corporate",
  "Wedding",
  "Concert",
  "Church",
  "NGO",
  "Education",
];
