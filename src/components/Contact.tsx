import { useRef, useState } from "react";
import { FaCheck, FaChevronDown } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Listbox,
  Transition,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import toast from "react-hot-toast";

const subjects = ["Asunto", "Oferta de trabajo", "Consulta", "Otro"];

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    const name = form.current.from_name.value.trim();
    const email = form.current.from_email.value.trim();
    const messageValue = message.trim();
    if (!name) {
      toast.error("Por favor, ingresa tu nombre.");
      return;
    }
    if (!email) {
      toast.error("Por favor, ingresa tu correo electrónico.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Ingresa un correo válido.");
      return;
    }
    if (selectedSubject === "Asunto") {
      toast.error("Debes seleccionar un asunto antes de enviar.");
      return;
    }
    if (!messageValue) {
      toast.error("El mensaje no puede estar vacío.");
      return;
    }
    const hiddenSubject = form.current.querySelector<HTMLInputElement>(
      "input[name='subject']"
    );
    if (hiddenSubject) hiddenSubject.value = selectedSubject;
    if (form.current) {
      const hiddenSubject = form.current.querySelector<HTMLInputElement>(
        "input[name='subject']"
      );
      if (hiddenSubject) hiddenSubject.value = selectedSubject;
      setLoading(true);
      emailjs
        .sendForm(
          "service_d50zyaa",
          "template_3zj2dnl",
          form.current,
          "YgAfcz2tSDO98N_g5"
        )
        .then(() => {
          toast.custom(
            (t) => (
              <div
                className={`${
                  t.visible ? "animate-enter" : "animate-leave"
                } max-w-md w-full bg-gray-900 text-gray-100 shadow-lg rounded-xl pointer-events-auto flex ring-1 ring-cyan-500/30`}
              >
                <div className="flex-1 w-0 p-4">
                  <div className="flex items-start">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-cyan-400">
                        Mensaje enviado con éxito
                      </p>
                      <p className="mt-1 text-sm text-gray-300">
                        Gracias por tu mensaje. Te responderé pronto.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex border-l border-gray-800">
                  <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full border border-transparent rounded-none rounded-r-xl p-4 flex items-center justify-center text-sm font-medium text-cyan-400 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 cursor-pointer"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            ),
            {
              position: "top-center", // 🔥 solo este toast sube arriba
            }
          );
          form.current?.reset();
          setMessage("");
          setSelectedSubject(subjects[0]);
        })
        .catch(() => {
          toast.error("Hubo un error al enviar. Intenta nuevamente.");
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-violet-950 to-black px-6 py-20"
      aria-labelledby="contact-title"
    >
      <div className="max-w-xl w-full mx-auto">
        <motion.h2
          id="contact-title"
          className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Contáctame
        </motion.h2>
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          noValidate
          aria-describedby="form-status"
          className="relative bg-gradient-to-br from-gray-900/70 to-gray-800/40 backdrop-blur-xl rounded-2xl shadow-lg border border-cyan-500/30 p-8 space-y-6 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-purple-500/10 blur-2xl pointer-events-none" />
          <label htmlFor="from_name" className="sr-only">
            Nombre completo
          </label>
          <input
            id="from_name"
            type="text"
            name="from_name"
            placeholder="Nombre completo"
            required
            autoComplete="name"
            className=" w-full border-b border-gray-600 bg-transparent py-3 text-sm text-gray-200 
                        focus:outline-none focus:border-gray-400 focus:ring-0 transition placeholder-gray-400"
          />
          <label htmlFor="from_email" className="sr-only">
            Correo electrónico
          </label>
          <input
            id="from_email"
            type="email"
            name="from_email"
            placeholder="Correo"
            required
            autoComplete="email"
            className=" w-full border-b border-gray-600 bg-transparent py-3 text-sm text-gray-200 
                        focus:outline-none focus:border-gray-400 focus:ring-0 transition placeholder-gray-400"
          />
          <label htmlFor="company" className="sr-only">
            Empresa
          </label>
          <input
            id="company"
            type="text"
            name="company"
            placeholder="Empresa (opcional)"
            autoComplete="organization"
            className=" w-full border-b border-gray-600 bg-transparent py-3 text-sm text-gray-200 
                        focus:outline-none focus:border-gray-400 focus:ring-0 transition placeholder-gray-400"
          />
          <div>
            <label htmlFor="subject" className="sr-only">
              Asunto
            </label>
            <Listbox value={selectedSubject} onChange={setSelectedSubject}>
              <div className="relative">
                <ListboxButton
                  id="subject"
                  className=" relative w-full cursor-pointer rounded-md border border-gray-700 
                              bg-gray-900/40 text-gray-200 py-2.5 pl-3 pr-10 text-left text-sm 
                              shadow-sm focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                >
                  <span className="block truncate">{selectedSubject}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <FaChevronDown
                      className="h-4 w-4 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </ListboxButton>
                <Transition
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <ListboxOptions
                    className="absolute mt-1 max-h-60 w-full overflow-auto 
                              rounded-md bg-gray-900/95 shadow-lg ring-1 ring-cyan-400/40 
                              focus:outline-none text-sm z-10 text-gray-200"
                  >
                    {subjects.map((subject, idx) => (
                      <ListboxOption
                        key={idx}
                        value={subject}
                        disabled={subject === "Asunto"}
                        className={({ focus, disabled }) =>
                          `relative cursor-pointer select-none py-2 pl-8 pr-4 ${
                            disabled
                              ? "text-gray-500 cursor-not-allowed"
                              : focus
                              ? "bg-cyan-500/20 text-cyan-400"
                              : "text-gray-200"
                          }`
                        }
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`${
                                selected ? "font-semibold" : "font-normal"
                              } block truncate`}
                            >
                              {subject}
                            </span>
                            {selected && subject !== "Asunto" && (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-cyan-400">
                                <FaCheck
                                  className="h-4 w-4"
                                  aria-hidden="true"
                                />
                              </span>
                            )}
                          </>
                        )}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Transition>
              </div>
            </Listbox>
            <input type="hidden" name="subject" value={selectedSubject} />
          </div>
          <label htmlFor="message" className="sr-only">
            Mensaje
          </label>
          <div>
            <textarea
              id="message"
              name="message"
              placeholder="Escribe tu mensaje..."
              rows={4}
              required
              maxLength={1000}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-700 rounded-md bg-transparent p-3 text-sm text-gray-200
                        focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 
                        resize-none transition placeholder-gray-400"
            ></textarea>
            <p
              className="text-xs text-gray-400 text-right mt-1"
              aria-live="polite"
            >
              {message.length}/1000
            </p>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg shadow text-sm font-medium transition
          ${
            loading
              ? "bg-gray-600 text-gray-300 cursor-not-allowed"
              : "bg-gradient-to-r from-cyan-500 to-violet-600 text-white hover:from-cyan-400 hover:to-violet-500 cursor-pointer"
          }`}
          >
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
