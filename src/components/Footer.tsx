import { FaGithub, FaLinkedin } from "react-icons/fa";
import { translations } from "../languages/translations";

type FooterProps = {
  language: "en" | "ar";
};

export default function Footer({ language }: FooterProps) {
  const t = translations[language];

  return (
    <footer className="border-t border-gray-800 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © 2026 Mostafa Adel. {t.footer.rights}
        </p>

        {/* Social Links */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <a
            href="https://www.linkedin.com/in/mostafa-adel-6551a3381/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-2xl border border-white/5 bg-white/3 p-4 transition duration-300 hover:border-indigo-500/30 hover:bg-indigo-500/5"
          >
            <FaLinkedin className="text-xl text-indigo-400 transition group-hover:text-white" />

            <span className="text-sm text-gray-300 transition group-hover:text-indigo-400">
              LinkedIn
            </span>
          </a>

          <a
            href="https://github.com/mostafa-adel77"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-2xl border border-white/5 bg-white/3 p-4 transition duration-300 hover:border-indigo-500/30 hover:bg-indigo-500/5"
          >
            <FaGithub className="text-xl text-indigo-400 transition group-hover:text-white" />

            <span className="text-sm text-gray-300 transition group-hover:text-indigo-400">
              GitHub
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
