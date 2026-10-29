import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ChevronDown, CheckCircle2, AlertTriangle, MessageSquare } from 'lucide-react';
import { FAQS, COMPANY_INFO } from '../data/roofingData.ts';
import { WaveDivider } from '../components/common/WaveDivider.tsx';
import { EstimateForm } from '../components/common/EstimateForm.tsx';

interface ContactPageProps {
  onOpenEstimate: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenEstimate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#681A16] via-[#8F211A] to-[#B52F24] text-white pt-16 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase font-extrabold tracking-widest text-red-200">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-['Plus_Jakarta_Sans'] tracking-tight mt-2 mb-4">
            Contact RoofPro Head Office
          </h1>
          <p className="text-base sm:text-lg text-red-100/90 max-w-2xl mx-auto leading-relaxed">
            Need rapid roof leak repair, RCC slab waterproofing, heatproofing, or commercial maintenance? Reach out directly.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 translate-y-1">
          <WaveDivider color="#ffffff" position="bottom" height={40} />
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Emergency 24/7 Red Alert Banner */}
          <div className="mb-12 p-6 rounded-2xl bg-[#B52F24]/10 border-2 border-[#B52F24] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#B52F24] text-white flex items-center justify-center shrink-0 animate-pulse">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#202020] font-['Plus_Jakarta_Sans']">
                  Experiencing an Active Roof Leak or Monsoon Emergency?
                </h3>
                <p className="text-xs text-neutral-600">
                  Call our emergency technical response line directly or reach out on WhatsApp for immediate guidance.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={COMPANY_INFO.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow transition-all flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="py-3 px-6 bg-[#B52F24] hover:bg-[#8F211A] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow transition-all flex items-center gap-2 cursor-pointer font-mono"
              >
                <Phone className="w-4 h-4" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Office Details, Service Areas, Credentials */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#B52F24]">
                  Office & Technical Dispatch
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202020] font-['Plus_Jakarta_Sans'] mt-1 mb-3">
                  Direct Line to Roofing Specialists
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  When you contact RoofPro, you speak directly with technical roofing specialists who understand local concrete slab challenges and can arrange a free on-site survey.
                </p>
              </div>

              {/* Direct Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#FAF7F5] border border-[#E8E2DF] flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#B52F24] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-neutral-500">Head Office</div>
                    <div className="text-sm font-bold text-neutral-900 mt-0.5">
                      {COMPANY_INFO.headOffice}
                    </div>
                    <div className="text-xs text-neutral-500 mt-1">Technical Consultation & Chemical Samples</div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAF7F5] border border-[#E8E2DF] flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#B52F24] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-neutral-500">Phone Hotline</div>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-lg font-bold text-[#202020] font-mono hover:text-[#B52F24] transition-colors"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                    <div className="text-xs text-neutral-500 mt-0.5">Direct phone assistance</div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAF7F5] border border-[#E8E2DF] flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-neutral-500">WhatsApp Dispatch</div>
                    <a
                      href={COMPANY_INFO.whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#202020] hover:text-emerald-700 transition-colors font-mono"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                    <div className="text-xs text-neutral-500 mt-0.5">Send photos of roof cracks & leaks for quick advice</div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAF7F5] border border-[#E8E2DF] flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#B52F24] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-neutral-500">Official Inquiries</div>
                    <a
                      href={`mailto:${COMPANY_INFO.emailEstimates}`}
                      className="text-sm font-bold text-[#202020] hover:text-[#B52F24] transition-colors"
                    >
                      {COMPANY_INFO.emailEstimates}
                    </a>
                    <div className="text-xs text-neutral-500 mt-0.5">General info: {COMPANY_INFO.emailInfo}</div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAF7F5] border border-[#E8E2DF] flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#B52F24] text-white flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-neutral-500">Operating Schedule</div>
                    <div className="text-xs text-neutral-800 font-semibold mt-0.5">
                      {COMPANY_INFO.workingHours.weekdays}
                    </div>
                    <div className="text-xs text-neutral-800 font-semibold">
                      {COMPANY_INFO.workingHours.sunday}
                    </div>
                    <div className="text-xs text-[#B52F24] font-bold mt-1">
                      {COMPANY_INFO.workingHours.emergency}
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="p-6 rounded-2xl bg-white border border-[#E8E2DF] shadow-xs space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                  Primary Service Coverage Areas:
                </div>
                <div className="flex flex-wrap gap-2">
                  {COMPANY_INFO.serviceCities.map((city) => (
                    <span
                      key={city}
                      className="px-3 py-1 bg-[#FAF7F5] border border-[#E8E2DF] text-xs font-medium text-neutral-700 rounded-lg"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Estimate Form */}
            <div className="lg:col-span-6">
              <div className="sticky top-28">
                <EstimateForm compact={false} source="contact-page" onSuccess={onOpenEstimate} />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 bg-[#FAF7F5] border-t border-[#E8E2DF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#B52F24]">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-extrabold text-[#202020] font-['Plus_Jakarta_Sans']">
              Common Questions About Roofing & Waterproofing
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#E8E2DF] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#202020] font-['Plus_Jakarta_Sans'] hover:text-[#B52F24] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#B52F24] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-[#E8E2DF]/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
