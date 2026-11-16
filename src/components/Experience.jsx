export default function Experience() {
  const experiences = [
    {
      role: "Anggota Divisi Web Development",
      organization: "Komunitas / Klub Web Development Kampus",
      period: "Oktober 2026 - Sekarang",
      description: "Berpartisipasi dalam pengembangan aplikasi web kolaboratif dan mempelajari arsitektur backend modern."
    },
    {
      role: "Lulusan Kompetensi Keahlian",
      organization: "SMK Manajemen Perkantoran",
      period: "2022 - 2025",
      description: "Menyelesaikan pendidikan vokasi selama 3 tahun dan meraih sertifikat kompetensi administrasi perkantoran."
    }
  ];

  return (
    <section id="experience" className="py-20 max-w-5xl mx-auto px-6 border-t border-sky-100">
      <h2 className="text-3xl font-bold text-slate-800 mb-8">Experience</h2>
      <div className="space-y-6">
        {experiences.map((item, index) => (
          <div key={index} className="bg-white border border-sky-100 p-6 rounded-2xl shadow-sm">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-2">
              <h3 className="text-xl font-semibold text-slate-800">{item.role}</h3>
              <span className="text-xs font-medium bg-sky-100 text-sky-700 px-3 py-1 rounded-full w-fit">
                {item.period}
              </span>
            </div>
            <p className="text-sky-600 font-medium mb-3">{item.organization}</p>
            <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}