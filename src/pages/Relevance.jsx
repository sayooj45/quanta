import React from "react";

const Relevance = () => {
  const pillars = [
    {
      letter: "E",
      title: "Environmental",
      desc: "Carbon emissions, climate impact, and ecological footprint linked to financial risk.",
    },
    {
      letter: "S",
      title: "Social",
      desc: "Employee wellbeing, ethics, and community value mapped to business performance.",
    },
    {
      letter: "G",
      title: "Governance",
      desc: "Transparency, accountability, and compliance frameworks for sustainability.",
    },
  ];

  const cards = [
    {
      title: "CFOs & Finance Controllers",
      desc: "Integrate ESG into financial reporting and investor communication.",
    },
    {
      title: "Sustainability Officers",
      desc: "Translate ESG strategy into measurable financial outcomes.",
    },
    {
      title: "Board Members",
      desc: "Governance frameworks for long-term stakeholder value.",
    },
    {
      title: "Investors",
      desc: "Evaluate ESG performance with financial precision.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-primary text-white px-8 md:px-16 py-20">
        <h1 className="font-playfair text-5xl font-black">
          Why This Book Matters
        </h1>

        <p className="mt-6 max-w-xl text-white/80">
          ESG is now a regulatory requirement and competitive advantage. This
          book provides the tools to measure it effectively.
        </p>
      </section>

      {/* Pillars */}
      <section className="px-8 md:px-16 py-20">
        <h2 className="font-playfair text-4xl mb-10">
          Environmental · Social · Governance
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div key={i} className="border p-6">
              <h1 className="text-5xl text-primary font-playfair">
                {p.letter}
              </h1>
              <h3 className="font-bold mt-2">{p.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cards */}
      <section className="bg-dark text-white px-8 md:px-16 py-20">
        <h2 className="font-playfair text-4xl mb-10">Who Needs This Book</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="bg-black p-6 border-l-4 border-primary">
              <h3 className="font-playfair text-lg">{c.title}</h3>
              <p className="text-white/60 text-sm mt-2">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Relevance;
