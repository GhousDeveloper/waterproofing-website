import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { BLOG_POSTS } from '../../data/roofingData.ts';

interface BlogTipsSectionProps {
  onSelectPost: (slug: string) => void;
  onViewAllBlog: () => void;
}

export const BlogTipsSection: React.FC<BlogTipsSectionProps> = ({
  onSelectPost,
  onViewAllBlog
}) => {
  return (
    <section className="bg-white py-20 border-b border-[#E8E2DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#B52F24]">
              Roofing & Waterproofing Knowledge
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202020] font-['Plus_Jakarta_Sans'] tracking-tight">
              Smart Roofing Tips for Pakistani Homes
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Expert guides on monsoon preparation, concrete slab crack repair, and solar reflective heatproofing.
            </p>
          </div>

          <button
            onClick={onViewAllBlog}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B52F24] hover:text-[#8F211A] py-2 px-4 rounded-lg hover:bg-[#FAF7F5] transition-colors shrink-0 cursor-pointer"
          >
            <span>Explore All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8E2DF] hover:border-[#B52F24]/40 hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => onSelectPost(post.slug)}
            >
              {/* Image Frame */}
              <div className="relative h-52 overflow-hidden bg-neutral-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#202020]/80 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-md">
                  {post.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-neutral-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#B52F24]" />
                      <span>{post.date}</span>
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#202020] font-['Plus_Jakarta_Sans'] group-hover:text-[#B52F24] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E2DF] flex items-center justify-between text-xs">
                  <span className="font-bold text-[#B52F24] flex items-center gap-1 group-hover:gap-2 transition-all">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[11px] text-neutral-400">RoofPro Advisory</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
