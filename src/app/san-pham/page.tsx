import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sản Phẩm Cửa Cuốn Cao Cấp - Phụ Kiện Chính Hãng",
  description: "Tổng hợp các loại cửa cuốn Đức, Úc, Đài Loan và phụ kiện motor, bình lưu điện, remote cửa cuốn chính hãng chất lượng cao.",
};

export default function SanPham() {
  return (
    <>
      {/* Page Hero */}
      <section className="py-16 md:py-20 bg-surface relative overflow-hidden border-b border-surface-container-high">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-container/10 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-container/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container border border-surface-container-high mb-6 shadow-sm">
            <span className="material-symbols-outlined text-primary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
            <span className="text-label-sm text-on-surface-variant">/</span>
            <span className="text-label-sm font-label-sm text-primary-container uppercase tracking-widest">Sản Phẩm</span>
          </div>
          
          <h1 className="text-headline-lg md:text-display-sm font-display-lg text-on-surface mb-4 uppercase tracking-wide">
            Cửa Cuốn & Phụ Kiện
          </h1>
          
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent mb-6"></div>
          
          <p className="text-body-md md:text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Phân phối các dòng cửa cuốn Đức, Úc cao cấp và các linh phụ kiện thay thế chính hãng chất lượng cao.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 bg-background relative overflow-hidden border-t border-surface-container-high">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          
          {/* Tab Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-2 rounded-full bg-primary-container text-on-primary-container font-medium text-body-md transition-colors shadow-lg">Tất Cả</button>
            <button className="px-6 py-2 rounded-full bg-surface-container border border-surface-container-high text-on-surface hover:text-primary-container font-medium text-body-md transition-colors">Cửa Cuốn Đức</button>
            <button className="px-6 py-2 rounded-full bg-surface-container border border-surface-container-high text-on-surface hover:text-primary-container font-medium text-body-md transition-colors">Motor Cửa Cuốn</button>
            <button className="px-6 py-2 rounded-full bg-surface-container border border-surface-container-high text-on-surface hover:text-primary-container font-medium text-body-md transition-colors">Bình Lưu Điện</button>
            <button className="px-6 py-2 rounded-full bg-surface-container border border-surface-container-high text-on-surface hover:text-primary-container font-medium text-body-md transition-colors">Remote</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product 1 */}
            <div className="bg-surface rounded-2xl border border-surface-container-high overflow-hidden group hover:border-primary-container/50 transition-colors shadow-lg">
              <div className="aspect-square bg-surface-container-high relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1590847926227-c8d19760081e?w=800&q=80" alt="Cửa cuốn Đức" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="text-label-sm text-on-surface-variant mb-2">CỬA CUỐN KHE THOÁNG</div>
                <h3 className="text-headline-md text-on-surface mb-4">Cửa Cuốn Đức Titadoor</h3>
                <a href="tel:0982674327" className="block w-full text-center py-2 border border-primary-container text-primary-container rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-colors">Liên hệ báo giá</a>
              </div>
            </div>
            {/* Product 2 */}
            <div className="bg-surface rounded-2xl border border-surface-container-high overflow-hidden group hover:border-primary-container/50 transition-colors shadow-lg">
              <div className="aspect-square bg-surface-container-high relative overflow-hidden p-8 flex items-center justify-center">
                <span className="material-symbols-outlined text-9xl text-surface-container-highest" style={{ fontVariationSettings: "'FILL' 1" }}>settings_power</span>
              </div>
              <div className="p-6">
                <div className="text-label-sm text-on-surface-variant mb-2">MOTOR CỬA CUỐN</div>
                <h3 className="text-headline-md text-on-surface mb-4">Motor YH Chính Hãng Đài Loan</h3>
                <a href="tel:0982674327" className="block w-full text-center py-2 border border-primary-container text-primary-container rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-colors">Liên hệ báo giá</a>
              </div>
            </div>
            {/* Product 3 */}
            <div className="bg-surface rounded-2xl border border-surface-container-high overflow-hidden group hover:border-primary-container/50 transition-colors shadow-lg">
              <div className="aspect-square bg-surface-container-high relative overflow-hidden p-8 flex items-center justify-center">
                <span className="material-symbols-outlined text-9xl text-surface-container-highest" style={{ fontVariationSettings: "'FILL' 1" }}>battery_charging_full</span>
              </div>
              <div className="p-6">
                <div className="text-label-sm text-on-surface-variant mb-2">BÌNH LƯU ĐIỆN (UPS)</div>
                <h3 className="text-headline-md text-on-surface mb-4">Bình Lưu Điện YH 400kg</h3>
                <a href="tel:0982674327" className="block w-full text-center py-2 border border-primary-container text-primary-container rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-colors">Liên hệ báo giá</a>
              </div>
            </div>
            {/* Product 4 */}
            <div className="bg-surface rounded-2xl border border-surface-container-high overflow-hidden group hover:border-primary-container/50 transition-colors shadow-lg">
              <div className="aspect-square bg-surface-container-high relative overflow-hidden p-8 flex items-center justify-center">
                <span className="material-symbols-outlined text-9xl text-surface-container-highest" style={{ fontVariationSettings: "'FILL' 1" }}>settings_remote</span>
              </div>
              <div className="p-6">
                <div className="text-label-sm text-on-surface-variant mb-2">REMOTE CHÍNH HÃNG</div>
                <h3 className="text-headline-md text-on-surface mb-4">Tay Điều Khiển Remote YH</h3>
                <a href="tel:0982674327" className="block w-full text-center py-2 border border-primary-container text-primary-container rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-colors">Liên hệ báo giá</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
