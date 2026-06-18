import type { Metadata } from "next";
import { PrimaryServices } from "@/components/home/PrimaryServices";
import { DetailedServices } from "@/components/home/DetailedServices";

export const metadata: Metadata = {
  title: "Dịch Vụ Sửa Chữa & Lắp Đặt Cửa Cuốn Chuyên Nghiệp 24/7",
  description: "Cung cấp dịch vụ sửa chữa, bảo dưỡng, làm remote, thay bình lưu điện và lắp đặt cửa cuốn nhanh chóng, uy tín và giá rẻ nhất.",
};

export default function DichVu() {
  return (
    <>
      {/* Dịch Vụ Cung Cấp Chính */}
      <PrimaryServices />

      {/* Danh Mục Dịch Vụ Cứu Hộ Tại Nhà (giống trang chủ) */}
      <DetailedServices />
    </>
  );
}
