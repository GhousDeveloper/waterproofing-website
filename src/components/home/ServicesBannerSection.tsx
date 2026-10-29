import React from 'react';
import { Phone, ArrowRight, Hammer, Wrench, Droplets, Sun, Building2, Search } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../../data/roofingData.ts';
import { WaveDivider } from '../common/WaveDivider.tsx';

interface ServicesBannerSectionProps {
  onSelectService: (slug: string) => void;
  onOpenEstimate: () => void;
}

export const ServicesBannerSection: React.FC<ServicesBannerSectionProps> = ({
  onSelectService,
  onOpenEstimate
}) => {
  // Use first 4 core services for the hero banner grid
  const topServices = SERVICES.slice(0, 4);

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case 'installation':
        return <Hammer className="w-4 h-4" />;
      case 'repair':
        return <Wrench className="w-4 h-4" />;
      case 'waterproofing':
        return <Droplets className="w-4 h-4" />;
      case 'heatproofing':
        return <Sun className="w-4 h-4" />;
      case 'commercial':
        return <Building2 className="w-4 h-4" />;
      default:
        return <Search className="w-4 h-4" />;
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-[#8F211A] via-[#8F211A] to-[#681A16] text-white pt-10 pb-20 overflow-hidden">
      {/* Top Wave Divider transitioning from previous section */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <WaveDivider color="#ffffff" position="top" height={44} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-8">
        
        {/* Section Header: Title on Left, Phone Callout on Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/15">
          <div className="max-w-xl space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-red-200">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans'] text-white">
              Comprehensive Roofing Solutions
            </h2>
            <p className="text-sm sm:text-base text-red-100/90 leading-relaxed">
              Tailored for Pakistan's climate — tackling intense summer heat, thermal roof expansion, and monsoon rainfall penetration.
            </p>
          </div>

          {/* Talk to Expert hotline button */}
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xs border border-white/20 p-3 rounded-2xl shrink-0">
            <div className="w-12 h-12 rounded-xl bg-[#B52F24] flex items-center justify-center text-white shadow-md">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-red-200 font-semibold">
                Talk to a Roofing Expert
              </div>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="text-lg font-extrabold font-mono text-white hover:text-red-200 transition-colors"
              >
                {COMPANY_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {topServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-neutral-200 text-[#202020] flex flex-col group hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden bg-neutral-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#B52F24] text-white text-[11px] font-extrabold px-2.5 py-1 rounded-md shadow flex items-center gap-1.5">
                  {getServiceIcon(service.slug)}
                  <span>{service.number}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#202020] font-['Plus_Jakarta_Sans'] mb-2 group-hover:text-[#B52F24] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectService(service.slug)}
                    className="text-xs font-bold text-[#B52F24] hover:text-[#8F211A] flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onOpenEstimate}
                    className="text-[11px] font-medium text-neutral-400 hover:text-neutral-700 transition-colors cursor-pointer"
                  >
                    Free Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Footer Link */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onSelectService('all')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#8F211A] hover:bg-neutral-100 font-bold text-xs uppercase tracking-wider shadow-lg transition-colors cursor-pointer"
          >
            <span>View All Roofing Services & System Specs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10 translate-y-1">
        <WaveDivider color="#FAF7F5" position="bottom" height={48} />
      </div>
    </section>
  );
};
