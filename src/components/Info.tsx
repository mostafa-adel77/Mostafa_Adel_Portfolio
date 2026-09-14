import { motion } from "framer-motion";
import { infoItems } from "../data/info";

export default function Info() {
  return (
    <section className="border-y border-gray-800 py-12">
      <div className="mx-auto grid max-w-6xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {infoItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="rounded-2xl border border-gray-800 bg-gray-900 p-6 text-center transition-colors duration-300 hover:border-blue-500/40"
          >
            <h3 className="text-3xl font-bold text-blue-500">{item.value}</h3>

            <p className="mt-2 text-sm text-gray-400">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
