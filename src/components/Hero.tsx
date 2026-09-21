import React from 'react';
import { ArrowRight, MessageCircle, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section 
      id="hero-section"
      className="relative min-h-[88vh] pt-32 pb-20 overflow-hidden flex flex-col justify-center bg-white"
    >
      {/* Background ambient subtle lighting in 3 logo colors */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1062a4]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#00a5df]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 w-[400px] h-[400px] bg-[#ee1c6e]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00a5df0a_1px,transparent_1px),linear-gradient(to_bottom,#00a5df0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Tag / Badge */}
            <div 
              id="hero-tag-badge"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#00a5df]/30 text-[#1062a4] text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#ee1c6e]" />
              <span>INFOGRAPHIE ET DESIGN PRINT</span>
            </div>

            {/* Main Headline */}
            <h1 
              id="hero-main-title"
              className="font-syne text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]"
            >
              Vos idées,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1062a4] to-[#00a5df]">
                imprimées
              </span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a5df] via-[#ee1c6e] to-[#ee1c6e]">
                avec impact
              </span>
            </h1>

            {/* Paragraph Description */}
            <p 
              id="hero-description"
              className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed max-w-xl"
            >
              Spécialiste de l'infographie et de l'impression professionnelle à <span className="text-[#1062a4] font-bold">Lomé</span>, je crée des visuels percutants qui donnent vie à votre marque — <span className="text-[#ee1c6e] font-semibold">du digital à l'imprimé</span>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                id="hero-portfolio-btn"
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#1062a4] via-[#00a5df] to-[#ee1c6e] hover:opacity-95 text-white font-bold text-base shadow-lg shadow-[#00a5df]/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Voir mes créations</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                id="hero-whatsapp-btn"
                href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 hover:text-[#1062a4] font-semibold text-base transition-all duration-300 shadow-sm hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5 text-[#00a5df]" />
                <span>Discutons de votre projet</span>
              </a>
            </div>

            {/* Quality Checklist Badges in 3 logo colors */}
            <div className="pt-4 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-semibold text-slate-700 w-full">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1062a4] shrink-0" />
                <span>Impression HD &amp; DTF</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00a5df] shrink-0" />
                <span>Délais ultra-rapides</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#ee1c6e] shrink-0" />
                <span>Livraison Lomé &amp; Togo</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Visual Poster & Design Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual Frame Card */}
            <div 
              id="hero-visual-card"
              className="relative w-full max-w-md rounded-2xl p-3 bg-white border border-slate-200 shadow-xl shadow-slate-200/60 group"
            >
              {/* Top Bar Indicator with 3 Logo Colors: Deep Blue, Cyan, Magenta */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 mb-3 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1062a4]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00a5df]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ee1c6e]" />
                  <span className="ml-2 font-mono text-[11px] text-slate-500">eliano-print.cmyk</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-white text-[#1062a4] border border-slate-200 text-[10px] font-bold">
                  300 DPI • CMJN
                </span>
              </div>

              {/* Main Visual Poster Image Showcase - Displayed cleanly as requested */}
              <div className="relative rounded-xl overflow-hidden aspect-square bg-white border border-slate-200 shadow-inner">
                <img 
                  id="hero-poster-image"
                  src="/images/affiche.jpeg" 
                  alt="Affiche officielle des services Eliano Prime Print"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500 bg-white"
                />
              </div>

              {/* Floating Floating Pill Badge */}
              <div className="absolute -bottom-5 -left-4 px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1062a4] to-[#00a5df] flex items-center justify-center text-white">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900 font-syne">100% Satisfaction</div>
                  <div className="text-[10px] text-slate-500">Qualité d'impression certifiée</div>
                </div>
              </div>

              {/* Floating Floating Pill Right */}
              <div className="absolute -top-4 -right-4 px-3.5 py-2 rounded-xl bg-white border border-[#ee1c6e]/30 shadow-lg flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ee1c6e] animate-ping" />
                <span className="text-xs font-bold text-slate-800">Disponible à Lomé</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
