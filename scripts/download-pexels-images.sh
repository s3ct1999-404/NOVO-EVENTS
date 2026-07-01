#!/usr/bin/env bash
# Downloads curated Pexels images (free license) for Novo Events site.
# Search theme: black people events — https://www.pexels.com/search/black%20people%20events/

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
IMG="$ROOT/public/images"
UA="Mozilla/5.0 (compatible; NovoEvents/1.0)"

download() {
  local id="$1"
  local out="$2"
  local w="${3:-1200}"
  local h="${4:-}"
  local url="https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}"
  if [[ -n "$h" ]]; then
    url="${url}&h=${h}&fit=crop"
  fi
  echo "→ $(basename "$out") (pexels:${id})"
  curl -sfL -A "$UA" "$url" -o "$out"
}

mkdir -p "$IMG"/{hero,pages,intro,services,categories,portfolio,equipment,gallery,team}

# ── Hero & page banners (1920 wide) ─────────────────────────────────────────
download 2774556  "$IMG/hero/main.jpg"           1920
download 3184418  "$IMG/pages/about.jpg"         1920
download 1763075  "$IMG/pages/services.jpg"       1920
download 164745   "$IMG/pages/equipment.jpg"     1920
download 5668858  "$IMG/pages/portfolio.jpg"     1920
download 1105666  "$IMG/pages/gallery.jpg"       1920
download 3184291  "$IMG/pages/team.jpg"          1920
download 1181519  "$IMG/pages/booking.jpg"       1920
download 3184360  "$IMG/pages/quote.jpg"         1920

# ── Intro (portrait 4:5) ────────────────────────────────────────────────────
download 7688970  "$IMG/intro/main.jpg"           800 1000

# ── Services (7) ────────────────────────────────────────────────────────────
download 1751731  "$IMG/services/sound.jpg"       1200 750
download 3778610  "$IMG/services/stage.jpg"       1200 750
download 2747449  "$IMG/services/lighting.jpg"    1200 750
download 6474529  "$IMG/services/photography.jpg"  1200 750
download 5060979  "$IMG/services/videography.jpg" 1200 750
download 265722   "$IMG/services/decoration.jpg"  1200 750
download 1763075  "$IMG/services/entertainment.jpg" 1200 750

# ── Event categories (6) ───────────────────────────────────────────────────
download 3184360  "$IMG/categories/corporate.jpg"  1200 900
download 15061733 "$IMG/categories/wedding.jpg"    1200 900
download 2774556  "$IMG/categories/concert.jpg"    1200 900
download 13742663 "$IMG/categories/church.jpg"     1200 900
download 7688970  "$IMG/categories/conference.jpg" 1200 900
download 1181519  "$IMG/categories/private.jpg"    1200 900

# ── Portfolio (6) ───────────────────────────────────────────────────────────
download 3184418  "$IMG/portfolio/corporate.jpg"   1600 1000
download 35533001 "$IMG/portfolio/wedding.jpg"     1600 1000
download 5668858  "$IMG/portfolio/concert.jpg"     1600 1000
download 13742663 "$IMG/portfolio/church.jpg"      1600 1000
download 8341849  "$IMG/portfolio/ngo.jpg"         1600 1000
download 1709003  "$IMG/portfolio/education.jpg"   1600 1000

# ── Equipment (8) ───────────────────────────────────────────────────────────
download 1751731  "$IMG/equipment/speakers.jpg"    1000 1000
download 164745   "$IMG/equipment/mixers.jpg"      1000 1000
download 1540405  "$IMG/equipment/microphones.jpg"  1000 1000
download 3778610  "$IMG/equipment/stage.jpg"       1000 1000
download 2747449  "$IMG/equipment/lighting.jpg"    1000 1000
download 1181717  "$IMG/equipment/instruments.jpg" 1000 1000
download 1763075  "$IMG/equipment/trusses.jpg"     1000 1000
download 3379942  "$IMG/equipment/accessories.jpg"  1000 1000

# ── Gallery (12) — portrait 4:5 and square 1:1 alternating ─────────────────
download 3184418  "$IMG/gallery/g01-corporate.jpg"     800 1000
download 15061733 "$IMG/gallery/g02-wedding.jpg"       800 1000
download 2774556  "$IMG/gallery/g03-concert.jpg"       1000 1000
download 13742663 "$IMG/gallery/g04-church.jpg"        1000 1000
download 1105666  "$IMG/gallery/g05-lighting.jpg"      800 1000
download 164745   "$IMG/gallery/g06-sound.jpg"         1000 1000
download 3778610  "$IMG/gallery/g07-stage.jpg"         1000 1000
download 6474529  "$IMG/gallery/g08-photography.jpg"   800 1000
download 5060979  "$IMG/gallery/g09-videography.jpg"   1000 1000
download 265722   "$IMG/gallery/g10-decoration.jpg"     1000 1000
download 8341849  "$IMG/gallery/g11-corporate.jpg"     800 1000
download 1763075  "$IMG/gallery/g12-lighting.jpg"      1000 1000

# ── Team portraits (6) — 3:4 ────────────────────────────────────────────────
download 6140641  "$IMG/team/member-01.jpg"  600 800
download 7576202  "$IMG/team/member-02.jpg"  600 800
download 7688748  "$IMG/team/member-03.jpg"  600 800
download 2379004  "$IMG/team/member-04.jpg"  600 800
download 1181690  "$IMG/team/member-05.jpg"  600 800
download 5327585  "$IMG/team/member-06.jpg"  600 800

echo ""
echo "Done — $(find "$IMG" -name '*.jpg' | wc -l) images saved to public/images/"
