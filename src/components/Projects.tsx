import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import hero from "../assets/portfolio/hero.webp";
import about from "../assets/portfolio/about.webp";
import contact from "../assets/portfolio/contact.webp";

import tm1 from "../assets/task-manager/tm-1.webp";
import tm2 from "../assets/task-manager/tm-2.webp";
import tm3 from "../assets/task-manager/tm-3.webp";
import tm4 from "../assets/task-manager/tm-4.webp";
import tm5 from "../assets/task-manager/tm-5.webp";
import tm6 from "../assets/task-manager/tm-6.webp";

interface Project {
  title: string;
  description: string;
  tech: string[];
  demo: string;
  code: string;
  current: boolean;
  images: string[];
}

const projects: Project[] = [
  {
    title: "Portfolio Personal",
    description:
      "Portafolio web creado con React, TypeScript y Vite. Estilizado con TailwindCSS y animaciones fluidas con Framer Motion.",
    tech: ["React", "TypeScript", "Vite", "Tailwind", "Framer Motion"],
    demo: "#hero",
    code: "https://github.com/walther-fs/portfolio-web",
    current: true,
    images: [hero, about, contact],
  },
  {
    title: "Task Manager",
    description:
      "Aplicación de gestión de tareas desarrollada con React, JavaScript y Vite. Estilizada con Bootstrap y pruebas implementadas con Jest.",
    tech: ["React", "JavaScript", "Vite", "Bootstrap", "Jest"],
    demo: "https://task-manager-phi-virid.vercel.app/",
    code: "https://github.com/walther-fs/task-manager",
    current: false,
    images: [tm1, tm2, tm3, tm4, tm5, tm6],
  },
  {
    title: "E-commerce Demo",
    description: "Tienda online con carrito de compras (en desarrollo).",
    tech: ["React", "Node.js"],
    demo: "",
    code: "",
    current: false,
    images: [],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      type: "spring" as "spring",
      stiffness: 120,
    },
  },
};

function ProjectCard({ proj }: { proj: Project }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % proj.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [proj.images.length]);

  return (
    <motion.div
      className=" bg-gradient-to-br from-gray-900 to-gray-800 
                  border border-teal-500/30 shadow-lg rounded-xl 
                  overflow-hidden flex flex-col 
                  hover:-translate-y-2 
                  hover:border-teal-400 
                  hover:shadow-[0_0_35px_rgba(20,184,166,0.7)]
                  transition relative"
      variants={item}
    >
      {proj.images.length > 0 && (
        <div className="flex-[3] relative bg-gray-800">
          <img
            src={proj.images[index]}
            alt={`Vista previa de ${proj.title}`}
            className="w-full h-full object-cover transition-all duration-700"
          />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {proj.images.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === index ? "bg-teal-400" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      )}
      <div className="flex-[2] p-6 flex flex-col justify-between relative">
        {proj.current && (
          <span
            className=" absolute top-4 right-4 
                        bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 
                        text-white text-xs px-3 py-1 rounded-full shadow animate-pulse"
          >
            Estás viendo este
          </span>
        )}
        <div>
          <h3 className="text-xl font-semibold text-teal-300 mb-2">
            {proj.title}
          </h3>
          <p className="text-gray-300 mb-4">{proj.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {proj.tech.map((t, idx) => (
              <span
                key={idx}
                className=" bg-gradient-to-r from-emerald-600/20 via-teal-600/20 to-cyan-600/20 
                            text-teal-300 text-sm px-3 py-1 rounded-full 
                            border border-teal-500/30
                            hover:bg-teal-600/30 hover:scale-105 transition"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <a
            href={proj.demo}
            target="_blank"
            rel="noopener noreferrer"
            className=" flex-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white py-2 rounded-lg hover:opacity-90 transition text-center"
          >
            Demo
          </a>
          <a
            href={proj.code}
            target="_blank"
            rel="noopener noreferrer"
            className=" flex-1 border border-teal-400 text-teal-300 py-2 rounded-lg hover:bg-teal-500/10 transition text-center"
          >
            Código
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 bg-gradient-to-b from-teal-950 via-cyan-900 to-black"
    >
      <motion.h2
        className=" text-3xl md:text-4xl font-bold mb-12 text-center 
                    bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 
                    bg-clip-text text-transparent"
        style={{ textShadow: "0 0 15px rgba(6,182,212,0.5)" }}
        initial={{ opacity: 0, y: -40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          type: "spring",
          bounce: 0.4,
        }}
        viewport={{ once: false, amount: 0.4 }}
      >
        Proyectos
      </motion.h2>
      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {projects.map((proj, i) => (
          <ProjectCard key={i} proj={proj} />
        ))}
      </motion.div>
    </section>
  );
}
