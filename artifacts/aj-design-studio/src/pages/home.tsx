import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col justify-end p-6 md:p-16 w-full max-w-[2000px] mx-auto">
      <div className="relative w-full h-[60vh] md:h-[75vh] bg-muted overflow-hidden mb-8 md:mb-12">
        <img 
          src="https://picsum.photos/seed/ajstudio-hero/2000/1200" 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" 
          alt="Design Hammer"
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-6xl md:text-[10rem] font-black tracking-tighter leading-[0.85] mb-6 uppercase">
            BUSINESS <br/> IS ART.
          </h2>
        </div>
        <div className="max-w-md md:mb-4">
          <p className="text-lg md:text-2xl font-serif font-light tracking-tight text-muted-foreground leading-relaxed">
            <span className="text-foreground font-bold font-sans tracking-normal">A&J Design Studio:</span> 专为纽约华人老板定制的"务实派"商业设计。好生意，不能输在"面子"上。
          </p>
        </div>
      </div>
    </main>
  );
}
