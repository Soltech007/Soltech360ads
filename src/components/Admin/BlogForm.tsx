"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import slugify from "slugify";
import { Save, Image as ImageIcon, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";

// Import Quill dynamically
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

// Types define karo
interface BlogFormData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  category: string;
  is_published: boolean;
}

export default function BlogForm({ blog, isEditing = false }: { blog?: any, isEditing?: boolean }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState<BlogFormData>({
    title: blog?.title || "",
    slug: blog?.slug || "",
    excerpt: blog?.excerpt || "",
    content: blog?.content || "",
    featured_image: blog?.featured_image || "",
    category: blog?.category || "Digital Marketing",
    is_published: blog?.is_published || false,
  });

  // Auto-generate slug
  useEffect(() => {
    if (!isEditing && formData.title) {
      setFormData(prev => ({
        ...prev,
        slug: slugify(formData.title, { lower: true, strict: true })
      }));
    }
  }, [formData.title, isEditing]);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = isEditing ? `/api/blogs/${blog.id}` : "/api/blogs";
      const method = isEditing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");
      router.push("/admin/blogs");
      router.refresh();
    } catch (error) {
      alert("Error saving blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto pb-20">
      <div className="flex items-center justify-between mb-6">
         <Link href="/admin/blogs" className="flex items-center text-gray-500 hover:text-gray-900">
           <ArrowLeft className="w-4 h-4 mr-1" /> Back
         </Link>
         <h1 className="text-2xl font-bold text-gray-900">
           {isEditing ? "Edit Blog" : "Create New Blog"}
         </h1>
      </div>

      <div className="space-y-6 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter blog title"
            required
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL)</label>
          <input
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-gray-50 text-gray-600"
            required
          />
        </div>

        {/* Image URL Field with Preview */}
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
          <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image URL</label>
          <div className="flex gap-4">
            <div className="flex-1">
               <input
                type="url"
                name="featured_image"
                value={formData.featured_image}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg mb-2"
                placeholder="https://example.com/image.jpg"
              />
              <p className="text-xs text-gray-500">Paste a direct link to an image (Unsplash, etc.)</p>
            </div>
            
            {/* Image Preview */}
            <div className="w-32 h-24 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center border border-gray-300 shrink-0">
              {formData.featured_image ? (
                <img 
                  src={formData.featured_image} 
                  alt="Preview" 
                  className="w-full h-full object-cover"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              ) : (
                <ImageIcon className="w-8 h-8 text-gray-400" />
              )}
            </div>
          </div>
        </div>

        {/* Category & Excerpt */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
             <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            >
              <option>Digital Marketing</option>
              <option>Web Development</option>
              <option>SEO</option>
              <option>Social Media</option>
            </select>
          </div>
          <div>
             <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
             <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              rows={3}
              className="w-full p-3 border rounded-lg"
            />
          </div>
        </div>

        {/* Content Editor */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
          <div className="h-96 mb-12">
             <ReactQuill
              theme="snow"
              value={formData.content}
              onChange={(content) => setFormData(prev => ({ ...prev, content }))}
              className="h-full"
            />
          </div>
        </div>

        {/* Publish Checkbox */}
        <div className="flex items-center gap-2 pt-4">
          <input
            type="checkbox"
            id="publish"
            name="is_published"
            checked={formData.is_published}
            onChange={handleChange}
            className="w-5 h-5 text-blue-600 rounded"
          />
          <label htmlFor="publish" className="text-gray-700 font-medium">Publish Immediately</label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-[#004080] text-white font-bold rounded-lg hover:bg-[#003366] transition-colors flex items-center justify-center gap-2"
        >
          {loading ? <Loader2 className="animate-spin" /> : <Save />}
          {isEditing ? "Update Blog" : "Create Blog"}
        </button>

      </div>
    </form>
  );
}