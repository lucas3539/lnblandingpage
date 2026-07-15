import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import GhostButton from '../components/GhostButton';
import FadeIn from '../components/FadeIn';
import { PREVIEW_GIFS } from '../data/previews';

interface Reference {
  number: string;
  name: string;
  category: string;
  col1: [string, string];
  col2: string;
}

// Platzhalter, bis die echten Arbeiten da sind: je 3 animierte Website-Previews
// (Referenzbilder) pro Karte, dieselben GIFs wie in der Marquee (schon gecached).
const REFERENCES: Reference[] = [
  {
    number: '01',
    name: 'Referenz 01',
    category: 'Illustration',
    col1: [PREVIEW_GIFS[0], PREVIEW_GIFS[1]],
    col2: PREVIEW_GIFS[2],
  },
  {
    number: '02',
    name: 'Referenz 02',
    category: 'Digital Art',
    col1: [PREVIEW_GIFS[3], PREVIEW_GIFS[4]],
    col2: PREVIEW_GIFS[5],
  },
  {
    number: '03',
    name: 'Referenz 03',
    category: 'Kollaboration',
    col1: [PREVIEW_GIFS[6], PREVIEW_GIFS[8]],
    col2: PREVIEW_GIFS[13],
  },
];

function ReferenceCard({
  reference,
  index,
  total,
  progress,
}: {
  reference: Reference;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="h-[85vh]">
      <div className="sticky top-24 md:top-32">
        <motion.div
          className="relative rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8"
          style={{
            background: 'var(--surface)',
            scale,
            top: `${index * 28}px`,
            transformOrigin: 'top center',
          }}
        >
          {/* Obere Zeile */}
          <div className="flex flex-wrap items-start justify-between gap-4 sm:gap-6">
            <div className="flex items-start gap-4 sm:gap-8 md:gap-10">
              <span
                className="font-black leading-none text-[#D7E2EA]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {reference.number}
              </span>
              <div className="flex flex-col gap-1 sm:gap-2 pt-2 sm:pt-3">
                <span className="text-[#D7E2EA] font-light uppercase tracking-widest text-xs sm:text-sm opacity-60">
                  {reference.category}
                </span>
                <h3
                  className="text-[#D7E2EA] font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {reference.name}
                </h3>
              </div>
            </div>
            <GhostButton label="Demnächst" />
          </div>

          {/* Bild-Raster */}
          <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8">
            <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
              <img
                src={reference.col1[0]}
                alt={`${reference.name} – Bild 1`}
                loading="lazy"
                className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                style={{ height: 'clamp(130px, 16vw, 230px)' }}
              />
              <img
                src={reference.col1[1]}
                alt={`${reference.name} – Bild 2`}
                loading="lazy"
                className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                style={{ height: 'clamp(160px, 22vw, 340px)' }}
              />
            </div>
            <div className="w-[60%]">
              <img
                src={reference.col2}
                alt={`${reference.name} – Bild 3`}
                loading="lazy"
                className="h-full w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ReferencesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="referenzen"
      className="glow-projects relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-6"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Referenzen
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className="text-[#D7E2EA]/60 text-center max-w-xl mx-auto mb-16 sm:mb-20 md:mb-28 font-light">
          Platzhalter, bis meine eigenen Arbeiten hier einziehen — folg mir auf
          Instagram für aktuelle Werke.
        </p>
      </FadeIn>

      <div ref={containerRef} className="max-w-6xl mx-auto">
        {REFERENCES.map((reference, i) => (
          <ReferenceCard
            key={reference.number}
            reference={reference}
            index={i}
            total={REFERENCES.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
