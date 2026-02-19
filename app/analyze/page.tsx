"use client";

import AnalyzeForm from "@/component/AnalyzeForm";


export default function Page() {
  return (
    <div className="min-h-screen bg-[#f4f6f8]">

      {/* Header */}
      <div className="bg-[#071a2f] pt-16 pb-14 px-6 relative overflow-hidden">

        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(#4db8ff_1px,transparent_1px),linear-gradient(90deg,#4db8ff_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="mx-auto relative">

          <button
            
            className="text-white/60 hover:text-white text-sm mb-4"
          >
            ← Back to Home
          </button>

          <h1 className="text-white text-3xl font-bold">
            Analyze Patient Risk
          </h1>

          <p className="text-white/60 text-sm mt-2">
            Upload genomic data and select drugs to generate a pharmacogenomic risk report.
          </p>

        </div>

      </div>

      <AnalyzeForm />

    </div>
  );
}