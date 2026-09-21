import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle,
  Sparkles,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/mockData';
import { ContactFormData } from '../types';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    service: initialService || 'tableau',
    quantity: '1',
    deadline: 'standard',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct pre-formatted message
    const serviceObj = SERVICES.find(s => s.id === formData.service);
    const serviceName = serviceObj ? serviceObj.title : (formData.service || 'Projet personnalisé');
    
    const text = `*NOUVELLE DEMANDE DE DEVIS - ELIANO PRIME PRINT*
---------------------------------------
👤 *Nom :* ${formData.fullName || 'Client'}
📞 *Contact :* ${formData.phone || 'Non renseigné'}
✉️ *Email :* ${formData.email || 'Non renseigné'}
🎨 *Service demandé :* ${serviceName}
🔢 *Quantité estimée :* ${formData.quantity}
⏱️ *Délai souhaité :* ${formData.deadline === 'urgent' ? 'Urgent (24h - 48h)' : 'Standard'}
📝 *Détails du projet :*
${formData.message || 'Demande de tarif et faisabilité.'}
---------------------------------------`;

    const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceObj = SERVICES.find(s => s.id === formData.service);
    const serviceName = serviceObj ? serviceObj.title : 'Devis Print';
    
    const subject = `Demande de devis - ${formData.fullName || 'Client'} (${serviceName})`;
    const body = `Nom: ${formData.fullName}\nTéléphone: ${formData.phone}\nService: ${serviceName}\nQuantité: ${formData.quantity}\n\nMessage:\n${formData.message}`;
    
    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(COMPANY_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 3000);
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-white border-t border-slate-200 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1062a4]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ee1c6e]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p 
            id="contact-subheading"
            className="text-[#1062a4] font-syne font-bold text-lg sm:text-xl tracking-wide flex items-center gap-2 mb-3"
          >
            <span>&mdash;</span>
            <span>Parlons de votre projet</span>
          </p>
          <h2 
            id="contact-main-title"
            className="font-syne text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4"
          >
            Contactez-moi
          </h2>
          <p 
            id="contact-description"
            className="text-slate-600 text-base sm:text-lg font-normal"
          >
            Vous avez un projet en tête ? Demandez un devis sans engagement. Je réponds rapidement sous 24h.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info Blocks matching user HTML */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Block */}
            <div 
              id="contact-card-phone"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#00a5df] shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-[#1062a4]" />
              </div>
              <div className="flex-1">
                <p className="text-slate-500 text-sm font-semibold mb-1">Téléphone &amp; WhatsApp</p>
                <p className="text-slate-900 text-lg font-bold font-syne tracking-wide">
                  {COMPANY_INFO.phone}
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-xs font-semibold text-[#00a5df] hover:text-[#1062a4] underline"
                  >
                    Appeler directement
                  </a>
                  <span className="text-slate-300">•</span>
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
                  >
                    {copiedPhone ? 'Copié !' : 'Copier le numéro'}
                  </button>
                </div>
              </div>
            </div>

            {/* Email Block */}
            <div 
              id="contact-card-email"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#00a5df] shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-[#00a5df]" />
              </div>
              <div className="flex-1">
                <p className="text-slate-500 text-sm font-semibold mb-1">Email professionnel</p>
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-slate-900 text-base sm:text-lg font-bold font-syne hover:text-[#1062a4] transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
                <p className="text-xs text-slate-500 mt-2">
                  Idéal pour envoyer vos fichiers HD &amp; maquettes
                </p>
              </div>
            </div>

            {/* Location Block */}
            <div 
              id="contact-card-location"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#00a5df] shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-[#ee1c6e]" />
              </div>
              <div className="flex-1">
                <p className="text-slate-500 text-sm font-semibold mb-1">Localisation &amp; Livraison</p>
                <p className="text-slate-900 text-base sm:text-lg font-bold font-syne">
                  {COMPANY_INFO.address}
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-500 mt-2">
                  <Clock className="w-3.5 h-3.5 text-[#ee1c6e]" />
                  <span>{COMPANY_INFO.workingHours}</span>
                </div>
              </div>
            </div>

            {/* Fast WhatsApp Instant Action Card */}
            <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 text-slate-900 flex flex-col gap-3 shadow-sm">
              <div className="flex items-center gap-2 text-[#1062a4] font-bold text-sm">
                <MessageCircle className="w-5 h-5 text-[#00a5df]" />
                <span>Besoin d'une réponse immédiate ?</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Contactez-nous directement sur WhatsApp pour nous envoyer vos visuels et obtenir un tarif instantané.
              </p>
              <a
                href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#1062a4] via-[#00a5df] to-[#ee1c6e] text-white font-bold text-sm shadow-md shadow-[#00a5df]/20 transition-all hover:opacity-95"
              >
                <span>Ouvrir WhatsApp (+228 90 26 36 00)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Quote & Request Form */}
          <div className="lg:col-span-7">
            <div 
              id="quote-form-card"
              className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-slate-200 shadow-sm relative"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
                <div>
                  <h3 className="font-syne text-xl sm:text-2xl font-bold text-slate-900">
                    Formulaire de Devis Express
                  </h3>
                  <p className="text-slate-500 text-xs mt-1">
                    Précisez vos besoins pour une estimation rapide
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#1062a4] text-[11px] font-bold border border-slate-200">
                  <Sparkles className="w-3.5 h-3.5 text-[#ee1c6e]" />
                  <span>Devis gratuit</span>
                </div>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-white border-2 border-[#00a5df] text-[#1062a4] text-sm flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00a5df] shrink-0" />
                  <div>
                    <span className="font-bold block">Demande envoyée avec succès !</span>
                    <span>Nous vous recontacterons très vite sur WhatsApp ou par email.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
                
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Ex: Koffi Amegan"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#1062a4] focus:ring-1 focus:ring-[#1062a4] transition-all shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Téléphone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Ex: +228 90 XX XX XX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#1062a4] focus:ring-1 focus:ring-[#1062a4] transition-all shadow-sm"
                    />
                  </div>
                </div>

                {/* Email & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Adresse Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="votre.email@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#1062a4] focus:ring-1 focus:ring-[#1062a4] transition-all shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Type de service *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#1062a4] focus:ring-1 focus:ring-[#1062a4] transition-all shadow-sm"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title} ({s.startingPrice})
                        </option>
                      ))}
                      <option value="custom">Autre / Projet personnalisé</option>
                    </select>
                  </div>
                </div>

                {/* Quantity & Urgency */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Quantité ou Dimensions estimées
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      placeholder="Ex: 5 t-shirts / 1 bâche 3x2m / 1 tableau"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#1062a4] focus:ring-1 focus:ring-[#1062a4] transition-all shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Délai souhaité
                    </label>
                    <select
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#1062a4] focus:ring-1 focus:ring-[#1062a4] transition-all shadow-sm"
                    >
                      <option value="standard">Standard (3 à 5 jours)</option>
                      <option value="urgent">Urgent express (24h - 48h)</option>
                      <option value="planning">Projet pour le mois prochain</option>
                    </select>
                  </div>
                </div>

                {/* Message / Details */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Description de votre besoin &amp; détails
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Précisez votre projet (textes à inclure, couleurs, formats souhaités, avez-vous déjà un fichier ou logo ?)..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#1062a4] focus:ring-1 focus:ring-[#1062a4] transition-all resize-none shadow-sm"
                  />
                </div>

                {/* Submit Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    id="submit-whatsapp-quote"
                    className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-[#1062a4] via-[#00a5df] to-[#ee1c6e] hover:opacity-95 text-white font-bold text-sm shadow-lg shadow-[#00a5df]/20 transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 text-white" />
                    <span>Envoyer la demande via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    id="submit-email-quote"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 transition-all cursor-pointer shadow-sm"
                  >
                    <Mail className="w-4 h-4 text-[#1062a4]" />
                    <span>Par Email</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 text-center">
                  🔒 Vos informations restent strictement confidentielles et ne seront utilisées que pour traiter votre demande.
                </p>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
