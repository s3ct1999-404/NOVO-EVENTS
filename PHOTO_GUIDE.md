# Novo Events — Photo Guide

Simple reference for what photos to shoot, where they appear on the site, and recommended dimensions.

**Format:** JPG or WebP · **Quality:** High (85%+) · **Style:** Professional event production · **People:** Black / African professionals and East African event settings preferred

**Where to upload:** Replace URLs in `src/data/images.ts`

---

## Quick Summary

| Photo type | Where it goes | Aspect ratio | Recommended size |
|---|---|---|---|
| Cinematic hero | Homepage full-screen banner | Wide landscape | **1920 × 1080 px** (min) |
| Page hero | Top banner on inner pages | Wide landscape | **1920 × 1080 px** |
| Company / intro | Homepage + About page | Portrait | **800 × 1000 px** |
| Service card | Homepage + Services page | Landscape | **1200 × 750 px** |
| Event category | Homepage “Events We Produce” | Landscape 4:3 | **1200 × 900 px** |
| Portfolio cover | Homepage featured + Portfolio page | Landscape 16:10 | **1600 × 1000 px** |
| Equipment photo | Homepage showcase + Equipment page | Square or 16:10 | **1000 × 1000 px** |
| Gallery photo (portrait) | Gallery + homepage preview | Portrait 4:5 | **800 × 1000 px** |
| Gallery photo (square) | Gallery + homepage preview | Square 1:1 | **1000 × 1000 px** |
| Team portrait | Team page + homepage preview | Portrait 3:4 | **600 × 800 px** |

---

## 1. Hero Banners (Full-Width)

Large background images with text overlaid. Keep the **centre and lower third** clear — important action should sit in the **top half** (bottom is darkened for text).

### Homepage hero
| | |
|---|---|
| **Page** | `/` (Home) |
| **Section** | Full-screen opening banner — “Crafting Unforgettable Experiences” |
| **Category** | Concert / festival stage, dramatic lighting, wide venue shot |
| **Aspect ratio** | ~16:9 to 21:9 (very wide) |
| **Recommended size** | **1920 × 1080 px** minimum · **2560 × 1440 px** ideal |
| **File key** | `images.hero.main` |

### Page heroes (inner pages)
| Page | Route | Photo category | File key |
|---|---|---|---|
| About | `/about` | Conference / corporate event with attendees | `images.pages.about` |
| Services | `/services` | Stage with lighting rig | `images.pages.services` |
| Equipment | `/equipment` | Professional audio / PA equipment | `images.pages.equipment` |
| Portfolio | `/portfolio` | Large concert or festival from stage | `images.pages.portfolio` |
| Gallery | `/gallery` | Vibrant event lighting atmosphere | `images.pages.gallery` |
| Team | `/team` | Team in modern office / production setting | `images.pages.team` |
| Booking | `/booking` | Elegant venue with lighting | `images.pages.booking` |
| Quote | `/quote` | Corporate conference room | `images.pages.quote` |

**All page heroes:** **1920 × 1080 px** · wide landscape · `object-cover` fills the banner (50–70% of screen height)

> Contact, FAQ, and Testimonials pages use a plain dark banner — **no photo needed**.

---

## 2. Company / Intro Photo

| | |
|---|---|
| **Pages** | Homepage (Intro section) · About page |
| **Category** | Black professionals at a conference — credibility / “who we are” shot |
| **Aspect ratio** | **4:5 portrait** |
| **Recommended size** | **800 × 1000 px** (or **1200 × 1500 px** for retina) |
| **File key** | `images.intro.main` |

---

## 3. Service Cards (7 photos)

One image per service. Shown as cards on the homepage and larger blocks on the Services page.

| Service | Photo category | File key |
|---|---|---|
| Professional Sound Systems | PA speakers / line array | `images.services.sound` |
| Stage Construction | Truss and stage structure | `images.services.stage` |
| Lighting | Intelligent stage lighting | `images.services.lighting` |
| Photography | Photographer at corporate event | `images.services.photography` |
| Videography | Videographer with cinema camera | `images.services.videography` |
| Decoration | Table décor / floral setup | `images.services.decoration` |
| Entertainment | Live band on stage | `images.services.entertainment` |

| | |
|---|---|
| **Aspect ratio** | **16:10** on homepage · **4:3** on Services page |
| **Recommended size** | **1200 × 750 px** (safe crop for both layouts) |
| **Tip** | Keep the main subject centred — edges may be cropped on mobile |

---

## 4. Event Category Cards (6 photos)

Homepage section: “Events We Produce”.

| Category | Photo category | File key |
|---|---|---|
| Corporate Events | Business conference / delegates | `images.categories.corporate` |
| Weddings | Elegant wedding celebration | `images.categories.wedding` |
| Concerts | Festival crowd / concert energy | `images.categories.concert` |
| Church Events | Worship service / congregation | `images.categories.church` |
| Conferences | Professional summit / delegates | `images.categories.conference` |
| Private Celebrations | Private party / celebration | `images.categories.private` |

| | |
|---|---|
| **Aspect ratio** | **4:3 landscape** |
| **Recommended size** | **1200 × 900 px** |

---

## 5. Portfolio Project Covers (6 photos)

Featured work on homepage and project cards on the Portfolio page.

| Project type | Photo category | File key |
|---|---|---|
| Corporate | Business summit / gala | `images.portfolio.corporate` |
| Wedding | Outdoor wedding production | `images.portfolio.wedding` |
| Concert | Large concert audience view | `images.portfolio.concert` |
| Church | Worship conference stage | `images.portfolio.church` |
| NGO / Charity | Gala dinner event | `images.portfolio.ngo` |
| Education | Graduation ceremony stage | `images.portfolio.education` |

| | |
|---|---|
| **Aspect ratio** | **16:10 landscape** |
| **Recommended size** | **1600 × 1000 px** |
| **Tip** | First featured project on homepage uses a taller layout — centre the subject |

---

## 6. Equipment Photos (8 photos)

Equipment hire section on homepage (square viewer) and Equipment page (landscape cards).

| Item | Photo category | File key |
|---|---|---|
| Speaker Systems | Line array / PA speakers | `images.equipment.speakers` |
| Mixing Consoles | Audio mixing desk | `images.equipment.mixers` |
| Microphones | Professional microphone close-up | `images.equipment.microphones` |
| Stage Platforms | Modular stage decking | `images.equipment.stage` |
| Lighting Equipment | RGB / moving head fixtures | `images.equipment.lighting` |
| Musical Instruments | Guitar, keys, drums on stage | `images.equipment.instruments` |
| Truss Systems | Aluminium truss rigging | `images.equipment.trusses` |
| Accessories | Cables, stands, DI boxes | `images.equipment.accessories` |

| | |
|---|---|
| **Aspect ratio** | **1:1 square** (homepage) · **16:10** (equipment page) |
| **Recommended size** | **1000 × 1000 px** — centre the product; works for both crops |
| **Tip** | Clean background, product fills most of the frame |

---

## 7. Gallery Photos

Full photo gallery at `/gallery` plus a 6-photo preview on the homepage.

### Categories to tag each photo

Corporate · Weddings · Concerts · Church · Lighting · Sound · Stage · Photography · Videography · Decoration

### Two display shapes (alternating in the grid)

| Shape | Aspect ratio | Recommended size | Used for |
|---|---|---|---|
| **Portrait** | **4:5** | **800 × 1000 px** | Weddings, lighting detail, photography, corporate vertical shots |
| **Square** | **1:1** | **1000 × 1000 px** | Concerts, sound, stage, videography, decoration, wide scenes |

| | |
|---|---|
| **Quantity** | 12+ photos (more is fine) |
| **File key** | `images.gallery[]` array in `src/data/images.ts` |
| **Lightbox** | Opens at uploaded resolution — **800 px wide minimum** |

---

## 8. Team Portraits (6 photos)

One head-and-shoulders or upper-body portrait per team member.

| | |
|---|---|
| **Pages** | `/team` · Homepage team preview |
| **Category** | Professional portrait — neutral or production background |
| **Aspect ratio** | **3:4 portrait** |
| **Recommended size** | **600 × 800 px** (or **900 × 1200 px** for retina) |
| **File key** | `images.team[0]` through `images.team[5]` |
| **Tip** | Consistent lighting and framing across all 6 members |

| Index | Role (placeholder) |
|---|---|
| `[0]` | Founder & Creative Director |
| `[1]` | Head of Production |
| `[2]` | Lead Sound Engineer |
| `[3]` | Lighting Designer |
| `[4]` | Stage & Technical Manager |
| `[5]` | Client Relations Manager |

---

## Photo Count Checklist

| Type | Count needed |
|---|---|
| Homepage hero | 1 |
| Page heroes | 8 |
| Intro / company | 1 |
| Services | 7 |
| Event categories | 6 |
| Portfolio covers | 6 |
| Equipment | 8 |
| Gallery | 12+ |
| Team portraits | 6 |
| **Total minimum** | **~55 photos** |

---

## How to Add Your Photos

1. Export photos at the sizes above.
2. Upload to your hosting (or place in `/public/images/`).
3. Open `src/data/images.ts` and replace each URL.
4. For gallery items, also set `category`, `alt`, `width`, and `height`.

**Example — local file:**
```ts
main: "/images/hero/concert-stage.jpg",
```

**Example — gallery entry:**
```ts
{
  id: "g1",
  src: "/images/gallery/corporate-summit.jpg",
  alt: "East Africa Business Summit — Kampala 2025",
  category: "Corporate",
  width: 800,
  height: 1000,
}
```
