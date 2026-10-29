import React, { useState } from 'react';
import { Star, CheckCircle, MessageSquarePlus, ShieldCheck, X, MessageSquare } from 'lucide-react';
import { REVIEWS, ReviewItem, COMPANY_INFO } from '../data/roofingData.ts';
import { WaveDivider } from '../components/common/WaveDivider.tsx';

interface ReviewsPageProps {
  onOpenEstimate: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onOpenEstimate }) => {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(REVIEWS);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    role: 'Homeowner',
    location: '',
    rating: 5,
    service: 'Roof Waterproofing',
    comment: ''
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const created: ReviewItem = {
      id: `r-${Date.now()}`,
      name: newReview.name,
      role: newReview.role,
      location: newReview.location || 'Karachi, Sindh',
      rating: newReview.rating,
      date: 'Just now',
      service: newReview.service,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      comment: newReview.comment,
      isDemo: true
    };
    setReviewsList([created, ...reviewsList]);
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setIsReviewModalOpen(false);
      setNewReview({
        name: '',
        role: 'Homeowner',
        location: '',
        rating: 5,
        service: 'Roof Waterproofing',
        comment: ''
      });
    }, 1500);
  };

  return (
    <div className="w-full">
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#681A16] via-[#8F211A] to-[#B52F24] text-white pt-16 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase font-extrabold tracking-widest text-red-200">
            Client Experiences & Feedback
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-['Plus_Jakarta_Sans'] tracking-tight mt-2 mb-4">
            Customer Feedback & Reviews
          </h1>
          <p className="text-base sm:text-lg text-red-100/90 max-w-2xl mx-auto leading-relaxed">
            Read firsthand accounts from homeowners, factory supervisors, and property managers who trust RoofPro across Sindh.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 translate-y-1">
          <WaveDivider color="#ffffff" position="bottom" height={40} />
        </div>
      </section>

      {/* Rating Overview Strip */}
      <section className="py-12 bg-white border-b border-[#E8E2DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF7F5] rounded-3xl p-8 border border-[#E8E2DF] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Score Box */}
            <div className="md:col-span-4 text-center md:border-r border-[#E8E2DF] md:pr-8">
              <div className="text-5xl sm:text-6xl font-black text-[#202020] font-['Plus_Jakarta_Sans']">
                5.0
              </div>
              <div className="flex justify-center text-amber-500 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <div className="text-xs font-bold text-neutral-800">
                Quality Workmanship Rating
              </div>
              <div className="text-[11px] text-neutral-500 mt-0.5">
                Client feedback from Karachi, Hyderabad, Sukkur & Sindh
              </div>
            </div>

            {/* Quality Metrics */}
            <div className="md:col-span-5 space-y-2">
              {[
                { label: 'Workmanship Quality', score: '100%' },
                { label: 'Punctuality & Timeliness', score: '98%' },
                { label: 'Post-Work Site Cleanliness', score: '99%' },
                { label: 'Transparency in Quotation', score: '100%' },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-3 text-xs text-neutral-600">
                  <span className="w-44 font-medium truncate">{row.label}</span>
                  <div className="flex-1 h-2 bg-neutral-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#B52F24] rounded-full"
                      style={{ width: row.score }}
                    />
                  </div>
                  <span className="w-10 font-mono text-right">{row.score}</span>
                </div>
              ))}
            </div>

            {/* Leave a review button */}
            <div className="md:col-span-3 text-center md:text-right space-y-3">
              <button
                onClick={() => setIsReviewModalOpen(true)}
                className="w-full py-3.5 px-5 bg-[#202020] hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow"
              >
                <MessageSquarePlus className="w-4 h-4 text-[#B52F24]" />
                <span>Share Your Experience</span>
              </button>
              <div className="text-[11px] text-neutral-500">
                Are you a recent RoofPro client? Share your project feedback!
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Reviews Cards List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviewsList.map((review) => (
              <div
                key={review.id}
                className="bg-[#FAF7F5] rounded-2xl p-7 border border-[#E8E2DF] shadow-md flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#B52F24]/30"
                      />
                      <div>
                        <h3 className="text-base font-bold text-[#202020] font-['Plus_Jakarta_Sans']">
                          {review.name}
                        </h3>
                        <div className="text-xs text-neutral-500 flex items-center gap-1 mt-0.5">
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

                  <p className="text-neutral-700 text-sm leading-relaxed">
                    "{review.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E2DF] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Project Scope: {review.service}</span>
                  </div>
                  <span className="text-neutral-400">{review.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={onOpenEstimate}
              className="py-4 px-8 bg-[#B52F24] hover:bg-[#8F211A] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all cursor-pointer"
            >
              Get Your Free Roof Estimate Today
            </button>
          </div>
        </div>
      </section>

      {/* Review Submission Modal */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
          <div className="relative bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl animate-in zoom-in-95 duration-150">
            <button
              onClick={() => setIsReviewModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-2xl font-bold text-[#202020] font-['Plus_Jakarta_Sans'] mb-1">
              Share Your Project Feedback
            </h3>
            <p className="text-xs text-neutral-500 mb-6">
              Your honest feedback helps fellow property owners choose reliable roofing solutions.
            </p>

            {submitSuccess ? (
              <div className="p-6 bg-emerald-50 rounded-2xl text-center space-y-2 border border-emerald-200">
                <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                <div className="font-bold text-emerald-900 text-base">Thank You for Your Feedback!</div>
                <div className="text-xs text-emerald-700">Your comments have been recorded.</div>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariq Abbasi"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-[#E8E2DF] rounded-xl focus:outline-none focus:border-[#B52F24]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">City, Sindh</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Karachi, Sindh"
                      value={newReview.location}
                      onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-[#E8E2DF] rounded-xl focus:outline-none focus:border-[#B52F24]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Rating</label>
                    <select
                      value={newReview.rating}
                      onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-[#E8E2DF] rounded-xl focus:outline-none focus:border-[#B52F24]"
                    >
                      <option value={5}>★★★★★ (5 Stars - Exceptional)</option>
                      <option value={4}>★★★★☆ (4 Stars - Very Good)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Service Performed</label>
                  <select
                    value={newReview.service}
                    onChange={(e) => setNewReview({ ...newReview, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-[#E8E2DF] rounded-xl focus:outline-none focus:border-[#B52F24]"
                  >
                    <option value="Roof Waterproofing">Roof Waterproofing</option>
                    <option value="Roof Heat Proofing">Roof Heat Proofing</option>
                    <option value="Roof Leak Repair">Roof Leak Repair</option>
                    <option value="Commercial Roofing">Commercial Roofing</option>
                    <option value="Industrial Shed Repair">Industrial Shed Repair</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Your Feedback</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe how the crew handled surface cleaning, crack filling, timeliness, and leak containment..."
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-[#E8E2DF] rounded-xl focus:outline-none focus:border-[#B52F24] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#B52F24] hover:bg-[#8F211A] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                >
                  Post Feedback
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
