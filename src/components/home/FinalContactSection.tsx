import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, Award, MessageSquare } from 'lucide-react';
import { EstimateForm } from '../common/EstimateForm.tsx';
import { COMPANY_INFO } from '../../data/roofingData.ts';

interface FinalContactSectionProps {
  onOpenEstimate?: () => void;
}

export const FinalContactSection: React.FC<FinalContactSectionProps> = ({ onOpenEstimate }) => {
  return (
    <section className="bg-[#FAF7F5] py-20 relative overflow-hidden" id="estimate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Contact Information, Credentials, Promises */}
          <div className="lg:col-span-6 space-y-7">
            
            <div className="space-y-3">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#B52F24]">
                Direct Consultation
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202020] font-['Plus_Jakarta_Sans'] tracking-tight leading-[1.15]">
                Get a Free Quote for <span className="text-[#B52F24]">Your Roof</span>
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                Take the guesswork out of roof leakage, waterproofing, or heatproofing. Fill out the form or contact our Karachi office directly for a prompt, honest, zero-obligation assessment.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="p-5 rounded-2xl bg-white border border-[#E8E2DF] hover:border-[#B52F24]/40 hover:shadow-md transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#B52F24]/10 group-hover:bg-[#B52F24] text-[#B52F24] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 font-medium">Direct Phone</div>
                  <div className="text-base font-extrabold text-[#202020] font-mono group-hover:text-[#B52F24] transition-colors">
                    {COMPANY_INFO.phoneDisplay}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">24/7 Rapid Response</div>
                </div>
              </a>

              <a
                href={COMPANY_INFO.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white border border-[#E8E2DF] hover:border-emerald-500/40 hover:shadow-md transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-600/10 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 font-medium">WhatsApp Support</div>
                  <div className="text-sm font-bold text-[#202020] font-mono group-hover:text-emerald-700 transition-colors">
                    {COMPANY_INFO.phoneDisplay}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">Instant message chat</div>
                </div>
              </a>
            </div>

            {/* Guarantees Box */}
            <div className="bg-white rounded-2xl p-6 border border-[#E8E2DF] space-y-3 shadow-xs">
              <div className="text-xs uppercase font-extrabold text-[#202020] tracking-wider mb-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#B52F24]" />
                <span>The RoofPro Quality Commitment</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B52F24] shrink-0" />
                  <span>Free Initial On-Site Assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B52F24] shrink-0" />
                  <span>Itemized Quotations in PKR</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B52F24] shrink-0" />
                  <span>Safety-Focused Work Practices</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B52F24] shrink-0" />
                  <span>Reliable Workmanship Guarantee</span>
                </div>
              </div>
            </div>

            {/* Physical Location & Hours */}
            <div className="text-xs text-neutral-500 space-y-1.5 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B52F24] shrink-0" />
                <span>{COMPANY_INFO.headOffice}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#B52F24] shrink-0" />
                <span>Operating Hours: {COMPANY_INFO.workingHours.weekdays} ({COMPANY_INFO.workingHours.sunday})</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Estimate Form */}
          <div className="lg:col-span-6">
            <EstimateForm compact={false} source="final-section" onSuccess={onOpenEstimate} />
          </div>

        </div>

      </div>
    </section>
  );
};
