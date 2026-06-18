import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên Hệ Cửa Cuốn Việt Đức - Tổng Đài Gọi Thợ 24/7",
  description: "Thông tin liên hệ và hệ thống chi nhánh của Cửa Cuốn Việt Đức tại TP.HCM, Bình Dương, Đồng Nai. Có mặt ngay sau 30 phút.",
};

export default function LienHe() {
  const regions = [
    {
      name: "TP. Hồ Chí Minh",
      branches: [
        "235 Đ. Điện Biên Phủ, Phường 7, Quận 3",
        "115 Mai Chí Thọ, An Phú, Quận 2",
        "180 Nguyễn Thị Minh Khai, Phường 6, Quận 3",
        "315 Đ. Nguyễn Văn Linh, Phường Tân Phú, Quận 7",
        "105 Châu Văn Liêm, Phường 10, Quận 5",
        "495 Cách Mạng Tháng 8, Phường 13, Quận 10",
        "95 Hoàng Hoa Thám, Phường 13, Tân Bình",
        "265 Cộng Hòa, Phường 12, Tân Bình",
        "135 Trường Chinh, Phường 14, Tân Bình",
        "75 Đ. Lê Lai, Phường Bến Nghé, Quận 1",
        "125 Đ. Trần Não, Phường Bình An, Quận 2",
        "215 Đ. Khánh Hội, Phường 3, Quận 4",
        "95 Hậu Giang, Phường 6, Quận 6",
        "85 Đ. Nguyễn Duy Trinh, Phường 15, Quận 9",
        "145 Đ. Quang Trung, Phường 10, Gò Vấp",
        "515 Đ. Phan Văn Trị, Phường 5, Gò Vấp",
        "175 Đ. Nguyễn Oanh, Phường 17, Gò Vấp",
        "85 Đ. Đinh Bộ Lĩnh, Phường 26, Bình Thạnh",
        "35 Nguyễn Xí, Phường 26, Bình Thạnh"
      ]
    },
    {
      name: "Bình Dương",
      branches: [
        "215 Đại lộ Bình Dương, Phú Hòa, Thủ Dầu Một",
        "Số 12, Đường D1, KDC Việt Sing, Thuận An",
        "85 Đ. Nguyễn Thị Minh Khai, Phú Hòa, Thủ Dầu Một",
        "Lô D8, KCN Mỹ Phước 1, Bến Cát",
        "105 Đ. Trần Hưng Đạo, Dĩ An, Bình Dương",
        "19 Nguyễn Trãi, Phường Dĩ An, TP. Dĩ An",
        "92 Đường ĐT743B, Phường An Bình, TP. Dĩ An",
        "45 Lê Hồng Phong, Phường Tân Bình, TP. Dĩ An",
        "72 Trần Quý Cáp, TP. Dĩ An",
        "180 Lý Thường Kiệt, Dĩ An, Bình Dương",
        "34B Kha Vạn Cân, An Bình, Dĩ An",
        "500 Quốc lộ 1K, Bình An, Dĩ An",
        "120 Nguyễn An Ninh, Dĩ An, Bình Dương",
        "88 ĐT743A, Bình Thắng, Dĩ An",
        "201 Lê Lợi, TP. Thủ Dầu Một",
        "155 Thích Quảng Đức, Phú Cường, Thủ Dầu Một",
        "33 Cách Mạng Tháng 8, Chánh Nghĩa, Thủ Dầu Một",
        "99 Huỳnh Văn Lũy, Phú Lợi, Thủ Dầu Một",
        "77 Phạm Ngọc Thạch, Hiệp Thành, Thủ Dầu Một"
      ]
    },
    {
      name: "Đồng Nai",
      branches: [
        "12 Đồng Khởi, Phường Tân Hiệp, TP. Biên Hòa",
        "35 Đ. 30/4, Phường Trung Dũng, TP. Biên Hòa",
        "80 Võ Thị Sáu, Phường Thống Nhất, TP. Biên Hòa",
        "112 Đường 5A, KDC Biên Hòa, Phường An Bình",
        "68 Đường N1, Phường Thống Nhất, TP. Biên Hòa",
        "145/22 KP3, Phường Trảng Dài, TP. Biên Hòa",
        "800/15 KP2, Phường Trảng Dài, TP. Biên Hòa",
        "25A Đinh Tiên Hoàng, KP 3, Trảng Bom",
        "38/9, Đ. Hùng Vương, TT. Trảng Bom",
        "1280, QL51, Long Đức, Long Thành",
        "45 Phạm Văn Thuận, Tam Hiệp, TP. Biên Hòa",
        "210 Bùi Văn Hòa, Long Bình, TP. Biên Hòa",
        "55 Nguyễn Ái Quốc, Hố Nai, TP. Biên Hòa",
        "90 Trần Công An, Trung Dũng, TP. Biên Hòa",
        "33 Hồ Văn Đại, Quang Vinh, TP. Biên Hòa",
        "18 Lê Duẩn, Long Thành, Đồng Nai",
        "75 Tôn Đức Thắng, Nhơn Trạch, Đồng Nai",
        "122 Nguyễn Hữu Cảnh, Nhơn Trạch, Đồng Nai",
        "99 Hùng Vương, Long Khánh, Đồng Nai"
      ]
    }
  ];

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
            <span className="text-label-sm font-label-sm text-primary-container uppercase tracking-widest">Liên Hệ</span>
          </div>
          
          <h1 className="text-headline-lg md:text-display-sm font-display-lg text-on-surface mb-4 uppercase tracking-wide">
            Liên Hệ Chăm Sóc Khách Hàng
          </h1>
          
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent mb-6"></div>
          
          <p className="text-body-md md:text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Kết nối với tổng đài Cửa Cuốn Việt Đức. Luôn có thợ kỹ thuật túc trực 24/7 để hỗ trợ bạn ngay lập tức.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-background relative overflow-hidden border-t border-surface-container-high">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Form */}
            <div className="w-full lg:w-1/2 bg-surface p-8 rounded-3xl border border-surface-container-high shadow-xl">
              <h2 className="text-headline-lg font-headline-lg text-on-surface mb-6">Gửi Yêu Cầu Cho Chúng Tôi</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-body-sm text-on-surface-variant mb-2">Họ & Tên</label>
                  <input type="text" className="w-full bg-surface-container border border-surface-container-high rounded-xl px-4 py-3 text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all" placeholder="Nhập tên của bạn" />
                </div>
                <div>
                  <label className="block text-body-sm text-on-surface-variant mb-2">Số Điện Thoại *</label>
                  <input type="tel" className="w-full bg-surface-container border border-surface-container-high rounded-xl px-4 py-3 text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all" placeholder="Nhập số điện thoại để thợ gọi lại" required />
                </div>
                <div>
                  <label className="block text-body-sm text-on-surface-variant mb-2">Nội Dung Yêu Cầu</label>
                  <textarea className="w-full bg-surface-container border border-surface-container-high rounded-xl px-4 py-3 text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all" rows={4} placeholder="Mô tả sự cố bạn đang gặp phải..."></textarea>
                </div>
                <button type="submit" className="w-full bg-primary-container hover:bg-primary text-on-primary-container font-medium text-body-lg py-4 rounded-xl transition-colors shadow-lg">Gửi Yêu Cầu Ngay</button>
              </form>
            </div>
            
            {/* Quick Contact Info */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="bg-surface-container p-6 rounded-2xl border border-surface-container-high flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0 text-primary-container">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                </div>
                <div>
                  <div className="text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">Email Doanh Nghiệp</div>
                  <a href="mailto:cuacuonvietduc0421@gmail.com" className="text-headline-lg text-primary-container font-medium hover:text-primary transition-colors" style={{ fontSize: "1.25rem" }}>cuacuonvietduc0421@gmail.com</a>
                </div>
              </div>

              <div>
                <h2 className="text-headline-lg font-headline-lg text-on-surface mb-6">Thông Tin Liên Hệ Nhanh</h2>
                <p className="text-body-lg text-on-surface-variant mb-8">Gọi trực tiếp cho đường dây nóng hoặc nhắn tin Zalo để được phản hồi lập tức. Miễn phí kiểm tra và báo giá tận nhà.</p>
              </div>
              
              <div className="bg-surface-container p-6 rounded-2xl border border-surface-container-high flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0 text-primary-container">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>phone_in_talk</span>
                </div>
                <div>
                  <div className="text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">Hotline Kỹ Thuật 24/7</div>
                  <a href="tel:0982674327" className="text-headline-lg text-primary-container font-medium hover:text-primary transition-colors">098.267.4327</a>
                </div>
              </div>
              
              <div className="bg-surface-container p-6 rounded-2xl border border-surface-container-high flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0 text-primary-container">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span>
                </div>
                <div>
                  <div className="text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">Chat Trực Tuyến</div>
                  <a href="https://zalo.me/0982674327" target="_blank" rel="noopener noreferrer" className="text-headline-lg text-primary-container font-medium hover:text-primary transition-colors">Zalo: 098.267.4327</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches List */}
      <section className="py-24 bg-surface border-t border-surface-container-high relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg font-headline-lg text-on-surface mb-4 uppercase">Địa Chỉ Chi Nhánh Cửa Cuốn Việt Đức</h2>
            <div className="w-24 h-1 bg-primary-container mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region, idx) => (
              <div key={idx} className={`bg-surface-container-low p-6 rounded-2xl border border-surface-container-high shadow-sm hover:shadow-md transition-shadow ${idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-surface-container-highest">
                  <span className="material-symbols-outlined text-primary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_city</span>
                  <h3 className="text-headline-md font-headline-md text-on-surface">{region.name}</h3>
                </div>
                <ul className="relative z-10">
                  {region.branches.map((branch, i) => (
                    <li key={i} className="flex items-start gap-3 text-body-sm text-on-surface-variant mb-4">
                      <span className="material-symbols-outlined text-primary-container shrink-0 mt-0.5 text-xl">location_on</span>
                      <span>{branch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
