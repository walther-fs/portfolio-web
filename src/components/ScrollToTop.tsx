import { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div role="complementary" aria-label="Botón volver arriba">
      <AnimatePresence>
        {visible && (
          <motion.button
            key="scroll-to-top"
            onClick={scrollToTop}
            aria-label="Volver al inicio de la página"
            className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg cursor-pointer 
                        bg-gradient-to-r from-cyan-500 to-violet-600 text-white
                        hover:from-cyan-400 hover:to-violet-500 
                        transition-transform hover:scale-110 animate-pulse-slow 
                        focus:outline-none focus:ring-2 focus:ring-cyan-400"
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <FaArrowUpLong className="h-5 w-5" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
