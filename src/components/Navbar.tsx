import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquareQuote, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenQuoteModal: (preselectedService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'À propos', href: '#propos' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Avis Clients', href: '#temoignages' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav border-b border-slate-200 shadow-sm py-3' 
          : 'bg-white/95 backdrop-blur-sm py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a 
            id="brand-logo-link"
            href="#" 
            className="flex items-center group focus:outline-none"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                className="text-slate-700 hover:text-[#1062a4] font-semibold text-sm transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#00a5df] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              id="nav-phone-link"
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-[#1062a4] px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:border-[#00a5df] transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#ee1c6e]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <button
              id="nav-devis-btn"
              onClick={() => onOpenQuoteModal()}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#1062a4] via-[#00a5df] to-[#ee1c6e] hover:opacity-90 text-white font-bold text-sm shadow-md shadow-[#00a5df]/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Demander un devis</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="nav-mobile-quote-btn"
              onClick={() => onOpenQuoteModal()}
              className="px-3 py-1.5 text-xs font-bold rounded-lg bg-[#1062a4] text-white shadow-sm"
            >
              Devis
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="md:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 mt-3 space-y-3 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="grid grid-cols-1 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-slate-800 hover:text-[#1062a4] hover:bg-slate-50 font-semibold text-base transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
            <a
              id="mobile-drawer-phone"
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-800"
            >
              <Phone className="w-4 h-4 text-[#ee1c6e]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <button
              id="mobile-drawer-quote"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#1062a4] via-[#00a5df] to-[#ee1c6e] text-white font-bold text-sm shadow-md"
            >
              <MessageSquareQuote className="w-4 h-4" />
              <span>Demander un devis personnalisé</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
