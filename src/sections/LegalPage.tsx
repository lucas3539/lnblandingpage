import { useEffect } from 'react';

interface LegalPageProps {
  type: 'impressum' | 'datenschutz';
}

const CONTACT_MAIL = 'youngandturnt.business@gmail.com';
const CONTACT_TEL = '+49 174 4155783';

export default function LegalPage({ type }: LegalPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  return (
    <div className="min-h-screen text-[#D7E2EA]">
      {/* Kopf */}
      <header className="flex items-center justify-between px-6 md:px-10 py-6 border-b border-white/10">
        <a href="#top" className="flex items-center gap-3">
          <img src="/assets/logo-weiss.png" alt="YAT Scales" className="w-9 h-9" />
          <span className="font-medium uppercase tracking-wider text-sm">
            YAT Scales
          </span>
        </a>
        <a
          href="#top"
          className="text-sm text-[#3B82F6] hover:underline uppercase tracking-wider"
        >
          ← Zur Startseite
        </a>
      </header>

      <main className="max-w-3xl mx-auto px-6 md:px-10 py-16 sm:py-20">
        {type === 'impressum' ? <Impressum /> : <Datenschutz />}
      </main>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1
      className="hero-heading font-black uppercase tracking-tight leading-none mb-10"
      style={{ fontSize: 'clamp(2.4rem, 8vw, 5rem)' }}
    >
      {children}
    </h1>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-semibold uppercase tracking-wide text-lg mt-10 mb-3 text-white">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[#D7E2EA]/80 leading-relaxed mb-3">{children}</p>;
}

// Gelb markierter Platzhalter für rechtlich nötige, noch fehlende Angaben.
function Todo({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-amber-400/15 text-amber-300 px-1.5 py-0.5">
      {children}
    </span>
  );
}

function Note() {
  return (
    <div className="mt-14 rounded-xl border border-amber-400/30 bg-amber-400/5 p-5 text-sm text-amber-200/90 leading-relaxed">
      <strong>Hinweis:</strong> Dies ist eine Vorlage. Die gelb markierten
      Angaben (vollständiger Name und ladungsfähige Anschrift) sind gesetzlich
      erforderlich und müssen noch ergänzt werden. Bitte lass Impressum und
      Datenschutzerklärung vor dem Livegang rechtlich prüfen — sie ersetzen
      keine Rechtsberatung.
    </div>
  );
}

function Impressum() {
  return (
    <>
      <SectionTitle>Impressum</SectionTitle>

      <H2>Angaben gemäß § 5 DDG</H2>
      <P>
        <Todo>[Vollständiger Name]</Todo>
        <br />
        <Todo>[Straße und Hausnummer]</Todo>
        <br />
        <Todo>[PLZ und Ort]</Todo>
      </P>

      <H2>Kontakt</H2>
      <P>
        Telefon: {CONTACT_TEL}
        <br />
        E-Mail:{' '}
        <a href={`mailto:${CONTACT_MAIL}`} className="text-[#3B82F6] hover:underline">
          {CONTACT_MAIL}
        </a>
      </P>

      <H2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</H2>
      <P>
        <Todo>[Vollständiger Name]</Todo>, Anschrift wie oben.
      </P>

      <H2>Haftung für Inhalte</H2>
      <P>
        Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf
        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis
        10 DDG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte
        oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
        forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
      </P>

      <H2>Haftung für Links</H2>
      <P>
        Mein Angebot enthält ggf. Links zu externen Websites Dritter, auf deren
        Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich.
      </P>

      <Note />
    </>
  );
}

function Datenschutz() {
  return (
    <>
      <SectionTitle>Datenschutz</SectionTitle>

      <H2>1. Verantwortlicher</H2>
      <P>
        Verantwortlich für die Datenverarbeitung auf dieser Website:
        <br />
        <Todo>[Vollständiger Name]</Todo>, <Todo>[Anschrift]</Todo>
        <br />
        E-Mail:{' '}
        <a href={`mailto:${CONTACT_MAIL}`} className="text-[#3B82F6] hover:underline">
          {CONTACT_MAIL}
        </a>{' '}
        · Telefon: {CONTACT_TEL}
      </P>

      <H2>2. Aufruf der Website & Server-Logs</H2>
      <P>
        Beim Aufrufen der Website werden durch den Hosting-Anbieter automatisch
        Informationen erfasst, die dein Browser übermittelt (u. a. IP-Adresse,
        Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Browsertyp). Die
        Verarbeitung erfolgt zur Gewährleistung eines sicheren und stabilen
        Betriebs auf Grundlage unseres berechtigten Interesses (Art. 6 Abs. 1
        lit. f DSGVO).
      </P>

      <H2>3. Kontaktaufnahme</H2>
      <P>
        Wenn du mich per E-Mail, Telefon, WhatsApp oder Instagram kontaktierst,
        werden deine Angaben zur Bearbeitung der Anfrage gespeichert. Diese Daten
        gebe ich nicht ohne deine Einwilligung weiter. Rechtsgrundlage ist Art. 6
        Abs. 1 lit. b und f DSGVO. WhatsApp und Instagram sind Dienste Dritter mit
        eigenen Datenschutzbestimmungen.
      </P>

      <H2>4. Schriftarten (Google Fonts)</H2>
      <P>
        Diese Website bindet aktuell Schriftarten von Google Fonts ein, die von
        Servern von Google geladen werden. Dabei wird deine IP-Adresse an Google
        übertragen. <Todo>Empfehlung: Fonts vor dem Livegang lokal einbinden</Todo>,
        um diese Übertragung zu vermeiden.
      </P>

      <H2>5. Externe Inhalte / Medien</H2>
      <P>
        Zur Vorschau eingebundene Bilder und Animationen können von Servern
        Dritter geladen werden; dabei wird deine IP-Adresse an den jeweiligen
        Anbieter übermittelt. Diese Platzhalter werden vor dem Livegang durch
        eigene, lokal gehostete Inhalte ersetzt.
      </P>

      <H2>6. Cookies</H2>
      <P>
        Diese Website setzt keine eigenen Tracking- oder Marketing-Cookies ein.
        Sollten künftig Analyse- oder Marketing-Dienste ergänzt werden, wird zuvor
        eine Einwilligung eingeholt.
      </P>

      <H2>7. Deine Rechte</H2>
      <P>
        Du hast das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung
        (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit
        (Art. 20) und Widerspruch (Art. 21 DSGVO). Zudem steht dir ein
        Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu.
      </P>

      <Note />
    </>
  );
}
