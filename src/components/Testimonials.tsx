import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section 
      id="temoignages" 
      className="py-20 bg-white border-t border-slate-200 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#1062a4] font-syne font-bold text-sm tracking-widest uppercase mb-2">
            Témoignages &amp; Avis
          </p>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold text-slate-900">
            Ils nous font confiance à Lomé
          </h2>
          <p className="text-slate-600 text-sm mt-3">
            Découvrez les retours de nos clients professionnels et particuliers sur la qualité de nos impressions et délais.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#00a5df] shadow-sm hover:shadow-xl hover:shadow-[#1062a4]/5 flex flex-col justify-between relative group transition-all duration-300 hover:-translate-y-1"
            >
              <Quote className="w-8 h-8 text-[#1062a4]/15 absolute top-6 right-6" />

              <div>
                {/* Rating stars in Magenta / Cyan */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#ee1c6e] text-[#ee1c6e]" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#00a5df]"
                />
                <div>
                  <h4 className="font-syne font-bold text-sm text-slate-900 flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-[#1062a4]" />
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    {item.role} {item.company && `• ${item.company}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
