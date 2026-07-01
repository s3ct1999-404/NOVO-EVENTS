/**
 * Novo Events — Centralized Image Library
 *
 * Local images downloaded from Pexels (free license).
 * Theme: Black / African people at events — https://www.pexels.com/search/black%20people%20events/
 *
 * Re-download: npm run images:download
 * Optimize:    npm run images:optimize
 * Replace any file in public/images/ with your own Novo Events photography.
 */

const img = (path: string) => `/images/${path}`;

export const images = {
  hero: {
    main: img("hero/main.png"),
    alt: "Live concert with professional stage production — Novo Events, Kampala Uganda",
  },

  pages: {
    about: img("pages/about.jpg"),
    services: img("pages/services.jpg"),
    equipment: img("pages/equipment.jpg"),
    portfolio: img("pages/portfolio.jpg"),
    gallery: img("pages/gallery.jpg"),
    team: img("pages/team.jpg"),
    booking: img("pages/booking.jpg"),
    quote: img("pages/quote.jpg"),
  },

  intro: {
    main: img("intro/main.jpg"),
    alt: "Professional event conference with Black attendees — Novo Events Uganda",
  },

  services: {
    sound: img("services/sound.jpg"),
    stage: img("services/stage.jpg"),
    lighting: img("services/lighting.png"),
    photography: img("services/photography.jpg"),
    videography: img("services/videography.jpg"),
    decoration: img("services/decoration.jpg"),
    entertainment: img("services/entertainment.jpg"),
  },

  categories: {
    corporate: img("categories/corporate.jpg"),
    wedding: img("categories/wedding.jpg"),
    concert: img("categories/concert.jpg"),
    church: img("categories/church.jpg"),
    conference: img("categories/conference.jpg"),
    private: img("categories/private.jpg"),
  },

  portfolio: {
    corporate: img("portfolio/corporate.jpg"),
    wedding: img("portfolio/wedding.jpg"),
    concert: img("portfolio/concert.jpg"),
    church: img("portfolio/church.jpg"),
    ngo: img("portfolio/ngo.jpg"),
    education: img("portfolio/education.jpg"),
  },

  equipment: {
    speakers: img("equipment/speakers.jpg"),
    mixers: img("equipment/mixers.jpg"),
    microphones: img("equipment/microphones.jpg"),
    stage: img("equipment/stage.jpg"),
    lighting: img("equipment/lighting.jpg"),
    instruments: img("equipment/instruments.jpg"),
    trusses: img("equipment/trusses.jpg"),
    accessories: img("equipment/accessories.jpg"),
  },

  gallery: [
    {
      id: "g1",
      src: img("gallery/g01-corporate.jpg"),
      alt: "Black business delegates at East Africa corporate conference — Kampala",
      category: "Corporate",
      width: 800,
      height: 1000,
    },
    {
      id: "g2",
      src: img("gallery/g02-wedding.jpg"),
      alt: "African wedding celebration with bride and groom — Uganda",
      category: "Weddings",
      width: 800,
      height: 1000,
    },
    {
      id: "g3",
      src: img("gallery/g03-concert.jpg"),
      alt: "Live concert with professional stage production",
      category: "Concerts",
      width: 1000,
      height: 1000,
    },
    {
      id: "g4",
      src: img("gallery/g04-church.jpg"),
      alt: "Large congregation at worship gathering — Uganda",
      category: "Church",
      width: 1000,
      height: 1000,
    },
    {
      id: "g5",
      src: img("gallery/g05-lighting.jpg"),
      alt: "Intelligent stage lighting design for live event",
      category: "Lighting",
      width: 800,
      height: 1000,
    },
    {
      id: "g6",
      src: img("gallery/g06-sound.jpg"),
      alt: "Professional audio mixing console — sound engineering at Novo Events",
      category: "Sound",
      width: 1000,
      height: 1000,
    },
    {
      id: "g7",
      src: img("gallery/g07-stage.jpg"),
      alt: "Concert stage truss and rigging — Novo Events stage construction",
      category: "Stage",
      width: 1000,
      height: 1000,
    },
    {
      id: "g8",
      src: img("gallery/g08-photography.jpg"),
      alt: "Professional photographer capturing event moments",
      category: "Photography",
      width: 800,
      height: 1000,
    },
    {
      id: "g9",
      src: img("gallery/g09-videography.jpg"),
      alt: "Videographer capturing event on cinema camera",
      category: "Videography",
      width: 1000,
      height: 1000,
    },
    {
      id: "g10",
      src: img("gallery/g10-decoration.jpg"),
      alt: "Luxury event table decoration and floral arrangement — Novo Events",
      category: "Decoration",
      width: 1000,
      height: 1000,
    },
    {
      id: "g11",
      src: img("gallery/g11-corporate.jpg"),
      alt: "Black professional presenting at corporate event — Kampala",
      category: "Corporate",
      width: 800,
      height: 1000,
    },
    {
      id: "g12",
      src: img("gallery/g12-lighting.png"),
      alt: "Concert stage lighting from audience perspective",
      category: "Lighting",
      width: 1000,
      height: 1000,
    },
  ],

  team: [
    img("team/member-01.jpg"),
    img("team/member-02.jpg"),
    img("team/member-03.jpg"),
    img("team/member-04.jpg"),
    img("team/member-05.jpg"),
    img("team/member-06.jpg"),
  ],
} as const;
