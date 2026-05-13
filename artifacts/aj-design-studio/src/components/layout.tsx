import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="bg-background min-h-screen text-foreground font-sans selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <nav className="fixed top-0 w-full flex justify-between items-center p-6 md:p-8 z-50 mix-blend-difference text-white">
        <Link href="/" className="cursor-pointer hover:opacity-70 transition-opacity">
          <h1 className="text-2xl md:text-3xl font-black tracking-tighter">A&J.</h1>
        </Link>
        <div className="space-x-6 md:space-x-8 text-xs md:text-sm font-bold tracking-widest uppercase">
          <Link href="/work" className={`pb-1 ${location === '/work' ? 'border-b-2 border-white' : 'hover:border-b-2 hover:border-white/50'}`}>Work</Link>
          <Link href="/services" className={`pb-1 ${location === '/services' ? 'border-b-2 border-white' : 'hover:border-b-2 hover:border-white/50'}`}>Services</Link>
          <Link href="/contact" className={`pb-1 ${location === '/contact' ? 'border-b-2 border-white' : 'hover:border-b-2 hover:border-white/50'}`}>Contact</Link>
        </div>
      </nav>
      <AnimatePresence mode="wait">
        <motion.div
          key={location}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="pt-24 min-h-screen flex flex-col"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
