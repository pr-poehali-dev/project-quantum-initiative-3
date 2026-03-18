export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/woman-horse.jpg"
          alt="Woman on horse in countryside"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Для любого объекта и задачи</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          От частного дома до промышленного склада — профессиональная химия, которая справляется с любым загрязнением. Безопасно, эффективно, выгодно.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          {["Дом и офис", "Рестораны", "Автомойки", "Производства", "Склады", "Бизнес-центры"].map((item) => (
            <span key={item} className="border border-neutral-300 px-3 py-1 text-sm text-neutral-700 uppercase tracking-wide">
              {item}
            </span>
          ))}
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Смотреть каталог
        </button>
      </div>
    </div>
  );
}