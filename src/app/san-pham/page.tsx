import type { Metadata } from "next";
import { ProductList } from "@/components/san-pham/ProductList";

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
        <ProductList />
      </section>
    </>
  );
}
