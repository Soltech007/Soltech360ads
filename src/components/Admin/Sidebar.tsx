"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  LogOut,
  Globe
} from "lucide-react";
import { useAuth } from "@/lib/auth/AuthContext";

const menuItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "All Blogs", href: "/admin/blogs", icon: FileText },
  { name: "Add New Blog", href: "/admin/blogs/new", icon: PlusCircle },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { signOut, user } = useAuth();

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-[#004080] text-white flex flex-col shadow-xl z-50">
      {/* Logo Area */}
      <div className="p-6 border-b border-white/10">
        <h2 className="text-2xl font-bold tracking-tight">Admin Panel</h2>
        <p className="text-xs text-white/60 mt-1">Manage your content</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-white text-[#004080] font-semibold shadow-md"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-white/10 bg-[#003366]">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-3 px-4 py-2 text-sm text-white/70 hover:text-white transition-colors mb-2"
        >
          <Globe className="w-4 h-4" />
          View Website
        </Link>
        
        <div className="flex items-center justify-between pt-2 border-t border-white/10 mt-2">
           <div className="truncate text-xs text-white/60 max-w-[120px]">
             {user?.email}
           </div>
           <button
            onClick={signOut}
            className="p-2 hover:bg-red-500/20 rounded-full text-red-200 hover:text-red-100 transition-colors"
            title="Logout"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}