export function DetailedServices() {
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
    <section className="py-16 md:py-24 bg-surface relative overflow-hidden border-t border-surface-container-high">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary-container/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="text-center mb-10 md:mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"></div>
          <h2 className="text-headline-sm md:text-headline-lg font-headline-lg text-on-surface mb-4 uppercase relative z-10 px-4 md:px-0">Chúng Tôi Chuyên Sửa Chữa Cứu Hộ Cửa Cuốn Tại Nhà</h2>
          <div className="w-24 h-1 bg-primary-container mx-auto mb-6 relative z-10"></div>
          <p className="text-body-md md:text-body-lg font-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed relative z-10">
            Gọi thợ sửa cửa cuốn tận nơi tại nhà nội thành TPHCM với giá cả phải chăng và phục vụ nhiệt tình chu đáo nhất, chúng tôi luôn lấy nhu cầu của khách hàng làm trung tâm cho mọi dịch vụ.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left Column - Image */}
          <div className="w-full lg:w-5/12 sticky top-28">
            <img 
              src="/assets/images/dichvu.png" 
              alt="Dịch vụ Cửa Cuốn" 
              className="w-full h-auto object-cover rounded-xl shadow-lg border border-surface-container-highest"
            />
          </div>

          {/* Right Column - Service Table */}
          <div className="w-full lg:w-7/12">
            <div className="bg-surface rounded-xl border border-surface-container-highest overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-surface-container-highest">
                    <th className="py-4 px-6 text-sm font-bold text-on-surface-variant w-16 md:w-20">STT</th>
                    <th className="py-4 px-6 text-sm font-bold text-on-surface-variant">Dịch vụ</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, index) => (
                    <tr key={index} className="border-b border-surface-container-highest last:border-b-0 hover:bg-surface-container-low transition-colors">
                      <td className="py-3.5 px-6 text-sm font-semibold text-on-surface-variant">{index + 1}</td>
                      <td className="py-3.5 px-6 text-sm md:text-base text-on-surface">{service}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
