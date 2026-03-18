import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/7d97264b-f1da-48ff-b7f9-164137aa9cc6/files/508ab515-eecb-46b9-a23b-2577efda9b35.jpg"
          alt="Профессиональная бытовая химия"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 opacity-70">Профессиональная химия</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          ЧИСТО<br/>ВЕЗДЕ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
          Бытовая химия для дома, офиса, производства, ресторанов, автомоек и любых других объектов
        </p>
        <button className="mt-8 bg-white text-black px-8 py-3 uppercase tracking-wide text-sm font-medium hover:bg-neutral-200 transition-colors duration-300 cursor-pointer">
          Получить предложение
        </button>
      </div>
    </div>
  );
}