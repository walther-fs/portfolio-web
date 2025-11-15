import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { GiSunglasses } from "react-icons/gi";
export default function Hero() {
  return (
    <section
      id="hero"
      className=" h-screen w-full flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-12 bg-gradient-to-b from-purple-950 via-indigo-950 to-stone-900 pt-0 md:pt-0"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl w-full mx-auto">
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-100 leading-tight flex flex-col items-center md:items-start gap-2"
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
            <span className="flex items-center gap-2">
              Hola
              <GiSunglasses className="text-cyan-400 drop-shadow-lg align-middle w-20 h-20 md:w-[120px] md:h-[120px]" />
              , soy
            </span>
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent animate-text">
              Walther Flores
            </span>
          </motion.h1>
          <motion.div
            className="flex justify-center mb-6 md:hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <div className="relative group w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-violet-500/70">
              <img
                src="/walther-foto.webp"
                alt="Foto Perfil"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-2xl group-hover:blur-3xl transition"></div>
            </div>
          </motion.div>
          <motion.h2
            className="text-lg md:text-2xl text-gray-300 mb-6 font-medium"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            Desarrollador Frontend | Trainee
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            Programar es mi forma de crear y aprender es mi forma de crecer, en
            cada línea de código es mi oportunidad para innovar y mejorar.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <motion.a
              href="https://github.com/walther-fs"
              target="_blank"
              rel="noopener noreferrer"
              className=" w-full sm:w-auto text-center flex items-center gap-2 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg font-semibold hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/walther-fs4/"
              target="_blank"
              rel="noopener noreferrer"
              className=" w-full sm:w-auto text-center flex items-center gap-2 border border-violet-500/60 text-violet-400 px-6 py-3 rounded-xl shadow hover:bg-violet-500/30 hover:border-violet-400 transition-all font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedinIn className="w-5 h-5" />
              LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="hidden md:flex flex-1 justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <div className="relative group w-[400px] h-[400px] rounded-full overflow-hidden shadow-2xl border-4 border-violet-500/70">
            <img
              src="/walther-foto.webp"
              alt="Foto Perfil"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-2xl group-hover:blur-3xl transition"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
