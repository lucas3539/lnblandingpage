import { useEffect, useRef } from 'react';

interface GalaxyProps {
  /** Fokuspunkt (0..1) im Canvas, um den sich die Milchstraße dreht — dort sitzt das Logo. */
  focalX?: number;
  focalY?: number;
}

interface Star {
  x: number;
  y: number;
  z: number; // Tiefe 0..1 → Parallax + Größe
  r: number;
  base: number; // Grundhelligkeit
  tw: number; // Twinkle-Phase
  blue: boolean;
}

interface Comet {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  max: number;
}

interface Orbiter {
  a: number; // Winkel
  speed: number;
  rx: number; // Ellipsen-Radien (relativ)
  ry: number;
  size: number;
  hue: string;
}

// Interaktive Milchstraße: Sternenfeld (Parallax + Twinkle), Nebel-Band,
// umlaufender Galaxie-Ring mit Orbitern, Kometen & Sternschnuppen.
export default function Galaxy({ focalX = 0.5, focalY = 0.58 }: GalaxyProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let raf = 0;
    let t = 0;
    let cometTimer = 90;

    const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
    let stars: Star[] = [];
    let comets: Comet[] = [];
    let orbiters: Orbiter[] = [];

    function resize() {
      width = canvas!.clientWidth;
      height = canvas!.clientHeight;
      canvas!.width = Math.floor(width * dpr);
      canvas!.height = Math.floor(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(460, Math.floor((width * height) / 3200));
      stars = Array.from({ length: count }, () => {
        const z = Math.random();
        return {
          x: Math.random(),
          y: Math.random(),
          z,
          r: 0.4 + z * 1.7,
          base: 0.25 + Math.random() * 0.75,
          tw: Math.random() * Math.PI * 2,
          blue: Math.random() > 0.7,
        };
      });

      orbiters = Array.from({ length: 14 }, (_, i) => ({
        a: (i / 14) * Math.PI * 2,
        speed: 0.004 + Math.random() * 0.006,
        rx: 0.26 + Math.random() * 0.14,
        ry: 0.1 + Math.random() * 0.06,
        size: 0.8 + Math.random() * 1.8,
        hue:
          Math.random() > 0.5
            ? 'rgba(190,214,255,'
            : Math.random() > 0.5
              ? 'rgba(139,157,255,'
              : 'rgba(255,255,255,',
      }));
    }

    function spawnComet() {
      const startX = Math.random() * width * 0.8;
      const startY = Math.random() * height * 0.4;
      const angle = Math.PI * (0.12 + Math.random() * 0.22);
      const speed = 7 + Math.random() * 6;
      comets.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        max: 70 + Math.random() * 50,
      });
    }

    function drawNebula(fx: number, fy: number, mx: number, tilt: number) {
      ctx!.save();
      ctx!.globalCompositeOperation = 'lighter';
      ctx!.translate(fx, fy);
      ctx!.rotate(-0.35 + mx * 0.25 + tilt);
      const band = Math.max(width, height);
      const blobs = [
        { x: -band * 0.32, y: 0, r: band * 0.3, c: 'rgba(37,99,235,0.10)' },
        { x: -band * 0.12, y: -band * 0.03, r: band * 0.26, c: 'rgba(99,102,241,0.10)' },
        { x: band * 0.08, y: band * 0.02, r: band * 0.3, c: 'rgba(59,130,246,0.12)' },
        { x: band * 0.3, y: -band * 0.02, r: band * 0.28, c: 'rgba(139,157,255,0.09)' },
        { x: 0, y: 0, r: band * 0.18, c: 'rgba(200,220,255,0.10)' },
      ];
      for (const b of blobs) {
        const g = ctx!.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, b.c);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx!.fillStyle = g;
        ctx!.beginPath();
        ctx!.ellipse(b.x, b.y, b.r, b.r * 0.5, 0, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.restore();
      ctx!.globalCompositeOperation = 'source-over';
    }

    function drawRing(fx: number, fy: number, mx: number, my: number) {
      const R = Math.min(width, height);
      ctx!.save();
      ctx!.translate(fx, fy);
      ctx!.rotate(-0.35 + mx * 0.25);
      ctx!.scale(1, 0.4 + my * 0.08);
      ctx!.globalCompositeOperation = 'lighter';
      // zwei glühende Ringe
      for (let k = 0; k < 2; k++) {
        const rad = R * (0.3 + k * 0.06);
        ctx!.beginPath();
        ctx!.ellipse(0, 0, rad, rad, 0, 0, Math.PI * 2);
        ctx!.strokeStyle = k === 0 ? 'rgba(120,170,255,0.16)' : 'rgba(190,214,255,0.1)';
        ctx!.lineWidth = 1.2;
        ctx!.stroke();
      }
      ctx!.restore();
      ctx!.globalCompositeOperation = 'source-over';
    }

    function drawOrbiters(fx: number, fy: number, mx: number, my: number) {
      const R = Math.min(width, height);
      ctx!.save();
      ctx!.translate(fx, fy);
      ctx!.rotate(-0.35 + mx * 0.25);
      ctx!.scale(1, 0.4 + my * 0.08);
      ctx!.globalCompositeOperation = 'lighter';
      for (const o of orbiters) {
        if (!reduce) o.a += o.speed;
        const x = Math.cos(o.a) * R * o.rx;
        const y = Math.sin(o.a) * R * (o.rx * 0.9);
        const glow = ctx!.createRadialGradient(x, y, 0, x, y, o.size * 6);
        glow.addColorStop(0, o.hue + '0.9)');
        glow.addColorStop(1, o.hue + '0)');
        ctx!.fillStyle = glow;
        ctx!.beginPath();
        ctx!.arc(x, y, o.size * 6, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.fillStyle = o.hue + '1)';
        ctx!.beginPath();
        ctx!.arc(x, y, o.size, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.restore();
      ctx!.globalCompositeOperation = 'source-over';
    }

    function render() {
      t += 1;
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      const mx = mouse.x - 0.5;
      const my = mouse.y - 0.5;
      const fx = focalX * width;
      const fy = focalY * height;

      ctx!.clearRect(0, 0, width, height);

      drawNebula(fx, fy, mx, reduce ? 0 : t * 0.0004);
      drawRing(fx, fy, mx, my);

      // Sterne mit Parallax + Twinkle
      for (const s of stars) {
        const depth = 0.2 + s.z * 1.3;
        const px = s.x * width + mx * 55 * depth;
        const py = s.y * height + my * 55 * depth;
        const tw = reduce ? s.base : s.base * (0.55 + 0.45 * Math.sin(t * 0.03 + s.tw));
        ctx!.globalAlpha = Math.max(0, tw);
        ctx!.fillStyle = s.blue ? '#c8dcff' : '#ffffff';
        ctx!.beginPath();
        ctx!.arc(px, py, s.r, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;

      drawOrbiters(fx, fy, mx, my);

      // Kometen / Sternschnuppen
      if (!reduce) {
        cometTimer -= 1;
        if (cometTimer <= 0) {
          spawnComet();
          cometTimer = 130 + Math.random() * 170;
        }
      }
      comets = comets.filter(
        (c) => c.life < c.max && c.x < width + 120 && c.y < height + 120,
      );
      for (const c of comets) {
        c.x += c.vx;
        c.y += c.vy;
        c.life += 1;
        const fade = 1 - c.life / c.max;
        const tail = 16;
        const g = ctx!.createLinearGradient(
          c.x,
          c.y,
          c.x - c.vx * tail,
          c.y - c.vy * tail,
        );
        g.addColorStop(0, `rgba(200,222,255,${0.9 * fade})`);
        g.addColorStop(1, 'rgba(200,222,255,0)');
        ctx!.strokeStyle = g;
        ctx!.lineWidth = 2;
        ctx!.lineCap = 'round';
        ctx!.beginPath();
        ctx!.moveTo(c.x, c.y);
        ctx!.lineTo(c.x - c.vx * tail, c.y - c.vy * tail);
        ctx!.stroke();
        ctx!.fillStyle = `rgba(238,244,255,${fade})`;
        ctx!.beginPath();
        ctx!.arc(c.x, c.y, 1.8, 0, Math.PI * 2);
        ctx!.fill();
      }

      if (!reduce) raf = requestAnimationFrame(render);
    }

    function onMove(e: MouseEvent) {
      mouse.tx = e.clientX / window.innerWidth;
      mouse.ty = e.clientY / window.innerHeight;
    }

    resize();
    render(); // erster Frame (bei reduced motion der einzige)
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, [focalX, focalY]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
