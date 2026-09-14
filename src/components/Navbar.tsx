import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          setActiveLink(visibleSection.target.id);
        }
      },
      {
        threshold: 0.3,
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (id: string) => {
    setActiveLink(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleLinkClick("home")}
          className="group flex items-center"
        >
          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/30 bg-gray-900 shadow-lg shadow-blue-500/10 transition duration-300 group-hover:border-blue-500 group-hover:shadow-blue-500/20">
            <span className="text-2xl font-black italic tracking-tight text-white transition duration-300 group-hover:text-blue-500">
              M
            </span>

            <span className="absolute bottom-1 right-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const linkId = link.href.replace("#", "");

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(linkId)}
                className={`text-lg font-bold transition ${
                  activeLink === linkId
                    ? "text-blue-500"
                    : "text-gray-300 hover:text-blue-500"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg border cursor-pointer border-gray-800 bg-gray-900 p-2 text-2xl text-gray-300 transition hover:border-blue-500 hover:text-blue-500 md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-gray-800 bg-black/95 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const linkId = link.href.replace("#", "");

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(linkId)}
                  className={`rounded-lg px-4 py-3 text-base font-semibold transition ${
                    activeLink === linkId
                      ? "bg-blue-500/10 text-blue-500"
                      : "text-gray-300 hover:bg-gray-900 hover:text-blue-500"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
