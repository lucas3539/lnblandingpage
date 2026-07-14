// ===== YAT Scales — Interaktionen =====

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Navigation: Hintergrund nach dem ersten Scroll + Fortschrittsleiste
const nav = document.getElementById('nav');
const progress = document.getElementById('progress');

function onScroll() {
  const y = window.scrollY;
  if (nav) nav.classList.toggle('is-scrolled', y > 10);
  if (progress) {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = max > 0 ? (y / max) * 100 + '%' : '0%';
  }
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Burger + Vollbild-Menü (Mobile) inkl. Fokus-Management
const burger = document.getElementById('nav-burger');
const overlay = document.getElementById('menu-overlay');

function setMenu(open) {
  if (!burger || !overlay) return;
  const wasOpen = overlay.classList.contains('is-open');
  overlay.classList.toggle('is-open', open);
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  document.body.style.overflow = open ? 'hidden' : '';
  if (open) {
    // Erst fokussieren, wenn das Overlay sichtbar ist (visibility-Transition)
    const first = overlay.querySelector('a');
    if (first) setTimeout(() => first.focus(), 400);
  } else if (wasOpen) {
    burger.focus();
  }
}

if (burger && overlay) {
  burger.addEventListener('click', () => setMenu(!overlay.classList.contains('is-open')));
  overlay.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) setMenu(false);
  });
  // Beim Vergrößern über den Breakpoint: Menü und Scroll-Lock sauber zurücksetzen
  const desktopQuery = window.matchMedia('(min-width: 721px)');
  const onBreakpoint = (e) => { if (e.matches) setMenu(false); };
  if (desktopQuery.addEventListener) desktopQuery.addEventListener('change', onBreakpoint);
  else desktopQuery.addListener(onBreakpoint); // ältere Safari-Versionen
}

// Hero-Wasserzeichen: Parallax beim Scrollen + sanfte Maus-Reaktion
// (Bewegung liegt auf dem Wrapper, die breathe-Animation auf dem Bild —
// so kommen sich transform-Werte nicht in die Quere)
const wm = document.getElementById('hero-wm');
if (wm && !reduceMotion) {
  let targetX = 0, targetY = 0, mouseX = 0, mouseY = 0, raf = null;

  function render() {
    const scrollDrift = window.scrollY * 0.18;
    mouseX += (targetX - mouseX) * 0.06;
    mouseY += (targetY - mouseY) * 0.06;
    wm.style.translate = `${mouseX}px ${scrollDrift + mouseY}px`;
    wm.style.rotate = `${window.scrollY * 0.008}deg`;
    // Weiterrendern, solange die Maus-Position noch nachzieht
    if (Math.abs(targetX - mouseX) > 0.1 || Math.abs(targetY - mouseY) > 0.1) {
      raf = requestAnimationFrame(render);
    } else {
      raf = null;
    }
  }
  function kick() { if (!raf) raf = requestAnimationFrame(render); }

  window.addEventListener('scroll', kick, { passive: true });
  document.querySelector('.hero').addEventListener('pointermove', (e) => {
    targetX = (e.clientX / window.innerWidth - 0.5) * 26;
    targetY = (e.clientY / window.innerHeight - 0.5) * 18;
    kick();
  });
}

// Scroll-Reveal: Elemente einmalig und gestaffelt einblenden
const revealEls = document.querySelectorAll('.reveal');

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('is-visible'));
} else {
  // Staffelung: Geschwister-Reveals im selben Elternelement bekommen wachsende Delays
  revealEls.forEach((el) => {
    const siblings = el.parentElement ? Array.from(el.parentElement.children).filter((c) => c.classList.contains('reveal')) : [el];
    const idx = siblings.indexOf(el);
    if (idx > 0) el.style.setProperty('--reveal-delay', Math.min(idx * 90, 450) + 'ms');
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach((el) => observer.observe(el));
}
