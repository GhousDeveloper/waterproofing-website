import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Award, Hammer, Wrench, Search, Building2, Droplets, Sun, MessageSquare } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/roofingData.ts';
import { WaveDivider } from '../components/common/WaveDivider.tsx';

interface ServicesPageProps {
  onSelectService: (slug: string) => void;
  onOpenEstimate: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectService,
  onOpenEstimate
}) => {
  return (
    <div className="w-full">
      {/* Services Banner Header */}
      <section className="bg-gradient-to-r from-[#681A16] via-[#8F211A] to-[#B52F24] text-white pt-16 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase font-extrabold tracking-widest text-red-200">
            Professional Roofing & Waterproofing
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-['Plus_Jakarta_Sans'] tracking-tight mt-2 mb-4">
            Comprehensive Roofing Solutions
          </h1>
          <p className="text-base sm:text-lg text-red-100/90 max-w-2xl mx-auto leading-relaxed">
            Engineered systems designed to protect homes, businesses, and industrial facilities across Pakistan from extreme heat, heavy monsoon rain, and slab seepage.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 translate-y-1">
          <WaveDivider color="#ffffff" position="bottom" height={40} />
        </div>
      </section>

      {/* Services List / Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES.map((service, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-10 rounded-3xl border border-[#E8E2DF] bg-[#FAF7F5] shadow-lg hover:border-[#B52F24]/30 transition-all ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-md h-72 sm:h-80 bg-neutral-200 group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#B52F24] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow">
                      Service {service.number}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 space-y-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div>
                    <span className="text-[11px] uppercase font-bold text-[#B52F24] tracking-wider">
                      {service.idealFor}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202020] font-['Plus_Jakarta_Sans'] mt-1">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  <div className="space-y-2">
                    <div className="text-xs font-bold text-neutral-800 uppercase tracking-wide">
                      Key System Features & Scope:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                      {service.features.map((feat, fidx) => (
                        <div key={fidx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#B52F24] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specs Pill Strip */}
                  <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-neutral-600">
                    <div className="flex items-center gap-1.5 font-medium">
                      <ShieldCheck className="w-4 h-4 text-[#B52F24]" />
                      <span>{service.warranty}</span>
                    </div>
                    <span className="text-neutral-300">·</span>
                    <div className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-4 h-4 text-[#B52F24]" />
                      <span>{service.turnaround}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-[#E8E2DF]">
                    <button
                      onClick={() => onSelectService(service.slug)}
                      className="py-2.5 px-5 bg-[#B52F24] hover:bg-[#8F211A] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-sm"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={onOpenEstimate}
                      className="py-2.5 px-5 bg-white hover:bg-neutral-100 text-neutral-800 text-xs font-bold rounded-xl border border-[#E8E2DF] transition-colors cursor-pointer"
                    >
                      Request Service Estimate
                    </button>
                    <a
                      href={COMPANY_INFO.whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Materials Comparison Table for Pakistan */}
      <section className="py-16 bg-[#FAF7F5] border-t border-[#E8E2DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#B52F24]">
              Solutions Guide
            </span>
            <h2 className="text-3xl font-extrabold text-[#202020] font-['Plus_Jakarta_Sans']">
              Roofing & Waterproofing Materials Guide
            </h2>
            <p className="text-sm text-neutral-600">
              Select the optimal balance of heat reflection, water defense, and durability for your property.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow border border-[#E8E2DF] text-xs sm:text-sm text-left">
              <thead className="bg-[#202020] text-white">
                <tr>
                  <th className="py-4 px-6 font-bold">Solution Type</th>
                  <th className="py-4 px-6 font-bold">Expected Durability</th>
                  <th className="py-4 px-6 font-bold">Heat Reflection</th>
                  <th className="py-4 px-6 font-bold">Water Resistance</th>
                  <th className="py-4 px-6 font-bold">Best Suited For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E2DF] text-neutral-700">
                <tr>
                  <td className="py-4 px-6 font-bold text-neutral-900">Multi-Coat Elastomeric Acrylic Membrane</td>
                  <td className="py-4 px-6 font-mono">5 - 10 Years</td>
                  <td className="py-4 px-6 text-emerald-700 font-semibold">High (70% - 80%)</td>
                  <td className="py-4 px-6">Seamless flexible barrier</td>
                  <td className="py-4 px-6">Concrete/RCC residential terraces & flat roofs in Sindh</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-neutral-900">Bitumen Waterproofing Membrane</td>
                  <td className="py-4 px-6 font-mono">7 - 12 Years</td>
                  <td className="py-4 px-6">Moderate</td>
                  <td className="py-4 px-6 text-emerald-700 font-semibold">Heavy-Duty Impervious</td>
                  <td className="py-4 px-6">Commercial slabs, basements, and below-tile applications</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-neutral-900">High-Albedo Solar Heat Reflective Coating</td>
                  <td className="py-4 px-6 font-mono">4 - 7 Years</td>
                  <td className="py-4 px-6 text-emerald-700 font-semibold">Maximum (Up to 85%)</td>
                  <td className="py-4 px-6">Protective water seal</td>
                  <td className="py-4 px-6">Top-floor apartments, houses & factory roofs seeking cooling</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-neutral-900">Industrial Pre-Engineered Steel Sheds</td>
                  <td className="py-4 px-6 font-mono">15 - 25 Years</td>
                  <td className="py-4 px-6">Thermal insulation option</td>
                  <td className="py-4 px-6">Corrugated slope drainage</td>
                  <td className="py-4 px-6">Warehouses, textile mills, factories & logistics depots</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
