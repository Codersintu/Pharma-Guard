"use client";
import { useForm } from "react-hook-form";
import Card from "./Card";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { analyzePatient } from "@/lib/api";
import { Loader } from "lucide-react";

const drugs = [
    ["CODEINE", "Opioid Analgesic"],
    ["WARFARIN", "Anticoagulant"],
    ["CLOPIDOGREL", "Antiplatelet"],
    ["SIMVASTATIN", "Statin / Lipid lowering"],
    ["AZATHIOPRINE", "Immunosuppressant"],
    ["FLUOROURACIL", "Chemotherapy"],
];

type FormDataType = {
    vcf: FileList;
    drug: string[];
}
type RiskType =
  | "Toxicity Risk"
  | "Bleeding Risk"
  | "Ineffective"
  | "Muscle Toxicity Risk"
  | "Severe Toxicity Risk";

const riskColorMap: Record<RiskType, string> = {
  "Toxicity Risk": "text-red-700",
  "Bleeding Risk": "text-orange-600",
  "Ineffective": "text-yellow-600",
  "Muscle Toxicity Risk": "text-red-600",
  "Severe Toxicity Risk": "text-red-900"
};
export default function AnalyzeForm() {
    const [files, setFile] = useState<File | null>(null);
    const [showAI, setShowAI] = useState(false);
    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<FormDataType>();
    const watchFile = watch('vcf');
    const validateFile = (files: FileList) => {
        if (!files.length) return "vcf file required!"
        const file = files[0];
        console.log(file)

        if (!file.name.endsWith(".vcf")) return "only vcf file require."

        if (file.size > 5 * 1024 * 1024) return "file size must 5MB"

        setFile(file);
        return true
    }

    const Onsubmit = async (data: FormDataType) => {
        const formData = new FormData();
        formData.append("vcfFile", data.vcf[0]);
        formData.append("drugs", data.drug.join(","));

        mutation.mutate(formData);
    }

    const mutation = useMutation({
        mutationFn: (formData: FormData) => analyzePatient(formData)
    })

    const response = mutation.data;

    return (
        <div className="dark:text-white">
            <form onSubmit={handleSubmit(Onsubmit)}>
                <div className="flex flex-col md:flex-row gap-8 lg:flex-row">
                    <Card num={1} title="Genomic Data Upload" desc="Upload VCF file containing genetic variants">
                        <label className="border border-dashed border-gray-400 rounded-lg px-30 py-10 flex flex-col items-center cursor-pointer hover:border-teal-500 hover:bg-gray-100">
                            <input
                                type="file"
                                accept=".vcf"
                                hidden
                                {...register("vcf", { validate: validateFile })}
                            />
                            <div className="flex flex-col items-center">
                                <div className="text-4xl mb-2">🧬</div>
                                <div className="font-medium">
                                    Drag & drop your VCF file here
                                </div>

                                <div className="text-sm text-gray-500">
                                    Supports .vcf · Max 5MB
                                </div>
                                {errors.vcf && (
                                    <p className="text-red-500">
                                        {errors.vcf.message}
                                    </p>
                                )}
                                {watchFile?.[0] && <div className="mt-2 text-green-600">
                                    {watchFile[0].name}
                                </div>}
                            </div>

                        </label>
                    </Card>

                    <Card num={2} title="Drug Selection" desc="Select drugs to analyze">
                        <div className="grid grid-cols-3 gap-3">
                            {drugs.map((d, idx) => (
                                <label key={idx} className="border border-gray-300 rounded-lg p-3 hover:border-cyan-400 cursor-pointer">
                                    <input type="checkbox"
                                        value={d[0]}
                                        {...register("drug", { required: "atleast select one drug" })}
                                        className="mb-1" />

                                    <div className="font-medium truncate">{d[0]}</div>
                                    <div className="text-sm text-gray-500 ">{d[1]}</div>
                                </label>
                            ))}

                            {errors.drug && (
                                <p className="text-red-500">
                                    {errors.drug.message}
                                </p>
                            )}
                        </div>
                    </Card>
                </div>
                {mutation.isPending ? <div className="w-full mt-8 flex items-center justify-center"><Loader className="animate-spin w-12 h-12" /></div> :
                    <button disabled={mutation.isPending} type="submit" className="mt-8 w-full px-6 py-3 bg-teal-500 text-white rounded-xl hover:bg-teal-600 transition-colors cursor-pointer">
                        "Analyze Patient Risk"
                    </button>
                }
            </form>

            {mutation.isSuccess && (
                <div className="mt-6 p-6 border rounded-xl bg-green-50 space-y-6 shadow-sm">

                    <h3 className="font-bold text-2xl text-green-700">
                        {response.message}
                    </h3>

                    {/* Risk Section */}
                    <div className="flex items-center gap-2">
                        <h1 className="text-xl text-gray-700 font-bold">
                            Risk Label:
                        </h1>

                        <p
                            className={`font-semibold text-lg ${riskColorMap[response.result.risk as RiskType] || "text-gray-700"
                                }`}
                        >
                            {response.result.risk}
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <h1 className="text-xl text-gray-700 font-bold">Confidence_Score:</h1>
                        <span className="bg-yellow-400 p-2 rounded-xl text-xl">{response.result.raw.risk_assessment.confidence_score}</span>
                    </div>

                    {/* AI Summary Toggle */}
                    <div className="flex items-center justify-between">

                        <h2 className="text-lg font-semibold text-teal-600">
                            🤖 AI Clinical Summary
                        </h2>

                        <button
                            onClick={() => setShowAI(!showAI)}
                            className="px-4 py-1 text-sm bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
                        >
                            {showAI ? "Hide Summary" : "Show Summary"}
                        </button>

                    </div>

                    {/* AI Explanation */}
                    {showAI && (
                        <p className="text-gray-700 leading-relaxed bg-white p-4 rounded-lg border">
                            {response.result.explanation}
                        </p>
                    )}

                </div>
            )}

            {/* ERROR DISPLAY */}
            {mutation.isError && (
                <div className="mt-6 p-4 border rounded bg-red-50 text-red-600">
                    {(
                        mutation.error as any
                    )?.response?.data?.message ||
                        "Something went wrong"}
                </div>
            )}
        </div>
    )
}


