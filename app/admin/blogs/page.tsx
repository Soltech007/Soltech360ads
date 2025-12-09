"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  PlusCircle,
  Search,
  Edit,
  Trash2,
  Eye,
  ExternalLink,
  MoreVertical,
  CheckCircle,
  Clock,
  Loader2,
} from "lucide-react";
import { Blog } from "@/app/types/blog";

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "published" | "draft">("all");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    setDeleteId(id);
    try {
      await fetch(`/api/blogs/${id}`, { method: "DELETE" });
      setBlogs((prev) => prev.filter((b) => b.id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    } finally {
      setDeleteId(null);
    }
  };

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      filter === "all" ||
      (filter === "published" && blog.is_published) ||
      (filter === "draft" && !blog.is_published);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">All Blogs</h1>
          <p className="text-gray-600 mt-1">Manage your blog posts</p>
        </div>
        <Link
          href="/admin/blogs/new"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#004080] text-white font-semibold rounded-xl hover:bg-[#003366] hover:shadow-lg transition-all"
        >
          <PlusCircle className="w-5 h-5" />
          <span>New Blog</span>
        </Link>
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-6"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search blogs..."
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#004080] focus:border-transparent outline-none"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2">
            {(["all", "published", "draft"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-3 rounded-xl font-medium transition-all ${
                  filter === f
                    ? "bg-[#004080] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Blog List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
      >
        {loading ? (
          <div className="p-12 text-center">
            <Loader2 className="w-8 h-8 text-[#004080] animate-spin mx-auto" />
            <p className="text-gray-500 mt-4">Loading blogs...</p>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-500">No blogs found</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">
                    Title
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600 hidden md:table-cell">
                    Category
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600 hidden lg:table-cell">
                    Status
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600 hidden lg:table-cell">
                    Views
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600 hidden sm:table-cell">
                    Date
                  </th>
                  <th className="text-right py-4 px-6 text-sm font-semibold text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredBlogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        {blog.featured_image && (
                          <img
                            src={blog.featured_image}
                            alt=""
                            className="w-12 h-12 rounded-lg object-cover hidden sm:block"
                          />
                        )}
                        <div>
                          <h3 className="font-medium text-gray-900 line-clamp-1">
                            {blog.title}
                          </h3>
                          <p className="text-sm text-gray-500 line-clamp-1 md:hidden">
                            {blog.category || "Uncategorized"}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 hidden md:table-cell">
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        {blog.category || "Uncategorized"}
                      </span>
                    </td>
                    <td className="py-4 px-6 hidden lg:table-cell">
                      {blog.is_published ? (
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                          <CheckCircle className="w-3 h-3" />
                          Published
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                          <Clock className="w-3 h-3" />
                          Draft
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6 hidden lg:table-cell">
                      <span className="flex items-center gap-1 text-gray-500">
                        <Eye className="w-4 h-4" />
                        {blog.views || 0}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 hidden sm:table-cell">
                      {new Date(blog.created_at).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/blog/${blog.slug}`}
                          target="_blank"
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          title="View"
                        >
                          <ExternalLink className="w-4 h-4 text-gray-500" />
                        </Link>
                        <Link
                          href={`/admin/blogs/edit/${blog.id}`}
                          className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4 text-blue-500" />
                        </Link>
                        <button
                          onClick={() => handleDelete(blog.id)}
                          disabled={deleteId === blog.id}
                          className="p-2 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                          title="Delete"
                        >
                          {deleteId === blog.id ? (
                            <Loader2 className="w-4 h-4 text-red-500 animate-spin" />
                          ) : (
                            <Trash2 className="w-4 h-4 text-red-500" />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>
    </div>
  );
}