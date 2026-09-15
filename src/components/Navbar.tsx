import { useEffect, useState } from "react";
import { HiMenu, HiX, HiGlobeAlt } from "react-icons/hi";

type NavbarProps = {
  language: "en" | "ar";
  setLanguage: React.Dispatch<React.SetStateAction<"en" | "ar">>;
};

export default function Navbar({ language, setLanguage }: NavbarProps) {
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const navLinks = [
    {
      name: language === "en" ? "Home" : "الرئيسية",
      href: "#home",
    },
    {
      name: language === "en" ? "About" : "عني",
      href: "#about",
    },
    {
      name: language === "en" ? "Skills" : "المهارات",
      href: "#skills",
    },
    {
      name: language === "en" ? "Projects" : "المشاريع",
      href: "#projects",
    },
    {
      name: language === "en" ? "Journey" : "رحلتي",
      href: "#journey",
    },
    {
      name: language === "en" ? "Contact" : "تواصل معي",
      href: "#contact",
    },
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
    setIsLanguageOpen(false);
  };

  const handleLanguageChange = (lang: "en" | "ar") => {
    setLanguage(lang);
    setIsLanguageOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full max-w-[100vw] border-b border-gray-800 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full min-w-0 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleLinkClick("home")}
          className="group flex shrink-0 items-center"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/30 bg-gray-900 shadow-lg shadow-blue-500/10 transition duration-300 group-hover:border-blue-500 group-hover:shadow-blue-500/20 sm:h-11 sm:w-11">
            <span className="text-xl font-black italic tracking-tight text-white transition duration-300 group-hover:text-blue-500 sm:text-2xl">
              M
            </span>

            <span className="absolute bottom-1 right-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden min-w-0 items-center gap-5 md:flex lg:gap-6">
          {navLinks.map((link) => {
            const linkId = link.href.replace("#", "");

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(linkId)}
                className={`whitespace-nowrap text-base font-bold transition lg:text-lg ${
                  activeLink === linkId
                    ? "text-blue-500"
                    : "text-gray-300 hover:text-blue-500"
                }`}
              >
                {link.name}
              </a>
            );
          })}

          {/* Desktop Language */}
          <div className="relative shrink-0 ">
            <button
              type="button"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex cursor-pointer items-center justify-center rounded-lg border border-gray-700 p-2 text-xl text-gray-300 transition hover:border-blue-500 hover:text-blue-500"
              aria-label="Change language"
              aria-expanded={isLanguageOpen}
            >
              <HiGlobeAlt />
            </button>

            {isLanguageOpen && (
              <div
                className={`absolute ${language === "en" ? "right-0" : "left-0"} mt-2 w-40 overflow-hidden rounded-lg border border-gray-800 bg-gray-900`}
              >
                <button
                  type="button"
                  onClick={() => handleLanguageChange("en")}
                  className={`w-full px-4 py-3 text-left text-sm font-semibold transition ${
                    language === "en"
                      ? "bg-blue-500/10 text-blue-500"
                      : "text-gray-300 hover:bg-gray-800 hover:text-blue-500"
                  }`}
                >
                  English
                </button>

                <button
                  type="button"
                  onClick={() => handleLanguageChange("ar")}
                  className={`w-full px-4 py-3 text-left text-sm font-semibold transition ${
                    language === "ar"
                      ? "bg-blue-500/10 text-blue-500"
                      : "text-gray-300 hover:bg-gray-800 hover:text-blue-500"
                  }`}
                >
                  العربية
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="relative shrink-0 md:hidden">
          <button
            type="button"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setIsLanguageOpen(false);
            }}
            className="flex shrink-0 cursor-pointer items-center justify-center rounded-lg border border-gray-800 bg-gray-900 p-2 text-2xl text-gray-300 transition hover:border-blue-500 hover:text-blue-500"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`w-full max-w-[100vw] overflow-hidden border-t border-gray-800 bg-black/95 transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-125 opacity-100" : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="w-full px-4 py-4 sm:px-6">
          <div className="flex w-full flex-col gap-1">
            {navLinks.map((link) => {
              const linkId = link.href.replace("#", "");

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleLinkClick(linkId)}
                  className={`w-full rounded-lg px-4 py-3 text-base font-semibold transition ${
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

          {/* Mobile Language */}
          <div className="mt-3 border-t border-gray-800 pt-3">
            <button
              type="button"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-semibold text-gray-300 transition hover:bg-gray-900 hover:text-blue-500"
              aria-expanded={isLanguageOpen}
            >
              <span className="flex items-center gap-3">
                <HiGlobeAlt className="text-xl" />

                {language === "en" ? "Language" : "اللغة"}
              </span>

              <span className="text-sm">
                {language === "en" ? "English" : "العربية"}
              </span>
            </button>

            {isLanguageOpen && (
              <div className="mt-2 overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
                <button
                  type="button"
                  onClick={() => {
                    handleLanguageChange("en");
                    setIsMenuOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left text-sm font-semibold transition ${
                    language === "en"
                      ? "bg-blue-500/10 text-blue-500"
                      : "text-gray-300 hover:bg-gray-800 hover:text-blue-500"
                  }`}
                >
                  English
                </button>

                <button
                  type="button"
                  onClick={() => {
                    handleLanguageChange("ar");
                    setIsMenuOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left text-sm font-semibold transition ${
                    language === "ar"
                      ? "bg-blue-500/10 text-blue-500"
                      : "text-gray-300 hover:bg-gray-800 hover:text-blue-500"
                  }`}
                >
                  العربية
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
