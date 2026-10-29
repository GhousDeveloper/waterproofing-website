import React, { useState } from 'react';
import { Search, Calendar, Clock, ArrowRight, Mail } from 'lucide-react';
import { BLOG_POSTS } from '../data/roofingData.ts';
import { WaveDivider } from '../components/common/WaveDivider.tsx';

interface BlogPageProps {
  onSelectPost: (slug: string) => void;
  onOpenEstimate: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onSelectPost, onOpenEstimate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const categories = ['All', 'Monsoon Preparation', 'Waterproofing Guide', 'Heat Proofing'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS[0];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <div className="w-full">
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#681A16] via-[#8F211A] to-[#B52F24] text-white pt-16 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase font-extrabold tracking-widest text-red-200">
            Roofing & Waterproofing Knowledge
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-['Plus_Jakarta_Sans'] tracking-tight mt-2 mb-4">
            Smart Roofing Tips for Pakistani Homes
          </h1>
          <p className="text-base sm:text-lg text-red-100/90 max-w-2xl mx-auto leading-relaxed">
            Practical advice from experienced roofing technicians on monsoon preparation, RCC slab crack repair, and solar heatproofing.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 translate-y-1">
          <WaveDivider color="#ffffff" position="bottom" height={40} />
        </div>
      </section>

      {/* Featured Article Card */}
      <section className="py-12 bg-white border-b border-[#E8E2DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="bg-[#FAF7F5] rounded-3xl overflow-hidden border border-[#E8E2DF] shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group cursor-pointer"
            onClick={() => onSelectPost(featuredPost.slug)}
          >
            <div className="lg:col-span-6 h-72 sm:h-96 overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="lg:col-span-6 p-6 sm:p-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#B52F24] text-white text-xs font-bold uppercase tracking-wider">
                Featured Guide
              </div>
              <div className="flex items-center gap-3 text-xs text-neutral-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#B52F24]" />
                  <span>{featuredPost.date}</span>
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{featuredPost.readTime}</span>
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202020] font-['Plus_Jakarta_Sans'] group-hover:text-[#B52F24] transition-colors leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B52F24] group-hover:gap-3 transition-all">
                  <span>Read Complete Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#B52F24] text-white shadow-sm'
                      : 'bg-[#FAF7F5] text-neutral-700 hover:bg-[#E8E2DF] border border-[#E8E2DF]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search roofing tips..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs bg-[#FAF7F5] border border-[#E8E2DF] rounded-xl focus:outline-none focus:border-[#B52F24]"
              />
            </div>
          </div>

          {/* Grid of Articles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                onClick={() => onSelectPost(post.slug)}
                className="bg-white rounded-2xl overflow-hidden border border-[#E8E2DF] shadow-md hover:shadow-xl hover:border-[#B52F24]/40 transition-all duration-300 flex flex-col group cursor-pointer"
              >
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

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-xs text-neutral-500">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
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
                    <span className="text-[11px] text-neutral-400">By {post.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Newsletter Signup Strip */}
      <section className="py-16 bg-[#FAF7F5] border-t border-[#E8E2DF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#B52F24]/10 text-[#B52F24] flex items-center justify-center mx-auto">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-[#202020] font-['Plus_Jakarta_Sans']">
            Stay Ahead of Seasonal Rain & Heat Damage
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto">
            Receive practical maintenance guides and pre-monsoon inspection checklists directly in your inbox.
          </p>

          {subscribed ? (
            <div className="p-4 bg-emerald-100 text-emerald-800 rounded-xl text-xs font-bold max-w-md mx-auto">
              ✓ Successfully subscribed! Check your inbox for our Pre-Monsoon Roof Checklist.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-4 py-3 text-xs bg-white border border-[#E8E2DF] rounded-xl focus:outline-none focus:border-[#B52F24]"
              />
              <button
                type="submit"
                className="py-3 px-6 bg-[#B52F24] hover:bg-[#8F211A] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
