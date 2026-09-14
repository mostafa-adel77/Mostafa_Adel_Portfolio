import { motion } from "framer-motion";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-x">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="eyebrow">My Skills</p>

          <h2 className="title">Technologies I Work With</h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Technologies and tools I use to build modern and responsive web
            applications.
          </p>
        </motion.div>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 35, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group flex h-44 flex-col items-center justify-center rounded-2xl border border-white/10 bg-gray-800/50 p-6 text-center backdrop-blur-sm transition-colors duration-300 hover:border-blue-500/40 hover:bg-blue-500/5 hover:shadow-xl hover:shadow-blue-500/10"
              >
                {/* Icon */}
                <div className="mb-5 flex h-16 w-16 items-center justify-center">
                  <Icon
                    className={`text-5xl transition-transform duration-300 group-hover:scale-110 ${skill.color}`}
                  />
                </div>

                {/* Skill Name */}
                <h3 className="text-base font-bold text-white transition-colors duration-300 group-hover:text-blue-400 md:text-lg">
                  {skill.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
