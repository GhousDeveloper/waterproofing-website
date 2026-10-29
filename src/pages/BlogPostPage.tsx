import React from 'react';
import { ArrowLeft, Calendar, Clock, User, CheckCircle2, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';
import { BLOG_POSTS, BlogPostItem, COMPANY_INFO } from '../data/roofingData.ts';
import { WaveDivider } from '../components/common/WaveDivider.tsx';

interface BlogPostPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenEstimate: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({
  slug,
  onNavigate,
  onOpenEstimate
}) => {
  const post: BlogPostItem = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug);

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#681A16] via-[#8F211A] to-[#B52F24] text-white pt-12 pb-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button
            onClick={() => onNavigate('/blog')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-200 hover:text-white transition-colors mb-4 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Roofing Tips</span>
          </button>

          <div className="space-y-3">
            <div className="inline-block px-3 py-1 bg-white/20 rounded-md text-xs font-bold uppercase tracking-wider text-red-100">
              {post.category}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Plus_Jakarta_Sans'] tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-red-100/90 pt-2 border-t border-white/20">
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-red-200" />
                <span>{post.author}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-red-200" />
                <span>{post.date}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-red-200" />
                <span>{post.readTime}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 translate-y-1">
          <WaveDivider color="#ffffff" position="bottom" height={40} />
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Hero Photo */}
          <div className="rounded-3xl overflow-hidden shadow-xl mb-12 h-80 sm:h-96 bg-neutral-100 border border-[#E8E2DF]">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Paragraphs */}
          <div className="prose prose-neutral max-w-none space-y-6 text-neutral-700 leading-relaxed text-base">
            <p className="text-lg font-medium text-neutral-900 border-l-4 border-[#B52F24] pl-4 italic bg-[#FAF7F5] py-3 rounded-r-xl">
              {post.excerpt}
            </p>

            {post.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Practical Checklist Box */}
            <div className="my-10 p-6 sm:p-8 rounded-2xl bg-[#FAF7F5] border-2 border-[#B52F24]/30 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-neutral-900 font-bold font-['Plus_Jakarta_Sans'] text-lg">
                <ShieldCheck className="w-6 h-6 text-[#B52F24]" />
                <span>Practical Maintenance Checklist</span>
              </div>
              <ul className="space-y-3 text-sm text-neutral-700">
                {post.tips.map((tip, tidx) => (
                  <li key={tidx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B52F24] shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Author Box */}
          <div className="mt-12 p-6 rounded-2xl bg-[#FAF7F5] border border-[#E8E2DF] flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#B52F24] text-white flex items-center justify-center font-bold text-lg font-['Plus_Jakarta_Sans'] shrink-0">
              RP
            </div>
            <div>
              <div className="text-xs uppercase font-extrabold text-[#B52F24] tracking-wider">
                Published By
              </div>
              <div className="text-base font-bold text-neutral-900 font-['Plus_Jakarta_Sans']">
                {post.author}
              </div>
              <p className="text-xs text-neutral-600 mt-0.5">
                Technical advisors and field supervisors at RoofPro specializing in RCC slab waterproofing, thermal reflective heat barriers, and leak containment.
              </p>
            </div>
          </div>

          {/* CTA Banner inside post */}
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#8F211A] to-[#B52F24] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-xl font-bold font-['Plus_Jakarta_Sans']">
                Concerned About Roof Leakage or Summer Heat?
              </div>
              <p className="text-xs text-red-100">
                Schedule your free on-site roof inspection across Karachi, Hyderabad, or Sindh.
              </p>
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
              <button
                onClick={onOpenEstimate}
                className="py-3 px-6 bg-white hover:bg-neutral-100 text-[#8F211A] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow cursor-pointer"
              >
                Request Free Inspection
              </button>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-12 border-t border-[#E8E2DF]">
            <h3 className="text-2xl font-bold text-[#202020] font-['Plus_Jakarta_Sans'] mb-6">
              More Roofing Knowledge Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.slice(0, 2).map((rel) => (
                <div
                  key={rel.slug}
                  onClick={() => onNavigate(`/blog/${rel.slug}`)}
                  className="p-5 rounded-2xl border border-[#E8E2DF] bg-[#FAF7F5] hover:border-[#B52F24]/40 hover:shadow-md transition-all cursor-pointer group"
                >
                  <span className="text-[11px] font-bold text-[#B52F24] uppercase">
                    {rel.category}
                  </span>
                  <h4 className="text-base font-bold text-neutral-900 font-['Plus_Jakarta_Sans'] group-hover:text-[#B52F24] transition-colors mt-1 mb-2">
                    {rel.title}
                  </h4>
                  <div className="flex items-center gap-1 text-xs font-semibold text-[#B52F24] group-hover:gap-2 transition-all">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
