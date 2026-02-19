"use client";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen overflow-hidden bg-[#061a2b] mt-8">

            <div className="absolute inset-0 bg-gradient-to-r from-[#061a2b] via-[#082338] to-[#0b2f4a]" />

            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(0,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.08) 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                }}
            />

        
            <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center">

            
                <div>

                    <div className="inline-flex items-center gap-2 bg-[rgba(0,201,177,0.1)] border border-[rgba(0,201,177,0.25)] rounded-full px-4 py-1.5 mb-6">

                        <span
                            className="w-2 h-2 rounded-full bg-[#00c9b1]"
                            style={{ animation: "pulse-dot 2s infinite" }}
                        />

                        <span className="text-[#00c9b1] text-xs font-semibold tracking-widest uppercase">
                            AI-POWERED PRECISION MEDICINE
                        </span>

                    </div>
                    {/* Heading */}
                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                        Predict Drug Risk From{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                            Genetic Code
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-gray-400 mt-6 max-w-xl text-lg">
                        PharmaGuard analyzes patient VCF genomic data to predict
                        pharmacogenomic risk — identifying dangerous drug interactions
                        before they happen, powered by AI.
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-8">

                        <button className="inline-flex items-center gap-2 cursor-pointer
                            bg-gradient-to-br from-[#00c9b1] to-[#00b5a0]
                            text-[#061a2b]
                            font-bold
                            text-[16px]
                            px-8 py-3.5
                            rounded-xl
                            transition-all duration-200
                            hover:-translate-y-[2px]
                            hover:shadow-[0_12px_32px_rgba(0,201,177,0.35)]
                            active:translate-y-0">
                            ✓ Analyze Patient
                        </button>

                        <button className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:bg-white/5 transition">
                            ▶ Watch Demo
                        </button>

                    </div>

                    {/* Stats */}
                    <div className="flex gap-12 mt-12 border-t border-white/10 pt-6">

                        <div>
                            <h3 className="text-3xl font-bold text-white">250+</h3>
                            <p className="text-gray-400 text-sm">
                                Drug–Gene Interactions
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-cyan-400">98%</h3>
                            <p className="text-gray-400 text-sm">
                                Prediction Accuracy
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-cyan-400">6s</h3>
                            <p className="text-gray-400 text-sm">
                                Avg. Analysis Time
                            </p>
                        </div>

                    </div>

                </div>


                <div className="flex justify-center">

                    <div className="w-full max-w-md bg-gradient-to-b from-[#0c2438] to-[#081a2b] border border-white/10 rounded-2xl p-6 shadow-xl">

                        <div className="text-cyan-400 text-sm mb-4">
                            ● LIVE GENOMIC SCAN
                        </div>

            
                        <div className="bg-black/40 rounded-lg p-4 text-sm text-gray-400 mb-4 font-mono">
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

                </div>

            </div>

        </section>
    );
}