export function ProcessSteps() {
  const steps = [
    {
      id: 1,
      icon: "forum",
      title: "1. Nhận Yêu Cầu Hotline/Zalo",
      desc: "Tiếp nhận lỗi hư hỏng của cửa và đến tận nơi khảo sát"
    },
    {
      id: 2,
      icon: "build",
      title: "2. Tiến Hành Sửa Chữa",
      desc: "Sử dụng dụng cụ chuyên dụng để sửa chữa"
    },
    {
      id: 3,
      icon: "fact_check",
      title: "3. Bàn Giao Và Thanh Toán",
      desc: "KH kiểm tra lại tình trạng cửa và thanh toán"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-surface relative overflow-hidden border-t border-surface-container-high">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        
        <div className="text-center mb-16 relative pt-4 md:pt-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"></div>
          <h2 className="text-headline-md md:text-headline-lg font-headline-lg text-on-surface mb-4 uppercase relative z-10 px-4 md:px-0">Quy Trình 3 Bước Nhanh Chóng</h2>
          <div className="w-24 h-1 bg-primary-container mx-auto relative z-10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-12 mt-8 md:mt-12">
          {steps.map(step => (
            <div key={step.id} className="relative bg-primary/10 rounded-xl p-6 md:p-8 transition-transform duration-300 hover:-translate-y-1">
              {/* Icon Box overlapping top border */}
              <div className="absolute -top-10 left-6 md:left-8 bg-surface w-[72px] h-[72px] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.1)] flex items-center justify-center border border-surface-container-lowest">
                <span className="material-symbols-outlined text-primary text-[36px]" style={{ fontVariationSettings: "'FILL' 0" }}>
                  {step.icon}
                </span>
              </div>
              
              <div className="pt-10">
                <h3 className="text-lg md:text-xl font-bold text-on-surface mb-3 tracking-tight">{step.title}</h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
