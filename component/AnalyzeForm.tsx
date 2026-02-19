"use client";
import clsx from "clsx";

import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "@/config";
import { Loader } from "lucide-react";


const drugs = [
    ["CODEINE", "Opioid Analgesic"],
    ["WARFARIN", "Anticoagulant"],
    ["CLOPIDOGREL", "Antiplatelet"],
    ["SIMVASTATIN", "Statin / Lipid lowering"],
    ["AZATHIOPRINE", "Immunosuppressant"],
    ["FLUOROURACIL", "Chemotherapy"],
];

export default function AnalyzeForm() {

    const { register, handleSubmit, setError, formState: { errors, isSubmitting }, watch } = useForm();

    const [file, setFile] = useState<File | null>(null);
    const [result, setResult] = useState<any>(null);

    const validateFile = (files: any) => {

        if (!files.length) return "VCF required";

        const f = files[0];

        if (!f.name.endsWith(".vcf"))
            return "Only VCF allowed";

        if (f.size > 5 * 1024 * 1024)
            return "Max 5MB";

        setFile(f);

        return true;
    };

    const submit = async (data: any) => {
    
        try {
            if (!file) {
                setError("vcf", { message: "VCF file required" });
                return;
            }

            const formData = new FormData();

            formData.append("vcfFile", file);
            formData.append("drugs", data.drug.join(","));

            const res = await axios.post(
                `${BACKEND_URL}/api/v1/analyze`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            setResult(res.data.result);
        } catch (error: any) {
            setError("root", {
                message: error.response?.data?.message || "An error occurred",
            })
        }

    };

    return (

        <div className="max-w-3xl mx-auto px-6 mt-8 pb-20 ">

            {!result && (
                <form onSubmit={handleSubmit(submit)} className="space-y-6">


                    {/* Upload card */}
                    <Card num="2" title="Genomic Data Upload"
                        desc="Upload VCF file containing genetic variants">

                        <label className="border-2 border-dashed border-gray-300 hover:border-cyan-400 rounded-xl p-10 flex flex-col items-center cursor-pointer bg-gray-50">

                            <input
                                type="file"
                                hidden
                                accept=".vcf"
                                {...register("vcf", { validate: validateFile })}
                            />

                            <div className="text-3xl mb-2">🧬</div>

                            <div className="font-medium">
                                Drag & drop your VCF file here
                            </div>

                            <div className="text-sm text-gray-500">
                                Supports .vcf · Max 5MB
                            </div>

                            <button type="submit"
                                className="mt-3 border border-cyan-500 text-cyan-600 px-4 py-1 rounded-lg text-sm">
                                Browse Files
                            </button>

                            {file && (
                                <div className="text-green-600 mt-2 text-sm">
                                    {file.name}
                                </div>
                            )}

                        </label>

                        <Error e={errors.vcf} />

                    </Card>

                    {/* Drug card */}
                    <Card num="3" title="Drug Selection"
                        desc="Select drugs to analyze">

                        <div className="grid grid-cols-2 gap-3">

                            {drugs.map(d => (

                                <label key={d[0]}
                                    className="border border-gray-300 rounded-lg p-3 hover:border-cyan-400 cursor-pointer">

                                    <input type="checkbox"
                                        value={d[0]}
                                        {...register("drug", { required: "Select drug" })}
                                        className="mb-1" />

                                    <div className="font-semibold text-sm">
                                        {d[0]}
                                    </div>

                                    <div className="text-xs text-gray-500">
                                        {d[1]}
                                    </div>

                                </label>

                            ))}

                        </div>

                        <Error e={errors.drug} />

                    </Card>
                    {errors.root && (
                        <p className="text-red-500">{errors.root.message}</p>
                    )}


                    <button type="submit" className="w-full  bg-cyan-400 text-[#071a2f] font-bold py-3 rounded-xl hover:shadow-lg">
                        {isSubmitting ? <Loader className="animate-spin w-5 h-5" /> : "Analyze Patient Risk"}
                    </button>

                </form>
            )}

            {result && <ResultUI result={result} />}

        </div>
    );
}

function Card({ num, title, desc, children }: any) {

    return (
        <div className="bg-white rounded-2xl shadow-sm border p-6 ">

            <div className="flex gap-3 mb-3">

                <div className="w-6 h-6 rounded-full bg-cyan-400 text-white flex items-center justify-center text-xs font-bold">
                    {num}
                </div>

                <div>

                    <div className="font-semibold">
                        {title}
                    </div>

                    <div className="text-xs text-gray-500">
                        {desc}
                    </div>

                </div>

            </div>

            {children}

        </div>
    );
}

function Error({ e }: any) {
    if (!e) return null;
    return (
        <div className="text-red-500 text-sm mt-2">
            {e.message}
        </div>
    );
}


function ResultUI({ result }: any) {

    const colors: Record<string, string> = {
        Safe: "border-green-500 bg-green-50 text-green-700",
        "Adjust Dosage": "border-yellow-500 bg-yellow-50 text-yellow-700",
        Toxic: "border-red-500 bg-red-50 text-red-700",
    };

    const riskColor = colors[result?.risk] || "border-gray-300 bg-gray-50";

return (

    <div className="space-y-6">

        {/* Legend */}
        <div className="bg-white rounded-xl p-6 border shadow-sm">

            <div className="font-semibold mb-3">
                Risk Label
            </div>

            <div className={clsx(
                "border rounded-lg p-4 text-center font-semibold text-lg",
                colors[result.risk]
            )}>
                {result.risk}
            </div>

        </div>

        {/* Risk Assessment Card */}
            <div className="bg-white border rounded-xl p-6 shadow-sm">

                <div className="font-semibold mb-3">
                    Risk Assessment
                </div>

                <div className={clsx("border rounded-lg p-4", riskColor)}>

                    <div className="font-semibold text-lg">
                        {result?.risk}
                    </div>

                    <div className="text-sm mt-1">
                        Confidence: {result?.confidence}%
                    </div>

                </div>

            </div>

            {/* AI Explanation */}
            <div className="bg-white border rounded-xl p-6 shadow-sm">

                <div className="font-semibold mb-3">
                    AI Explanation
                </div>

                <p className="text-gray-600 text-sm">
                    {result?.explanation || "No explanation available"}
                </p>

            </div>

            {/* JSON Actions */}
            <div className="bg-white border rounded-xl p-6 shadow-sm flex gap-3">

                <button
                    onClick={() => {
                        navigator.clipboard.writeText(
                            JSON.stringify(result?.raw || result, null, 2)
                        );
                    }}
                    className="border px-4 py-2 rounded-lg hover:bg-gray-50"
                >
                    Copy JSON
                </button>

                <button
                    onClick={() => {

                        const blob = new Blob(
                            [JSON.stringify(result?.raw || result, null, 2)],
                            { type: "application/json" }
                        );

                        const url = URL.createObjectURL(blob);

                        const a = document.createElement("a");
                        a.href = url;
                        a.download = "result.json";
                        a.click();

                        URL.revokeObjectURL(url);

                    }}
                    className="border px-4 py-2 rounded-lg hover:bg-gray-50"
                >
                    Download JSON
                </button>

            </div>

        </div>

    );

}