import React from 'react';
import { CheckCircle2, Award, Sparkles, Send, MapPin, Zap } from 'lucide-react';
import { COMPANY_INFO, SPECIALTIES } from '../data/mockData';

interface AboutProps {
  onOpenQuoteModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenQuoteModal }) => {
  return (
    <section 
      id="propos" 
      className="py-24 relative bg-white border-t border-slate-200 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#00a5df]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#ee1c6e]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Values */}
          <div className="lg:col-span-7 space-y-6">
            <p 
              id="about-subheading"
              className="text-[#1062a4] font-syne font-bold text-lg sm:text-xl tracking-wide flex items-center gap-2"
            >
              <span>&mdash;</span>
              <span>Qui suis-je</span>
            </p>

            <h2 
              id="about-main-title"
              className="font-syne text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
            >
              Passionné de design,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1062a4] via-[#00a5df] to-[#ee1c6e]">
                orienté résultats
              </span>
            </h2>

            <p 
              id="about-description"
              className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal"
            >
              Infographiste et imprimeur spécialisé dans le design print et l'identité visuelle à <span className="text-[#1062a4] font-bold">Lomé</span>. Je crée des supports percutants qui allient esthétisme, calibrage colorimétrique professionnel et stratégie de marque pour maximiser votre impact.
            </p>

            {/* Specialties Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {SPECIALTIES.map((spec, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 hover:border-[#00a5df] shadow-sm transition-colors"
                >
                  <div className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1062a4]" />
                  </div>
                  <div>
                    <h4 className="font-syne font-bold text-sm text-slate-900">{spec.title}</h4>
                    <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{spec.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                id="about-work-with-me-btn"
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#1062a4] via-[#00a5df] to-[#ee1c6e] hover:opacity-95 text-white font-bold text-base shadow-lg shadow-[#00a5df]/20 transition-all hover:scale-105"
              >
                <Zap className="w-5 h-5 text-white" />
                <span>Travaillez avec moi</span>
              </a>

              <a
                id="about-whatsapp-direct"
                href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent('Bonjour Eliano, j\'aimerais collaborer avec vous sur un projet graphique.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white border border-slate-300 text-slate-800 hover:text-[#1062a4] font-semibold text-sm hover:border-[#00a5df] transition-all shadow-sm"
              >
                <Send className="w-4 h-4 text-[#00a5df]" />
                <span>Message direct WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Profile Showcase & Stats */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative ring in 3 logo colors */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#1062a4] via-[#00a5df] to-[#ee1c6e] opacity-20 blur-lg" />

              {/* Main Profile Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xl p-3">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-100">
                  <img
                    id="about-profile-image"
                    src="/images/eli.jpeg"
                    alt="Profil Eliano Prime Print - Designer & Imprimeur"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                  {/* Badges on image */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-syne text-base font-bold text-slate-900">
                          Eliano Prime Print
                        </h4>
                        <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-0.5">
                          <MapPin className="w-3.5 h-3.5 text-[#ee1c6e]" />
                          <span>Lomé, Togo</span>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-white border border-[#00a5df] text-[#1062a4] text-[10px] font-bold">
                        Disponible
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Metric 1 */}
                <div className="absolute -top-4 -left-4 px-4 py-3 rounded-xl bg-white border border-slate-200 shadow-xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1062a4] text-white flex items-center justify-center font-bold">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-syne font-extrabold text-sm text-slate-900 block">500+ Projets</span>
                    <span className="text-[10px] text-slate-500">Imprimés avec succès</span>
                  </div>
                </div>

                {/* Floating Metric 2 */}
                <div className="absolute -bottom-4 -right-4 px-4 py-3 rounded-xl bg-white border border-slate-200 shadow-xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#ee1c6e] text-white flex items-center justify-center font-bold">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-syne font-extrabold text-sm text-slate-900 block">Qualité Studio</span>
                    <span className="text-[10px] text-slate-500">Rendu CMJN &amp; DTF HD</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
