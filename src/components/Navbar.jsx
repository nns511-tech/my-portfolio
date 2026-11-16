export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur border-b border-sky-100">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold text-sky-600">
          Portofolio.
        </a>
        <ul className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
          <li><a href="#about" className="hover:text-sky-600 transition">About</a></li>
          <li><a href="#experience" className="hover:text-sky-600 transition">Experience</a></li>
          <li><a href="#projects" className="hover:text-sky-600 transition">Projects</a></li>
          <li><a href="#skills" className="hover:text-sky-600 transition">Skills</a></li>
          <li><a href="#contacts" className="hover:text-sky-600 transition">Contacts</a></li>
        </ul>
      </div>
    </nav>
  );
}