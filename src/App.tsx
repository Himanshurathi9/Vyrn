import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { CaseStudies } from './components/CaseStudies';
import { Vault } from './components/Vault';
import { StackBuilder } from './components/StackBuilder';
import { ContactBanner } from './components/ContactBanner';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import ChakraDivider from './components/ChakraDivider';

function App() {
  useEffect(() => {
    // Only apply magnetic scrolling on desktop
    if (window.innerWidth < 1024) return;

    const sections = document.querySelectorAll('main > section, main > div > section');
    
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (isScrolling) return;

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = true;
        
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        
        let closestSection: Element | null = null;
        let minDistance = Infinity;

        sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          const absoluteTop = rect.top + scrollPosition;
          const distance = Math.abs(scrollPosition - absoluteTop);
          
          // Only snap if we are reasonably close to the top of a section (e.g., within 30% of viewport height)
          if (distance < minDistance && distance < windowHeight * 0.3) {
            minDistance = distance;
            closestSection = section;
          }
        });

        if (closestSection) {
          const targetPosition = (closestSection as HTMLElement).offsetTop;
          
          // Smooth scroll to the closest section
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }

        // Allow next snap after animation completes
        setTimeout(() => {
          isScrolling = false;
        }, 800); 

      }, 150); // Wait for user to stop scrolling
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="bg-navy min-h-screen selection:bg-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        
        <div className="bg-navy"><ChakraDivider theme="dark" /></div>
        <Stats />
        
        <div className="bg-white"><ChakraDivider theme="light" /></div>
        <Services />
        
        <div className="bg-navy"><ChakraDivider theme="dark" /></div>
        <Pricing />
        
        <div className="bg-white"><ChakraDivider theme="light" /></div>
        <Testimonials />
        
        <div className="bg-[#F0F4FF]"><ChakraDivider theme="light" /></div>
        <CaseStudies />
        
        <div className="bg-navy"><ChakraDivider theme="dark" /></div>
        <Vault />
        
        <div className="bg-navy"><ChakraDivider theme="dark" /></div>
        <StackBuilder />
        
        <div className="bg-[#F8FAFC]"><ChakraDivider theme="light" /></div>
        <ContactBanner />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

export default App;
