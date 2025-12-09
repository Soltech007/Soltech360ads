"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  User,
  Search,
  Tag,
  Sparkles,
  Clock,
  TrendingUp,
  BookOpen,
  Heart,
  Share2,
  ChevronRight,
  Mail,
  ArrowUpRight,
  Eye,
  MessageCircle,
  Filter,
  X,
  Bookmark,
} from "lucide-react";
import { Blog } from "@/app/types/blog";
import CTASection from "../home/CTASection";

const categories = [
  { name: "All", icon: "🌐", color: "from-gray-500 to-gray-600" },
  { name: "Digital Marketing", icon: "📈", color: "from-blue-500 to-blue-600" },
  { name: "Web Development", icon: "💻", color: "from-purple-500 to-purple-600" },
  { name: "SEO", icon: "🔍", color: "from-green-500 to-green-600" },
  { name: "Social Media", icon: "📱", color: "from-pink-500 to-pink-600" },
  { name: "Content Marketing", icon: "✍️", color: "from-orange-500 to-orange-600" },
];

const trendingTags = [
  "React", "Next.js", "SEO Tips", "Marketing 2024", "AI Tools", 
  "Branding", "E-commerce", "Analytics", "Growth Hacking"
];

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80";

// Reading time calculator
const calculateReadTime = (content: string | null | undefined) => {
  if (!content) return 3;
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute) || 3;
};

// Skeleton Loading Component
const BlogSkeleton = () => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
    <div className="h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer" />
    <div className="p-6 space-y-4">
      <div className="h-4 bg-gray-200 rounded-full w-1/4" />
      <div className="h-6 bg-gray-200 rounded-lg w-3/4" />
      <div className="h-4 bg-gray-200 rounded-lg w-full" />
      <div className="h-4 bg-gray-200 rounded-lg w-2/3" />
      <div className="flex justify-between pt-4">
        <div className="h-4 bg-gray-200 rounded-full w-1/4" />
        <div className="h-4 bg-gray-200 rounded-full w-1/4" />
      </div>
    </div>
  </div>
);

// Featured Skeleton
const FeaturedSkeleton = () => (
  <div className="bg-white rounded-3xl overflow-hidden shadow-xl animate-pulse">
    <div className="grid lg:grid-cols-2">
      <div className="h-64 lg:h-[400px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer" />
      <div className="p-8 lg:p-12 space-y-6">
        <div className="h-6 bg-gray-200 rounded-full w-1/4" />
        <div className="h-8 bg-gray-200 rounded-lg w-3/4" />
        <div className="h-4 bg-gray-200 rounded-lg w-full" />
        <div className="h-4 bg-gray-200 rounded-lg w-full" />
        <div className="h-4 bg-gray-200 rounded-lg w-2/3" />
        <div className="flex gap-4">
          <div className="h-4 bg-gray-200 rounded-full w-24" />
          <div className="h-4 bg-gray-200 rounded-full w-24" />
        </div>
      </div>
    </div>
  </div>
);

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [hoveredBlog, setHoveredBlog] = useState<string | null>(null);
  const [bookmarkedBlogs, setBookmarkedBlogs] = useState<string[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs?published=true");
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const getValidImageUrl = (url: string | null | undefined) => {
    if (!url) return FALLBACK_IMAGE;
    if (url.startsWith("http") || url.startsWith("/")) {
      return url;
    }
    return FALLBACK_IMAGE;
  };

  const toggleBookmark = (blogId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setBookmarkedBlogs(prev => 
      prev.includes(blogId) 
        ? prev.filter(id => id !== blogId)
        : [...prev, blogId]
    );
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredBlog = filteredBlogs[0];
  const otherBlogs = filteredBlogs.slice(1);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&q=80"
            alt="Blog Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#004080]/95 via-[#004080]/90 to-[#1a5490]/85" />
          
          {/* Animated Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-sm"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-semibold text-white">
                {blogs.length}+ Articles Published
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
            >
              Insights &{" "}
              <span className="relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Updates
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12">
                  <path
                    d="M0,8 Q50,0 100,8 T200,8"
                    fill="none"
                    stroke="rgba(253, 224, 71, 0.6)"
                    strokeWidth="4"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Discover expert tips, industry trends, and actionable strategies to grow your business.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-8 md:gap-16"
            >
              {[
                { icon: BookOpen, label: "Articles", value: `${blogs.length}+` },
                { icon: Eye, label: "Monthly Readers", value: "50K+" },
                { icon: MessageCircle, label: "Comments", value: "2K+" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <stat.icon className="w-5 h-5 text-yellow-300" />
                    <span className="text-3xl font-bold text-white">{stat.value}</span>
                  </div>
                  <span className="text-sm text-white/60">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-3 bg-white/80 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-6 -mt-12 relative z-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-6 md:p-8 border border-gray-100"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 relative w-full">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles, topics, or keywords..."
                  className="w-full pl-14 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#004080] focus:border-transparent focus:bg-white outline-none transition-all text-lg"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-500" />
                  </button>
                )}
              </div>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-xl font-medium"
              >
                <Filter className="w-5 h-5" />
                Filters
              </button>

              {/* Categories - Desktop */}
              <div className="hidden lg:flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`group flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                      selectedCategory === category.name
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105"
                    }`}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span className="text-sm whitespace-nowrap">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="lg:hidden overflow-hidden"
                >
                  <div className="pt-6 flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.name}
                        onClick={() => {
                          setSelectedCategory(category.name);
                          setShowFilters(false);
                        }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                          selectedCategory === category.name
                            ? `bg-gradient-to-r ${category.color} text-white`
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <span>{category.icon}</span>
                        <span className="text-sm">{category.name}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Results Count */}
            {!loading && (
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <p className="text-gray-600">
                  Showing <span className="font-bold text-gray-900">{filteredBlogs.length}</span> articles
                  {selectedCategory !== "All" && (
                    <span> in <span className="font-semibold text-[#004080]">{selectedCategory}</span></span>
                  )}
                </p>
                {selectedCategory !== "All" && (
                  <button
                    onClick={() => setSelectedCategory("All")}
                    className="text-sm text-[#004080] hover:underline font-medium"
                  >
                    Clear filter
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Trending Tags */}
      <section className="py-8">
        <div className="container-custom">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex items-center gap-2 text-gray-600 whitespace-nowrap">
              <TrendingUp className="w-5 h-5 text-[#004080]" />
              <span className="font-semibold">Trending:</span>
            </div>
            {trendingTags.map((tag, index) => (
              <motion.button
                key={tag}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSearchQuery(tag)}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:border-[#004080] hover:text-[#004080] transition-colors whitespace-nowrap shadow-sm hover:shadow-md"
              >
                #{tag}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12">
        <div className="container-custom">
          {loading ? (
            <div className="space-y-16">
              <FeaturedSkeleton />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <BlogSkeleton key={i} />
                ))}
              </div>
            </div>
          ) : filteredBlogs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No articles found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter to find what you're looking for</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="px-6 py-3 bg-[#004080] text-white rounded-xl font-semibold hover:bg-[#003060] transition-colors"
              >
                Clear all filters
              </button>
            </motion.div>
          ) : (
            <>
              {/* Featured Blog */}
              {featuredBlog && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-16"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Sparkles className="w-6 h-6 text-yellow-500" />
                    <h2 className="text-2xl font-bold text-gray-900">Featured Article</h2>
                  </div>
                  
                  <Link href={`/blog/${featuredBlog.slug}`}>
                    <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border border-gray-100">
                      <div className="grid lg:grid-cols-2 gap-0">
                        {/* Featured Image */}
                        <div className="relative h-72 lg:h-[450px] overflow-hidden">
                          <Image
                            src={getValidImageUrl(featuredBlog.featured_image)}
                            alt={featuredBlog.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                              e.currentTarget.src = FALLBACK_IMAGE;
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                          
                          {/* Badges */}
                          <div className="absolute top-4 left-4 flex gap-2">
                            <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-sm font-bold rounded-full shadow-lg">
                              ⭐ Featured
                            </span>
                          </div>
                          
                          {/* Bookmark */}
                          <button
                            onClick={(e) => toggleBookmark(featuredBlog.id.toString(), e)}
                            className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
                          >
                            <Bookmark
                              className={`w-5 h-5 transition-colors ${
                                bookmarkedBlogs.includes(featuredBlog.id.toString())
                                  ? "fill-[#004080] text-[#004080]"
                                  : "text-gray-600"
                              }`}
                            />
                          </button>
                        </div>

                        {/* Content */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                          {featuredBlog.category && (
                            <span className="inline-flex items-center gap-2 text-[#004080] font-semibold text-sm mb-4 bg-blue-50 px-4 py-2 rounded-full w-fit">
                              <Tag className="w-4 h-4" />
                              {featuredBlog.category}
                            </span>
                          )}

                          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4 group-hover:text-[#004080] transition-colors leading-tight">
                            {featuredBlog.title}
                          </h2>

                          <p className="text-gray-600 mb-6 line-clamp-3 text-lg leading-relaxed">
                            {featuredBlog.excerpt}
                          </p>

                          {/* Author & Meta */}
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#004080] to-[#0060a0] rounded-full flex items-center justify-center text-white font-bold text-lg">
                              {(featuredBlog.author || "A").charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">{featuredBlog.author || "Admin"}</p>
                              <div className="flex items-center gap-3 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {new Date(featuredBlog.created_at).toLocaleDateString("en-IN", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                  })}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {calculateReadTime(featuredBlog.content)} min read
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* CTA */}
                          <div className="flex items-center gap-4">
                            <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#004080] text-white font-semibold rounded-xl group-hover:bg-[#003060] transition-all">
                              Read Full Article
                              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <button
                              onClick={(e) => e.preventDefault()}
                              className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                            >
                              <Share2 className="w-5 h-5 text-gray-600" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}

              {/* Section Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
                <div className="flex items-center gap-2 text-[#004080] font-medium">
                  <span>View all</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Blog Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherBlogs.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredBlog(blog.id.toString())}
                    onMouseLeave={() => setHoveredBlog(null)}
                  >
                    <Link href={`/blog/${blog.slug}`}>
                      <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group h-full flex flex-col border border-gray-100 hover:border-[#004080]/20">
                        {/* Image Container */}
                        <div className="relative h-52 overflow-hidden">
                          <Image
                            src={getValidImageUrl(blog.featured_image)}
                            alt={blog.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                            onError={(e) => {
                              e.currentTarget.src = FALLBACK_IMAGE;
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          
                          {/* Category Badge */}
                          {blog.category && (
                            <div className="absolute top-4 left-4">
                              <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-[#004080] text-xs font-bold rounded-full shadow-md">
                                {blog.category}
                              </span>
                            </div>
                          )}
                          
                          {/* Actions */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ 
                              opacity: hoveredBlog === blog.id.toString() ? 1 : 0,
                              y: hoveredBlog === blog.id.toString() ? 0 : 10
                            }}
                            className="absolute top-4 right-4 flex gap-2"
                          >
                            <button
                              onClick={(e) => toggleBookmark(blog.id.toString(), e)}
                              className="p-2 bg-white/95 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors"
                            >
                              <Bookmark
                                className={`w-4 h-4 ${
                                  bookmarkedBlogs.includes(blog.id.toString())
                                    ? "fill-[#004080] text-[#004080]"
                                    : "text-gray-600"
                                }`}
                              />
                            </button>
                            <button
                              onClick={(e) => e.preventDefault()}
                              className="p-2 bg-white/95 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors"
                            >
                              <Share2 className="w-4 h-4 text-gray-600" />
                            </button>
                          </motion.div>

                          {/* Read Time */}
                          <div className="absolute bottom-4 left-4 flex items-center gap-2">
                            <span className="px-3 py-1.5 bg-black/60 backdrop-blur-sm text-white text-xs font-medium rounded-full flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {calculateReadTime(blog.content)} min
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#004080] transition-colors line-clamp-2 leading-tight">
                            {blog.title}
                          </h3>

                          <p className="text-gray-600 mb-4 line-clamp-2 flex-1 leading-relaxed">
                            {blog.excerpt}
                          </p>

                          {/* Author & Date */}
                          <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                            <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center text-gray-600 font-semibold text-sm">
                              {(blog.author || "A").charAt(0).toUpperCase()}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900">{blog.author || "Admin"}</p>
                              <p className="text-xs text-gray-500">
                                {new Date(blog.created_at).toLocaleDateString("en-IN", {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                            <ArrowUpRight className="w-5 h-5 text-[#004080] opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      </article>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Load More */}
              {otherBlogs.length >= 6 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-center mt-12"
                >
                  <button className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-all hover:shadow-lg inline-flex items-center gap-2">
                    Load More Articles
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </motion.div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#004080] via-[#0050a0] to-[#0060c0] p-8 md:p-16"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                <Mail className="w-5 h-5 text-white" />
                <span className="text-sm font-medium text-white">Newsletter</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Stay Updated with Our Latest Insights
              </h2>

              <p className="text-lg text-white/80 mb-8">
                Join 10,000+ subscribers and get exclusive tips, strategies, and resources delivered to your inbox weekly.
              </p>

              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-sm"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-[#004080] font-bold rounded-xl hover:shadow-xl transition-all"
                >
                  {subscribed ? "✓ Subscribed!" : "Subscribe"}
                </motion.button>
              </form>

              <p className="text-sm text-white/60 mt-4">
                No spam, unsubscribe anytime. Read our privacy policy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
    <CTASection />

      {/* Add shimmer animation to globals.css */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 1.5s ease-in-out infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}