import { images } from "./images";

export interface Equipment {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
}

export const equipmentCategories = [
  "All",
  "Speakers",
  "Mixers",
  "Microphones",
  "Stage",
  "Lighting",
  "Instruments",
  "Trusses",
  "Accessories",
];

export const equipment: Equipment[] = [
  {
    id: "speakers-pro",
    name: "Professional Speaker Systems",
    category: "Speakers",
    description:
      "High-fidelity line array and point-source speaker systems for events of any scale.",
    image: images.equipment.speakers,
    features: ["Line Array", "Subwoofers", "Monitor Wedges", "Powered Speakers"],
  },
  {
    id: "mixers",
    name: "Digital Mixing Consoles",
    category: "Mixers",
    description:
      "Professional digital and analog mixing consoles for precise audio control.",
    image: images.equipment.mixers,
    features: ["Digital Consoles", "Analog Mixers", "Stage Boxes", "Wireless Control"],
  },
  {
    id: "microphones",
    name: "Microphone Systems",
    category: "Microphones",
    description:
      "Wired and wireless microphone solutions for speeches, performances, and broadcasts.",
    image: images.equipment.microphones,
    features: ["Wireless Handheld", "Lavalier", "Headset", "Instrument Mics"],
  },
  {
    id: "stage-platforms",
    name: "Stage Platforms",
    category: "Stage",
    description:
      "Modular stage decking and risers in various sizes for flexible venue configurations.",
    image: images.equipment.stage,
    features: ["Modular Decking", "Risers", "Stairs", "Skirting"],
  },
  {
    id: "lighting-equipment",
    name: "Lighting Equipment",
    category: "Lighting",
    description:
      "Moving heads, LED pars, uplighters, and control systems for dynamic event lighting.",
    image: images.equipment.lighting,
    features: ["Moving Heads", "LED Pars", "Uplighters", "DMX Controllers"],
  },
  {
    id: "instruments",
    name: "Musical Instruments",
    category: "Instruments",
    description:
      "Quality instruments available for hire — drums, keyboards, guitars, and more.",
    image: images.equipment.instruments,
    features: ["Drum Kits", "Keyboards", "Guitars", "Bass"],
  },
  {
    id: "trusses",
    name: "Truss Systems",
    category: "Trusses",
    description:
      "Aluminum truss structures for lighting rigs, signage, and stage backdrops.",
    image: images.equipment.trusses,
    features: ["Box Truss", "Tri Truss", "Ground Support", "Corners & Bases"],
  },
  {
    id: "accessories",
    name: "Production Accessories",
    category: "Accessories",
    description:
      "Cables, stands, cases, and essential accessories for complete production setups.",
    image: images.equipment.accessories,
    features: ["Cables & Snakes", "Stands", "Cases", "Power Distribution"],
  },
];
