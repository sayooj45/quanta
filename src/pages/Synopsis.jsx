import React from "react";

const Synopsis = () => {
  const chapters = [
    {
      num: "01",
      title: "The ESG Paradox Explained",
      desc: "Why ESG commitments fail to translate into measurable financial outcomes.",
    },
    {
      num: "02",
      title: "The Measurement Crisis",
      desc: "Contradictions in ESG rating frameworks and need for a new model.",
    },
    {
      num: "03",
      title: "Introducing ESG Quanta Calibrator",
      desc: "A quantitative model linking ESG with financial performance.",
    },
    {
      num: "04",
      title: "Financial Integration Framework",
      desc: "Embedding ESG into budgeting and financial planning.",
    },
    {
      num: "05",
      title: "Case Studies & Applications",
      desc: "Real-world implementation across industries.",
    },
    {
      num: "06",
      title: "The Road Ahead",
      desc: "Strategic roadmap for ESG-driven organizations.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-dark text-white grid md:grid-cols-2 gap-10 px-8 md:px-16 py-20">
        <div>
          <p className="uppercase tracking-widest text-sm text-white/50">
            Book Synopsis
          </p>

          <h1 className="font-playfair text-5xl font-black mt-4">
            Solving The <span className="text-primary">ESG</span> Paradox
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            This book introduces the ESG Quanta Calibrator — a quantitative
            framework to measure and integrate ESG into financial strategy.
          </p>

          <button className="mt-8 bg-primary px-6 py-3 uppercase text-sm">
            Download PDF
          </button>
        </div>

        <div className="bg-primary/10 border border-primary p-8 text-center">
          <h2 className="font-playfair text-xl mb-2">Free Synopsis</h2>
          <p className="text-white/60 text-sm">
            Get full chapter-by-chapter breakdown.
          </p>
        </div>
      </section>

      {/* Chapters */}
      <section className="px-8 md:px-16 py-20">
        <h2 className="font-playfair text-4xl font-bold mb-10">
          Chapter Overview
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {chapters.map((c, i) => (
            <div
              key={i}
              className="border p-6 hover:border-primary hover:-translate-y-1 transition"
            >
              <h1 className="text-5xl font-playfair text-primary/20">
                {c.num}
              </h1>
              <h3 className="font-semibold mt-2">{c.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Synopsis;
