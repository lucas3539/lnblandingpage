import { useEffect, useRef } from 'react';
import { PREVIEW_GIFS } from '../data/previews';

const ROW_1 = PREVIEW_GIFS.slice(0, 11);
const ROW_2 = PREVIEW_GIFS.slice(11);

// Bild blendet erst nach dem Laden weich ein (kein harter Pop bei langsamen GIFs).
function fadeIn(e: React.SyntheticEvent<HTMLImageElement>) {
  e.currentTarget.style.opacity = '1';
}

function MarqueeRow({
  images,
  rowRef,
}: {
  images: string[];
  rowRef: React.RefObject<HTMLDivElement>;
}) {
  const tripled = [...images, ...images, ...images];
  return (
    <div
      ref={rowRef}
      className="flex gap-3"
      style={{ willChange: 'transform', marginLeft: '-640px' }}
    >
      {tripled.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          loading="lazy"
          decoding="async"
          onLoad={fadeIn}
          className="rounded-2xl object-cover flex-shrink-0 bg-[#10141c]"
          style={{
            width: 420,
            height: 270,
            opacity: 0,
            transition: 'opacity 0.5s ease',
          }}
        />
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    // Transform direkt per Ref setzen — kein React-State, kein Re-Render der Bilder.
    const update = () => {
      ticking = false;
      const section = sectionRef.current;
      if (!section) return;
      const offset =
        (window.scrollY - section.offsetTop + window.innerHeight) * 0.3;
      if (row1Ref.current)
        row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
      if (row2Ref.current)
        row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 flex flex-col gap-3"
      style={{ background: 'var(--bg)' }}
    >
      <MarqueeRow images={ROW_1} rowRef={row1Ref} />
      <MarqueeRow images={ROW_2} rowRef={row2Ref} />
    </section>
  );
}
