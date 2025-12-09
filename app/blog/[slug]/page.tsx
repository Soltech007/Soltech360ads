// app/blog/[slug]/page.tsx
import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/server";
import { Blog } from "@/app/types/blog";
import BlogPostClient from "./BlogPostClient";

interface PageProps {
  params: { slug: string };
}

async function getBlog(slug: string): Promise<Blog | null> {
  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (error || !data) return null;

  await supabase
    .from("blogs")
    .update({ views: (data.views || 0) + 1 })
    .eq("id", data.id);

  return data;
}

async function getRelatedBlogs(category: string | null, currentId: string): Promise<Blog[]> {
  const supabase = createAdminClient();

  let query = supabase
    .from("blogs")
    .select("*")
    .eq("is_published", true)
    .neq("id", currentId)
    .limit(3);

  if (category) {
    query = query.eq("category", category);
  }

  const { data } = await query.order("created_at", { ascending: false });
  return data || [];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const blog = await getBlog(params.slug);

  if (!blog) {
    return { title: "Blog Not Found" };
  }

  return {
    title: `${blog.title} | SolTech360ads Blog`,
    description: blog.excerpt || "",
    openGraph: {
      title: blog.title,
      description: blog.excerpt || "",
      images: blog.featured_image ? [blog.featured_image] : [],
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = await getRelatedBlogs(blog.category, blog.id);

  return <BlogPostClient blog={blog} relatedBlogs={relatedBlogs} />;
}