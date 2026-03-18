const segments = [
  { icon: "🏠", label: "Дом" },
  { icon: "🏢", label: "Офис" },
  { icon: "🏭", label: "Производство" },
  { icon: "🚗", label: "Автомойки" },
  { icon: "🍽️", label: "Рестораны" },
  { icon: "🏗️", label: "Склады" },
];

const stats = [
  { value: "500+", label: "клиентов" },
  { value: "1000+", label: "позиций" },
  { value: "24ч", label: "доставка" },
];

export default function Featured() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col lg:flex-row">
      <div className="flex-1 relative overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/7d97264b-f1da-48ff-b7f9-164137aa9cc6/files/12869988-d193-485b-89a6-988ef038a2db.jpg"
          alt="Чистый офис — результат профессиональной химии"
          className="w-full h-full object-cover lg:min-h-screen"
          style={{ minHeight: "400px" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950/60" />
        <div className="absolute bottom-8 left-8 flex gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-white">
              <div className="text-2xl font-black text-cyan-400">{s.value}</div>
              <div className="text-xs uppercase tracking-widest text-white/50">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center px-10 py-16 lg:py-0 lg:px-16 bg-slate-950">
        <p className="uppercase text-cyan-400 text-xs tracking-[0.4em] mb-6 font-medium">
          Для любого объекта
        </p>
        <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight mb-6">
          От частного дома<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
            до промышленного
          </span><br />
          масштаба
        </h2>
        <p className="text-white/50 text-sm leading-relaxed mb-10 max-w-sm">
          Профессиональная химия, которая справляется с любым загрязнением. Концентрированные формулы, сертифицированные компоненты, проверенная эффективность.
        </p>

        <div className="grid grid-cols-3 gap-3 mb-10">
          {segments.map((s) => (
            <div
              key={s.label}
              className="border border-white/10 hover:border-cyan-400/50 bg-white/5 hover:bg-cyan-400/10 px-3 py-3 text-center transition-all duration-300 cursor-default"
            >
              <div className="text-xl mb-1">{s.icon}</div>
              <div className="text-white text-xs uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>

        <button className="bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-3 uppercase tracking-widest text-xs font-bold transition-colors duration-300 cursor-pointer w-fit">
          Смотреть каталог
        </button>
      </div>
    </div>
  );
}
