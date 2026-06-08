import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 font-semibold text-white"
          >
            <span className="text-blue-500">{">_"}</span>
            <span>nahuel.dev</span>
          </a>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center gap-10 text-sm text-zinc-400">
            <a href="#about" className="hover:text-white transition">
              Sobre mí
            </a>

            <a href="#stack" className="hover:text-white transition">
              Stack
            </a>

            <a href="#projects" className="hover:text-white transition">
              Proyectos
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contacto
            </a>
          </nav>

          {/* Desktop button */}
          <a
            href="#contact"
            className="hidden md:flex px-5 py-2 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
          >
            Contactar
          </a>

          {/* Mobile button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-6 flex flex-col gap-4 text-zinc-300">
            <a href="#about">Sobre mí</a>
            <a href="#projects">Proyectos</a>
            <a href="#contact">Contacto</a>
          </div>
        )}
      </div>
    </header>
  );
}