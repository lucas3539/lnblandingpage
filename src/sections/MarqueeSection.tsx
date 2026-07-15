import { useEffect, useRef, useState } from 'react';
import { PREVIEW_GIFS } from '../data/previews';

const ROW_1 = PREVIEW_GIFS.slice(0, 11);
const ROW_2 = PREVIEW_GIFS.slice(11);

function MarqueeRow({
  images,
  transform,
}: {
  images: string[];
  transform: string;
}) {
  const tripled = [...images, ...images, ...images];
  return (
    <div
      className="flex gap-3"
      style={{ transform, willChange: 'transform', marginLeft: '-640px' }}
    >
      {tripled.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          loading="lazy"
          className="rounded-2xl object-cover flex-shrink-0"
          style={{ width: 420, height: 270 }}
        />
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 flex flex-col gap-3"
      style={{ background: 'var(--bg)' }}
    >
      <MarqueeRow images={ROW_1} transform={`translateX(${offset - 200}px)`} />
      <MarqueeRow images={ROW_2} transform={`translateX(${-(offset - 200)}px)`} />
    </section>
  );
}
