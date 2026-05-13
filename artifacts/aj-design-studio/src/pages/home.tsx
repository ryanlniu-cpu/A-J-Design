import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col pt-28 px-6 md:px-12">
      <div className="w-full h-[60vh] md:h-[70vh] bg-[#F2F2F2] overflow-hidden relative group">
        <img
          src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&q=80&w=2000"
          alt="Design Visual Hammer"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute bottom-8 left-8 bg-[#DD062F] text-white px-4 py-1 text-[10px] font-bold tracking-widest uppercase">
          New York Based
        </div>
      </div>

      <div className="mt-12 mb-20 flex flex-col md:flex-row justify-between items-start gap-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[13vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter"
        >
          DESIGN <br />
          <span className="text-gray-200">MEANS</span> <br />
          <span className="text-[#DD062F]">STRATEGY.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="md:max-w-md md:mt-auto md:mb-2"
        >
          <p className="text-lg font-light leading-relaxed text-gray-500">
            A&J设计工作室：专为纽约华人老板定制的"务实派"商业设计。
            好生意，不能输在"面子"上。我们通过设计，让您的产品"卖爆"。
          </p>
          <Link href="/contact">
            <button
              data-testid="button-start-project"
              className="mt-8 px-10 py-5 bg-black text-white text-xs font-bold tracking-widest uppercase hover:bg-[#DD062F] transition-all duration-300 cursor-pointer"
            >
              Start Your Project —
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
