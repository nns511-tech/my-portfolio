import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contacts', href: '#contacts' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-[#FDFBF7]/90 backdrop-blur border-b border-sky-100">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <a
          href="#hero"
          onClick={() => setIsOpen(false)}
          className="text-xl font-bold text-sky-600"
        >
          Portofolio.
        </a>

        <ul className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-sky-600 transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="md:hidden p-2 rounded-lg text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[#FDFBF7] border-b border-sky-100"
          >
            <ul className="flex flex-col px-6 py-4 space-y-3 text-sm font-medium text-slate-600">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 px-3 rounded-lg hover:bg-sky-50 hover:text-sky-600 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}