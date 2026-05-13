import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="bg-white min-h-screen text-[#1A1A1A] font-sans selection:bg-[#DD062F] selection:text-white overflow-x-hidden">
      <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-md flex justify-between items-center px-6 py-6 md:px-12 border-b border-gray-100/60">
        <Link href="/" className="cursor-pointer">
          <span className="text-2xl font-black tracking-tighter">
            A&J<span className="text-[#DD062F]">.</span>
          </span>
        </Link>
        <div className="flex gap-6 md:gap-8 text-[10px] font-bold tracking-[0.2em] uppercase">
          {navItems.map(({ label, href }) => {
            const active = location === href;
            return (
              <Link
                key={href}
                href={href}
                className={`transition-all duration-200 ${
                  active ? "text-[#DD062F]" : "text-gray-400 hover:text-black"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </nav>
      <AnimatePresence mode="wait">
        <motion.div
          key={location}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="min-h-screen flex flex-col"
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <footer className="px-6 md:px-12 py-10 border-t border-gray-100 flex justify-between text-[10px] font-medium text-gray-400 uppercase tracking-[0.2em]">
        <span>© 2026 A&J Design Studio</span>
        <span>NY Based / World Wide</span>
      </footer>
    </div>
  );
}
