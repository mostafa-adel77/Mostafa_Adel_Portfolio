import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_ejxlm56",
        "template_qvd85wd",
        form.current,
        "2IBQ8JMkkei_P5_c1",
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.current?.reset();
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <motion.section
      id="contact"
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-x">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="eyebrow">My Contact</p>

          <h2 className="title">Let&apos;s Work Together</h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Have a project or opportunity in mind? Feel free to get in touch
            with me.
          </p>
        </div>

        {/* Contact Content */}
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-gray-900 p-8 md:p-10"
          >
            <div className="mb-8">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-indigo-400">
                Get in touch
              </p>

              <h3 className="text-2xl font-bold text-white md:text-3xl">
                Let&apos;s talk about your project.
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your team.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:ma5745768@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/3 p-4 transition duration-300 hover:border-indigo-500/30 hover:bg-indigo-500/5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-xl text-indigo-400 transition group-hover:bg-indigo-500 group-hover:text-white">
                  <HiOutlineMail />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-gray-300 transition group-hover:text-indigo-400">
                    ma5745768@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+201205216828"
                className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/3 p-4 transition duration-300 hover:border-indigo-500/30 hover:bg-indigo-500/5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-lg text-indigo-400 transition group-hover:bg-indigo-500 group-hover:text-white">
                  <FaPhoneAlt />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-gray-300 transition group-hover:text-indigo-400">
                    +20 1205216828
                  </p>
                </div>
              </a>

              {/* Location */}
              <a
                href="https://maps.app.goo.gl/FMmmgdYrvKUpcbg99"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/3 p-4 transition duration-300 hover:border-indigo-500/40 hover:bg-white/5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-xl text-indigo-400">
                  <CiLocationOn />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-gray-300">Egypt</p>
                </div>
              </a>

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
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-gray-900 p-8 md:p-10"
          >
            <div className="mb-8">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-indigo-400">
                Send a message
              </p>

              <h3 className="text-2xl font-bold text-white md:text-3xl">
                Contact Me
              </h3>
            </div>

            {/* Name */}
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full rounded-xl border border-white/10 bg-white/4 px-4 py-3.5 text-white placeholder:text-gray-600 outline-none transition duration-300 focus:border-indigo-500 focus:bg-white/6 focus:ring-2 focus:ring-indigo-500/10"
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full rounded-xl border border-white/10 bg-white/4 px-4 py-3.5 text-white placeholder:text-gray-600 outline-none transition duration-300 focus:border-indigo-500 focus:bg-white/6 focus:ring-2 focus:ring-indigo-500/10"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Write your message..."
                required
                className="w-full resize-none rounded-xl border border-white/10 bg-white/4 px-4 py-3.5 text-white placeholder:text-gray-600 outline-none transition duration-300 focus:border-indigo-500 focus:bg-white/6 focus:ring-2 focus:ring-indigo-500/10"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full cursor-pointer rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/20 transition duration-300 hover:-translate-y-0.5 hover:from-indigo-400 hover:to-violet-400 hover:shadow-indigo-500/30 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}
