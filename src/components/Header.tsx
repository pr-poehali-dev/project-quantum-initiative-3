interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-20 px-6 py-4 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-cyan-400 opacity-90 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white opacity-80" />
          </div>
          <span className="text-white text-sm tracking-wide font-bold">inpure Прогресс</span>
        </div>
        <nav className="flex gap-8 items-center">
          <a href="#about" className="text-white/70 hover:text-white transition-colors duration-300 uppercase text-xs tracking-widest">
            Продукция
          </a>
          <a href="#contact" className="text-white/70 hover:text-white transition-colors duration-300 uppercase text-xs tracking-widest">
            Контакты
          </a>
          <a href="#contact" className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white transition-all duration-300 uppercase text-xs tracking-widest px-4 py-2">
            Заказать
          </a>
        </nav>
      </div>
    </header>
  );
}
