import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { GiSharpSmile } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection } from "../hooks/useActiveSection";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { id: "hero", label: "Inicio" },
    { id: "about", label: "Sobre mí" },
    { id: "career", label: "Experiencias" },
    { id: "projects", label: "Proyectos" },
    { id: "contact", label: "Contacto" },
  ];

  const active = useActiveSection(links.map((l) => l.id));

  return (
    <header
      className="fixed top-0 left-0 w-full 
                  bg-zinc-950/70 backdrop-blur-md 
                  border-b border-transparent 
                  [border-image:linear-gradient(to_right,#7c3aed,#06b6d4,#8b5cf6)1] 
                  shadow z-50"
      role="banner"
    >
      <nav
        className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4"
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="relative">
          <a
            href="#hero"
            aria-label="Ir al inicio"
            className={`flex items-center transition ${
              active === "hero"
                ? "text-cyan-400"
                : "text-gray-200 hover:text-cyan-400"
            }`}
          >
            <GiSharpSmile
              className="w-7 h-7 md:w-10 md:h-10"
              aria-hidden="true"
            />
          </a>
          {active === "hero" && (
            <motion.span
              layoutId="underline"
              className="absolute left-0 -bottom-1 w-full h-[2px] bg-cyan-400 rounded"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          )}
        </div>
        <ul className="hidden md:flex gap-6 font-medium text-gray-300 relative">
          {links.slice(1).map((link) => (
            <li key={link.id} className="relative">
              <a
                href={`#${link.id}`}
                className={`pb-1 transition ${
                  active === link.id ? "text-cyan-400" : "hover:text-cyan-400"
                }`}
                aria-current={active === link.id ? "page" : undefined}
              >
                {link.label}
              </a>
              {active === link.id && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-cyan-400 rounded"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
            </li>
          ))}
        </ul>
        <a
          href="/CV-Walther-Flores.pdf"
          download
          aria-label="Descargar currículum de Walther Flores en PDF"
          className="hidden md:block bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 
                      text-white px-4 py-2 rounded-lg shadow-lg 
                      hover:shadow-[0_0_10px_4px_rgba(6,182,212,0.6),0_0_20px_6px_rgba(16,185,129,0.5)] 
                      transition transform hover:scale-105 animate-pulse-slow"
        >
          Descargar CV
        </a>
        <button
          className="md:hidden text-gray-200"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden bg-zinc-950/95 shadow-lg absolute top-16 left-0 w-full backdrop-blur-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <ul className="flex flex-col gap-4 p-6 font-medium text-gray-200 relative">
              {links.map((link) => (
                <li key={link.id} className="relative">
                  <a
                    href={`#${link.id}`}
                    onClick={() => toggleMenu()}
                    className={`pb-1 transition ${
                      active === link.id
                        ? "text-cyan-400"
                        : "hover:text-cyan-400"
                    }`}
                    aria-current={active === link.id ? "page" : undefined}
                  >
                    {link.label}
                  </a>
                  {active === link.id && (
                    <motion.span
                      layoutId="underline-mobile"
                      className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-cyan-400 rounded"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}
                </li>
              ))}
            </ul>
            <a
              href="/CV-Walther-Flores.pdf"
              download
              aria-label="Descargar currículum de Walther Flores en PDF"
              className="block md:hidden bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 
                          text-white px-4 py-2 rounded-lg shadow hover:opacity-90 
                          transition text-center mx-6 mb-6 transform hover:scale-105 animate-pulse-slow"
            >
              Descargar CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
