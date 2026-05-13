import { motion } from "framer-motion";

const pricing = [
  {
    price: "$1,200",
    title: "入门首选 · 基础款",
    desc: "适合刚起步的店铺。包含 Logo、配色、门头招牌等核心 VI 设计。"
  },
  {
    price: "$1,800",
    title: "人气推荐 · 常规款",
    desc: "系统升级。主视觉优化、物料效果图、10款配套辅料设计。"
  },
  {
    price: "$2,800",
    title: "全案定制 · 旗舰款",
    desc: "从品牌战略到门头落地，一条龙服务。"
  }
];

const capabilities = [
  { title: "Brand Identity", zh: "品牌视觉系统" },
  { title: "Storefront Design", zh: "门头与招牌设计" },
  { title: "Print & Packaging", zh: "包装与印刷物料" },
  { title: "Digital Assets", zh: "社交媒体与数字物料" },
  { title: "Spatial Strategy", zh: "商业空间动线规划" }
];

export default function Services() {
  return (
    <section className="p-6 md:p-16 max-w-6xl mx-auto w-full">
      <div className="mb-32">
        <h3 className="text-6xl md:text-8xl font-black mb-16 tracking-tighter uppercase">PRICING</h3>
        <div className="border-t-4 border-foreground pt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          {pricing.map((tier, i) => (
            <motion.div 
              key={tier.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col group"
            >
              <span className="text-5xl md:text-6xl font-black tracking-tighter mb-6">{tier.price}</span>
              <h4 className="text-xl md:text-2xl font-bold mb-4 border-b border-muted pb-4">{tier.title}</h4>
              <p className="font-serif font-light text-muted-foreground leading-relaxed flex-1">{tier.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-24">
        <h3 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter uppercase">我们能做什么 <br/><span className="text-muted-foreground text-2xl md:text-3xl">WHAT WE DO</span></h3>
        <div className="flex flex-col">
          {capabilities.map((cap, i) => (
            <motion.div 
              key={cap.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-muted hover:border-foreground transition-colors cursor-default"
            >
              <span className="text-2xl md:text-4xl font-bold uppercase tracking-tight mb-2 md:mb-0 group-hover:pl-4 transition-all duration-300">{cap.title}</span>
              <span className="text-lg md:text-xl font-serif text-muted-foreground italic">{cap.zh}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
