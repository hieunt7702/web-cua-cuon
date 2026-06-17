import type { Metadata } from "next";
import { PrimaryServices } from "@/components/home/PrimaryServices";

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
      {/* Dịch Vụ Cung Cấp Chính */}
      <PrimaryServices />

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
    </>
  );
}
