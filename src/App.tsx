import { LanguageProvider } from "./utils/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <LanguageProvider>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
        </main>
        <Footer />
    </LanguageProvider>
  );
}

export default App;
