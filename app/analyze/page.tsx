"use client";
import AnalyzeForm from "@/component/AnalyzeForm";
import { useRouter } from "next/navigation"

export default function AnalyzePage() {
    const router=useRouter();
    return (
        <div className="relative w-full min-h-screen bg-[#061a2b] overflow-x-hidden">
        <div className="absolute inset-0 flex justify-center" style={{
            backgroundImage: `
            linear-gradient(rgba(0,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.08) 2px, transparent 1px)
          `, backgroundSize: "60px 60px",
                }}>
            <div className="w-full max-w-7xl flex flex-col px-4 py-4 gap-12">
                <div className="flex flex-col text-start gap-4">
                    <p onClick={()=>router.push("/")} className="text-2xl cursor-pointer ">⬅️</p>
                    <h1 className="text-3xl text-white font-semibold tracking-widest">Analyze Patient Risk</h1>
                    <p className="text-xl text-slate-400 tracking-wide font-semibold">Upload genomic data and select drugs to generate a pharmacogenomic risk report.</p>
                </div>
                <div className="flex items-center justify-center">
                  <AnalyzeForm/>
                </div>
                 
            </div>
        </div>
        </div>
    )
}