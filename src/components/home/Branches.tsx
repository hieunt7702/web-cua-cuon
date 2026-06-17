export function Branches() {
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
    <section className="py-16 md:py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-container/5 to-transparent pointer-events-none"></div>

      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="text-center mb-10 md:mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"></div>
          <h2 className="text-headline-md md:text-headline-lg font-headline-lg text-on-surface mb-4 uppercase relative z-10 px-4 md:px-0">Địa Chỉ Chi Nhánh Cửa Cuốn Việt Đức</h2>
          <div className="w-24 h-1 bg-primary-container mx-auto relative z-10"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {regions.map((region, idx) => (
            <div key={idx} className="bg-surface-container-low p-5 md:p-6 rounded-2xl border border-surface-container-high shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4 md:mb-6 pb-4 border-b border-surface-container-highest">
                <span className="material-symbols-outlined text-primary-container text-2xl md:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_city</span>
                <h3 className="text-headline-sm md:text-headline-md font-headline-md text-on-surface">{region.name}</h3>
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
  );
}
