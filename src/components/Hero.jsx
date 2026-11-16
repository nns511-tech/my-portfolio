export default function Hero() {
  return (
    <section id="hero" className="min-h-[85vh] flex flex-col justify-center items-start max-w-5xl mx-auto px-6">
      <span className="bg-sky-100 text-sky-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
        Halo, perkenalkan saya
      </span>
      <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-3">
        Najwa Nur Shihab
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-sky-600 mb-6">
        Informatics Student & Backend Developer
      </h2>
      <p className="text-slate-600 max-w-xl mb-8 leading-relaxed">
        Mahasiswi Teknik Informatika yang berfokus pada pengembangan sistem backend, 
        perancangan RESTful API, dan pembuatan aplikasi web modern.
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-xl shadow-sm shadow-sky-200 transition"
        >
          Lihat Projects
        </a>
        <a
          href="#contacts"
          className="bg-white border border-sky-200 hover:border-sky-400 text-sky-700 font-medium px-6 py-3 rounded-xl transition"
        >
          Hubungi Saya
        </a>
      </div>
    </section>
  );
}