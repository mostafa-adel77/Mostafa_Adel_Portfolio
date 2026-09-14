import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center py-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        {/* Content */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold leading-tight text-white md:text-6xl"
          >
            Hi, I&apos;m <span className="text-blue-500">Mostafa Adel</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="eyebrow text-xl text-white"
          >
            Front-End Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg leading-8 text-gray-400"
          >
            I build modern, responsive, and user-friendly web applications using
            React.js, JavaScript, TypeScript, Strapi, and modern front-end
            technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.a
              href="/MOSTAFA ADEL CV.pdf"
              download="MOSTAFA ADEL CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-lg btn btn-primary p-6 font-semibold transition hover:bg-blue-700"
            >
              Download CV 📂
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-lg border border-gray-700 px-6 py-3 font-semibold text-gray-300 transition hover:border-blue-500 hover:text-blue-400"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>

        {/* Image / Developer Card */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <motion.img
            src="/profile.png"
            alt="Mostafa Adel"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.03 }}
            className="h-80 w-full object-contain md:h-125 md:w-120"
          />
        </motion.div>
      </div>
    </section>
  );
}
