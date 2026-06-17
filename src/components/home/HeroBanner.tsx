import { FadeIn } from "@/components/ui/FadeIn";

export function HeroBanner() {
  return (
    <header className="relative w-full h-auto pt-32 pb-20 lg:pt-0 lg:pb-0 lg:h-[850px] flex items-center justify-start overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          alt="A high-end architectural photo of a modern home featuring a large, premium metallic roller door closed over a garage. The lighting is natural, casting soft shadows that highlight the sleek horizontal lines of the industrial-grade door. The overall aesthetic is clean, secure, and highly professional, utilizing a sophisticated light-mode palette with subtle industrial gray tones."
          className="w-full h-full object-cover object-center"
          src="/assets/images/hero1.png"
        />
        <div className="absolute inset-0 hero-overlay bg-black/40 md:bg-transparent"></div>
      </div>
      <div className="relative z-10 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop w-full text-center md:text-left">
        <div className="max-w-2xl text-white mx-auto md:mx-0">
          <FadeIn delay={100}>
            <div className="inline-flex items-center gap-2 bg-primary-container/20 backdrop-blur-sm border border-primary-container/30 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6">
              <span className="material-symbols-outlined text-primary-container text-sm md:text-base" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <span className="text-label-sm md:text-label-md font-label-md text-primary-container uppercase">Dịch vụ 24/7 chuyên nghiệp</span>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <h1 className="text-headline-lg md:text-display-md lg:text-display-lg font-display-lg text-white mb-4 md:mb-6 leading-tight">
              SỬA CHỮA - LẮP ĐẶT <br className="hidden md:block" /><span className="text-primary-container"> BẢO HÀNH 24/7</span>
            </h1>
          </FadeIn>

          <FadeIn delay={500}>
            <p className="text-body-md md:text-body-lg font-body-lg text-white/90 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Giải pháp an ninh toàn diện cho ngôi nhà của bạn. Cam kết chất lượng, giá cạnh tranh, đội ngũ thợ chuyên nghiệp, có mặt nhanh chóng sau 30 phút.
            </p>
          </FadeIn>

          <FadeIn delay={700}>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <a href="tel:0982674327" className="bg-primary-container hover:bg-primary text-on-primary-container text-label-md font-label-md px-6 py-3.5 md:px-8 md:py-4 rounded-xl md:rounded flex items-center justify-center gap-2 transition-colors w-full sm:w-auto">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
                LIÊN HỆ NGAY
              </a>
              <a href="https://zalo.me/0982674327" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-surface-variant text-white hover:bg-surface-variant/10 text-label-md font-label-md px-6 py-3.5 md:px-8 md:py-4 rounded-xl md:rounded flex items-center justify-center gap-2 transition-colors w-full sm:w-auto">
                <span className="material-symbols-outlined">chat</span>
                ZALO HỖ TRỢ
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </header>
  );
}
