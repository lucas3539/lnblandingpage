import { Fragment, useRef, type CSSProperties } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

function Char({
  char,
  progress,
  range,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      {/* Unsichtbarer Platzhalter hält das Layout stabil */}
      <span className="invisible">{char}</span>
      <motion.span className="absolute inset-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({
  text,
  className,
  style,
}: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const total = text.length;
  let charCursor = 0;

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wi) => {
        const start = charCursor;
        charCursor += word.length + 1; // +1 für das Leerzeichen
        const wordSpan = (
          <span className="inline-block whitespace-nowrap">
            {word.split('').map((char, ci) => {
              const index = start + ci;
              return (
                <Char
                  key={ci}
                  char={char}
                  progress={scrollYProgress}
                  range={[index / total, (index + 1) / total]}
                />
              );
            })}
          </span>
        );
        return (
          <Fragment key={wi}>
            {wordSpan}
            {/* Echtes Leerzeichen als direktes p-Kind zwischen den Wort-Boxen. */}
            {wi < words.length - 1 ? ' ' : ''}
          </Fragment>
        );
      })}
    </p>
  );
}
