import React, { useState } from 'react';
import { Eye, Sparkles, ExternalLink } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/mockData';
import { PortfolioItem } from '../types';

interface PortfolioProps {
  onOpenLightbox: (item: PortfolioItem) => void;
  onSelectService: (serviceId: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenLightbox, onSelectService }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'Toutes les créations' },
    { id: 'affiches', label: 'Affiches & Bâches' },
    { id: 'textiles', label: 'T-shirts & Textiles' },
    { id: 'tableaux', label: 'Tableaux Décoratifs' },
    { id: 'logos', label: 'Logos & Branding' },
    { id: 'goodies', label: 'Tasses & Goodies' },
  ];

  const filteredItems = activeFilter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section 
      id="portfolio" 
      className="py-24 relative bg-white border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p 
              id="portfolio-subheading"
              className="text-[#1062a4] font-syne font-bold text-lg sm:text-xl tracking-wide flex items-center gap-2 mb-2"
            >
              <span>&mdash;</span>
              <span>Ce que j'ai créé</span>
            </p>
            <h2 
              id="portfolio-main-title"
              className="font-syne text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
            >
              Mes réalisations
            </h2>
          </div>

          <p className="text-slate-600 text-sm max-w-md">
            Découvrez une sélection de projets réalisés à Lomé : bâches, t-shirts DTF, tableaux d'art et visuels de marques.
          </p>
        </div>

        {/* Filter Categories */}
        <div 
          id="portfolio-filters"
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              id={`filter-btn-${tab.id}`}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#1062a4] text-white shadow-md shadow-[#1062a4]/20 scale-105'
                  : 'bg-white text-slate-700 hover:text-[#1062a4] hover:bg-slate-50 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Portfolio Gallery Grid */}
        <div 
          id="portfolio-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`portfolio-card-${item.id}`}
              className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-[#00a5df] shadow-sm hover:shadow-xl hover:shadow-[#1062a4]/5 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div 
                className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => onOpenLightbox(item)}
              >
                <img
                  src={item.image}
                  alt={item.altText}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                {/* Badge Category */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-[#1062a4] text-[11px] font-bold tracking-wider uppercase shadow-sm">
                  {item.categoryLabel}
                </span>

                {/* Hover Quick Zoom Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="px-4 py-2 rounded-xl bg-[#1062a4] text-white font-bold text-xs flex items-center gap-2 shadow-xl backdrop-blur-md transform scale-95 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="w-4 h-4" />
                    <span>Agrandir le projet</span>
                  </div>
                </div>
              </div>

              {/* Card Information */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 
                    onClick={() => onOpenLightbox(item)}
                    className="font-syne text-lg font-bold text-slate-900 group-hover:text-[#1062a4] transition-colors mb-2 cursor-pointer"
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500 font-mono">
                    {item.technique}
                  </span>

                  <button
                    onClick={() => onOpenLightbox(item)}
                    className="text-xs font-semibold text-[#00a5df] hover:text-[#1062a4] inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Détails</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Portfolio CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 text-sm mb-4">
            Vous souhaitez réaliser un modèle similaire ou un concept entièrement personnalisé ?
          </p>
          <a
            id="portfolio-cta-btn"
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-[#1062a4] text-white border border-slate-800 text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 text-[#ee1c6e]" />
            <span>Lancer votre création avec Eliano</span>
          </a>
        </div>

      </div>
    </section>
  );
};
