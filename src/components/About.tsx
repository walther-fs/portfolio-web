import { motion, AnimatePresence, easeOut } from "framer-motion";
import { FaJava, FaChevronDown } from "react-icons/fa6";
import { DiMsqlServer } from "react-icons/di";
import { useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiTypescript,
  SiVite,
  SiNodedotjs,
  SiSpring,
  SiGit,
} from "react-icons/si";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

const skills = [
  { Icon: SiHtml5, name: "HTML5", iconClass: "text-orange-500" },
  { Icon: SiCss3, name: "CSS3", iconClass: "text-blue-500" },
  { Icon: SiJavascript, name: "JavaScript", iconClass: "text-yellow-400" },
  { Icon: SiReact, name: "ReactJS", iconClass: "text-cyan-400" },
  { Icon: SiBootstrap, name: "Bootstrap", iconClass: "text-purple-600" },
  { Icon: SiTypescript, name: "TypeScript", iconClass: "text-blue-600" },
  { Icon: SiVite, name: "Vite", iconClass: "text-purple-400" },
  { Icon: SiNodedotjs, name: "Node.js", iconClass: "text-green-600" },
  { Icon: FaJava, name: "Java", iconClass: "text-red-600" },
  { Icon: SiSpring, name: "Spring", iconClass: "text-green-700" },
  { Icon: DiMsqlServer, name: "SQL Server", iconClass: "text-red-600" },
  { Icon: SiGit, name: "Git", iconClass: "text-orange-500" },
];

const faqs = [
  {
    question: "¿Qué experiencia tienes con otros frameworks?",
    answer:
      "He explorado otros frameworks como Angular y Vue, pero decidí enfocarme en React porque me resulta más intuitivo y se adapta mejor a mis proyectos.",
  },
  {
    question: "¿Has trabajado con pruebas o testing en tus proyectos?",
    answer:
      "Sí, he explorado testing básico en frontend, con el objetivo de mejorar la calidad del código y evitar errores en producción.",
  },
  {
    question: "¿Qué experiencia tienes con frameworks de estilos?",
    answer:
      "Durante mis primeros proyectos utilicé Bootstrap porque era un framework muy popular y práctico para maquetar interfaces. Con el tiempo, también he comenzado a incorporar TailwindCSS.",
  },
  {
    question: "¿Qué experiencia tienes en el backend?",
    answer:
      "Aunque mi enfoque principal es el frontend, también he desarrollado proyectos en Java utilizando Spring Boot y SQL Server, lo que me permitió comprender la lógica de negocio y el patrón MVC.",
  },
  {
    question: "¿Cómo te mantienes actualizado en tecnología?",
    answer:
      "Me mantengo al día siguiendo la documentación oficial, cursos en línea y practicando en proyectos personales que luego comparto en mi portafolio.",
  },
  {
    question: "¿Estás dispuesto a aprender nuevas tecnologías?",
    answer:
      "Por supuesto, me adapto rápido y me motiva aprender frameworks, librerías o herramientas que sumen al equipo y al proyecto.",
  },
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setActiveIndex((current) => (current === idx ? null : idx));
  };
  return (
    <section
      id="about"
      className="min-h-[100vh] w-full bg-gradient-to-b from-stone-900 via-gray-950 to-black flex items-center px-6 md:px-12 py-20"
      aria-labelledby="about-title"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <motion.article
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <motion.h2
            id="about-title"
            className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              type: "spring",
              bounce: 0.4,
            }}
            viewport={{ once: false, amount: 0.6 }}
          >
            Sobre mí
          </motion.h2>
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg mb-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              Soy un desarrollador{" "}
              <strong className="text-cyan-400">Frontend </strong>
              con formación en{" "}
              <strong className="text-teal-400">Desarrollo de Software</strong>.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              Me apasiona idear y construir interfaces para sitios y
              aplicaciones Web mediante{" "}
              <strong className="text-cyan-400">React, Vite, Node.js</strong>.
              Disfruto trabajar en equipo bajo metodologías ágiles como{" "}
              <strong className="text-teal-400">Scrum</strong>, buscando siempre
              aportar valor en cada proyecto.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              Mi objetivo es seguir creciendo constantemente como desarrollador
              y contribuir en proyectos que impacten positivamente en las
              personas.
            </motion.p>
          </div>
        </motion.article>
        <motion.section
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.4 }}
          className="relative mt-8 md:mt-0 self-start"
        >
          <div className="rounded-2xl p-[1px] bg-gradient-to-r from-cyan-500/35 via-zinc-700/40 to-violet-500/35">
            <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/40 backdrop-blur-xl rounded-2xl shadow-lg border border-cyan-500/30 p-6 relative overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-teal-500/10 to-violet-500/10 blur-2xl" />
              <h3
                id="skills-title"
                className="relative text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent"
              >
                Mis Habilidades
              </h3>
              <ul
                className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                role="list"
              >
                {skills.map(({ Icon, name, iconClass }, idx) => (
                  <motion.li
                    key={name}
                    className={[
                      "group flex items-center justify-center gap-2 py-6 text-gray-300 transition duration-300",
                      idx % 2 === 0 ? "border-r border-gray-700" : "",
                      idx < skills.length - 2 ? "border-b border-gray-700" : "",
                      (idx + 1) % 3 !== 0
                        ? "lg:border-r lg:border-gray-700"
                        : "lg:border-r-0",
                      idx < skills.length - 3
                        ? "lg:border-b lg:border-gray-700"
                        : "lg:border-b-0",
                      (idx + 1) % 4 !== 0
                        ? "xl:border-r xl:border-gray-700"
                        : "xl:border-r-0",
                      idx < skills.length - 4
                        ? "xl:border-b xl:border-gray-700"
                        : "xl:border-b-0",
                    ].join(" ")}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: idx * 0.05 }}
                    viewport={{ once: false, amount: 0.4 }}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className={`w-7 h-7 ${iconClass}`} />
                    <span className="text-sm font-medium">{name}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>
        <motion.section
          aria-labelledby="faq-title"
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false, amount: 0.4 }}
          className="col-span-1 md:col-span-2"
        >
          <motion.h3
            id="faq-title"
            className="text-2xl font-semibold mb-6 text-cyan-400"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              type: "spring",
              bounce: 0.4,
            }}
            viewport={{ once: false, amount: 0.6 }}
          >
            Preguntas Frecuentes
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <Disclosure
                  key={idx}
                  as="div"
                  className="border-b border-gray-700"
                >
                  <>
                    <DisclosureButton
                      onClick={() => toggle(idx)}
                      className="group flex w-full justify-between items-center text-left text-gray-200 hover:text-cyan-400 font-medium py-3 cursor-pointer"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${idx}`}
                    >
                      {faq.question}
                      <FaChevronDown
                        className={`size-5 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </DisclosureButton>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <DisclosurePanel
                          static
                          id={`faq-panel-${idx}`}
                          aria-label={`Respuesta: ${faq.question}`}
                        >
                          <motion.div
                            initial={{ opacity: 0, y: -16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="pb-4 text-gray-400 text-sm leading-relaxed"
                          >
                            {faq.answer}
                          </motion.div>
                        </DisclosurePanel>
                      )}
                    </AnimatePresence>
                  </>
                </Disclosure>
              );
            })}
          </div>
        </motion.section>
      </div>
    </section>
  );
}
