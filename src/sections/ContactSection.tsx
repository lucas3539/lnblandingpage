import FadeIn from '../components/FadeIn';
import BrandContacts from '../components/BrandContacts';

export default function ContactSection() {
  return (
    <footer id="kontakt" className="glow-contact relative">
      <div className="px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-36 text-center">
        <FadeIn y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.6rem, 10vw, 120px)' }}
          >
            Lass uns
            <br />
            was machen.
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="text-[#D7E2EA] font-light mt-6 mb-10 max-w-md mx-auto text-base sm:text-lg">
            Commission, Kollabo oder einfach eine Idee — schreib mir. Antwort
            kommt innerhalb von 24 Stunden.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <BrandContacts large />
        </FadeIn>
        <FadeIn delay={0.4}>
          <p className="text-[#D7E2EA]/60 mt-8 text-sm">
            Oder per E-Mail:{' '}
            <a
              href="mailto:youngandturt.business@gmail.com"
              className="text-[#3B82F6] hover:underline break-all"
            >
              youngandturt.business@gmail.com
            </a>
          </p>
        </FadeIn>
      </div>

      {/* Footer-Leiste */}
      <div className="border-t border-white/10 px-5 sm:px-8 md:px-10 py-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src="/assets/logo-weiss.png"
            alt="YAT Scales Logo"
            className="w-8 h-8"
          />
          <span className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm">
            YAT Scales — youngandturnt
          </span>
        </div>
        {/* TODO: Impressum & Datenschutz verlinken */}
        <div className="flex gap-6 text-[#D7E2EA]/60 text-sm">
          <a href="#" className="hover:text-[#D7E2EA]">
            Impressum
          </a>
          <a href="#" className="hover:text-[#D7E2EA]">
            Datenschutz
          </a>
        </div>
        <span className="text-[#D7E2EA]/40 text-sm">© 2026 YAT Scales</span>
      </div>
    </footer>
  );
}
