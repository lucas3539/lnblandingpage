interface ContactButtonProps {
  label?: string;
  href?: string;
  large?: boolean;
}

// Blauer Pill-Button (Jacks Elektroblau-Stil) — scrollt standardmäßig zum Kontakt.
export default function ContactButton({
  label = 'Kontakt',
  href = '#kontakt',
  large = false,
}: ContactButtonProps) {
  return (
    <a
      href={href}
      className={`inline-block rounded-full text-white font-medium uppercase tracking-widest ${
        large
          ? 'px-10 py-4 sm:px-12 sm:py-4 text-sm sm:text-base'
          : 'px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base'
      } transition-transform duration-200 hover:-translate-y-0.5`}
      style={{
        background:
          'linear-gradient(123deg, #1E3A8A 5%, #2563EB 45%, #3B82F6 78%, #60A5FA 100%)',
        boxShadow:
          '0px 4px 14px rgba(37, 99, 235, 0.35), 4px 4px 12px #3B82F6 inset',
        outline: '2px solid #FFFFFF',
        outlineOffset: '-3px',
      }}
    >
      {label}
    </a>
  );
}
