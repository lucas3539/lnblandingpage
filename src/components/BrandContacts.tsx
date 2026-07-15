// Kontakt-Buttons mit Marken-Icons in Originalfarben (YAT-Identität):
// WhatsApp, Instagram, Telefon. Hover flutet den Button in der Markenfarbe.
// TODO: echte Nummern/Profile eintragen (unten markiert).

// Telefon 0174 4155783 → international +49 174 4155783 (WhatsApp = gleiche Nummer).
const WA_LINK = 'https://wa.me/491744155783';
const IG_LINK = 'https://instagram.com/_dndcom';
const TEL_LINK = 'tel:+491744155783';

interface BrandContactsProps {
  large?: boolean;
}

export default function BrandContacts({ large = false }: BrandContactsProps) {
  const size = large
    ? 'px-8 py-3.5 sm:px-10 sm:py-4 text-sm sm:text-base'
    : 'px-6 py-3 text-xs sm:text-sm';
  const base =
    'inline-flex items-center gap-2.5 rounded-full border-2 font-medium uppercase tracking-widest transition-all duration-200 hover:-translate-y-0.5';

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <a
        href={WA_LINK}
        rel="noopener"
        className={`${base} ${size} group border-[#25D366] text-[#D7E2EA] hover:bg-[#25D366] hover:text-[#06130A]`}
      >
        <svg
          className="w-5 h-5 fill-[#25D366] group-hover:fill-[#06130A] transition-colors"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-3c-.3-.4 0-.5.2-.8l.4-.5c.1-.2.1-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1.2 2.2-.3 3.9 1 1.9 2.6 3.6 4.6 4.6 1.7.9 3 .6 3.9-.3.2-.2.3-.5.3-.7v-.5c0-.2 0-.4-.2-.5z" />
        </svg>
        WhatsApp
      </a>

      <a
        href={IG_LINK}
        rel="noopener"
        className={`${base} ${size} group border-[#DD2A7B] text-[#D7E2EA] hover:text-white`}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background =
            'linear-gradient(45deg,#FEDA75,#F58529,#DD2A7B,#8134AF)')
        }
        onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
          <defs>
            <linearGradient id="ig-brand" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FEDA75" />
              <stop offset="30%" stopColor="#F58529" />
              <stop offset="60%" stopColor="#DD2A7B" />
              <stop offset="100%" stopColor="#8134AF" />
            </linearGradient>
          </defs>
          <path
            fill="url(#ig-brand)"
            d="M12 2c2.7 0 3 0 4.1.1 1.1 0 1.8.2 2.4.5.7.2 1.2.6 1.7 1.1.5.5.9 1 1.1 1.7.3.6.5 1.3.5 2.4.1 1.1.1 1.4.1 4.2s0 3.1-.1 4.2c0 1.1-.2 1.8-.5 2.4a4.9 4.9 0 0 1-2.8 2.8c-.6.3-1.3.5-2.4.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1.1 0-1.8-.2-2.4-.5a4.9 4.9 0 0 1-2.8-2.8c-.3-.6-.5-1.3-.5-2.4C2 15.1 2 14.8 2 12s0-3.1.1-4.2c0-1.1.2-1.8.5-2.4.2-.7.6-1.2 1.1-1.7.5-.5 1-.9 1.7-1.1.6-.3 1.3-.5 2.4-.5C9 2 9.3 2 12 2zm0 4.9a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2zm0 8.4a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6zm6.5-8.6a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"
          />
        </svg>
        Instagram
      </a>

      <a
        href={TEL_LINK}
        className={`${base} ${size} group border-[#3B82F6] text-[#D7E2EA] hover:bg-[#3B82F6] hover:text-[#04101f]`}
      >
        <svg
          className="w-5 h-5 fill-[#3B82F6] group-hover:fill-[#04101f] transition-colors"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
        </svg>
        Anrufen
      </a>
    </div>
  );
}
