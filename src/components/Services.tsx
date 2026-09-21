import React from 'react';
import { 
  Layers, 
  LayoutGrid, 
  Palette, 
  BookOpen, 
  Shirt, 
  Coffee, 
  ArrowUpRight, 
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { SERVICES } from '../data/mockData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#1062a4]" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-6 h-6 text-[#00a5df]" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#ee1c6e]" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-[#1062a4]" />;
      case 'Shirt':
        return <Shirt className="w-6 h-6 text-[#00a5df]" />;
      case 'Coffee':
        return <Coffee className="w-6 h-6 text-[#ee1c6e]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#00a5df]" />;
    }
  };

  return (
    <section 
      id="services" 
      className="py-24 relative bg-white border-t border-slate-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#1062a4]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#ee1c6e]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p 
            id="services-subheading"
            className="text-[#1062a4] font-syne font-bold text-lg sm:text-xl tracking-wide flex items-center gap-2 mb-3"
          >
            <span>&mdash;</span>
            <span>Ce que je propose</span>
          </p>
          <h2 
            id="services-main-title"
            className="font-syne text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-5"
          >
            Mes services créatifs
          </h2>
          <p 
            id="services-description"
            className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal"
          >
            De l'identité visuelle aux impressions grand format, j'apporte précision, respect des couleurs et créativité à chaque projet graphique.
          </p>
        </div>

        {/* Services Grid: 6 cards matching user's Tableau, Affiche, Logo, Conception, T-shirt, Tasse */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service: ServiceItem) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="relative rounded-2xl p-7 bg-white border border-slate-200 hover:border-[#00a5df] shadow-sm hover:shadow-xl hover:shadow-[#1062a4]/5 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              {service.popular && (
                <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-[#00a5df] to-[#ee1c6e] text-white font-bold text-[11px] uppercase tracking-wider shadow-md">
                  Populaire
                </div>
              )}

              <div>
                {/* Service Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:border-[#00a5df] group-hover:scale-110 transition-all duration-300">
                  {getIcon(service.iconName)}
                </div>

                {/* Category label */}
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#00a5df] mb-1 block">
                  {service.category}
                </span>

                {/* Service Title */}
                <h3 className="font-syne text-xl font-bold text-slate-900 mb-3 group-hover:text-[#1062a4] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-6 text-xs text-slate-700">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#1062a4] mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Price & CTA */}
              <div className="pt-5 border-t border-slate-100 flex items-center justify-between mt-2">
                <div>
                  <span className="text-[11px] text-slate-500 block font-medium">Tarif indicatif</span>
                  <span className="font-syne font-extrabold text-[#ee1c6e] text-sm sm:text-base">
                    {service.startingPrice}
                  </span>
                </div>

                <button
                  id={`btn-order-${service.id}`}
                  onClick={() => onSelectService(service.id)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-[#1062a4] hover:text-white text-slate-800 text-xs font-semibold border border-slate-200 hover:border-[#1062a4] transition-all duration-200 group-hover:shadow-md cursor-pointer"
                >
                  <span>Commander</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Project Callout Banner */}
        <div 
          id="custom-print-callout"
          className="mt-14 p-8 rounded-2xl bg-white border-2 border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-syne text-xl sm:text-2xl font-bold text-slate-900">
              Vous avez un format ou un besoin spécifique ?
            </h3>
            <p className="text-slate-600 text-sm max-w-2xl">
              Nous réalisons des impressions sur tous types de supports (bâches géantes, roll-ups, drapeaux publicitaires, gravures, emballages et packaging sur mesure).
            </p>
          </div>
          <button
            id="callout-custom-quote-btn"
            onClick={() => onSelectService('custom')}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#1062a4] via-[#00a5df] to-[#ee1c6e] hover:opacity-95 text-white font-bold text-sm shadow-md shadow-[#00a5df]/20 transition-all hover:scale-105 cursor-pointer"
          >
            Demander un devis sur-mesure
          </button>
        </div>

      </div>
    </section>
  );
};
