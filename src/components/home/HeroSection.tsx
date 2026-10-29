import React from 'react';
import { ArrowRight, Star, ShieldCheck, CheckCircle2, PhoneCall, MessageSquare } from 'lucide-react';
import { IMAGES, COMPANY_INFO } from '../../data/roofingData.ts';

interface HeroSectionProps {
  onOpenEstimate: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenEstimate,
  onExploreServices
}) => {
  return (
    <section className="relative bg-white pt-8 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      {/* Subtle background red accent glow on top right */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#B52F24]/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Eyebrow, Main Heading, Supporting Text, CTAs, Trust Proof */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Small uppercase label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#FAF7F5] border border-[#E8E2DF] text-xs font-bold uppercase tracking-wider text-[#B52F24]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Roofing Experts You Can Trust</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-[#202020] tracking-tight leading-[1.1] font-['Plus_Jakarta_Sans'] text-balance">
              Reliable Roofing & Waterproofing Solutions for <span className="text-[#B52F24]">Pakistani Homes & Businesses</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl">
              Professional roof installation, leak repair, waterproofing, heatproofing, roof inspection, and commercial roofing solutions designed for Pakistan's climate.
            </p>

            {/* Trust points list */}
            <div className="grid grid-cols-2 gap-3 pt-1 text-xs sm:text-sm font-medium text-neutral-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B52F24] shrink-0" />
                <span>Free Initial Assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B52F24] shrink-0" />
                <span>Workmanship Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B52F24] shrink-0" />
                <span>Residential & Commercial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B52F24] shrink-0" />
                <span>Fast Emergency Response</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenEstimate}
                className="py-3.5 px-7 bg-[#B52F24] hover:bg-[#8F211A] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-[#B52F24]/25 hover:shadow-xl hover:shadow-[#B52F24]/30 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Get a Free Estimate</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreServices}
                className="py-3.5 px-6 bg-white hover:bg-[#FAF7F5] text-neutral-800 hover:text-[#B52F24] font-bold text-xs rounded-xl border border-[#E8E2DF] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Explore Services</span>
              </button>

              <a
                href={COMPANY_INFO.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Trust Service Areas Bar */}
            <div className="pt-4 flex items-center gap-3 border-t border-[#E8E2DF]">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
              <div className="text-xs text-neutral-600">
                <strong className="text-neutral-900 font-bold">{COMPANY_INFO.serviceAreasText}</strong>
                <span className="mx-1.5 text-neutral-300">·</span>
                <span>Karachi, Hyderabad, Sukkur, Ghotki & beyond</span>
              </div>
            </div>
          </div>

          {/* Right Column: Roofing Team Image */}
          <div className="lg:col-span-6 relative">
            <div className="absolute -top-6 -right-6 w-full h-full bg-[#B52F24]/10 rounded-3xl -z-10 transform rotate-1 hidden sm:block" />
            
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-100 group">
              <img
                src={IMAGES.hero}
                alt="RoofPro professional roofing and waterproofing specialists in protective gear"
                className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-700 max-h-[520px]"
                loading="eager"
              />

              {/* Badge overlay on image corner */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-[#8F211A] to-[#B52F24] text-white px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Experienced Roofing Team
                </span>
              </div>

              {/* Floating Emergency Callout card on lower image */}
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="absolute bottom-4 right-4 left-4 sm:left-auto bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-xl border border-white/40 flex items-center gap-3 hover:bg-white transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#B52F24] text-white flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] uppercase font-bold text-neutral-500">
                    24/7 Rapid Response
                  </div>
                  <div className="text-sm font-extrabold text-neutral-900 font-mono">
                    {COMPANY_INFO.phoneDisplay}
                  </div>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
