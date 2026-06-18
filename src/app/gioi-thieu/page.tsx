import type { Metadata } from "next";
import { AboutUs } from "@/components/home/AboutUs";

export const metadata: Metadata = {
  title: "Giới Thiệu Cửa Cuốn Việt Đức - Lịch Sử & Tầm Nhìn",
  description: "Tìm hiểu về Cửa Cuốn Việt Đức, đơn vị uy tín hàng đầu trong lĩnh vực lắp đặt và sửa chữa cửa cuốn tại TP.HCM, Bình Dương và Đồng Nai.",
};

export default function GioiThieu() {
  return (
    <>
      {/* Page Hero */}
      <section className="py-16 md:py-20 bg-surface relative overflow-hidden border-b border-surface-container-high">
        <div className="absolute inset-0 opacity-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-container/10 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-container/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container border border-surface-container-high mb-6 shadow-sm">
            <span className="material-symbols-outlined text-primary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
            <span className="text-label-sm text-on-surface-variant">/</span>
            <span className="text-label-sm font-label-sm text-primary-container uppercase tracking-widest">Giới Thiệu</span>
          </div>
          
          <h1 className="text-headline-lg md:text-display-sm font-display-lg text-on-surface mb-4 uppercase tracking-wide">
            Về Cửa Cuốn Việt Đức
          </h1>
          
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent mb-6"></div>
          
          <p className="text-body-md md:text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Đơn vị tiên phong trong lĩnh vực lắp đặt và sửa chữa cửa cuốn tại khu vực Miền Nam với hơn 10 năm kinh nghiệm.
          </p>
        </div>
      </section>

      <AboutUs />

      {/* Lịch sử và Tầm nhìn */}
      <section className="py-24 bg-background relative overflow-hidden border-t border-surface-container-high">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-container/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-surface-container px-4 py-2 rounded-full mb-6 border border-surface-container-high shadow-sm">
                <span className="material-symbols-outlined text-primary-container text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>history_edu</span>
                <span className="text-label-sm font-label-sm text-on-surface uppercase tracking-widest">Lịch sử hình thành</span>
              </div>
              <h2 className="text-headline-lg font-headline-lg text-on-surface mb-6 uppercase">Hành Trình Hơn 10 Năm Phục Vụ</h2>
              <p className="text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                Khởi nguồn từ một xưởng dịch vụ nhỏ vào năm 2013, Cửa Cuốn Việt Đức đã không ngừng nỗ lực vươn lên thành một trong những công ty hàng đầu chuyên cung cấp, lắp đặt và sửa chữa cửa cuốn chuyên nghiệp.
              </p>
              <p className="text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                Chúng tôi tự hào là đối tác tin cậy của hàng nghìn gia đình, cửa hàng và nhà xưởng, bảo vệ an toàn cho các công trình trải dài khắp TP.Hồ Chí Minh, Bình Dương và Đồng Nai.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="rounded-3xl overflow-hidden shadow-md relative border border-surface-container-highest bg-surface-container">
                <img src="/assets/images/cuacuon30.png" alt="Lịch sử Cửa Cuốn Việt Đức" className="w-full h-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Giá trị cốt lõi */}
      <section className="py-24 bg-surface relative overflow-hidden border-t border-surface-container-high">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg font-headline-lg text-on-surface mb-4 uppercase">Giá Trị Cốt Lõi</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container p-8 rounded-2xl border border-surface-container-high text-center hover:-translate-y-2 transition-transform duration-300">
              <span className="material-symbols-outlined text-5xl text-primary-container mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <h3 className="text-headline-md text-on-surface mb-3">Chất Lượng Uy Tín</h3>
              <p className="text-body-md text-on-surface-variant">Cam kết sử dụng linh kiện chính hãng, bảo hành dài hạn 100%.</p>
            </div>
            <div className="bg-surface-container p-8 rounded-2xl border border-surface-container-high text-center hover:-translate-y-2 transition-transform duration-300">
              <span className="material-symbols-outlined text-5xl text-primary-container mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>speed</span>
              <h3 className="text-headline-md text-on-surface mb-3">Phục Vụ Siêu Tốc</h3>
              <p className="text-body-md text-on-surface-variant">Có mặt ngay sau 30 phút nhận yêu cầu, phục vụ 24/7 kể cả Lễ Tết.</p>
            </div>
            <div className="bg-surface-container p-8 rounded-2xl border border-surface-container-high text-center hover:-translate-y-2 transition-transform duration-300">
              <span className="material-symbols-outlined text-5xl text-primary-container mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
              <h3 className="text-headline-md text-on-surface mb-3">Đội Ngũ Tận Tâm</h3>
              <p className="text-body-md text-on-surface-variant">Thợ lành nghề, đạo đức tốt, báo giá minh bạch trước khi làm.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
