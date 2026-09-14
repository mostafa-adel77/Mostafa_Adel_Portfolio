import { motion } from "framer-motion";
import { highlights } from "../data/about";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">About Me</p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Passionate About Front-End Development
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              I&apos;m a Computer Science student at Menoufia University and a
              passionate Front-End Developer who enjoys building modern,
              responsive, and user-friendly web applications.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              I work mainly with React.js, JavaScript, TypeScript, Tailwind CSS,
              Zustand, and REST APIs. I&apos;m always learning new technologies
              and improving my skills through real-world projects.
            </p>
          </motion.div>

          {/* Highlights */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="rounded-xl border border-gray-700 bg-gray-900 p-6 transition-colors duration-300 hover:border-blue-500/50 hover:bg-gray-950"
              >
                <h3 className="text-lg font-bold text-white">
                  {highlight.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
