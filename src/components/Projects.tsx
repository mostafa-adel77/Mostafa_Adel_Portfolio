import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <p className="eyebrow">My Projects</p>

          <h2 className="text-3xl font-bold md:text-4xl">Featured Projects</h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Some of the projects I have built while learning and improving my
            front-end development skills.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 transition duration-300 hover:border-blue-500"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex gap-3">
                  {project.liveUrl === "#" ? (
                    <button
                      type="button"
                      onClick={() =>
                        toast("Live demo coming soon!", {
                          icon: "🤌🤌",
                        })
                      }
                      className="btn btn-warning"
                    >
                      🔔 Coming Soon
                    </button>
                  ) : (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      ↗️ Live Demo
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-gray-700 px-4 py-2 text-sm font-semibold text-gray-300 transition hover:border-blue-500 hover:text-blue-400"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
