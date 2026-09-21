import React from 'react';
import { X, Sparkles, MessageCircle } from 'lucide-react';
import { PortfolioItem } from '../types';
import { COMPANY_INFO } from '../data/mockData';

interface LightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onSelectService: (serviceId: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onSelectService }) => {
  if (!item) return null;

  const whatsappOrderUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
    `Bonjour Eliano Prime Print, je suis intéressé par votre réalisation "${item.title}". Pourriez-vous me faire un devis pour un projet similaire ?`
  )}`;

  return (
    <div 
      id="lightbox-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="lightbox-modal-content"
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 hover:bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200 shadow-sm transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Image Left Col */}
          <div className="md:col-span-7 bg-slate-100 flex items-center justify-center relative min-h-[300px]">
            <img
              src={item.image}
              alt={item.altText}
              className="w-full h-full object-cover max-h-[500px]"
            />
            <span className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-white/95 border border-slate-200 text-[#1062a4] text-xs font-bold uppercase tracking-wider shadow-sm">
              {item.categoryLabel}
            </span>
          </div>

          {/* Details Right Col */}
          <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#ee1c6e] uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Réalisation Eliano Prime Print</span>
              </div>

              <h3 className="font-syne text-2xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Specs */}
              <div className="space-y-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <div>
                  <span className="text-slate-500 block mb-0.5">Technique d'impression :</span>
                  <span className="text-slate-900 font-semibold">{item.technique}</span>
                </div>
                {item.client && (
                  <div>
                    <span className="text-slate-500 block mb-0.5">Contexte / Type :</span>
                    <span className="text-[#1062a4] font-semibold">{item.client}</span>
                  </div>
                )}
                <div>
                  <span className="text-slate-500 block mb-0.5">Lieu de production :</span>
                  <span className="text-slate-900 font-semibold">Atelier Lomé, Togo</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#1062a4] via-[#00a5df] to-[#ee1c6e] hover:opacity-95 text-white font-bold text-sm shadow-md shadow-[#00a5df]/20 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Commander un modèle similaire</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onSelectService(item.category);
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs border border-slate-300 transition-colors cursor-pointer shadow-sm"
              >
                <span>Demander un devis personnalisé</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
