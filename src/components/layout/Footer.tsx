import React from 'react';
import { Phone, Mail, MapPin, Clock, Shield, Facebook, Instagram, Linkedin, Youtube, ArrowRight, MessageSquare } from 'lucide-react';
import { RoofProLogo } from '../common/RoofProLogo.tsx';
import { COMPANY_INFO } from '../../data/roofingData.ts';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenEstimate: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEstimate }) => {
  return (
    <footer className="bg-[#1C1C1C] text-neutral-300 pt-16 pb-12 border-t-4 border-[#B52F24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top footer row with high-conversion quick contact banner */}
        <div className="bg-[#242424] rounded-2xl p-6 sm:p-8 mb-14 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#B52F24] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#B52F24]/20">
              <Phone className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs uppercase font-bold text-[#B52F24] tracking-wider">
                Need Immediate Roof Assistance?
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans'] font-mono">
                {COMPANY_INFO.phoneDisplay}
              </div>
              <div className="text-xs text-neutral-400 mt-0.5">
                {COMPANY_INFO.workingHours.emergency} · Free Initial Assessment
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a
              href={COMPANY_INFO.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3 px-5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={onOpenEstimate}
              className="w-full sm:w-auto py-3 px-6 bg-[#B52F24] hover:bg-[#8F211A] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow cursor-pointer text-center"
            >
              Request Free Estimate
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="w-full sm:w-auto py-3 px-6 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold rounded-xl transition-all border border-neutral-700 cursor-pointer text-center"
            >
              Contact Our Office
            </button>
          </div>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <RoofProLogo variant="white" showTagline={true} />
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mt-3">
              Professional roofing, waterproofing, heatproofing, leak repair, and commercial roofing solutions for homes and businesses across Sindh, Pakistan.
            </p>

            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <Shield className="w-4 h-4 text-[#B52F24]" />
                <span>{COMPANY_INFO.serviceAreasText}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <Clock className="w-4 h-4 text-[#B52F24]" />
                <span>Experienced Roofing Specialists & Quality Materials</span>
              </div>
            </div>

            {/* Social media links */}
            <div className="flex items-center gap-3 pt-3">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Youtube, label: 'YouTube' }
              ].map((s, idx) => {
                const Icon = s.icon;
                return (
                  <a
                    key={idx}
                    href="#social"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg bg-neutral-800 hover:bg-[#B52F24] text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 font-['Plus_Jakarta_Sans']">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'About RoofPro', path: '/about' },
                { name: 'Our Roofing Team', path: '/about#team' },
                { name: 'Featured Projects', path: '/projects' },
                { name: 'Client Feedback', path: '/reviews' },
                { name: 'Roofing Knowledge Blog', path: '/blog' },
                { name: 'Contact & Head Office', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      onNavigate(link.path);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 group cursor-pointer"
                  >
                    <ArrowRight className="w-3 h-3 text-[#B52F24] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Roofing Services */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 font-['Plus_Jakarta_Sans']">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Roof Installation & Replacement', path: '/services/installation' },
                { name: 'Roof Leak Repair', path: '/services/repair' },
                { name: 'Roof Waterproofing (RCC)', path: '/services/waterproofing' },
                { name: 'Roof Heat Proofing', path: '/services/heatproofing' },
                { name: 'Commercial & Industrial', path: '/services/commercial' },
                { name: 'Roof Inspection & Audit', path: '/services/inspection' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      onNavigate(link.path);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 group cursor-pointer"
                  >
                    <ArrowRight className="w-3 h-3 text-[#B52F24] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 font-['Plus_Jakarta_Sans']">
              Head Office
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B52F24] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.headOffice}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B52F24] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-white transition-colors font-mono">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href={COMPANY_INFO.whatsAppUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-mono">
                  WhatsApp: {COMPANY_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B52F24] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.emailEstimates}`} className="hover:text-white transition-colors truncate">
                  {COMPANY_INFO.emailEstimates}
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#B52F24] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div>{COMPANY_INFO.workingHours.weekdays}</div>
                  <div>{COMPANY_INFO.workingHours.sunday}</div>
                  <div className="text-[#B52F24] font-semibold mt-0.5">{COMPANY_INFO.workingHours.emergency}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div>
            © 2026 RoofPro Roofing Services. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                alert('RoofPro Privacy Notice: We strictly protect client confidentiality. Your contact details are never shared with third parties.');
              }}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => {
                alert('RoofPro Terms: Estimates are valid for 30 days. All contracts include itemized material specifications and workmanship scope.');
              }}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span className="text-neutral-600">·</span>
            <span className="text-neutral-400">Sindh, Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
