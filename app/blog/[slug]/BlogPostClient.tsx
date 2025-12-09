"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  User,
  Eye,
  Clock,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  Check,
  Heart,
  Bookmark,
  ChevronUp,
  Tag,
  ArrowRight,
  List,
  Sparkles,
} from "lucide-react";
import { Blog } from "@/app/types/blog"; // Update path if needed

interface Props {
  blog: Blog;
  relatedBlogs: Blog[];
}

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80";

const getValidImageUrl = (url: string | null | undefined) => {
  if (!url) return FALLBACK_IMAGE;
  if (url.startsWith("http") || url.startsWith("/")) return url;
  return FALLBACK_IMAGE;
};

const calculateReadTime = (content: string) => {
  if (!content) return 3;
  const text = content.replace(/<[^>]*>/g, "");
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
};

export default function BlogPostClient({ blog, relatedBlogs }: Props) {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const readTime = calculateReadTime(blog.content);

  // Generate Table of Contents & Scroll Handler
  useEffect(() => {
    // Parse headings for TOC
    const parser = new DOMParser();
    const doc = parser.parseFromString(blog.content, "text/html");
    const hTags = Array.from(doc.querySelectorAll("h2, h3"));
    const tocData = hTags.map((tag, index) => ({
      id: `heading-${index}`,
      text: tag.textContent || "",
      level: parseInt(tag.tagName.substring(1)),
    }));
    setHeadings(tocData);

    // Inject IDs into the actual rendered content (This is a bit hacky for dangerouslySetInnerHTML but works for navigation)
    // Note: Ideally, IDs should be added during content saving, but for now we rely on TOC click just scrolling to approx position if IDs aren't there.

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [blog.content]);

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  // Function to scroll to heading (Simple version)
  const scrollToHeading = (text: string) => {
    const elements = Array.from(document.querySelectorAll("h2, h3"));
    const target = elements.find((el) => el.textContent === text);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#004080] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section - Modern Design */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden bg-[#001529]">
         {/* Background Image with Overlay */}
         <div className="absolute inset-0 z-0 opacity-30">
            <Image
              src={getValidImageUrl(blog.featured_image)}
              alt={blog.title}
              fill
              className="object-cover blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#001529] via-transparent to-[#001529]" />
         </div>
         
         <div className="container-custom relative z-10 max-w-4xl mx-auto text-center">
            <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors text-sm font-medium mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
            </Link>

            {blog.category && (
                <span className="block mx-auto w-fit px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-semibold rounded-full mb-6 backdrop-blur-md">
                  {blog.category}
                </span>
            )}

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-gray-300 text-sm md:text-base">
               <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                    {(blog.author || "A").charAt(0).toUpperCase()}
                  </div>
                  <span className="font-medium text-white">{blog.author || "Admin"}</span>
               </div>
               <span className="w-1 h-1 bg-gray-500 rounded-full" />
               <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(blog.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
               </div>
               <span className="w-1 h-1 bg-gray-500 rounded-full" />
               <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {readTime} min read
               </div>
            </div>
         </div>
      </section>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Sidebar - Share (Desktop) */}
            <div className="hidden lg:block lg:col-span-1">
               <div className="sticky top-32 flex flex-col gap-4">
                  <button onClick={() => setLiked(!liked)} className={`p-3 rounded-full border transition-all ${liked ? 'bg-red-50 border-red-200 text-red-500' : 'border-gray-200 text-gray-400 hover:text-gray-600'}`}>
                     <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                  </button>
                  <button onClick={copyLink} className="p-3 rounded-full border border-gray-200 text-gray-400 hover:text-[#004080] hover:border-[#004080] transition-all">
                     {copied ? <Check className="w-5 h-5 text-green-600" /> : <Link2 className="w-5 h-5" />}
                  </button>
                  <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`} target="_blank" className="p-3 rounded-full border border-gray-200 text-gray-400 hover:text-sky-500 hover:border-sky-500 transition-all">
                     <Twitter className="w-5 h-5" />
                  </a>
                  <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}`} target="_blank" className="p-3 rounded-full border border-gray-200 text-gray-400 hover:text-blue-700 hover:border-blue-700 transition-all">
                     <Linkedin className="w-5 h-5" />
                  </a>
               </div>
            </div>

            {/* Center - Article Content */}
            <div className="lg:col-span-8">
               {/* Main Featured Image */}
               <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl mb-12">
                  <Image
                    src={getValidImageUrl(blog.featured_image)}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    priority
                  />
               </div>

               <article className="max-w-none">
                  {/* Excerpt */}
                  {blog.excerpt && (
                    <div className="bg-blue-50 border-l-4 border-[#004080] p-6 md:p-8 rounded-r-xl mb-10">
                      <p className="text-lg md:text-xl text-[#004080] font-medium italic leading-relaxed">
                        "{blog.excerpt}"
                      </p>
                    </div>
                  )}

                  {/* RICH TEXT CONTENT */}
                  {/* Is class me saare "ache nhi dikh raha" wale issues fix kiye hain */}
                  <div
                    className="
                      prose prose-lg md:prose-xl 
                      prose-headings:font-bold prose-headings:text-gray-900 prose-headings:leading-tight
                      prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:pb-2 prose-h2:border-gray-100
                      prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                      prose-p:text-gray-600 prose-p:leading-loose prose-p:mb-6
                      prose-a:text-[#004080] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline hover:prose-a:text-blue-700
                      prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:pr-4 prose-blockquote:rounded-r-lg
                      prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
                      prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
                      prose-li:text-gray-600 prose-li:marker:text-[#004080]
                      prose-img:rounded-2xl prose-img:shadow-lg prose-img:w-full prose-img:my-8 prose-img:object-cover
                      prose-code:bg-gray-100 prose-code:text-red-500 prose-code:px-2 prose-code:py-0.5 prose-code:rounded-md prose-code:font-mono prose-code:text-sm
                      prose-pre:bg-[#1e1e1e] prose-pre:text-gray-200 prose-pre:shadow-xl prose-pre:rounded-xl
                      max-w-full
                    "
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
               </article>

               {/* Tags */}
               {blog.tags && blog.tags.length > 0 && (
                 <div className="mt-12 pt-8 border-t border-gray-100">
                   <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Filed Under</h4>
                   <div className="flex flex-wrap gap-2">
                     {blog.tags.map((tag) => (
                       <Link 
                        key={tag} 
                        href={`/blog?search=${tag}`}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-[#004080] hover:text-white transition-all"
                       >
                         #{tag}
                       </Link>
                     ))}
                   </div>
                 </div>
               )}

               {/* Author Bio Box */}
               <div className="mt-12 bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                  <div className="w-20 h-20 bg-[#004080] rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg shrink-0">
                    {(blog.author || "A").charAt(0).toUpperCase()}
                  </div>
                  <div>
                     <h3 className="text-lg font-bold text-gray-900 mb-2">About {blog.author || "The Author"}</h3>
                     <p className="text-gray-600 leading-relaxed">
                        Expert content creator at SolTech360. Sharing actionable insights on digital marketing strategies, web development trends, and business growth hacks.
                     </p>
                  </div>
               </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-3">
               <div className="sticky top-32 space-y-8">
                  
                  {/* Table of Contents (Only if headings exist) */}
                  {headings.length > 0 && (
                    <div className="hidden lg:block bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                       <div className="flex items-center gap-2 mb-4 text-[#004080]">
                          <List className="w-5 h-5" />
                          <h3 className="font-bold text-sm uppercase tracking-wide">Table of Contents</h3>
                       </div>
                       <nav className="space-y-1">
                          {headings.map((heading) => (
                             <button
                                key={heading.id}
                                onClick={() => scrollToHeading(heading.text)}
                                className={`block w-full text-left py-1.5 text-sm transition-colors ${heading.level === 3 ? 'pl-4 text-gray-500' : 'text-gray-700 font-medium'} hover:text-[#004080] line-clamp-1`}
                             >
                                {heading.text}
                             </button>
                          ))}
                       </nav>
                    </div>
                  )}

                  {/* Related Articles */}
                  {relatedBlogs.length > 0 && (
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                       <h3 className="font-bold text-gray-900 mb-4">Related Articles</h3>
                       <div className="space-y-5">
                          {relatedBlogs.map((related) => (
                             <Link key={related.id} href={`/blog/${related.slug}`} className="group block">
                                <div className="flex gap-3">
                                   <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                                      <Image
                                         src={getValidImageUrl(related.featured_image)}
                                         alt={related.title}
                                         width={80}
                                         height={80}
                                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                      />
                                   </div>
                                   <div className="flex-1 min-w-0">
                                      <h4 className="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-[#004080] mb-1 transition-colors">
                                         {related.title}
                                      </h4>
                                      <p className="text-xs text-gray-500">
                                         {new Date(related.created_at).toLocaleDateString("en-IN", { month: "short", day: "numeric" })}
                                      </p>
                                   </div>
                                </div>
                             </Link>
                          ))}
                       </div>
                    </div>
                  )}

                  {/* CTA Widget */}
                  <div className="bg-[#004080] p-6 rounded-2xl text-center text-white shadow-xl relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
                     
                     <Sparkles className="w-8 h-8 mx-auto mb-4 text-yellow-400" />
                     <h3 className="font-bold text-lg mb-2">Grow Your Business</h3>
                     <p className="text-white/80 text-sm mb-6">Get a free digital strategy consultation today.</p>
                     <Link
                        href="/request-quote"
                        className="block w-full py-3 bg-white text-[#004080] font-bold rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all"
                     >
                        Get Free Quote
                     </Link>
                  </div>
               </div>
            </div>

         </div>
      </div>

      {/* Mobile Bottom Bar Actions */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40 flex justify-around items-center md:hidden">
          <button onClick={() => setLiked(!liked)} className="flex flex-col items-center gap-1 text-gray-600">
             <Heart className={`w-5 h-5 ${liked ? 'fill-red-500 text-red-500' : ''}`} />
             <span className="text-[10px]">Like</span>
          </button>
          <button onClick={copyLink} className="flex flex-col items-center gap-1 text-gray-600">
             <Share2 className="w-5 h-5" />
             <span className="text-[10px]">Share</span>
          </button>
          <Link href="/request-quote" className="px-6 py-2 bg-[#004080] text-white text-sm font-bold rounded-full">
             Get Quote
          </Link>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-20 lg:bottom-8 right-8 p-3 bg-[#004080] text-white rounded-full shadow-lg hover:bg-[#003366] transition-all z-50"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </main>
  );
}