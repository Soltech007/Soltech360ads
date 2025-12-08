"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Check if current page is admin
  const isAdminPage = pathname?.startsWith("/admin");

  // Admin pages - no navbar/footer
  if (isAdminPage) {
    return <>{children}</>;
  }

  // Normal pages - with navbar/footer
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}