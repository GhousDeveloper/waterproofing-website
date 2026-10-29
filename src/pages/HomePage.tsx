import React from 'react';
import { HeroSection } from '../components/home/HeroSection.tsx';
import { ServicesBannerSection } from '../components/home/ServicesBannerSection.tsx';
import { AboutExcellenceSection } from '../components/home/AboutExcellenceSection.tsx';
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection.tsx';
import { TrustBadgesRow } from '../components/home/TrustBadgesRow.tsx';
import { TestimonialsSection } from '../components/home/TestimonialsSection.tsx';
import { StatsBannerSection } from '../components/home/StatsBannerSection.tsx';
import { ReadyCtaSection } from '../components/home/ReadyCtaSection.tsx';
import { BlogTipsSection } from '../components/home/BlogTipsSection.tsx';
import { FinalContactSection } from '../components/home/FinalContactSection.tsx';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenEstimate: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenEstimate }) => {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section: Eyebrow, Main headline, CTAs, 3-roofer team photography */}
      <HeroSection
        onOpenEstimate={onOpenEstimate}
        onExploreServices={() => onNavigate('/services')}
      />

      {/* 2. Red Section: "Comprehensive Roofing Solutions" with 4 service cards */}
      <ServicesBannerSection
        onSelectService={(slug) => {
          if (slug === 'all') onNavigate('/services');
          else onNavigate(`/services/${slug}`);
        }}
        onOpenEstimate={onOpenEstimate}
      />

      {/* 3. About Section: "Leading the Way in Roofing Excellence Since 1995" with Estimate Card */}
      <AboutExcellenceSection
        onLearnMoreAbout={() => onNavigate('/about')}
        onOpenEstimate={onOpenEstimate}
      />

      {/* 4. Why Choose Us: 4 circular red icon features */}
      <WhyChooseUsSection
        onLearnMore={() => onNavigate('/about')}
        onOpenEstimate={onOpenEstimate}
      />

      {/* 5. Trust Badges Row: Quality Materials, Experienced Crew, Workmanship Guarantee */}
      <TrustBadgesRow />

      {/* 6. Testimonials Section: "Trusted by Property Owners Across Sindh" */}
      <TestimonialsSection
        onViewAllReviews={() => onNavigate('/reviews')}
        onOpenEstimate={onOpenEstimate}
      />

      {/* 7. Statistics / Trust Banner: Deep red roof photography overlay with center stats card */}
      <StatsBannerSection />

      {/* 8. Ready to Protect Your Property CTA */}
      <ReadyCtaSection onOpenEstimate={onOpenEstimate} />

      {/* 9. Blog Section: "Smart Roofing Tips for a Stronger Home" */}
      <BlogTipsSection
        onSelectPost={(slug) => onNavigate(`/blog/${slug}`)}
        onViewAllBlog={() => onNavigate('/blog')}
      />

      {/* 10. Final Contact & Instant Free Estimate Section */}
      <FinalContactSection onOpenEstimate={onOpenEstimate} />
    </div>
  );
};
