"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserCircle } from "lucide-react";

const EXCLUDED_ROUTES = ["/", "/login", "/register", "/onboarding"];

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const showProfile = mounted && !EXCLUDED_ROUTES.includes(pathname);

  return (
    <header className="bg-black border-b border-gray-800">
      <div className=" mt-5 mb- max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-300 rounded flex items-center justify-center font-bold text-black">
            B
          </div>
          <div>
            <p className="text-white font-Inter font-extrabold text-[14px] leading-none">BUSINESS NUGGETS</p>
            <p className="text-[#C8A35A] font-400 font-EB_Garamond italic text-[11px] tracking-wide">from the Bible</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-gray-300 text-sm">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/library" className="hover:text-white">Library</Link>
          <Link href="/search" className="hover:text-white">Search</Link>
        </nav>

        <div className="flex items-center gap-4 text-sm">
          {showProfile ? (
            <button className="flex items-center gap-2 text-gray-200 hover:text-amber-300 transition">
              <UserCircle className="w-8 h-8" />
            </button>
          ) : (
            <>
              <Link href="/login" className="text-gray-300 hover:text-white">Login</Link>
              <Link
                href="/register"
                className="bg-amber-300 text-black font-medium px-4 py-2 rounded-xs hover:bg-amber-400 transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}