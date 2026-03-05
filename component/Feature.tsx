"use client"
import { Bot, Dna, FileText, Pill } from "lucide-react";
import { motion } from "motion/react";
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

export default function Feature() {
  return (
    <div id="feature" className="w-full min-h-screen bg-[#061a2b]">
      <div className="w-full max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 flex flex-col items-center">
        <motion.div className="text-center mb-16" 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}>
          <p className="text-sm tracking-widest text-cyan-500 font-semibold mb-5">CORE CAPABILITIES</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Precision at Every Step</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">From raw genomic data to actionable clinical guidance — powered by state-of-the-art pharmacogenomics.</p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}>
          {features.map((feature, index) => (
            <div key={index} className="w-full max-w-xl bg-[#0b1e33] rounded-lg p-8 mb-4 flex flex-col items-start space-y-8 hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 hover:shadow-teal-600 hover:border-t-2 hover:border-cyan-500">
              <div className="w-12 h-12 flex justify-center items-center bg-[#0c2a4d] rounded-2xl">
                <feature.icon className="h-7 w-7 text-cyan-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-100">{feature.title}</h3>
                <p className="text-slate-500 text-sm mt-2">{feature.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}