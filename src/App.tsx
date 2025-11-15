import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Career from "./components/Career";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-gray-100">
      <Header />
      <main
        className="flex-grow"
        id="main-content"
        aria-label="Contenido principal"
      >
        <Hero />
        <About />
        <Career />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <Toaster
        position="bottom-center"
        containerStyle={{ bottom: 125 }}
        toastOptions={{
          style: {
            background: "#1a1a1a",
            color: "#e0e0e0",
            borderRadius: "0.5rem",
            border: "1px solid rgba(34, 211, 238, 0.4)",
            boxShadow: "0 0 15px rgba(34, 211, 238, 0.15)",
            fontSize: "0.9rem",
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#1a1a1a",
            },
          },
        }}
      />
    </div>
  );
}

export default App;
