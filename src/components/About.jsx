export default function About() {
  return (
    <section id="about" className="py-20 max-w-5xl mx-auto px-6 border-t border-sky-100">
      <h2 className="text-3xl font-bold text-slate-800 mb-6">About Me</h2>
      <div className="bg-white/80 border border-sky-100 p-8 rounded-2xl shadow-sm space-y-4 text-slate-600 leading-relaxed max-w-3xl">
        <p>
          Saya adalah mahasiswi semester pertama Program Studi Teknik Informatika di Universitas Pamulang 
          dengan latar belakang pendidikan kejuruan Manajemen Perkantoran.
        </p>
        <p>
          Saat ini saya aktif mendalami rekayasa perangkat lunak sisi server (backend) menggunakan 
          Node.js, Express.js, serta pengelolaan basis data relasional seperti PostgreSQL dan MySQL.
        </p>
      </div>
    </section>
  );
}