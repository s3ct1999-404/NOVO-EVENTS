import { images } from "./images";

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  items: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: "sound",
    title: "Professional Sound Systems",
    description:
      "Crystal-clear audio engineered for every venue size — from intimate conferences to stadium concerts.",
    image: images.services.sound,
    icon: "volume-2",
    items: [
      "Sound Engineering",
      "Audio Mixing",
      "Public Address Systems",
      "Concert Sound",
      "Church Sound",
      "Conference Sound",
    ],
  },
  {
    id: "stage",
    title: "Stage Construction",
    description:
      "Custom-built stages and structures that transform any venue into a world-class performance space.",
    image: images.services.stage,
    icon: "layout-grid",
    items: [
      "Stage Platforms",
      "Stage Setup",
      "Stage Branding",
      "Stage Structures",
    ],
  },
  {
    id: "lighting",
    title: "Lighting",
    description:
      "Atmospheric and intelligent lighting designs that set the mood and elevate every moment.",
    image: images.services.lighting,
    icon: "lightbulb",
    items: [
      "Stage Lighting",
      "Intelligent Lighting",
      "Ambient Lighting",
      "Concert Lighting",
      "Event Lighting",
    ],
  },
  {
    id: "photography",
    title: "Photography",
    description:
      "Professional photography that captures the essence and emotion of your most important moments.",
    image: images.services.photography,
    icon: "camera",
    items: [
      "Professional Photography",
      "Corporate Photography",
      "Wedding Photography",
    ],
  },
  {
    id: "videography",
    title: "Videography",
    description:
      "Cinematic coverage from ground to sky — highlight films, live streams, and drone footage.",
    image: images.services.videography,
    icon: "video",
    items: [
      "Event Videography",
      "Highlight Films",
      "Drone Coverage",
      "Live Streaming",
    ],
  },
  {
    id: "decoration",
    title: "Decoration",
    description:
      "Bespoke décor that transforms spaces into immersive, memorable environments.",
    image: images.services.decoration,
    icon: "sparkles",
    items: [
      "Weddings",
      "Corporate Events",
      "Church Events",
      "Conferences",
    ],
  },
  {
    id: "entertainment",
    title: "Entertainment",
    description:
      "Curated talent and live performances that keep your audience engaged from start to finish.",
    image: images.services.entertainment,
    icon: "music",
    items: [
      "Live Bands",
      "Session Musicians",
      "DJs",
      "Instrument Hire",
    ],
  },
];

export const eventCategories = [
  {
    title: "Corporate Events",
    image: images.categories.corporate,
    description: "Conferences, launches, and galas",
  },
  {
    title: "Weddings",
    image: images.categories.wedding,
    description: "Unforgettable celebrations of love",
  },
  {
    title: "Concerts",
    image: images.categories.concert,
    description: "Live music at any scale",
  },
  {
    title: "Church Events",
    image: images.categories.church,
    description: "Worship and fellowship gatherings",
  },
  {
    title: "Conferences",
    image: images.categories.conference,
    description: "Professional summit production",
  },
  {
    title: "Private Celebrations",
    image: images.categories.private,
    description: "Birthdays, anniversaries, and more",
  },
];
