import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const features = [
  { title: "Производство", desc: "Волгоградская область, сделано в России" },
  { title: "Контроль", desc: "Эффективный моющий состав и проверенная технология" },
  { title: "Честная цена", desc: "Без накрутки за логистику и посредников" },
  { title: "Партнёрство", desc: "Выгодная партнёрская программа для бизнеса" },
];

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/7d97264b-f1da-48ff-b7f9-164137aa9cc6/files/9944539e-f3e4-4315-8617-25c4ccb9d5da.jpg"
            alt="Мыльные пузыри и пена — сила химии"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/75" />
        </motion.div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        <p className="text-cyan-400 uppercase text-xs tracking-[0.5em] mb-4 text-center">Почему INPURE</p>
        <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-16 leading-tight">
          Производим сами —<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
            предлагаем выгодно
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {features.map((f) => (
            <div key={f.title} className="bg-slate-950/80 p-6 hover:bg-cyan-950/60 transition-colors duration-300">
              <div className="w-8 h-px bg-cyan-400 mb-4" />
              <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">{f.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}