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
import { useEffect, useState } from "react";
import BackToTop from "./components/BackToTop";
export default function App() {
  const [language, setLanguage] = useState<"en" | "ar">("en");

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black text-white">
      <Toaster position="top-center" reverseOrder={false} />

      <Navbar language={language} setLanguage={setLanguage} />

      <main>
        <Hero language={language} />
        <About language={language} />
        <Info language={language} />
        <Skills language={language} />
        <Projects language={language} />
        <Journey language={language} />
        <Contact language={language} />
      </main>

      <Footer language={language} />
      <BackToTop />
    </div>
  );
}
