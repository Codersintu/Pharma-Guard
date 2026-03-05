
const steps = [
  {
    number: "1",
    title: "Upload Genomic Data",
    desc: "Upload the patient's VCF file containing genetic variants from sequencing.",
  },
  {
    number: "2",
    title: "Select Target Drugs",
    desc: "Choose one or more drugs to analyze for pharmacogenomic risk.",
  },
  {
    number: "3",
    title: "Receive Risk Report",
    desc: "View detailed risk classification, phenotype profile, and AI-generated recommendations.",
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="bg-[#061C36] py-28">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-cyan-400 tracking-[0.25em] text-sm font-semibold mb-4">
          WORKFLOW
        </p>


        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Three Steps to Insight
        </h2>

        <p className="text-slate-400 max-w-2xl mx-auto mb-20">
          A streamlined pipeline from genomic upload to clinical report.
        </p>

        <div className="relative">

          <div className="absolute hidden md:flex top-7 left-0 w-full h-0.5 bg-cyan-400/60" />

          <div className="relative grid md:grid-cols-3 gap-12">

            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">

                <div className="
                  w-14 h-14
                  flex items-center justify-center
                  rounded-full
                  border-2 border-cyan-400
                  text-cyan-400
                  font-bold text-lg
                  bg-[#061C36]
                  shadow-[0_0_20px_rgba(34,211,238,0.35)]
                  mb-6
                ">
                  {step.number}
                </div>

                <h3 className="text-white font-semibold text-lg mb-2">
                  {step.title}
                </h3>

                <p className="text-slate-400 text-sm max-w-xs">
                  {step.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}