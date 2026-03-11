import React from "react";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isBlogs = location.pathname.startsWith("/blogs");

  return (
    <div className="min-h-screen w-full flex justify-center py-20 px-6 sm:px-12">
      <div className="w-full max-w-2xl">
        <nav className="flex items-center gap-6 mb-16 text-sm font-medium">
          <Link
            to="/"
            className={`transition-colors ${isHome ? "text-white" : "text-neutral-500 hover:text-neutral-300"}`}
          >
            Home
          </Link>
          <Link
            to="/blogs"
            className={`transition-colors ${isBlogs ? "text-white" : "text-neutral-500 hover:text-neutral-300"}`}
          >
            Blogs
          </Link>
        </nav>
        {children}
      </div>
    </div>
  );
};

export default Layout;
