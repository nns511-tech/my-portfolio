export default function Contacts() {
  return (
    <section id="contacts" className="py-20 max-w-5xl mx-auto px-6 border-t border-sky-100 text-center">
      <div className="bg-sky-50/80 border border-sky-100 rounded-3xl p-10">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Contacts</h2>
        <p className="text-slate-600 max-w-md mx-auto mb-8">
          Tertarik berkolaborasi dalam project atau sekadar berdiskusi seputar pengembangan web? 
          Silakan hubungi saya melalui tautan berikut.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="mailto:emailkamu@example.com"
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-xl shadow-sm shadow-sky-200 transition"
          >
            Email Saya
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="bg-white hover:bg-sky-100/50 text-sky-700 border border-sky-200 font-medium px-6 py-3 rounded-xl transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="bg-white hover:bg-sky-100/50 text-sky-700 border border-sky-200 font-medium px-6 py-3 rounded-xl transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}