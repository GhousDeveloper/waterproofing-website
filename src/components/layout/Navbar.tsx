import React, { useState, useEffect } from 'react';
import { Phone, Clock, ChevronDown, Menu, X, Shield, ArrowRight, MessageSquare } from 'lucide-react';
import { RoofProLogo } from '../common/RoofProLogo.tsx';
import { COMPANY_INFO } from '../../data/roofingData.ts';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenEstimate: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenEstimate
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      hasDropdown: true,
      subItems: [
        { name: 'All Services Overview', path: '/services' },
        { name: 'Roof Installation & Replacement', path: '/services/installation' },
        { name: 'Roof Leak Repair', path: '/services/repair' },
        { name: 'Roof Waterproofing (RCC/Concrete)', path: '/services/waterproofing' },
        { name: 'Roof Heat Proofing (Solar Reflective)', path: '/services/heatproofing' },
        { name: 'Commercial & Industrial Roofing', path: '/services/commercial' },
        { name: 'Roof Inspection & Assessment', path: '/services/inspection' },
      ]
    },
    { name: 'Projects', path: '/projects' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top utility notification / contact bar */}
      <div className="bg-[#202020] text-neutral-300 text-xs border-b border-neutral-800 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-[#B52F24] inline-block" />
              <span className="font-medium text-white">{COMPANY_INFO.workingHours.emergency}</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-neutral-400">
              <Clock className="w-3.5 h-3.5 text-[#B52F24]" />
              <span>{COMPANY_INFO.workingHours.weekdays}</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="hidden lg:flex items-center gap-1.5 text-neutral-400">
              <Shield className="w-3.5 h-3.5 text-[#B52F24]" />
              <span>{COMPANY_INFO.serviceAreasText}</span>
            </div>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-white font-semibold hover:text-[#B52F24] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B52F24]" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation bar */}
      <nav
        className={`bg-white transition-all duration-200 border-b ${
          isScrolled
            ? 'shadow-md border-[#E8E2DF] py-3'
            : 'border-[#E8E2DF]/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Brand Wordmark & Roof Emblem */}
          <button
            onClick={() => handleNavClick('/')}
            className="text-left focus:outline-none cursor-pointer"
            aria-label="RoofPro Home"
          >
            <RoofProLogo showTagline={true} />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive =
                currentPath === link.path ||
                (link.path !== '/' && currentPath.startsWith(link.path));

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick(link.path)}
                      className={`flex items-center gap-1 text-sm font-semibold tracking-tight transition-colors py-2 cursor-pointer ${
                        isActive
                          ? 'text-[#B52F24]'
                          : 'text-neutral-700 hover:text-[#B52F24]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen ? 'rotate-180 text-[#B52F24]' : ''
                        }`}
                      />
                    </button>

                    {/* Services Submenu Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-[#E8E2DF] py-2 mt-0 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                        {link.subItems?.map((sub) => (
                          <button
                            key={sub.name}
                            onClick={() => handleNavClick(sub.path)}
                            className="w-full text-left px-4 py-2.5 text-xs font-medium text-neutral-700 hover:text-[#B52F24] hover:bg-[#FAF7F5] flex items-center justify-between group transition-colors cursor-pointer"
                          >
                            <span>{sub.name}</span>
                            <ArrowRight className="w-3 h-3 text-[#B52F24] opacity-0 group-hover:opacity-100 transition-opacity" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-sm font-semibold tracking-tight transition-colors relative py-1 cursor-pointer ${
                    isActive
                      ? 'text-[#B52F24]'
                      : 'text-neutral-700 hover:text-[#B52F24]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B52F24] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action Zone */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="hidden xl:flex items-center gap-2 text-xs font-bold text-neutral-800 hover:text-[#B52F24] transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-[#B52F24]/10 flex items-center justify-center text-[#B52F24]">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-neutral-500 font-normal">Call Our Experts</span>
                <span className="font-extrabold font-mono tracking-tight text-neutral-900">{COMPANY_INFO.phoneDisplay}</span>
              </div>
            </a>

            <button
              onClick={onOpenEstimate}
              className="py-2.5 px-5 bg-[#B52F24] hover:bg-[#8F211A] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm hover:shadow transition-all duration-150 cursor-pointer active:scale-98 whitespace-nowrap"
            >
              Get a Free Estimate
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenEstimate}
              className="py-2 px-3 bg-[#B52F24] text-white text-xs font-bold rounded-lg shadow-sm sm:hidden"
            >
              Estimate
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E8E2DF] bg-white px-4 pt-3 pb-6 space-y-1 animate-in slide-in-from-top duration-200">
            <div className="py-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider px-3">
              Navigation
            </div>
            {navLinks.map((link) => (
              <div key={link.name}>
                <button
                  onClick={() => handleNavClick(link.path)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                    currentPath === link.path
                      ? 'bg-[#B52F24]/10 text-[#B52F24]'
                      : 'text-neutral-800 hover:bg-neutral-50'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
                </button>

                {link.hasDropdown && (
                  <div className="pl-6 pr-2 py-1 space-y-1 border-l-2 border-[#E8E2DF] ml-4 my-1">
                    {link.subItems?.map((sub) => (
                      <button
                        key={sub.name}
                        onClick={() => handleNavClick(sub.path)}
                        className={`w-full text-left px-2 py-1.5 text-xs rounded transition-colors ${
                          currentPath === sub.path
                            ? 'text-[#B52F24] font-bold'
                            : 'text-neutral-600 hover:text-neutral-900'
                        }`}
                      >
                        {sub.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 mt-2 border-t border-[#E8E2DF] space-y-3">
              <a
                href={COMPANY_INFO.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp ({COMPANY_INFO.phoneDisplay})</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full py-3 px-4 rounded-xl bg-neutral-100 text-neutral-900 font-bold text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#B52F24]" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimate();
                }}
                className="w-full py-3.5 px-4 bg-[#B52F24] text-white font-bold text-sm rounded-xl shadow text-center cursor-pointer"
              >
                Get a Free Estimate
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
