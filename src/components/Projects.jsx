export default function Projects() {
  const projects = [
    {
      title: "Toko Bunga E-Commerce",
      description: "Aplikasi web e-commerce toko bunga interaktif dengan katalog produk, fitur keranjang belanja, dan integrasi database.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      image: "/project-bunga.png",
      github: "https://github.com/nns511-tech", 
      demo: "https://ecommerce-flower-j.vercel.app/"
    },
    {
      title: "Campus Room Reservation API",
      description: "RESTful API untuk peminjaman ruangan kampus lengkap dengan manajemen jadwal dan integrasi database PostgreSQL.",
      tech: ["Node.js", "Express.js", "Supabase", "Vercel"],
      image: "/project-api.png",
      github: "https://github.com/nns511-tech",
      demo: "https://reservasi-ruangan-icc.vercel.app/"
    },
    {
      title: "Personal Portfolio Website",
      description: "Website portofolio interaktif dengan kursor kustom bintang dan animasi scroll halus menggunakan React dan Framer Motion.",
      tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      image: "/project-portfolio.png",
      github: "https://github.com/nns511-tech",
      demo: "https://nns511-portfolio.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 max-w-5xl mx-auto px-6 border-t border-sky-100">
      <h2 className="text-3xl font-bold text-slate-800 mb-8">Projects</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="hover-target hover:-translate-y-1 transition-all duration-300 bg-white border border-sky-100 rounded-2xl shadow-sm flex flex-col justify-between overflow-hidden hover:border-sky-300 hover:shadow-md"
          >

            <div className="relative aspect-video w-full bg-sky-50 overflow-hidden border-b border-sky-100">
              <img
                src={project.image}
                alt={`Preview ${project.title}`}
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600";
                }}
              />
            </div>

            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] md:text-xs font-medium bg-sky-50 text-sky-700 border border-sky-100 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-sky-600 hover:text-sky-700 font-semibold inline-flex items-center gap-1"
                    >
                      Lihat Kode →
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-slate-600 hover:text-sky-600 font-medium inline-flex items-center gap-1"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}