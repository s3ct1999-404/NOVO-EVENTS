import { images } from "./images";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "tm1",
    name: "Mr. Jack Shot's",
    role: "Founder & Creative Director",
    bio: "With over a decade in event production across East Africa, Alex founded Novo Events to bring international-standard production to Uganda.",
    image: images.team[0],
  },
  {
    id: "tm2",
    name: "Patricia Nambi",
    role: "Head of Production",
    bio: "Patricia orchestrates every detail of our productions, ensuring seamless execution from planning through showtime.",
    image: images.team[1],
  },
  {
    id: "tm3",
    name: "Brian Ochieng",
    role: "Lead Sound Engineer",
    bio: "A certified audio engineer with experience at major festivals and conferences, Brian delivers pristine sound at every event.",
    image: images.team[2],
  },
  {
    id: "tm4",
    name: "Diana Akello",
    role: "Lighting Designer",
    bio: "Diana crafts immersive lighting environments that transform venues and elevate every performance.",
    image: images.team[3],
  },
  {
    id: "tm5",
    name: "Samuel Kato",
    role: "Stage & Technical Manager",
    bio: "Samuel leads our stage construction and technical operations, building safe, stunning structures for events of all sizes.",
    image: images.team[4],
  },
  {
    id: "tm6",
    name: "Rachel Namukasa",
    role: "Client Relations Manager",
    bio: "Rachel ensures every client receives personalized attention and a seamless experience from first inquiry to final applause.",
    image: images.team[5],
  },
];
