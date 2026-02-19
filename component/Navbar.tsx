"use client";

import { Dna } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#061a2b] to-[#0b2a44] bg-white/80 backdrop-blur-md border-b border-b-gray-600">
      <div className="max-w-7xl mx-auto py-3 flex items-center justify-between">
        
        <div className="flex items-center gap-3">
           <Dna className="text-cyan-300 w-14 h-14"/>

          <div>
            <h1 className="text-white font-semibold text-2xl leading-tight">
              PharmaGuard
            </h1>
            <p className="text-cyan-400 text-xs tracking-wider">
              PHARMACOGENOMICS
            </p>
          </div>
        </div>

        <div className="flex items-center gap-10">
        <nav className="hidden md:flex items-center gap-10">
          <Link
            href="#home"
            className="text-gray-300 hover:text-white transition"
          >
            Home
          </Link>

          <Link
            href="#features"
            className="text-gray-300 hover:text-white transition"
          >
            Features
          </Link>
          <Link
            href="#workflow"
            className="text-gray-300 hover:text-white transition"
          >
            Workflow
          </Link>
        </nav>

        {/* Button */}
        <Link href="/analyze">
          <button className="bg-gradient-to-r from-cyan-400 to-teal-500 text-black font-medium px-5 py-2 rounded-lg hover:opacity-90 transition">
            Analyze Patient
          </button>
        </Link>
        </div>
      </div>
    </header>
  );
}