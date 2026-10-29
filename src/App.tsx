import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar.tsx';
import { Footer } from './components/layout/Footer.tsx';
import { EstimateModal } from './components/common/EstimateModal.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { ServiceDetailPage } from './pages/ServiceDetailPage.tsx';
import { ProjectsPage } from './pages/ProjectsPage.tsx';
import { ReviewsPage } from './pages/ReviewsPage.tsx';
import { BlogPage } from './pages/BlogPage.tsx';
import { BlogPostPage } from './pages/BlogPostPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { Phone, ArrowUp, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from './data/roofingData.ts';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Listen for browser back / forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Listen for scroll for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route resolver
  const renderCurrentPage = () => {
    // Exact paths
    if (currentPath === '/' || currentPath === '') {
      return <HomePage onNavigate={navigateTo} onOpenEstimate={() => setIsEstimateModalOpen(true)} />;
    }
    if (currentPath === '/about') {
      return <AboutPage onNavigate={navigateTo} onOpenEstimate={() => setIsEstimateModalOpen(true)} />;
    }
    if (currentPath === '/services') {
      return (
        <ServicesPage
          onSelectService={(slug) => navigateTo(`/services/${slug}`)}
          onOpenEstimate={() => setIsEstimateModalOpen(true)}
        />
      );
    }
    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '');
      return (
        <ServiceDetailPage
          slug={slug}
          onNavigate={navigateTo}
          onOpenEstimate={() => setIsEstimateModalOpen(true)}
        />
      );
    }
    if (currentPath === '/projects') {
      return <ProjectsPage onOpenEstimate={() => setIsEstimateModalOpen(true)} />;
    }
    if (currentPath === '/reviews') {
      return <ReviewsPage onOpenEstimate={() => setIsEstimateModalOpen(true)} />;
    }
    if (currentPath === '/blog') {
      return (
        <BlogPage
          onSelectPost={(slug) => navigateTo(`/blog/${slug}`)}
          onOpenEstimate={() => setIsEstimateModalOpen(true)}
        />
      );
    }
    if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.replace('/blog/', '');
      return (
        <BlogPostPage
          slug={slug}
          onNavigate={navigateTo}
          onOpenEstimate={() => setIsEstimateModalOpen(true)}
        />
      );
    }
    if (currentPath === '/contact') {
      return <ContactPage onOpenEstimate={() => setIsEstimateModalOpen(true)} />;
    }

    // Default fallback to Home
    return <HomePage onNavigate={navigateTo} onOpenEstimate={() => setIsEstimateModalOpen(true)} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#202020] selection:bg-[#B52F24] selection:text-white">
      {/* Sticky Main Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenEstimate={() => setIsEstimateModalOpen(true)}
      />

      {/* Main Viewport Content */}
      <main className="flex-1 w-full">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenEstimate={() => setIsEstimateModalOpen(true)}
      />

      {/* Global Free Estimate Modal */}
      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={() => setIsEstimateModalOpen(false)}
      />

      {/* Floating Call, WhatsApp & Scroll-to-Top Actions */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5 items-end">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-white border border-[#E8E2DF] text-neutral-700 shadow-lg hover:bg-neutral-50 flex items-center justify-center transition-all cursor-pointer hover:-translate-y-1 mb-1"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-5 h-5 text-[#B52F24]" />
          </button>
        )}

        <a
          href={COMPANY_INFO.whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="h-11 px-3.5 rounded-full bg-emerald-600 text-white shadow-xl hover:bg-emerald-700 flex items-center gap-2 transition-all cursor-pointer hover:scale-105 text-xs font-bold"
          aria-label="Chat on WhatsApp"
          title={`Chat on WhatsApp: ${COMPANY_INFO.phoneDisplay}`}
        >
          <MessageSquare className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="h-11 px-3.5 rounded-full bg-[#B52F24] text-white shadow-xl hover:bg-[#8F211A] flex items-center gap-2 transition-all cursor-pointer hover:scale-105 text-xs font-bold font-mono"
          aria-label="Call emergency roofing hotline"
          title={`Emergency 24/7 Hotline: ${COMPANY_INFO.phoneDisplay}`}
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">{COMPANY_INFO.phoneDisplay}</span>
        </a>
      </div>
    </div>
  );
}
