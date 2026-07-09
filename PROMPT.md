# Der Prompt: Perfekte Landing Page für „LNB Growth"

> Finale Fassung, abgestimmt auf Lucas' Vorgaben: dunkel & edel, Akzentfarbe Violett,
> Du-Anrede, deutschlandweit, Haupt-CTA Telefon & WhatsApp (Platzhalter), Text-Logo,
> keine Testimonial-Sektion.
> Diesen Prompt 1:1 an Claude Code übergeben (im Ordner `LNB Landingpage` öffnen und einfügen).

---

Erstelle in diesem Ordner eine erstklassige, conversion-optimierte Landing Page für meine Marketingagentur „LNB Growth" — komplett auf Deutsch. Arbeite eigenständig bis zum fertigen Ergebnis, ohne Rückfragen. Committe am Ende alle Dateien und pushe sie ins verbundene GitHub-Repository.

## Positionierung & Zielgruppe

- Wer: LNB Growth — Full-Service-Marketingagentur mit KI-Fokus, deutschlandweit tätig.
- Für wen: Inhaber kleiner und mittelständischer Unternehmen (Handwerk, Praxen, Gastronomie, Dienstleister), die mehr Anfragen wollen, aber keine Zeit für Marketing haben.
- Kernversprechen: „Mehr Kunden. Weniger Aufwand. Messbares Wachstum." — Marketing und Automatisierung aus einer Hand.
- Tonalität: selbstbewusst, konkret, nahbar. Durchgehend Du-Anrede. Keine Buzzwords, keine leeren Superlative.

## Copywriting-Regeln (verbindlich für alle Texte)

- Nutzen vor Feature: nicht „Wir schalten Meta Ads", sondern „Planbar neue Anfragen jede Woche — durch Werbeanzeigen, die sich selbst bezahlen."
- Kurze Sätze, aktiv statt passiv, konsequent „Du".
- Zahlen und Konkretes schlagen Adjektive: „Antwort innerhalb von 24 Stunden" statt „schneller Service".
- Überschriften müssen auch ohne Fließtext funktionieren (Scanner-Leser).
- Jede Sektion führt gedanklich zum nächsten Schritt: Anruf oder WhatsApp-Nachricht.

## Haupt-Call-to-Action

Der zentrale CTA der Seite ist direkter Kontakt per Telefon und WhatsApp:

- Auffälliger Anruf-Button („Jetzt anrufen") mit `tel:`-Link und Platzhalter-Nummer +49 XXX XXXXXXX (im Code mit TODO-Kommentar markiert, damit ich sie leicht ersetzen kann).
- WhatsApp-Button („Schreib uns auf WhatsApp") mit wa.me-Platzhalter-Link, in WhatsApp-Grün oder mit WhatsApp-Icon klar erkennbar.
- Beide Buttons erscheinen im Hero, in der Navigation (mindestens der Anruf-Button) und in der finalen Kontakt-Sektion. Auf Mobile zusätzlich eine fixierte Kontakt-Leiste am unteren Bildschirmrand mit beiden Buttons.

## Seitenstruktur (genau diese Reihenfolge)

1. **Navigation** — schlank, beim Scrollen fixiert mit dezentem Blur-Hintergrund. Sauber gestalteter Text-Schriftzug „LNB Growth" als Logo, 4–5 Anker-Links, rechts der Anruf-Button. Mobile: Burger-Menü.
2. **Hero** — Headline mit dem Kernversprechen, Subline (1–2 Sätze: für wen + was konkret passiert), darunter Anruf- und WhatsApp-Button nebeneinander. Dezente Trust-Leiste (z. B. „Antwort innerhalb von 24 h · Alles aus einer Hand · KI-gestützt"). Visuell: hochwertiger dunkler Gradient mit violetten Akzenten — keine Stockfotos.
3. **Problem → Lösung** — 3 typische Schmerzpunkte (zu wenige Anfragen, kein System, alles manuell), jeweils direkt gespiegelt mit der LNB-Growth-Antwort.
4. **Services** — Grid mit 8 Karten, jede mit Inline-SVG-Icon, Titel und 2–3 Sätzen Nutzen-Text:
   - **Content-Erstellung** — Social-Media-Content, der Reichweite und Vertrauen aufbaut (Posts, Reels, Storytelling).
   - **Meta Ads** — Werbeanzeigen auf Facebook & Instagram, die planbar Anfragen generieren; laufende Optimierung inklusive.
   - **Videografie** — Imagefilme, Recruiting-Videos, Werbespots und Social-Media-Clips in Profi-Qualität.
   - **Fotoproduktion** — Business-, Produkt- und Teamfotos für einen starken ersten Eindruck.
   - **Webseiten & Landing Pages** — schnelle, moderne Seiten, die Besucher in Kunden verwandeln.
   - **KI-Telefonrezeptionist** — nimmt Anrufe rund um die Uhr an, bucht Termine, verpasst keine Anfrage. (Als Highlight-Karte hervorheben, Badge „Neu".)
   - **Kundengewinnung** — durchdachte Funnels von der ersten Anzeige bis zum Abschluss.
   - **Prozess-Automatisierung** — Follow-ups, Terminbuchung und Angebotsversand laufen automatisch.
5. **Ablauf in 3 Schritten** — nummerierte Timeline: ① Kostenloses Erstgespräch (30 Min, unverbindlich, per Telefon oder WhatsApp) → ② Individuelle Wachstums-Strategie → ③ Umsetzung & Skalierung. Unter Schritt 1 direkt die beiden Kontakt-Buttons.
6. **Warum LNB Growth** — 4 USPs kompakt: alles aus einer Hand · KI-gestützt statt nur manuell · transparente Ergebnisse & Reportings · ein persönlicher Ansprechpartner.
7. **FAQ** — 5 aufklappbare Fragen (native `<details>`-Elemente): Was kostet das? · Wie schnell sehe ich Ergebnisse? · Gibt es Mindestlaufzeiten? · Für wen ist das geeignet? · Wie läuft das Erstgespräch ab?
8. **Finale Kontakt-Sektion** — emotionale Abschluss-Headline („Dein nächster Kunde sucht dich bereits — sorgen wir dafür, dass er dich findet."), groß und zentral die beiden Buttons Anruf + WhatsApp, darunter dezent eine E-Mail-Platzhalter-Adresse (hallo@lnb-growth.de, TODO-Kommentar).
9. **Footer** — Platzhalter-Links Impressum & Datenschutz (mit TODO-Kommentar), Social Icons (Instagram, Facebook, LinkedIn als Platzhalter), © 2026 LNB Growth.

**Wichtig:** KEINE Testimonial-/Referenzen-Sektion einbauen — die kommt später, wenn echte Kundenstimmen vorliegen.

## Design-System

- **Farbschema:** dunkel und edel — sehr dunkles Anthrazit/Blauschwarz als Basis (Richtung `#0B0F19`), Weiß für Text, kräftiges **Violett** als einzige Akzentfarbe, ausschließlich für CTAs, Icons, Badges und Highlights (WhatsApp-Button darf zusätzlich WhatsApp-Grün nutzen). Alle Farben als CSS-Custom-Properties definieren.
- **Typografie:** System-Font-Stack oder lokal eingebundene Schrift (keine externen CDNs). Klare Hierarchie: Hero-Headline groß und fett (`clamp()` für responsive Größen), Fließtext max. ~70 Zeichen Zeilenlänge.
- **Layout:** max. Inhaltsbreite ~1140 px, großzügiger vertikaler Rhythmus (einheitliche Section-Abstände über eine Spacing-Variable), Karten mit weichen Radien und feinen Borders, dezente violette Glow-Effekte statt harter Schatten.
- **Animationen:** dezente Scroll-Einblendungen per `IntersectionObserver` (fade-up, einmalig), sanfte Hover-Zustände, Smooth Scrolling. `prefers-reduced-motion` respektieren.

## Technik & Qualität

- **Stack:** reines HTML, CSS, Vanilla-JS — kein Framework, kein Build-Schritt. Dateien: `index.html`, `css/style.css`, `js/main.js`.
- **Responsiv:** Mobile-First; Services-Grid läuft 1 → 2 → 4 Spalten. Auf 375 px / 768 px / 1280 px prüfen. Die fixierte mobile Kontakt-Leiste darf keinen Inhalt verdecken.
- **SEO:** aussagekräftiger `<title>` + Meta-Description, Open-Graph-Tags, semantisches HTML (`header/main/section/footer`, genau ein `<h1>`), sprechende Anker-IDs, `lang="de"`.
- **Barrierefreiheit:** Kontrast mind. WCAG AA (Violett auf Dunkel prüfen!), sichtbare Fokus-Zustände, `aria-expanded` am Burger-Menü, Alt-Texte.
- **Performance:** keine externen Requests, Inline-SVG-Icons, unter ~100 KB Gesamtgewicht.

## Abschluss-Checkliste (vor dem Commit selbst prüfen)

- [ ] Alle 8 Services vorhanden, jeder Text nutzen-orientiert und in Du-Form
- [ ] Anruf- und WhatsApp-Button: im Hero, in der Navigation (Anruf), im Ablauf, in der finalen Sektion und als mobile Bottom-Leiste
- [ ] Alle Platzhalter (Telefonnummer, WhatsApp-Link, E-Mail) mit TODO-Kommentar markiert
- [ ] Mobile-Ansicht: Burger-Menü funktioniert, nichts läuft horizontal über
- [ ] FAQ klappt auf/zu
- [ ] Keine Lorem-Ipsum-Reste, keine externen CDN-Links, keine Testimonial-Sektion
- [ ] Seite lokal im Browser geöffnet und geprüft
- [ ] Commit mit aussagekräftiger Message + Push zu GitHub
