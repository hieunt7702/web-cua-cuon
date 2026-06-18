import Link from "next/link";

export function AboutUs() {
  return (
    <section className="py-24 bg-surface border-b border-surface-container-high relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-container/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-2xl relative group">
              <img 
                src="/assets/images/hero.jpg" 
                alt="Về Cửa Cuốn Việt Đức" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="font-display-lg text-4xl mb-1 text-primary-container">10+</div>
                <div className="font-label-md text-sm uppercase tracking-widest text-white/80">Năm Kinh Nghiệm</div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full mb-6">
              <span className="material-symbols-outlined text-primary-container text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
              <span className="text-label-sm font-label-sm text-on-surface uppercase tracking-widest">Về Chúng Tôi</span>
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface mb-6 uppercase">Cửa Cuốn Việt Đức</h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant mb-6 leading-relaxed">
              Được thành lập với sứ mệnh mang đến sự an tâm tuyệt đối cho mọi gia đình và doanh nghiệp, <strong>Cửa Cuốn Việt Đức</strong> tự hào là đơn vị tiên phong trong lĩnh vực lắp đặt, sửa chữa và bảo dưỡng cửa cuốn.
            </p>
            <p className="text-body-md font-body-md text-on-surface-variant mb-8 leading-relaxed">
              Với đội ngũ kỹ thuật viên lành nghề, trang thiết bị hiện đại và linh kiện chính hãng, chúng tôi cam kết mang lại dịch vụ nhanh chóng, chuyên nghiệp và giá cả cạnh tranh nhất thị trường.
            </p>
            <a href="tel:0982674327" className="inline-flex items-center gap-3 bg-primary-container hover:bg-primary text-on-primary-container text-label-md font-label-md px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-primary-container/20 group">
              <span className="material-symbols-outlined group-hover:rotate-12 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>engineering</span>
              GỌI THỢ NGAY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
