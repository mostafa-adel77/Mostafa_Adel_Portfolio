import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Info from "./components/Info";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Info />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
