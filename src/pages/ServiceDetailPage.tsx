import React from 'react';
import { ArrowLeft, CheckCircle2, ShieldCheck, Clock, Phone, ArrowRight, HardHat, FileText, MessageSquare } from 'lucide-react';
import { SERVICES, ServiceItem, COMPANY_INFO } from '../data/roofingData.ts';
import { WaveDivider } from '../components/common/WaveDivider.tsx';
import { EstimateForm } from '../components/common/EstimateForm.tsx';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenEstimate: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenEstimate
}) => {
  // Find matching service or fallback to first
  const service: ServiceItem = SERVICES.find((s) => s.slug === slug) || SERVICES[0];

  const workflowSteps = [
    {
      step: '01',
      title: 'Detailed On-Site Roof Inspection',
      desc: 'Thorough physical assessment of slab condition, hairline cracks, drainage slopes, water pooling, and ceiling seepage points.'
    },
    {
      step: '02',
      title: 'Itemized & Transparent Quotation',
      desc: 'Clear scope of work detailing specified chemicals, surface preparation steps, execution timeline, and pricing in PKR.'
    },
    {
      step: '03',
      title: 'Surface Preparation & Crack Grooving',
      desc: 'Washing the roof slab to eliminate dust and algae, opening structural cracks in V-grooves, and repairing weak plaster.'
    },
    {
      step: '04',
      title: 'Chemical Grouting & Multi-Layer Coating',
      desc: 'Applying polymer-modified cementitious crack filler followed by multi-coat elastomeric waterproofing or solar reflective layers.'
    },
    {
      step: '05',
      title: 'Quality Check & Clean Handover',
      desc: 'Water testing inspection of repaired areas, complete debris cleanup from premises, and official warranty handover.'
    }
  ];

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#681A16] via-[#8F211A] to-[#B52F24] text-white pt-12 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button
            onClick={() => onNavigate('/services')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-200 hover:text-white transition-colors mb-4 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </button>

          <div className="max-w-3xl">
            <span className="text-xs uppercase font-extrabold tracking-widest text-red-200">
              Service {service.number} · Professional Roofing Solutions
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Plus_Jakarta_Sans'] tracking-tight mt-1 mb-3">
              {service.title}
            </h1>
            <p className="text-base text-red-100/90 leading-relaxed">
              {service.shortDesc}
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 translate-y-1">
          <WaveDivider color="#ffffff" position="bottom" height={40} />
        </div>
      </section>

      {/* Main Details Body */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content Area */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Main Service Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl h-80 sm:h-96 bg-neutral-100 border border-[#E8E2DF]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-md border border-neutral-200 text-xs font-bold text-[#202020] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#B52F24]" />
                  <span>{service.warranty}</span>
                </div>
              </div>

              {/* In-depth Narrative */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202020] font-['Plus_Jakarta_Sans']">
                  Detailed Scope Overview
                </h2>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  {service.fullDesc}
                </p>
              </div>

              {/* What is Included */}
              <div className="p-6 rounded-2xl bg-[#FAF7F5] border border-[#E8E2DF] space-y-4">
                <h3 className="text-lg font-bold text-[#202020] font-['Plus_Jakarta_Sans'] flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#B52F24]" />
                  <span>What’s Included in This Service</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-700">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#B52F24] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5-Step Process */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#202020] font-['Plus_Jakarta_Sans']">
                  Our 5-Step Execution Workflow
                </h3>
                <div className="space-y-4">
                  {workflowSteps.map((step) => (
                    <div
                      key={step.step}
                      className="flex items-start gap-4 p-4 rounded-xl border border-[#E8E2DF] bg-white hover:border-[#B52F24]/30 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#B52F24]/10 text-[#B52F24] font-extrabold flex items-center justify-center shrink-0 font-mono text-sm">
                        {step.step}
                      </div>
                      <div>
                        <div className="font-bold text-sm text-neutral-900">{step.title}</div>
                        <div className="text-xs text-neutral-600 mt-0.5">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Callout Box */}
              <div className="p-6 rounded-2xl bg-[#202020] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="text-xs uppercase font-extrabold text-[#B52F24] tracking-wider">
                    Need Emergency Service Right Now?
                  </div>
                  <div className="text-lg font-bold">24/7 Rapid Leak Response Across Sindh</div>
                  <div className="text-xs text-neutral-400">Direct technical dispatch for urgent roof leakage</div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href={COMPANY_INFO.whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="py-3 px-5 bg-[#B52F24] hover:bg-[#8F211A] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2 font-mono"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{COMPANY_INFO.phoneDisplay}</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Sticky Sidebar: Estimate Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-6">
                <EstimateForm
                  compact={true}
                  source={`service-${service.slug}`}
                  onSuccess={onOpenEstimate}
                />

                <div className="bg-[#FAF7F5] rounded-2xl p-6 border border-[#E8E2DF] space-y-3 text-xs text-neutral-600">
                  <div className="font-bold text-neutral-900 text-sm">Service Specifications</div>
                  <div className="flex justify-between py-1.5 border-b border-[#E8E2DF]">
                    <span>Turnaround Time:</span>
                    <strong className="text-neutral-900">{service.turnaround}</strong>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#E8E2DF]">
                    <span>Assurance:</span>
                    <strong className="text-neutral-900">{service.warranty}</strong>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span>Initial Assessment:</span>
                    <strong className="text-emerald-700">Free On-Site Visit</strong>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
