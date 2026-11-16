export default function Skills() {
  const skillCategories = [
    {
      category: "Bahasa Pemrograman",
      items: ["JavaScript", "C++", "Python", "HTML & CSS"]
    },
    {
      category: "Framework & Library",
      items: ["Node.js", "Express.js", "React", "Tailwind CSS"]
    },
    {
      category: "Database & Tools",
      items: ["PostgreSQL", "MySQL", "Supabase", "Git & GitHub", "Vercel"]
    }
  ];

  return (
    <section id="skills" className="py-20 max-w-5xl mx-auto px-6 border-t border-sky-100">
      <h2 className="text-3xl font-bold text-slate-800 mb-8">Skills</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((group, index) => (
          <div key={index} className="bg-white border border-sky-100 p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold text-sky-600 mb-4">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, i) => (
                <span key={i} className="bg-sky-50 text-slate-700 border border-sky-100 text-sm font-medium px-3 py-1.5 rounded-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}