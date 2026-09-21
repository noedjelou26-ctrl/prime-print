import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Sparkles, CheckCircle } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/mockData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService = 'tableau'
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    service: preselectedService,
    quantity: '1',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceObj = SERVICES.find(s => s.id === formData.service);
    const serviceLabel = serviceObj ? serviceObj.title : (formData.service || 'Demande personnalisée');

    const message = `*DEMANDE DE DEVIS RAPIDE - ELIANO PRIME PRINT*
---------------------------------------
👤 *Client :* ${formData.fullName || 'Client'}
📞 *Contact :* ${formData.phone || 'Non renseigné'}
🎯 *Service :* ${serviceLabel}
📦 *Quantité :* ${formData.quantity}
📝 *Détails :* ${formData.details || 'Demande de tarif et délais.'}
---------------------------------------`;

    const url = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <div 
      id="quote-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="quote-modal-container"
        className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-[#1062a4] text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4 text-[#ee1c6e]" />
          <span>Estimation Gratuite Sous 24h</span>
        </div>

        <h3 className="font-syne text-2xl font-bold text-slate-900 mb-2">
          Demander votre devis
        </h3>
        <p className="text-slate-500 text-xs mb-6">
          Remplissez ce formulaire court pour recevoir une proposition tarifaire détaillée adaptée à vos besoins.
        </p>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-white border-2 border-[#00a5df] text-center space-y-3">
            <CheckCircle className="w-12 h-12 text-[#1062a4] mx-auto" />
            <h4 className="font-syne font-bold text-lg text-slate-900">Demande transmise !</h4>
            <p className="text-xs text-slate-600">
              Votre message a été transmis vers notre WhatsApp. Eliano Prime Print vous répondra très rapidement.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-[#1062a4] transition-colors"
            >
              Fermer la fenêtre
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmitWhatsApp} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Votre Nom ou Nom d'Entreprise *
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Kodjo Mensah"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#1062a4] shadow-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Numéro WhatsApp ou Téléphone *
              </label>
              <input
                type="tel"
                required
                placeholder="+228 90 00 00 00"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#1062a4] shadow-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Service *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#1062a4] shadow-sm"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                  <option value="custom">Autre prestation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Quantité / Format
                </label>
                <input
                  type="text"
                  placeholder="Ex: 1 pièce / 10 pcs"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#1062a4] shadow-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Précisions supplémentaires
              </label>
              <textarea
                rows={3}
                placeholder="Décrivez votre besoin (couleurs, dimensions, date souhaitée)..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#1062a4] resize-none shadow-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#1062a4] via-[#00a5df] to-[#ee1c6e] hover:opacity-95 text-white font-bold text-sm shadow-md shadow-[#00a5df]/20 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Recevoir mon devis sur WhatsApp</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
