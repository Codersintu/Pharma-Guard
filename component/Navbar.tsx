import { Dna } from "lucide-react";

export default function Navbar() {  
    return (
        <div className="w-full fixed top-3 z-50  flex items-center justify-center">
            <div className="w-full max-w-5xl flex items-center justify-between px-6 py-2 bg-linear-to-r from-[#061a2b]/95 via-[#082338]/95 to-[#0b2f4a] backdrop-blur-md border border-white/30 shadow-lg shadow-black/20 rounded-full">
                <div className="flex items-center space-x-2 cursor-pointer">
                    <Dna className="w-12 h-12 text-cyan-300"/>
                    <div className="flex flex-col justify-center">
                    <h1 className="font-bold text-2xl text-white tracking-wide">PharmaGuard</h1>
                    <p className="text-xs text-cyan-400">PHARMACOGENOMICS</p>
                    </div>
                </div>
                <div className=" flex items-center justify-center space-x-6 gap-8 cursor-pointer">
                    <a href="#home" className="text-gray-300 hover:text-gray-200 hidden md:flex">
                        Home
                    </a>
                    <a href="#feature" className="text-gray-300 hover:text-gray-200 hidden md:flex">
                        Features
                    </a>
                    <a href="#workflow" className="text-gray-300 hover:text-gray-200 hidden md:flex">
                        Workflow
                    </a>
                    <button className="px-6 py-2 bg-linear-to-r from-cyan-300 to-teal-400 rounded-xl text-black cursor-pointer font-medium hover:opacity-90">Login</button>
                </div>
            </div>
        </div>
    );
}