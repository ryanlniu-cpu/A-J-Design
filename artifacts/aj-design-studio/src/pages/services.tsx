import { motion } from "framer-motion";

const pricing = [
  {
    title: "入门首选 · 基础款",
    price: "$1,200",
    desc: "适合刚起步的店铺。包含Logo设计、配色规范、门头效果图。",
  },
  {
    title: "人气推荐 · 常规款",
    price: "$1,800",
    desc: "适合系统升级。Logo优化、核心主视觉、10款配套辅料。",
  },
  {
    title: "品牌全案设计",
    price: "Custom",
    desc: "从命名、标语到完整视觉系统，打造可复制的连锁基因。",
  },
];

export default function Services() {
  return (
    <section className="pt-36 px-6 md:px-12 pb-20 max-w-4xl">
      <h3 className="text-6xl md:text-7xl font-black tracking-tighter mb-12 text-gray-200">
        SERVICES
      </h3>

      <div className="divide-y divide-gray-100">
        {pricing.map((srv, i) => (
          <motion.div
            key={srv.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            data-testid={`card-service-${i}`}
            className="py-12 group hover:pl-4 transition-all duration-300 flex justify-between items-center"
          >
            <div>
              <h4 className="text-3xl font-black group-hover:text-[#DD062F] transition-colors duration-200">
                {srv.title}
              </h4>
              <p className="text-gray-400 mt-2 max-w-sm font-light leading-relaxed">
                {srv.desc}
              </p>
            </div>
            <span className="text-2xl font-black shrink-0 ml-8">{srv.price}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
