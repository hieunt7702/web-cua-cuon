export function CallToAction() {
  return (
    <section className="py-16 px-margin-mobile md:px-margin-desktop bg-background border-t border-surface-container-high">
      <div className="max-w-max-width mx-auto bg-gradient-to-r from-primary-container to-secondary-container rounded-3xl p-6 md:p-16 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-display-lg font-display-lg text-on-primary-container mb-4 text-3xl md:text-5xl">Nhận Báo Giá Ưu Đãi!</h2>
            <p className="text-body-md md:text-body-lg font-body-lg text-on-primary-container/80 max-w-xl text-base md:text-lg">
              Thợ đến ngay sau 30 phút, có mặt khảo sát tận nơi hoàn toàn miễn phí.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a href="tel:0982674327" className="bg-on-primary-container text-primary-container hover:bg-surface hover:text-primary px-8 py-4 rounded-xl font-label-md text-label-md flex items-center justify-center gap-2 transition-all shadow-xl hover:scale-105">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>phone_in_talk</span>
              GỌI NGAY
            </a>
            <a href="https://zalo.me/0982674327" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 text-on-primary-container backdrop-blur-sm border border-white/30 px-8 py-4 rounded-xl font-label-md text-label-md flex items-center justify-center gap-2 transition-all hover:scale-105">
              <span className="material-symbols-outlined">chat</span>
              NHẮN TIN ZALO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
