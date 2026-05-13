import { motion } from "framer-motion";

const works = [
  {
    id: "01",
    type: "Brand Identity",
    title: "法拉盛市集餐车：从路边摊到排队王",
    img: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&q=80&w=800",
    className: "md:mt-0",
  },
  {
    id: "02",
    type: "Retail Design",
    title: "实体老店全面升级：让老客惊喜，让新客进店",
    img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800",
    className: "md:mt-20",
  },
  {
    id: "03",
    type: "Brand Identity",
    title: "纽约新派茶饮的视觉重塑",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    className: "md:mt-0",
  },
  {
    id: "04",
    type: "Interior Design",
    title: "高端美业的静谧空间",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",
    className: "md:mt-20",
  },
];

export default function Work() {
  return (
    <section className="pt-36 px-6 md:px-12 pb-20 max-w-[2000px] mx-auto w-full">
      <h3 className="text-6xl md:text-8xl font-black tracking-tighter mb-20">
        SELECTED WORK<span className="text-[#DD062F]">.</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {works.map((work, i) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            data-testid={`card-work-${work.id}`}
            className={`group cursor-pointer ${work.className}`}
          >
            <div className="aspect-[4/5] bg-[#F2F2F2] overflow-hidden">
              <img
                src={work.img}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                alt={work.title}
              />
            </div>
            <p className="mt-6 text-[10px] font-bold tracking-widest text-[#DD062F] uppercase">
              {work.type}
            </p>
            <h4 className="text-2xl font-black mt-2 leading-tight">{work.title}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
