export function ProcessSteps() {
  return (
    <section className="py-16 md:py-24 bg-surface-container-low relative overflow-hidden border-t border-surface-container-high">
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary-container/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="text-center mb-10 md:mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"></div>
          <h2 className="text-headline-md md:text-headline-lg font-headline-lg text-on-surface mb-4 uppercase relative z-10 px-4 md:px-0">Quy Trình 3 Bước Nhanh Chóng</h2>
          <div className="w-24 h-1 bg-primary-container mx-auto relative z-10"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-surface-container-highest z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            <div className="bg-surface-container p-6 md:p-8 rounded-2xl shadow-lg border border-surface-container-high text-center relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-surface border-4 border-primary-container text-primary-container rounded-full flex items-center justify-center font-display-lg text-2xl mb-4 md:mb-6 shadow-xl">1</div>
              <h3 className="text-headline-sm md:text-headline-md font-headline-md text-on-surface mb-3">Nhận Yêu Cầu</h3>
              <p className="text-body-sm md:text-body-md text-on-surface-variant">Nhận Yêu Cầu Hotline/Zalo, điều phối thợ đến ngay sau 30 phút.</p>
            </div>
            <div className="bg-surface-container p-6 md:p-8 rounded-2xl shadow-lg border border-surface-container-high text-center relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-surface border-4 border-primary-container text-primary-container rounded-full flex items-center justify-center font-display-lg text-2xl mb-4 md:mb-6 shadow-xl">2</div>
              <h3 className="text-headline-sm md:text-headline-md font-headline-md text-on-surface mb-3">Tiến Hành Sửa Chữa</h3>
              <p className="text-body-sm md:text-body-md text-on-surface-variant">Kiểm tra lỗi, báo giá minh bạch và tiến hành khắc phục sự cố triệt để.</p>
            </div>
            <div className="bg-surface-container p-6 md:p-8 rounded-2xl shadow-lg border border-surface-container-high text-center relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-surface border-4 border-primary-container text-primary-container rounded-full flex items-center justify-center font-display-lg text-2xl mb-4 md:mb-6 shadow-xl">3</div>
              <h3 className="text-headline-sm md:text-headline-md font-headline-md text-on-surface mb-3">Bàn Giao & Thanh Toán</h3>
              <p className="text-body-sm md:text-body-md text-on-surface-variant">Kiểm tra vận hành, bàn giao cho khách hàng và tiến hành thanh toán, bảo hành.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
