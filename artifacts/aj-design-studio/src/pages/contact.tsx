import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="p-6 md:p-16 max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-16 md:gap-24 min-h-[70vh]">
      <div className="flex-1 md:w-1/2 flex flex-col">
        <h3 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">LET'S <br/> TALK <br/> BUSINESS.</h3>
        <p className="text-xl font-serif text-muted-foreground mb-16 max-w-md">
          Tell us about your business, your goals, and how we can make you look good. 留下您的联系方式，我们会在24小时内与您联系。
        </p>

        <div className="space-y-8 mt-auto">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Studio</p>
            <p className="text-lg font-bold">123 Bowery, Suite 402<br/>New York, NY 10002</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Contact</p>
            <p className="text-lg font-bold">hello@ajdesign.studio<br/>+1 (212) 555-0199</p>
          </div>
        </div>
      </div>

      <div className="flex-1 md:w-1/2">
        <form className="flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
          <div className="relative border-b-2 border-muted focus-within:border-foreground transition-colors pb-2">
            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-4">Your Name / 您的姓名</label>
            <input type="text" className="w-full bg-transparent outline-none text-2xl font-bold placeholder:text-muted-foreground/30" placeholder="John Doe / 张三" />
          </div>
          
          <div className="relative border-b-2 border-muted focus-within:border-foreground transition-colors pb-2">
            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-4">Business Type / 行业类型</label>
            <input type="text" className="w-full bg-transparent outline-none text-2xl font-bold placeholder:text-muted-foreground/30" placeholder="Restaurant, Salon, Retail..." />
          </div>

          <div className="relative border-b-2 border-muted focus-within:border-foreground transition-colors pb-2">
            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-4">Message / 需求简述</label>
            <textarea rows={4} className="w-full bg-transparent outline-none text-xl font-serif placeholder:text-muted-foreground/30 resize-none" placeholder="We need a new storefront... / 我们需要重新设计门头..."></textarea>
          </div>

          <button className="self-start group flex items-center gap-4 text-2xl font-black uppercase tracking-tighter hover:text-muted-foreground transition-colors cursor-pointer">
            Submit Request 
            <span className="w-12 h-12 rounded-full border-2 border-foreground group-hover:border-muted-foreground flex items-center justify-center transition-all group-hover:translate-x-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
