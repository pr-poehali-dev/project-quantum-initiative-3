export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-slate-950 border-t border-cyan-900/40 py-6 sm:py-8 lg:py-10 px-6 sm:px-8 h-full w-full flex flex-col justify-between">

            <div className="flex justify-between items-start flex-wrap gap-8">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-2 uppercase text-cyan-400/60 text-xs tracking-widest">Продукция</h3>
                <a href="#catalog" className="text-white/60 hover:text-cyan-400 transition-colors duration-300 text-sm">Каталог</a>
                <a href="#segments" className="text-white/60 hover:text-cyan-400 transition-colors duration-300 text-sm">Сегменты</a>
                <a href="#about" className="text-white/60 hover:text-cyan-400 transition-colors duration-300 text-sm">О компании</a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-2 uppercase text-cyan-400/60 text-xs tracking-widest">Клиентам</h3>
                <a href="#wholesale" className="text-white/60 hover:text-cyan-400 transition-colors duration-300 text-sm">Оптовикам</a>
                <a href="#delivery" className="text-white/60 hover:text-cyan-400 transition-colors duration-300 text-sm">Доставка</a>
                <a href="#contact" className="text-white/60 hover:text-cyan-400 transition-colors duration-300 text-sm">Связаться</a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-2 uppercase text-cyan-400/60 text-xs tracking-widest">Контакты</h3>
                <span className="text-white/60 text-sm">info@inpure.ru</span>
                <span className="text-white/60 text-sm">+7 (800) 000-00-00</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <div>
                <h1 className="text-[13vw] sm:text-[11vw] lg:text-[9vw] leading-[0.85] text-white font-black tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">inpure</span>
                </h1>
                <h1 className="text-[7vw] sm:text-[5.5vw] lg:text-[4.5vw] leading-[0.85] text-white/30 font-black tracking-tight">
                  Прогресс
                </h1>
              </div>
              <p className="text-white/30 text-xs uppercase tracking-widest">{new Date().getFullYear()} inpure Прогресс</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
