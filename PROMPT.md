# Der Prompt: Perfekte Landing Page für „LNB Growth"

> Diesen Prompt 1:1 an Claude Code übergeben (im Ordner `LNB Landingpage` öffnen und einfügen).
> Ergebnis: eine fertige, conversion-optimierte Landing Page ohne weitere Rückfragen.

---

Erstelle in diesem Ordner eine **erstklassige, conversion-optimierte Landing Page** für meine Marketingagentur **„LNB Growth"** — komplett auf **Deutsch**. Arbeite eigenständig bis zum fertigen Ergebnis, committe am Ende alle Dateien und pushe sie ins verbundene GitHub-Repository.

## 1. Positionierung & Zielgruppe

- **Wer:** LNB Growth — Full-Service-Marketingagentur mit KI-Fokus.
- **Für wen:** Inhaber kleiner und mittelständischer Unternehmen (Handwerk, Praxen, Gastronomie, lokale Dienstleister), die mehr Anfragen wollen, aber keine Zeit für Marketing haben.
- **Kernversprechen:** „Mehr Kunden. Weniger Aufwand. Messbares Wachstum." — Marketing und Automatisierung aus einer Hand, damit sich der Kunde auf sein Geschäft konzentrieren kann.
- **Tonalität:** selbstbewusst, konkret, auf Augenhöhe. Keine Buzzwords, keine leeren Superlative. Jede Aussage beantwortet die Frage des Lesers: „Was habe ich davon?"

## 2. Copywriting-Regeln (für alle Texte verbindlich)

- Nutzen vor Feature: nicht „Wir schalten Meta Ads", sondern „Planbar neue Anfragen jede Woche — durch Werbeanzeigen, die sich selbst bezahlen."
- Kurze Sätze. Aktiv statt passiv. „Du" oder „Sie" konsequent — wähle **„Sie"** (B2B, Erstkontakt).
- Zahlen und Konkretes schlagen Adjektive: „Antwort innerhalb von 24 Stunden" statt „schneller Service".
- Jede Sektion endet gedanklich mit einem nächsten Schritt Richtung Erstgespräch.
- Überschriften müssen auch ohne Fließtext funktionieren (Scanner-Leser).

## 3. Seitenstruktur (genau diese Reihenfolge)

1. **Navigation** — schlank, beim Scrollen fixiert mit dezentem Blur-Hintergrund. Logo-Text „LNB Growth", 4–5 Anker-Links, rechts ein durchgehend sichtbarer CTA-Button **„Kostenloses Erstgespräch"**. Mobile: Burger-Menü.
2. **Hero** — Headline mit dem Kernversprechen, Subline (1–2 Sätze: für wen + was konkret passiert), primärer CTA + sekundärer Ghost-Button („Services ansehen"). Darunter eine dezente Trust-Leiste (z. B. „★ 5,0 Google-Bewertungen · 100 % regional · KI-gestützt"). Visuell: hochwertiger Gradient/abstrakte Formen — keine Stockfotos.
3. **Problem → Lösung** — 3 typische Schmerzpunkte der Zielgruppe (zu wenige Anfragen, kein System, alles manuell) jeweils direkt gespiegelt mit der LNB-Growth-Antwort. Format: Zweispalter oder Karten mit Kontrast „Vorher/Nachher".
4. **Services** — Grid mit 8 Karten, jede mit Icon (inline SVG), Titel und 2–3 Sätzen Nutzen-Text:
   - **Content-Erstellung** — Social-Media-Content, der Reichweite und Vertrauen aufbaut (Posts, Reels, Storytelling).
   - **Meta Ads** — Werbeanzeigen auf Facebook & Instagram, die planbar Anfragen generieren; laufende Optimierung inklusive.
   - **Videografie** — Imagefilme, Recruiting-Videos, Werbespots und Social-Media-Clips in Profi-Qualität.
   - **Fotoproduktion** — Business-, Produkt- und Teamfotos für einen starken ersten Eindruck.
   - **Webseiten & Landing Pages** — schnelle, moderne Seiten, die Besucher in Kunden verwandeln.
   - **KI-Telefonrezeptionist** — nimmt Anrufe rund um die Uhr an, bucht Termine, verpasst keine Anfrage. (Als „Highlight"-Karte hervorheben, z. B. Badge „Neu".)
   - **Kundengewinnung** — durchdachte Funnels von der ersten Anzeige bis zum Abschluss.
   - **Prozess-Automatisierung** — Follow-ups, Terminbuchung und Angebotsversand laufen automatisch.
5. **Ablauf in 3 Schritten** — nummerierte Timeline: ① Kostenloses Erstgespräch (30 Min, unverbindlich) → ② Individuelle Wachstums-Strategie → ③ Umsetzung & Skalierung. Unter Schritt 1 direkt ein CTA.
6. **Warum LNB Growth** — 4 USPs als kompakte Punkte: alles aus einer Hand · KI-gestützt statt nur manuell · transparente Ergebnisse & Reportings · ein persönlicher Ansprechpartner.
7. **Testimonials** — 3 Platzhalter-Kundenstimmen (realistisch: Branche + Vorname + konkretes Ergebnis; im Code klar als `<!-- Platzhalter -->` markiert).
8. **FAQ** — 5 aufklappbare Fragen (native `<details>`-Elemente): Was kostet das? · Wie schnell sehe ich Ergebnisse? · Gibt es Mindestlaufzeiten? · Für wen ist das geeignet? · Wie läuft das Erstgespräch ab?
9. **Finale CTA-Sektion** — emotionale Abschluss-Headline („Ihr nächster Kunde sucht Sie bereits — sorgen wir dafür, dass er Sie findet.") + Kontaktformular: Name, Firma (optional), E-Mail, Telefon, Nachricht, DSGVO-Checkbox. Absenden zeigt vorerst eine JS-Bestätigung; im Code kommentieren, wo später ein Backend/Formspree angebunden wird.
10. **Footer** — Platzhalter-Links Impressum & Datenschutz (eigene minimale Unterseiten oder `#`-Anker mit TODO-Kommentar), Social Icons, © 2026 LNB Growth.

## 4. Design-System

- **Farbschema:** dunkel und hochwertig — sehr dunkles Blau/Anthrazit als Basis (`#0B0F19`-Richtung), Weiß für Text, **eine** kräftige Akzentfarbe (kräftiges Grün oder Elektroblau) ausschließlich für CTAs, Icons und Highlights. Alle Farben als CSS-Custom-Properties definieren.
- **Typografie:** System-Font-Stack oder eine lokal eingebundene Variable Font (keine externen CDNs). Klare Hierarchie: Hero-Headline groß und fett (`clamp()` für responsive Größen), Fließtext max. ~70 Zeichen Zeilenlänge.
- **Layout:** max. Inhaltsbreite ~1140 px, großzügiger vertikaler Rhythmus (einheitliche Section-Abstände über eine Spacing-Variable), Karten mit weichen Radien und feinen Borders statt harter Schatten.
- **Animationen:** dezente Scroll-Einblendungen per `IntersectionObserver` (fade-up, einmalig), sanfte Hover-Zustände auf Karten und Buttons, Smooth Scrolling. **`prefers-reduced-motion` respektieren.**

## 5. Technik & Qualität

- **Stack:** reines HTML, CSS, Vanilla-JS — kein Framework, kein Build-Schritt. Dateien: `index.html`, `css/style.css`, `js/main.js`.
- **Responsiv:** Mobile-First; Breakpoints so wählen, dass Services-Grid 1 → 2 → 4 Spalten läuft. Auf echten Viewports 375 px / 768 px / 1280 px gedanklich prüfen.
- **SEO:** aussagekräftiger `<title>` + Meta-Description, Open-Graph-Tags, semantisches HTML (`header/main/section/footer`, genau ein `<h1>`), sprechende Anker-IDs, `lang="de"`.
- **Barrierefreiheit:** Kontrast mind. WCAG AA, sichtbare Fokus-Zustände, Formular-Labels, `aria-expanded` am Burger-Menü, Alt-Texte.
- **Performance:** keine externen Requests, Inline-SVG-Icons, unter ~100 KB Gesamtgewicht anpeilen.

## 6. Abschluss-Checkliste (vor dem Commit selbst prüfen)

- [ ] Alle 8 Services vorhanden, jeder Text nutzen-orientiert formuliert
- [ ] CTA „Kostenloses Erstgespräch" mindestens 4× auf der Seite (Nav, Hero, Ablauf, Finale)
- [ ] Mobile-Ansicht: Burger-Menü funktioniert, nichts läuft horizontal über
- [ ] FAQ klappt auf/zu, Formular validiert und zeigt Bestätigung
- [ ] Keine Lorem-Ipsum-Reste, keine externen CDN-Links
- [ ] Seite lokal im Browser geöffnet und geprüft
- [ ] Commit mit aussagekräftiger Message + Push zu GitHub

Wenn etwas unklar ist, triff selbst eine sinnvolle, professionelle Entscheidung statt nachzufragen — Ziel ist eine Seite, die ich sofort herzeigen kann.
