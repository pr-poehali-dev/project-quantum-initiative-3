import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div ref={container} className="relative flex items-center justify-center h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/7d97264b-f1da-48ff-b7f9-164137aa9cc6/files/508ab515-eecb-46b9-a23b-2577efda9b35.jpg"
          alt="Профессиональная бытовая химия"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-cyan-950/50 to-slate-900/80" />
      </motion.div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-teal-400/10 blur-3xl" />
      </div>

      <motion.div style={{ opacity }} className="relative z-10 text-center text-white px-6 max-w-4xl">
        <p className="text-xs md:text-sm uppercase tracking-[0.5em] mb-6 text-cyan-400 font-medium">
          Российское производство
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-none">
          INPURE<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
            ПРОГРЕСС
          </span>
        </h1>
        <p className="text-base md:text-lg max-w-xl mx-auto text-white/70 leading-relaxed mb-10">
          Наводи лоск в доме легко и без ущерба для бюджета — без накрутки за логистику и переплаты за бренд
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3 uppercase tracking-widest text-xs font-bold transition-colors duration-300 cursor-pointer">
            Найти в магазине
          </button>
          <button className="border border-white/30 hover:border-white text-white px-8 py-3 uppercase tracking-widest text-xs font-bold transition-colors duration-300 cursor-pointer">
            Наш ассортимент
          </button>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs uppercase tracking-widest">Листать</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-cyan-400 to-transparent"
        />
      </div>
    </div>
  );
}
