"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <footer className="bg-surface-container w-full border-t-[4px] border-primary-container relative overflow-hidden mt-auto">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

            {/* Column 1: Brand & Contact */}
            <div className="space-y-6 lg:col-span-2 lg:pr-8">
              <div className="flex items-center w-64 md:w-80 h-16 shrink-0">
                <img src="/assets/images/logo.png" alt="Cửa cuốn Việt Đức Logo" className="h-16 md:h-20 w-auto object-contain scale-[2.5] origin-left -ml-10 md:-ml-16" />
              </div>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Giải pháp an ninh toàn diện. Phục vụ chuyên nghiệp, tận tâm, có mặt nhanh chóng sau 30 phút.
              </p>
              <div className="space-y-3 pt-4 border-t border-surface-container-highest">
                <div className="flex items-start gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary-container shrink-0 mt-0.5 text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  <div className="flex flex-col gap-1">
                    <span className="font-medium text-on-surface">Hệ thống hơn 50+ chi nhánh</span>
                  </div>

                </div>
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary-container text-xl shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                  <span className="font-medium text-on-surface">Hotline:</span>
                  <a href="tel:0982674327" className="text-primary-container hover:text-primary transition-colors font-medium text-body-md">098.267.4327</a>
                </div>
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary-container text-xl shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                  <span className="font-medium text-on-surface">Email:</span>
                  <a href="mailto:cuacuonvietduc0421@gmail.com" className="hover:text-primary-container transition-colors truncate text-body-md">cuacuonvietduc0421@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Column 2: Dịch Vụ Nổi Bật */}
            <div>
              <h3 className="text-title-lg font-headline-sm text-on-surface mb-6 relative inline-block">
                Dịch Vụ Nổi Bật
                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-container rounded-full"></span>
              </h3>
              <ul className="space-y-4">
                <li><Link href="/dich-vu" className="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container transition-all hover:translate-x-1"><span className="material-symbols-outlined text-sm">chevron_right</span> Sửa cửa cuốn 24/7</Link></li>
                <li><Link href="/dich-vu" className="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container transition-all hover:translate-x-1"><span className="material-symbols-outlined text-sm">chevron_right</span> Lắp đặt cửa cuốn mới</Link></li>
                <li><Link href="/dich-vu" className="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container transition-all hover:translate-x-1"><span className="material-symbols-outlined text-sm">chevron_right</span> Thay motor chính hãng</Link></li>
                <li><Link href="/dich-vu" className="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container transition-all hover:translate-x-1"><span className="material-symbols-outlined text-sm">chevron_right</span> Sửa bình lưu điện (UPS)</Link></li>
                <li><Link href="/dich-vu" className="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container transition-all hover:translate-x-1"><span className="material-symbols-outlined text-sm">chevron_right</span> Sao chép Remote</Link></li>
              </ul>
            </div>

            {/* Column 3: Hỗ Trợ Khách Hàng */}
            <div>
              <h3 className="text-title-lg font-headline-sm text-on-surface mb-6 relative inline-block">
                Hỗ Trợ Khách Hàng
                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-container rounded-full"></span>
              </h3>
              <ul className="space-y-4">
                <li><Link href="/gioi-thieu" className="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container transition-all hover:translate-x-1"><span className="material-symbols-outlined text-sm">chevron_right</span> Về Chúng Tôi</Link></li>
                <li><Link href="/bai-viet" className="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container transition-all hover:translate-x-1"><span className="material-symbols-outlined text-sm">chevron_right</span> Bảng giá dịch vụ</Link></li>
                <li><Link href="/bai-viet" className="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container transition-all hover:translate-x-1"><span className="material-symbols-outlined text-sm">chevron_right</span> Chính sách bảo hành</Link></li>
                <li><Link href="/bai-viet" className="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container transition-all hover:translate-x-1"><span className="material-symbols-outlined text-sm">chevron_right</span> Quy trình tiếp nhận</Link></li>
                <li><Link href="/lien-he" className="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container transition-all hover:translate-x-1"><span className="material-symbols-outlined text-sm">chevron_right</span> Gửi yêu cầu hỗ trợ</Link></li>
              </ul>
            </div>

            {/* Column 4: Mạng Lưới Phục Vụ */}
            <div>
              <h3 className="text-title-lg font-headline-sm text-on-surface mb-6 relative inline-block">
                Mạng Lưới Phục Vụ
                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-container rounded-full"></span>
              </h3>
              <p className="text-body-md text-on-surface-variant mb-4">Hệ thống trạm dịch vụ có mặt sau 30 phút tại các khu vực:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-container-high border border-surface-container-highest rounded-full text-label-sm text-on-surface">TP. Hồ Chí Minh</span>
                <span className="px-3 py-1 bg-surface-container-high border border-surface-container-highest rounded-full text-label-sm text-on-surface">Bình Dương</span>
                <span className="px-3 py-1 bg-surface-container-high border border-surface-container-highest rounded-full text-label-sm text-on-surface">Đồng Nai</span>
                <span className="px-3 py-1 bg-surface-container-high border border-surface-container-highest rounded-full text-label-sm text-on-surface">Long An</span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-surface-container-high py-6 border-t border-surface-container-highest relative z-10">
          <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-body-sm text-on-surface-variant">
              © <span>{currentYear}</span> <span className="font-medium text-primary-container">Cửa Cuốn Việt Đức</span>. Đã đăng ký bản quyền.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container transition-all shadow-sm"><span className="material-symbols-outlined text-lg">public</span></a>
              <a href="https://zalo.me/0982674327" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container transition-all shadow-sm"><span className="material-symbols-outlined text-lg">chat</span></a>
            </div>
          </div>
        </div>
      </footer>
      {/* Fixed Zalo Button - Right */}
      <div className="fixed bottom-8 right-8 z-50">
        <a
          className="bg-[#0068ff] text-white w-14 h-14 rounded-full shadow-lg pulse-blue hover:bg-[#0052cc] transition-colors flex items-center justify-center"
          href="https://zalo.me/0982674327"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" alt="Zalo" className="w-[34px] h-[34px] object-contain rounded-full" />
        </a>
      </div>

      {/* Fixed Phone Button - Left */}
      <div className="fixed bottom-8 left-8 z-50">
        <a
          href="tel:0982674327"
          className="relative flex items-center group"
        >
          {/* Phone Number Pill */}
          <div className="absolute left-7 bg-[#10b981] text-white font-bold text-lg px-4 py-[10px] rounded-r-full shadow-md whitespace-nowrap pl-10 pr-6 z-0 group-hover:bg-[#059669] transition-colors">
            098.267.4327
          </div>
          
          {/* Phone Icon Circle */}
          <div className="bg-[#f39c12] text-white w-14 h-14 rounded-full shadow-lg pulse-orange group-hover:bg-[#e67e22] transition-colors flex items-center justify-center relative z-10">
            <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
          </div>
        </a>
      </div>
    </>
  );
}
