import { useEffect, useState } from 'react';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import StorySection from './sections/StorySection';
import ServicesSection from './sections/ServicesSection';
import ReferencesSection from './sections/ReferencesSection';
import ContactSection from './sections/ContactSection';
import LegalPage from './sections/LegalPage';

const WRAPPER = { background: 'var(--bg)', overflowX: 'clip' as const };

export default function App() {
  // Leichtgewichtiges Hash-Routing für Impressum/Datenschutz — ohne Router-Lib.
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  if (hash === '#impressum' || hash === '#datenschutz') {
    return (
      <div className="font-kanit" style={WRAPPER}>
        <LegalPage type={hash === '#impressum' ? 'impressum' : 'datenschutz'} />
      </div>
    );
  }

  return (
    <div className="font-kanit" style={WRAPPER}>
      <HeroSection />
      <MarqueeSection />
      <StorySection />
      <ServicesSection />
      <ReferencesSection />
      <ContactSection />
    </div>
  );
}
