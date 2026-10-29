import React from 'react';
import { ShieldCheck, Award, Users, CheckCircle2, ArrowRight, HardHat, Phone, MessageSquare } from 'lucide-react';
import { IMAGES, COMPANY_INFO, TRUST_INDICATORS } from '../data/roofingData.ts';
import { WaveDivider } from '../components/common/WaveDivider.tsx';

interface AboutPageProps {
  onOpenEstimate: () => void;
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenEstimate, onNavigate }) => {
  const leadershipTeam = [
    {
      name: 'Engr. Tariq Mehmood',
      role: 'Technical Director & Civil Infrastructure Lead',
      experience: '20+ Years Field Experience',
      bio: 'Civil engineering specialist focusing on concrete slab stress analysis, thermal expansion joints, and high-performance waterproofing systems.'
    },
    {
      name: 'Muhammad Imran',
      role: 'Lead Waterproofing & Chemical Application Specialist',
      experience: '15+ Years Experience',
      bio: 'Expert in multi-layer elastomeric polymer coatings, crack injection grouting, and industrial warehouse roofing across Sindh.'
    },
    {
      name: 'Asif Farooq',
      role: 'Field Operations & Site Safety Supervisor',
      experience: '12+ Years Experience',
      bio: 'Manages on-site quality control, scaffolding safety protocols, and post-project cleanups across residential and commercial jobsites.'
    }
  ];

  return (
    <div className="w-full">
      {/* Subpage Header Banner with Red Wave */}
      <section className="bg-gradient-to-r from-[#681A16] via-[#8F211A] to-[#B52F24] text-white pt-16 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase font-extrabold tracking-widest text-red-200">
            About RoofPro
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-['Plus_Jakarta_Sans'] tracking-tight mt-2 mb-4 text-balance">
            Setting the Standard in Roofing & Waterproofing
          </h1>
          <p className="text-base sm:text-lg text-red-100/90 max-w-2xl mx-auto leading-relaxed">
            Dedicated to solving Pakistan's unique climate challenges through engineered waterproofing, heatproofing, and durable roof construction.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 translate-y-1">
          <WaveDivider color="#ffffff" position="bottom" height={40} />
        </div>
      </section>

      {/* Main Story & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#B52F24]">
                Our Foundation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202020] font-['Plus_Jakarta_Sans'] tracking-tight">
                Built on Integrity, Technical Knowledge, and Proven Solutions
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed">
                RoofPro was established with a singular mission: to provide homeowners, business managers, and industrial facility directors with trustworthy, durable roofing and waterproofing solutions tailored to the intense climate of Sindh, Pakistan.
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                From high-density residential areas in Karachi to expanding commercial zones in Hyderabad and Sukkur, roofs face extreme solar heat exceeding 45°C followed by sudden torrential monsoon rains. We combine quality polymers, solar-reflective compounds, and disciplined site preparation to ensure leak-free protection.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#FAF7F5] border border-[#E8E2DF]">
                  <div className="font-bold text-neutral-900 text-sm mb-1">Trained Field Personnel</div>
                  <p className="text-xs text-neutral-600">Experienced in-house technicians equipped with appropriate safety harnesses and tools.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF7F5] border border-[#E8E2DF]">
                  <div className="font-bold text-neutral-900 text-sm mb-1">Complete Site Cleanup</div>
                  <p className="text-xs text-neutral-600">We leave your property clean, removing debris, chemicals, and leftover scrap post-project.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-100">
                <img
                  src={IMAGES.hero}
                  alt="RoofPro roofing and waterproofing crew"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#B52F24] text-white flex items-center justify-center">
                      <HardHat className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-neutral-900">Safety & Quality Protocols</div>
                      <div className="text-[11px] text-neutral-500">Committed to safe jobsite execution and durable results</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership / Team Section */}
      <section className="py-20 bg-[#FAF7F5] border-t border-b border-[#E8E2DF]" id="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#B52F24]">
              Technical Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202020] font-['Plus_Jakarta_Sans'] tracking-tight">
              Experienced Roofing & Waterproofing Specialists
            </h2>
            <p className="text-sm text-neutral-600">
              Field-tested professionals dedicated to safety, modern chemicals, and reliable project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-6 border border-[#E8E2DF] shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#B52F24]/10 text-[#B52F24] flex items-center justify-center mb-4">
                    <HardHat className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-[#202020] font-['Plus_Jakarta_Sans']">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#B52F24] mt-0.5">
                    {member.role}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5 mb-3">
                    {member.experience}
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E2DF] text-[11px] font-semibold text-neutral-500">
                  Field Leadership & Technical Oversight
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Full Row */}
      <section className="py-16 bg-white border-b border-[#E8E2DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-sm uppercase tracking-widest font-extrabold text-neutral-500">
              Our Core Operational Standards
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {TRUST_INDICATORS.map((b) => (
              <div
                key={b.name}
                className="p-5 rounded-2xl border border-[#E8E2DF] bg-[#FAF7F5] text-center"
              >
                <Award className="w-6 h-6 text-[#B52F24] mx-auto mb-2" />
                <div className="text-xs font-bold text-neutral-900">{b.name}</div>
                <div className="text-xs font-extrabold text-[#B52F24] mt-1">{b.highlight}</div>
                <div className="text-[10px] text-neutral-500 mt-0.5">{b.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-[#202020] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Plus_Jakarta_Sans']">
            Experience the RoofPro Difference on Your Property
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto">
            Book your free initial roof inspection. Clear recommendations, itemized quotations in PKR, and dependable workmanship.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenEstimate}
              className="py-3.5 px-8 bg-[#B52F24] hover:bg-[#8F211A] text-white text-sm font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all cursor-pointer"
            >
              Get Free Estimate
            </button>
            <a
              href={COMPANY_INFO.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={() => onNavigate('/projects')}
              className="py-3.5 px-6 bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-bold rounded-xl border border-neutral-700 transition-colors cursor-pointer"
            >
              Browse Recent Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
