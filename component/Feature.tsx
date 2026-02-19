"use client";

import { Dna, Pill, FileText, Bot } from "lucide-react";

const features = [
  {
    icon: Dna,
    title: "Genetic Variant Analysis",
    desc: "Parse and interpret VCF files to detect clinically relevant SNPs and variants across key pharmacogenes including CYP2D6, CYP2C19, DPYD, TPMT, and more.",
  },
  {
    icon: Pill,
    title: "Drug Risk Prediction",
    desc: "Cross-reference patient genotype with curated drug-gene interaction databases to classify risk as Safe, Adjust Dosage, Toxic, or Ineffective.",
  },
  {
    icon: FileText,
    title: "Clinical Recommendations",
    desc: "Generate evidence-based dosing guidance and therapeutic alternatives aligned with CPIC and PharmGKB Level A guidelines.",
  },
  {
    icon: Bot,
    title: "AI-Powered Explanation",
    desc: "Large language model narrates the biological mechanism behind each prediction in clinician-friendly language.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-cyan-500 font-semibold mb-2">
            CORE CAPABILITIES
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Precision at Every Step
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto">
            From raw genomic data to actionable clinical guidance —
            powered by state-of-the-art pharmacogenomics.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                group
                relative
                bg-white
                rounded-2xl
                p-8
                border border-slate-200
                transition-all duration-300
                hover:border-cyan-200
                hover:shadow-lg hover:shadow-cyan-100/50
                overflow-hidden
                "
              >

                {/* Top cyan border */}
                <div
                  className="
                  absolute
                  top-0 left-0
                  w-full h-[3px]
                  bg-transparent
                  group-hover:bg-gradient-to-r
                  group-hover:from-cyan-400
                  group-hover:to-blue-400
                  transition-all duration-300
                  "
                />

                {/* Icon */}
                <div className="
                  w-12 h-12
                  rounded-xl
                  bg-slate-100
                  flex items-center justify-center
                  mb-6
                  transition-all duration-300
                  group-hover:bg-cyan-100
                ">
                  <Icon className="w-6 h-6 text-slate-700 group-hover:text-cyan-600" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}