import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TheVibeBento from './components/TheVibeBento';
import MenuSection from './components/MenuSection';
import StorySection from './components/StorySection';
import GallerySection from './components/GallerySection';
import VisitSection from './components/VisitSection';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import ItemModal from './components/ItemModal';
import LightboxModal from './components/LightboxModal';
import LegalModal from './components/LegalModal';
import { galleryItems } from './data/galleryData';
import { Check, Sparkles } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [lightboxState, setLightboxState] = useState({ item: null, index: 0 });
  const [legalModalType, setLegalModalType] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const isNavigatingRef = useRef(false);
  
  // Ambient Café Audio Synthesizer (Zero external file dependencies)
  const [ambientPlaying, setAmbientPlaying] = useState(false);
  const audioContextRef = useRef(null);
  const noiseNodeRef = useRef(null);
  const gainNodeRef = useRef(null);

  // Dynamic Scroll Spy: Updates active navigation pill as user scrolls
  useEffect(() => {
    const sectionIds = ['hero', 'vibe', 'menu', 'story', 'gallery', 'visit'];

    const handleScroll = () => {
      // If user clicked a nav link, skip scroll detection momentarily to let smooth scroll settle
      if (isNavigatingRef.current) return;

      const scrollPosition = window.scrollY + 160;

      // Check if user is scrolled near bottom of page -> activate 'visit'
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setActiveSection('visit');
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAmbient = () => {
    if (ambientPlaying) {
      if (gainNodeRef.current && audioContextRef.current) {
        gainNodeRef.current.gain.linearRampToValueAtTime(0, audioContextRef.current.currentTime + 0.5);
        setTimeout(() => {
          if (audioContextRef.current) audioContextRef.current.suspend();
          setAmbientPlaying(false);
        }, 500);
      } else {
        setAmbientPlaying(false);
      }
    } else {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!audioContextRef.current) {
          const ctx = new AudioCtx();
          audioContextRef.current = ctx;

          // Generate gentle brown noise (cozy ambient rain / café frequency)
          const bufferSize = 2 * ctx.sampleRate;
          const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
          const output = noiseBuffer.getChannelData(0);
          let lastOut = 0.0;
          for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            output[i] = (lastOut + 0.02 * white) / 1.02;
            lastOut = output[i];
            output[i] *= 3.5;
          }

          const whiteNoise = ctx.createBufferSource();
          whiteNoise.buffer = noiseBuffer;
          whiteNoise.loop = true;

          // Filter to warm gentle café warmth
          const filter = ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(420, ctx.currentTime);

          const gain = ctx.createGain();
          gain.gain.setValueAtTime(0.04, ctx.currentTime);

          whiteNoise.connect(filter);
          filter.connect(gain);
          gain.connect(ctx.destination);

          whiteNoise.start(0);
          noiseNodeRef.current = whiteNoise;
          gainNodeRef.current = gain;
        } else {
          audioContextRef.current.resume();
          if (gainNodeRef.current) {
            gainNodeRef.current.gain.linearRampToValueAtTime(0.04, audioContextRef.current.currentTime + 0.5);
          }
        }
        setAmbientPlaying(true);
        showToast("☕ Ambient café white noise activated");
      } catch (err) {
        console.warn("Audio Context init blocked or unavailable:", err);
      }
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    isNavigatingRef.current = true;

    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    setTimeout(() => {
      isNavigatingRef.current = false;
    }, 800);
  };

  // Lightbox Navigation
  const handleOpenLightbox = (item, index) => {
    setLightboxState({ item, index });
  };

  const handlePrevLightbox = () => {
    const nextIdx = (lightboxState.index - 1 + galleryItems.length) % galleryItems.length;
    setLightboxState({ item: galleryItems[nextIdx], index: nextIdx });
  };

  const handleNextLightbox = () => {
    const nextIdx = (lightboxState.index + 1) % galleryItems.length;
    setLightboxState({ item: galleryItems[nextIdx], index: nextIdx });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4EBD0] text-[#2B2B2B]">
      
      {/* 1. Glassmorphic Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        ambientPlaying={ambientPlaying}
        toggleAmbient={toggleAmbient}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* 3. Hero Section */}
        <Hero
          onExploreMenu={() => handleNavigate('menu')}
          onPlanVisit={() => handleNavigate('visit')}
        />

        {/* 4. Bento Grid (The Vibe) */}
        <TheVibeBento />

        {/* 5. Menu with Filters & Accordion */}
        <MenuSection
          onSelectItem={(item) => setSelectedMenuItem(item)}
        />

        {/* 6. Story & Sourcing Section */}
        <StorySection
          onExploreMenu={() => handleNavigate('menu')}
        />

        {/* 7. Visual Photo Gallery */}
        <GallerySection
          onOpenLightbox={handleOpenLightbox}
          onPlanVisit={() => handleNavigate('visit')}
        />

        {/* 8. Visit Us, Map & Validated Inquiry Form */}
        <VisitSection />

      </main>

      {/* 9. Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegalModal={(type) => setLegalModalType(type)}
      />

      {/* 10. Sticky Mobile Bottom Dock (Mobile Only) */}
      <MobileStickyBar onNavigate={handleNavigate} />

      {/* Modals & Dialogs */}
      {selectedMenuItem && (
        <ItemModal
          item={selectedMenuItem}
          onClose={() => setSelectedMenuItem(null)}
        />
      )}

      {lightboxState.item && (
        <LightboxModal
          item={lightboxState.item}
          onClose={() => setLightboxState({ item: null, index: 0 })}
          onPrev={handlePrevLightbox}
          onNext={handleNextLightbox}
        />
      )}

      {legalModalType && (
        <LegalModal
          type={legalModalType}
          onClose={() => setLegalModalType(null)}
        />
      )}

      {/* 21st.dev Style Floating Toast */}
      {toastMessage && (
        <div className="fixed bottom-20 md:bottom-8 right-6 z-50 p-4 rounded-2xl glass-panel bg-white/95 border border-[#98A886] shadow-2xl text-xs font-bold text-[#38220F] flex items-center gap-3 animate-in slide-in-from-bottom-3 duration-300">
          <div className="w-7 h-7 rounded-full bg-[#98A886] text-[#38220F] flex items-center justify-center">
            <Check className="w-4 h-4" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
