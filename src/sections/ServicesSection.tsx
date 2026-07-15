import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'Illustration',
    description:
      'Individuelle Illustrationen nach deiner Idee: Artworks, Poster, Editorials und Charaktere — mit eigener, unverwechselbarer Bildsprache.',
  },
  {
    number: '02',
    name: 'Digital Art & 3D',
    description:
      'Digitale Kunst und 3D-Renderings zwischen roher Fläche und fließender Form — experimentell, markant und für Print wie Screen.',
  },
  {
    number: '03',
    name: 'Cover & Artwork',
    description:
      'Cover-Artworks und Key-Visuals für Musik, Marken und Projekte, die im Feed und im Regal sofort auffallen.',
  },
  {
    number: '04',
    name: 'Branding',
    description:
      'Visuelle Identitäten von der ersten Idee bis zum fertigen System — Logo, Farbwelt und Bildsprache aus einer Hand.',
  },
  {
    number: '05',
    name: 'Kollaborationen',
    description:
      'Gemeinsame Projekte mit Brands, Künstlern und Labels — wenn unsere Welten zusammenpassen, entsteht etwas Eigenes.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="angebot"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn y={40}>
        <h2
          className="font-black uppercase text-center text-[#0C0C0C] leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Angebot
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1}>
            <div
              className="flex items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
              style={{
                borderBottom:
                  i < SERVICES.length - 1
                    ? '1px solid rgba(12, 12, 12, 0.15)'
                    : 'none',
              }}
            >
              <span
                className="font-black leading-none text-[#0C0C0C]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-2 sm:gap-3 pt-2 sm:pt-3">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    opacity: 0.6,
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
