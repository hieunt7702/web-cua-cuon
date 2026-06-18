export function CallToAction() {
  return (
    <section className="relative py-20 lg:py-24 border-t border-surface-container-high overflow-hidden">
      {/* Background Image & Dark Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/assets/images/hero1.png" 
          alt="Background Cửa Cuốn" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-white mb-4 text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight">
              Nhận Báo Giá Ưu Đãi!
            </h2>
            <p className="text-gray-300 max-w-xl text-base md:text-lg">
              Thợ đến ngay sau 30 phút, có mặt khảo sát tận nơi hoàn toàn miễn phí.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a href="tel:0982674327" className="bg-primary text-white hover:bg-[#e67e22] px-8 py-4 rounded-xl font-bold text-sm md:text-base flex items-center justify-center gap-2 transition-all shadow-xl hover:scale-105">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>phone_in_talk</span>
              GỌI NGAY
            </a>
            <a href="https://zalo.me/0982674327" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-bold text-sm md:text-base flex items-center justify-center gap-2 transition-all hover:scale-105">
              <span className="material-symbols-outlined">chat</span>
              NHẮN TIN ZALO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
