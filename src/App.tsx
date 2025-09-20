import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Career from "./components/Career";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

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
    </div>
  );
}

export default App;
