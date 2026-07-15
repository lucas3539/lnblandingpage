import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';

const NAV_LINKS = [
  { label: 'Referenzen', href: '#referenzen' },
  { label: 'Story', href: '#story' },
  { label: 'Angebot', href: '#angebot' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function HeroSection() {
  return (
    <section
      className="glow-hero relative h-screen flex flex-col"
      style={{ overflowX: 'clip' }}
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          <a href="#top" className="flex items-center" aria-label="YAT Scales">
            <img
              src="/assets/logo-weiss.png"
              alt="YAT Scales Logo"
              className="w-9 md:w-11"
            />
          </a>
          <div className="flex gap-5 sm:gap-8 lg:gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </FadeIn>

      {/* Hero-Heading */}
      <div className="overflow-hidden" id="top">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[19vw] sm:text-[18vw] md:text-[17vw] lg:text-[16vw] mt-6 sm:mt-4 md:-mt-2">
            YAT SCALES
          </h1>
        </FadeIn>
      </div>

      {/* Herz-Logo mit Magnet-Effekt */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-[52%] -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src="/assets/logo-weiss-gross.png"
              alt="YAT Scales Herz-Logo"
              className="w-[220px] sm:w-[300px] md:w-[380px] lg:w-[440px]"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Untere Leiste */}
      <div className="mt-auto flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            illustration &amp; digital art — auftragsarbeiten und kollaborationen
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton label="Kontakt" />
        </FadeIn>
      </div>
    </section>
  );
}
