import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="pt-36 px-6 md:px-12 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
        <div>
          <h3 className="text-6xl md:text-8xl font-black tracking-tighter mb-12 leading-[0.9]">
            TALK TO <br /> THE{" "}
            <span className="text-[#DD062F]">AGENT.</span>
          </h3>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4">
                Direct Line
              </p>
              <a
                href="tel:+19296820222"
                data-testid="link-phone"
                className="text-3xl font-black hover:text-[#DD062F] transition-colors duration-200"
              >
                +1 929-682-0222
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4">
                Email
              </p>
              <a
                href="mailto:ryan.l.niu@gmail.com"
                data-testid="link-email"
                className="text-3xl font-black hover:text-[#DD062F] transition-colors duration-200 break-all"
              >
                ryan.l.niu@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4">
                Web
              </p>
              <p className="text-3xl font-black text-gray-300 italic">
                nyajdesign.com
              </p>
            </motion.div>
          </div>
        </div>

        <div className="bg-[#F2F2F2] p-10 md:p-12">
          <p className="text-sm font-bold tracking-widest mb-8 uppercase">
            Send a Brief
          </p>
          <form
            className="space-y-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Your Name"
              data-testid="input-name"
              className="w-full bg-transparent border-b border-gray-300 py-4 text-base outline-none focus:border-[#DD062F] transition-colors duration-200"
            />
            <input
              type="email"
              placeholder="Your Email"
              data-testid="input-email"
              className="w-full bg-transparent border-b border-gray-300 py-4 text-base outline-none focus:border-[#DD062F] transition-colors duration-200"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              data-testid="textarea-message"
              className="w-full bg-transparent border-b border-gray-300 py-4 text-base outline-none focus:border-[#DD062F] transition-colors duration-200 resize-none"
            />
            <button
              type="submit"
              data-testid="button-submit"
              className="w-full py-5 bg-black text-white text-xs font-bold tracking-widest uppercase hover:bg-[#DD062F] transition-all duration-300 cursor-pointer"
            >
              Submit Case
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
