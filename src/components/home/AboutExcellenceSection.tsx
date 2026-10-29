import React from 'react';
import { Award, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { EstimateForm } from '../common/EstimateForm.tsx';
import { COMPANY_INFO } from '../../data/roofingData.ts';

interface AboutExcellenceSectionProps {
  onLearnMoreAbout: () => void;
  onOpenEstimate: () => void;
}

export const AboutExcellenceSection: React.FC<AboutExcellenceSectionProps> = ({
  onLearnMoreAbout,
  onOpenEstimate
}) => {
  return (
    <section className="bg-[#FAF7F5] py-20 relative overflow-hidden border-b border-[#E8E2DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Company Story, Key Highlights */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#E8E2DF] text-xs font-bold uppercase tracking-wider text-[#B52F24]">
              <Award className="w-3.5 h-3.5" />
              <span>Professional Standards</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202020] tracking-tight leading-[1.15] font-['Plus_Jakarta_Sans'] text-balance">
              Setting the Benchmark in Roofing & Waterproofing <span className="text-[#B52F24]">Excellence.</span>
            </h2>

            <p className="text-base text-neutral-600 leading-relaxed">
              RoofPro is dedicated to solving the unique structural challenges of properties across Pakistan. From concrete slab cracks caused by extreme summer heat to severe water seepage during the monsoon season, we apply engineered roofing, waterproofing, and heatproofing solutions that protect your property for years to come.
            </p>

            <p className="text-sm text-neutral-600 leading-relaxed">
              Every RoofPro project is executed strictly by experienced technicians using quality elastomeric waterproofing polymers, solar-reflective thermal barriers, and proven crack-sealing methods. We believe in complete transparency — itemized quotations, clear scopes of work, and dependable workmanship guarantees.
            </p>

            {/* Key Trust Highlights Strip */}
            <div className="grid grid-cols-3 gap-4 pt-4 pb-2 border-y border-[#E8E2DF]">
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#B52F24] font-['Plus_Jakarta_Sans']">
                  Sindh-Wide
                </div>
                <div className="text-xs font-semibold text-neutral-700 mt-0.5">
                  Service Reach
                </div>
                <div className="text-[11px] text-neutral-500 hidden sm:block">
                  Karachi to Sukkur & beyond
                </div>
              </div>

              <div className="text-center sm:text-left border-x border-[#E8E2DF] px-2 sm:px-4">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#202020] font-['Plus_Jakarta_Sans']">
                  Multi-Sector
                </div>
                <div className="text-xs font-semibold text-neutral-700 mt-0.5">
                  Client Expertise
                </div>
                <div className="text-[11px] text-neutral-500 hidden sm:block">
                  Homes, factories, plazas & schools
                </div>
              </div>

              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#B52F24] font-['Plus_Jakarta_Sans']">
                  Guaranteed
                </div>
                <div className="text-xs font-semibold text-neutral-700 mt-0.5">
                  Workmanship
                </div>
                <div className="text-[11px] text-neutral-500 hidden sm:block">
                  Committed to client satisfaction
                </div>
              </div>
            </div>

            {/* Quality Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B52F24] shrink-0" />
                <span>Specialized Concrete/RCC Waterproofing & Heatproofing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B52F24] shrink-0" />
                <span>Comprehensive Pre-Monsoon Roof Leak Assessments</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B52F24] shrink-0" />
                <span>Transparent Itemized Estimates in PKR — No Hidden Charges</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B52F24] shrink-0" />
                <span>Commercial Warehouse & Industrial Shed Expertise</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onLearnMoreAbout}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#B52F24] hover:text-[#8F211A] transition-colors cursor-pointer group"
              >
                <span>Read our full company profile & service standards</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Floating Estimate Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#8F211A]/10 to-[#B52F24]/10 rounded-3xl blur-xs -z-10" />
              <EstimateForm compact={false} source="about-section" onSuccess={onOpenEstimate} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
