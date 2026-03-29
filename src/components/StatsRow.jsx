const StatsRow = () => {
  const stats = [
    { num: "20+", label: "Years of Experience" },
    { num: "17", label: "UN SDGs Addressed" },
    { num: "1", label: "New Model" },
  ];

  return (
    <div className="bg-dark text-center grid md:grid-cols-3 gap-6 py-16">
      {stats.map((s, i) => (
        <div key={i}>
          <h1 className="text-primary text-5xl font-playfair">{s.num}</h1>
          <p className="text-white/50 uppercase text-xs mt-2">{s.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsRow;
