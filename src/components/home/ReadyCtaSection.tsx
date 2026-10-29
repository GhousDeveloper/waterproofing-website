import React from 'react';
import { Phone, ArrowRight, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import { IMAGES, COMPANY_INFO } from '../../data/roofingData.ts';

interface ReadyCtaSectionProps {
  onOpenEstimate: () => void;
}

export const ReadyCtaSection: React.FC<ReadyCtaSectionProps> = ({ onOpenEstimate }) => {
  return (
    <section className="bg-white py-16 lg:py-20 border-b border-[#E8E2DF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container with Red Gradient & Worker Composition */}
        <div className="bg-gradient-to-r from-[#681A16] via-[#8F211A] to-[#B52F24] rounded-3xl p-8 sm:p-12 lg:p-14 text-white shadow-2xl relative overflow-hidden">
          
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column Content */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/15 backdrop-blur-xs border border-white/20 text-xs font-bold uppercase tracking-wider text-red-100">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Safety-Focused Work Practices & Proven Solutions</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans'] text-white">
                Ready to Protect Your Property?
              </h2>

              <p className="text-base text-red-100/90 max-w-2xl leading-relaxed">
                Schedule a professional roof assessment today. Our team will inspect your roofing concerns and provide a clear, itemized estimate with no unnecessary sales pressure.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-red-100 pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>Professional Roof Assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>Transparent Project Estimate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>Roofing & Waterproofing Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>Emergency Leak Response</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button
                  onClick={onOpenEstimate}
                  className="py-4 px-8 bg-white hover:bg-neutral-100 text-[#8F211A] font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Get Your Free Estimate</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="py-4 px-6 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer font-mono"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: {COMPANY_INFO.phoneDisplay}</span>
                </a>

                <a
                  href={COMPANY_INFO.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Worker Visual Frame */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-4 border-white/30 shadow-2xl bg-neutral-900 group">
                <img
                  src={IMAGES.repair}
                  alt="Experienced roofing and waterproofing specialist at work"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-center bg-white/90 backdrop-blur-xs rounded-lg py-1.5 px-3">
                  <span className="text-[11px] font-bold text-neutral-900 uppercase tracking-wider">
                    Quality Workmanship Guaranteed
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
