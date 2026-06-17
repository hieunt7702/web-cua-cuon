import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dịch Vụ Sửa Chữa & Lắp Đặt Cửa Cuốn Chuyên Nghiệp 24/7",
  description: "Cung cấp dịch vụ sửa chữa, bảo dưỡng, làm remote, thay bình lưu điện và lắp đặt cửa cuốn nhanh chóng, uy tín và giá rẻ nhất.",
};

export default function DichVu() {
  const services = [
    "Nhận sửa cửa cuốn hư hỏng",
    "Nhận sửa cửa cuốn không đóng mở được",
    "Nhận sửa cửa cuốn trọn gói",
    "Nhận sửa cửa cuốn giá rẻ",
    "Nhận sửa cửa cuốn theo yêu cầu",
    "Nhận sửa cửa cuốn đóng mở kêu ầm ầm",
    "Nhận sửa cửa cuốn 24/7",
    "Nhận sửa cửa cuốn ngoài giờ làm việc (ban đêm)",
    "Nhận sửa cửa cuốn hư thanh nhôm lá nhôm",
    "Nhận sửa cửa cuốn hư bạc đạn",
    "Nhận sửa cửa cuốn hư đường ray",
    "Nhận sửa cửa cuốn hư motor",
    "Nhận sửa cửa cuốn hư điều khiển lên (xuống)",
    "Nhận sửa cửa cuốn quên chìa khóa",
    "Nhận sửa cửa cuốn bị khóa trong",
    "Nhận sửa cửa cuốn Tphcm",
    "Nhận sửa cửa cuốn tại nhà",
    "Nhận sửa cửa cuốn tận nơi",
    "Nhận thi công lắp đặt cửa cuốn",
    "Nhận cải tạo nâng cấp cửa cuốn",
    "Nhận di dời cửa cuốn trọn gói",
    "Nhận sửa cửa cuốn hư ròng rọc",
    "Nhận sửa cửa cuốn lưu động",
    "Nhận thay thế linh kiện cửa cuốn",
    "Nhận thay thế phụ kiện cửa cuốn"
  ];

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
            <span className="text-label-sm font-label-sm text-primary-container uppercase tracking-widest">Dịch Vụ</span>
          </div>
          
          <h1 className="text-headline-lg md:text-display-sm font-display-lg text-on-surface mb-4 uppercase tracking-wide">
            Dịch Vụ Cửa Cuốn 24/7
          </h1>
          
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent mb-6"></div>
          
          <p className="text-body-md md:text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Chuyên cung cấp dịch vụ Sửa chữa - Lắp đặt - Bảo dưỡng cửa cuốn chuyên nghiệp, nhanh chóng và tận tâm.
          </p>
        </div>
      </section>

      {/* Detailed Services List */}
      <section className="py-24 bg-background relative overflow-hidden border-t border-surface-container-high">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary-container/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg font-headline-lg text-on-surface mb-4 uppercase">Danh Mục Dịch Vụ Cứu Hộ Tại Nhà</h2>
            <div className="w-24 h-1 bg-primary-container mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-surface p-4 rounded-xl shadow-sm border border-surface-container-high hover:border-primary-container/50 transition-colors flex items-start gap-3 group relative z-10">
                <span className="material-symbols-outlined text-primary-container shrink-0 mt-0.5 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-body-md text-on-surface">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bảng giá tham khảo */}
      <section className="py-24 bg-surface relative overflow-hidden border-t border-surface-container-high">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg font-headline-lg text-on-surface mb-4 uppercase">Bảng Giá Tham Khảo</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent mx-auto"></div>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-surface-container-high">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-surface-container">
                  <th className="p-4 text-headline-md text-on-surface border-b border-surface-container-highest">Loại Dịch Vụ</th>
                  <th className="p-4 text-headline-md text-on-surface border-b border-surface-container-highest">Giá Khởi Điểm (VNĐ)</th>
                  <th className="p-4 text-headline-md text-on-surface border-b border-surface-container-highest">Bảo Hành</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="p-4 border-b border-surface-container-high text-on-surface-variant">Sửa lỗi kẹt lá cửa cuốn</td>
                  <td className="p-4 border-b border-surface-container-high text-primary-container font-medium">Từ 300.000đ</td>
                  <td className="p-4 border-b border-surface-container-high text-on-surface-variant">03 Tháng</td>
                </tr>
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="p-4 border-b border-surface-container-high text-on-surface-variant">Thay thế remote / Làm thêm chìa khóa</td>
                  <td className="p-4 border-b border-surface-container-high text-primary-container font-medium">Từ 250.000đ/chìa</td>
                  <td className="p-4 border-b border-surface-container-high text-on-surface-variant">06 Tháng</td>
                </tr>
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="p-4 border-b border-surface-container-high text-on-surface-variant">Sửa chữa bình lưu điện UPS</td>
                  <td className="p-4 border-b border-surface-container-high text-primary-container font-medium">Từ 500.000đ</td>
                  <td className="p-4 border-b border-surface-container-high text-on-surface-variant">06 Tháng</td>
                </tr>
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="p-4 border-b border-surface-container-high text-on-surface-variant">Bảo dưỡng toàn bộ cửa cuốn</td>
                  <td className="p-4 border-b border-surface-container-high text-primary-container font-medium">Từ 400.000đ/Bộ</td>
                  <td className="p-4 border-b border-surface-container-high text-on-surface-variant">-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-body-sm text-center mt-4 text-on-surface-variant italic">*Lưu ý: Bảng giá mang tính tham khảo, giá thực tế sẽ báo trực tiếp sau khi thợ khảo sát tận nơi miễn phí.</p>
        </div>
      </section>
    </>
  );
}
