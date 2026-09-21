import React from 'react';
import { 
  ArrowUp, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram,
  Facebook,
  MessageCircle,
  Share2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <Logo size="md" />

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              Votre atelier d'infographie et d'impression d'exception à Lomé. Affiches, bâches, t-shirts personnalisés, tableaux d'art et identités visuelles.
            </p>

            {/* Social Icons matching 3 logo colors */}
            <div className="flex items-center gap-3 pt-2">
              {/* WhatsApp */}
              <a
                href={COMPANY_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:border-[#00a5df] hover:text-[#00a5df] text-slate-700 flex items-center justify-center transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              {/* Instagram */}
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:border-[#ee1c6e] hover:text-[#ee1c6e] text-slate-700 flex items-center justify-center transition-colors shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* TikTok */}
              <a
                href={COMPANY_INFO.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:border-[#1062a4] hover:text-[#1062a4] text-slate-700 flex items-center justify-center transition-colors shadow-sm"
              >
                <Share2 className="w-4 h-4" />
              </a>

              {/* Facebook */}
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:border-[#1062a4] hover:text-[#1062a4] text-slate-700 flex items-center justify-center transition-colors shadow-sm"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-syne font-bold text-slate-900 text-sm uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-[#1062a4] transition-colors">Mes Services créatifs</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#1062a4] transition-colors">Portfolio &amp; Réalisations</a>
              </li>
              <li>
                <a href="#propos" className="hover:text-[#1062a4] transition-colors">À propos du designer</a>
              </li>
              <li>
                <a href="#temoignages" className="hover:text-[#1062a4] transition-colors">Avis &amp; Témoignages</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#1062a4] transition-colors">Demande de devis</a>
              </li>
            </ul>
          </div>

          {/* Services list */}
          <div>
            <h4 className="font-syne font-bold text-slate-900 text-sm uppercase tracking-wider mb-4">
              Prestations Print
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>Tableaux d'art &amp; Décoration</li>
              <li>Affiches &amp; Bâches grand format</li>
              <li>Logos &amp; Identités visuelles</li>
              <li>T-shirts &amp; Polos personnalisés DTF</li>
              <li>Tasses magiques &amp; Objets publicitaires</li>
              <li>Flyers, Cartes de visite &amp; Brochures</li>
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h4 className="font-syne font-bold text-slate-900 text-sm uppercase tracking-wider mb-4">
              Contact direct
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1062a4] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#ee1c6e] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-slate-900 transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00a5df] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-slate-900 transition-colors break-all">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} <span className="text-slate-800 font-medium">Eliano Prime Print</span>. Tous droits réservés. Infographie &amp; Impression à Lomé, Togo.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-[#1062a4] transition-colors cursor-pointer shadow-sm"
            >
              <span>Haut de page</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
