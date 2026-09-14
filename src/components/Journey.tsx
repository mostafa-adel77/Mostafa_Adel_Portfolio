import { motion } from "framer-motion";
import { journey } from "../data/journey";

export default function Journey() {
  return (
    <motion.section
      id="journey"
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <p className="eyebrow">My Journey</p>

          <h2 className="text-3xl font-bold md:text-4xl">
            My Learning Journey
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            A timeline of my education, training, and experience as a Front-End
            Developer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-3xl">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gray-700 md:left-1/2 md:-translate-x-1/2" />

          {journey.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className={`relative flex items-start ${
                index !== journey.length - 1 ? "mb-12" : ""
              } ${index % 2 === 0 ? "md:justify-end" : ""}`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1 + 0.2,
                }}
                className="absolute left-4 top-1 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-blue-500 md:left-1/2"
              />

              {/* Card */}
              <div
                className={`ml-10 w-full rounded-xl border border-gray-800 bg-gray-900 p-6 ${
                  index % 2 === 0 ? "md:mr-[52%] md:ml-0" : "md:ml-[52%]"
                }`}
              >
                <span className="text-sm font-medium text-blue-500">
                  {item.year}
                </span>

                <h3 className="mt-2 text-xl font-bold">{item.title}</h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
