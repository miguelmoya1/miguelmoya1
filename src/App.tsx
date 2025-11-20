
import { LanguageProvider } from './utils/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-dark min-h-screen text-slate-200 selection:bg-blue-500/30 relative">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
