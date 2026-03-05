"use client";
import { useRouter } from "next/navigation";
import {motion} from "motion/react"

export default function Hero() {
    const router = useRouter();
    return (
        <div id="home" className="relative w-full min-h-screen bg-[#061a2b] overflow-hidden">
            <div className="relative w-full min-h-screen inset-0 bg-linear-to-r from-[#061a2b] via-[#082338] to-[#0b2f4a]">
                <div className="relative w-full min-h-screen inset-0 " style={{
                    backgroundImage: `
              linear-gradient(rgba(0,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.08) 1px, transparent 1px)
          `, backgroundSize: "60px 60px",
                }}>
                    <div className=" max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
                        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="py-5  ">
                            <div className="inline-flex items-center gap-2 bg-[rgba(0,201,177,0.1)] border border-[rgba(0,201,177,0.25)] rounded-full px-4 py-1.5 mb-6 ">
                                <span className="w-2 h-2 rounded-full bg-[#00c9b1] animate-pulse-dot"></span>
                                <span className="text-[#00c9b1] text-xs font-semibold tracking-widest uppercase">AI-POWERED PRECISION MEDICINE</span>
                            </div>

                            <h1 className="text-white relative text-5xl md:text-7xl font-bold leading-tight mb-6">Predict Drug <br /> Risk From{" "}
                                <svg
                                    className="absolute md:bottom-18 left-0 w-full animate-bounce "
                                    viewBox="0 0 400 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2 10C50 5 150 2 200 8C250 14 350 18 398 12"
                                        stroke="#2563eb"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <span className="bg-linear-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Genetic Code</span>
                            </h1>

                            <p className="text-gray-400 text-xl font-semibold">PharmaGuard analyzes patient VCF genomic data to predict pharmacogenomic risk — identifying dangerous drug interactions before they happen, powered by AI.</p>

                            <div className="flex items-center gap-4 mt-8">

                                <button onClick={() => router.push("/analyze")} className="inline-flex bg-linear-to-br from-[#00c9b1] to-[#00b5a0] text-[#061a2b]font-bold text-[16px] px-8 py-3.5 rounded-xl cursor-pointer transition-all duration-200 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(0,201,177,0.35)] active:translate-y-0 tracking-wider"> ✓ Analyze Patient</button>
                                <button className="border border-gray-500 text-gray-300 px-8 py-3 rounded-xl font-semibold hover:border-white/5 -tracking-tighter cursor-pointer">▶ Watch Demo</button>
                            </div>

                            <span className="bg-gray-700 w-full h-px mt-12 mb-12 block"></span>
                            <div className="flex items-center gap-12 ">
                                <div className="flex flex-col items-start gap-1">
                                    <span className="text-4xl text-white font-semibold">250+</span>
                                    <span className="text-sm text-gray-400">Drug-Gene Interaction</span>
                                </div>
                                <div className="flex flex-col items-start gap-1">
                                    <span className="text-4xl text-teal-300 font-semibold">98%</span>
                                    <span className="text-sm text-gray-400">Prediction Accuracy</span>
                                </div>
                                <div className="flex flex-col items-start gap-1">
                                    <span className="text-4xl text-teal-300 font-semibold">6s</span>
                                    <span className="text-sm text-gray-400">Avg. Analysis Time</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* right side */}

                        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="flex items-center justify-center">
                            <div className="w-full max-w-md bg-linear-to-b from-[#0c2438] to-[#081a2b] border border-white/10 rounded-2xl p-6 shadow-xl">
                                <div className="inline-flex items-center gap-2 bg-[rgba(0,201,177,0.1)] border border-[rgba(0,201,177,0.25)] rounded-full px-4 py-1.5 mb-4 ">
                                    <span className="w-2 h-2 rounded-full bg-[#00c9b1] animate-pulse-dot" ></span>
                                    <span className="text-[#00c9b1] text-xs font-semibold tracking-widest uppercase"> LIVE GENOMIC SCAN</span>
                                </div>

                                <div className="bg-black rounded-2xl p-4 text-gray-400 text-sm mb-4">
                                    chr10:96521657 C → T CYP2C19*2<br />
                                    chr22:42522613 G → A CYP2D6*4<br />
                                    chr7:117548628 A → G DPYD*2A<br />
                                    chr11:67352689 T → C TPMT*3A

                                </div>

                                <div className="space-y-3">

                                    <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                                        <span className="text-gray-300">WARFARIN</span>
                                        <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs">
                                            Adjust Dose
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                                        <span className="text-gray-300">CLOPIDOGREL</span>
                                        <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs">
                                            Ineffective
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                                        <span className="text-gray-300">SIMVASTATIN</span>
                                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">
                                            Safe
                                        </span>
                                    </div>

                                </div>


                            </div>

                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}