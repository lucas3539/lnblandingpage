import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import StorySection from './sections/StorySection';
import ServicesSection from './sections/ServicesSection';
import ReferencesSection from './sections/ReferencesSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <div
      className="font-kanit"
      style={{ background: 'var(--bg)', overflowX: 'clip' }}
    >
      <HeroSection />
      <MarqueeSection />
      <StorySection />
      <ServicesSection />
      <ReferencesSection />
      <ContactSection />
    </div>
  );
}
