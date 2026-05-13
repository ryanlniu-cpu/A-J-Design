import { motion } from "framer-motion";

const works = [
  {
    id: "01",
    type: "Food Truck",
    title: "从\"路边摊\"到\"排队王\"",
    img: "https://picsum.photos/seed/ajwork01/800/1000",
    className: "md:mt-0"
  },
  {
    id: "02",
    type: "Store Upgrade",
    title: "让老客惊喜，让新客进店",
    img: "https://picsum.photos/seed/ajwork02/800/1000",
    className: "md:mt-32"
  },
  {
    id: "03",
    type: "Brand Identity",
    title: "纽约新派茶饮的视觉重塑",
    img: "https://picsum.photos/seed/ajwork03/800/1000",
    className: "md:mt-0"
  },
  {
    id: "04",
    type: "Interior Design",
    title: "高端美业的静谧空间",
    img: "https://picsum.photos/seed/ajwork04/800/1000",
    className: "md:mt-32"
  }
];

export default function Work() {
  return (
    <section className="p-6 md:p-16 max-w-[2000px] mx-auto w-full">
      <h3 className="text-6xl md:text-8xl font-black mb-16 tracking-tighter uppercase">SELECTED WORKS</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        {works.map((work, i) => (
          <motion.div 
            key={work.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`space-y-6 group cursor-pointer ${work.className}`}
          >
            <div className="bg-muted aspect-[4/5] overflow-hidden">
               <img 
                 src={work.img} 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
                 alt={work.title} 
               />
            </div>
            <div className="flex justify-between items-start border-t-2 border-foreground pt-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Case {work.id} / {work.type}</p>
                <h4 className="text-2xl md:text-3xl font-bold leading-tight font-serif italic">{work.title}</h4>
              </div>
              <div className="w-8 h-8 rounded-full border border-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
