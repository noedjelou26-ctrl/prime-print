import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { QuoteModal } from './components/QuoteModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PortfolioItem } from './types';

export default function App() {
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItem | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('tableau');

  const handleOpenQuoteModal = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    setIsQuoteModalOpen(true);
  };

  const handleSelectServiceFromSection = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    // Smooth scroll to contact or open modal
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsQuoteModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-cyan-500 selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 2. Services Section */}
        <Services onSelectService={handleSelectServiceFromSection} />

        {/* 3. Portfolio & Réalisations */}
        <Portfolio 
          onOpenLightbox={(item) => setSelectedPortfolioItem(item)}
          onSelectService={handleSelectServiceFromSection}
        />

        {/* 4. À Propos / Qui suis-je */}
        <About onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 5. Témoignages Clients */}
        <Testimonials />

        {/* 6. Contact & Devis */}
        <Contact initialService={selectedServiceId} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Floating WhatsApp Quick Contact Button */}
      <FloatingWhatsApp />

      {/* Lightbox / Project Details Modal */}
      <LightboxModal
        item={selectedPortfolioItem}
        onClose={() => setSelectedPortfolioItem(null)}
        onSelectService={handleSelectServiceFromSection}
      />

      {/* Quick Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedService={selectedServiceId}
      />
    </div>
  );
}
