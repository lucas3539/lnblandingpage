# YAT Scales — youngandturnt

Dunkle Portfolio-Landing-Page für **YAT Scales** (youngandturnt) — Illustration, Grafik und Digital Art.
Besucher können Auftragsarbeiten und Kollaborationen anfragen — per WhatsApp, Instagram oder Telefon.

Aufgebaut nach der Struktur & den Animationen der Jack-3D-Portfolio-Vorlage,
mit YAT-Identität (Herz-Logo, deutsche Texte) und der Palette „Midnight Steel + Elektroblau".

## Stack

React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide React.

## Entwicklung

Node 20 nötig (liegt bei diesem Setup in `~/.local/node20`, nicht im Standard-PATH):

```bash
export PATH="$HOME/.local/node20/bin:$PATH"
npm install
npm run dev      # Entwicklungsserver
npm run build    # Produktions-Build nach dist/
```

## Struktur

- `src/sections/` — Hero, Marquee, Story, Services (Angebot), References (Referenzen), Contact
- `src/components/` — FadeIn, Magnet, AnimatedText, ContactButton, BrandContacts, GhostButton
- `src/data/previews.ts` — animierte GIF-Referenzbilder (Marquee + Referenz-Karten)
- `public/assets/` — Herz-Logo-Varianten

## Offene Platzhalter (im Code mit `TODO` markiert)

- WhatsApp-Nummer, Instagram-Profil, Telefonnummer, E-Mail
- Impressum & Datenschutz
- Referenz-Karten durch echte Arbeiten ersetzen (aktuell GIF-Platzhalter)

---

*Frühere Versionen dieses Repos in der Git-Historie: LNB-Growth-Landing-Page und die
YAT-Scales-Vanilla-Version (HTML/CSS/JS).*
