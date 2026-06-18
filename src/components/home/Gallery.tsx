export function Gallery() {
  const images = Array.from({ length: 8 }, (_, i) => `/assets/images/thicong${i + 1}.jpg`);

  return (
    <section className="py-16 md:py-24 bg-surface-container-lowest border-t border-surface-container-high">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-headline-md md:text-headline-lg font-headline-lg text-on-surface uppercase mb-4">
            Hình ảnh thi công thực tế
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Khám phá những công trình cửa cuốn tiêu biểu mà đội ngũ kỹ thuật viên chuyên nghiệp của chúng tôi đã trực tiếp thi công và lắp đặt.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-sm group cursor-pointer bg-surface-container-low">
              <img 
                src={src} 
                alt={`Dự án thi công cửa cuốn ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
