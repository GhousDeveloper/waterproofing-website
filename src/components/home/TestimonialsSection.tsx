import React from 'react';
import { Star, CheckCircle, ArrowRight } from 'lucide-react';
import { REVIEWS } from '../../data/roofingData.ts';

interface TestimonialsSectionProps {
  onViewAllReviews: () => void;
  onOpenEstimate: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onViewAllReviews,
  onOpenEstimate
}) => {
  return (
    <section className="bg-[#FAF7F5] py-20 border-b border-[#E8E2DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#B52F24]">
            Client Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202020] font-['Plus_Jakarta_Sans'] tracking-tight">
            Trusted by Property Owners Across Sindh
          </h2>
          <div className="flex items-center justify-center gap-2 pt-1">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <span className="text-sm font-bold text-neutral-800">Quality-Driven Service</span>
            <span className="text-neutral-400">·</span>
            <span className="text-xs text-neutral-500">Dedicated to Complete Customer Satisfaction</span>
          </div>
        </div>

        {/* 2-Column Testimonials Display with Pakistani demo profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS.slice(0, 2).map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-7 shadow-lg border border-[#E8E2DF] flex flex-col justify-between relative group hover:border-[#B52F24]/30 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-13 h-13 rounded-full object-cover border-2 border-[#B52F24]/20"
                    />
                    <div>
                      <h4 className="text-base font-bold text-[#202020] font-['Plus_Jakarta_Sans']">
                        {review.name}
                      </h4>
                      <div className="text-xs text-neutral-500 flex items-center gap-1.5 mt-0.5">
                        <span>{review.role}</span>
                        <span>·</span>
                        <span>{review.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>

                <p className="text-neutral-700 text-sm leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8E2DF] flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Project Scope: {review.service}</span>
                </div>
                <span className="text-neutral-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to read more reviews */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onViewAllReviews}
            className="text-xs font-bold uppercase tracking-wider text-[#B52F24] hover:text-[#8F211A] py-2 px-4 rounded-lg hover:bg-white transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>Read more client feedback & project scopes</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
