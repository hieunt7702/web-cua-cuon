import { notFound } from "next/navigation";
import { getServiceBySlug, servicesData } from "@/data/services";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-surface relative overflow-hidden border-b border-surface-container-high">
        <div className="absolute inset-0 opacity-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-container/10 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-container/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-3/5 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container border border-surface-container-high mb-6 shadow-sm">
                <span className="material-symbols-outlined text-primary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
                <span className="text-label-sm text-on-surface-variant">/</span>
                <span className="text-label-sm font-label-sm text-primary-container uppercase tracking-widest">Dịch Vụ</span>
              </div>
              
              <h1 className="text-headline-md md:text-headline-lg font-headline-lg text-on-surface mb-6 uppercase tracking-wide leading-tight">
                {service.title}
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-primary-container to-transparent mb-6 mx-auto md:mx-0"></div>
              
              <p className="text-body-lg text-on-surface-variant max-w-2xl leading-relaxed mb-8">
                {service.excerpt}
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                 <a href="tel:0982674327" className="inline-flex items-center gap-3 bg-primary-container text-on-primary-container px-6 py-3 rounded-xl font-medium text-label-lg hover:bg-primary transition-all shadow-lg hover:shadow-xl hover:scale-105">
                   <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                   Gọi Tư Vấn Miễn Phí
                 </a>
                 <a href="https://zalo.me/0982674327" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-surface-container-high text-on-surface border border-surface-container-highest px-6 py-3 rounded-xl font-medium text-label-lg hover:bg-surface-container-highest transition-all shadow-sm hover:shadow-md">
                   <span className="material-symbols-outlined text-xl">chat</span>
                   Nhắn Tin Zalo
                 </a>
              </div>
            </div>

            <div className="w-full md:w-2/5">
               <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative border-4 border-surface group">
                 <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="flex items-center gap-2 bg-primary-container/90 backdrop-blur text-on-primary-container px-3 py-1.5 rounded-full text-label-sm">
                       <span className="material-symbols-outlined text-sm">verified</span>
                       Cam Kết Khắc Phục Triệt Để 100%
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content Area */}
            <div className="lg:col-span-8">
               <div className="bg-surface p-8 md:p-12 rounded-3xl shadow-sm border border-surface-container-high relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                 
                 <div className="prose prose-sm md:prose-base max-w-none 
                    prose-headings:font-headline-lg prose-headings:text-on-surface prose-headings:uppercase prose-headings:tracking-wide
                    prose-h1:text-xl prose-h1:md:text-2xl
                    prose-h2:text-lg prose-h2:md:text-xl prose-h2:border-b prose-h2:border-surface-container-high prose-h2:pb-4 prose-h2:mt-12
                    prose-h3:text-base prose-h3:md:text-lg
                    prose-p:text-on-surface-variant prose-p:leading-relaxed
                    prose-li:text-on-surface-variant prose-li:marker:text-primary-container
                    prose-strong:text-on-surface prose-strong:font-bold
                    prose-a:text-primary-container hover:prose-a:text-primary transition-colors
                    prose-img:rounded-2xl prose-img:shadow-lg
                    prose-blockquote:border-l-primary-container prose-blockquote:bg-surface-container-low prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                 ">
                   <ReactMarkdown>{service.content}</ReactMarkdown>
                 </div>

                 <div className="mt-16 pt-8 border-t border-surface-container-high bg-surface-container-low p-8 rounded-2xl">
                    <h3 className="text-headline-sm font-headline-sm text-on-surface mb-4 uppercase">Quy Trình Xử Lý Sự Cố Khẩn Cấp</h3>
                    <ul className="space-y-4">
                       <li className="flex gap-4 items-start">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">1</span>
                          <div>
                             <p className="font-bold text-on-surface">Tiếp Nhận Yêu Cầu:</p>
                             <p className="text-on-surface-variant">Khách hàng gọi đến Hotline 098.267.4327, mô tả tình trạng cửa.</p>
                          </div>
                       </li>
                       <li className="flex gap-4 items-start">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">2</span>
                          <div>
                             <p className="font-bold text-on-surface">Khảo Sát & Báo Giá:</p>
                             <p className="text-on-surface-variant">Thợ có mặt sau 30 phút, kiểm tra lỗi trực tiếp và báo giá minh bạch trước khi làm.</p>
                          </div>
                       </li>
                       <li className="flex gap-4 items-start">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">3</span>
                          <div>
                             <p className="font-bold text-on-surface">Tiến Hành Sửa Chữa:</p>
                             <p className="text-on-surface-variant">Sử dụng linh kiện chính hãng để thay thế, khắc phục sự cố dứt điểm.</p>
                          </div>
                       </li>
                       <li className="flex gap-4 items-start">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">4</span>
                          <div>
                             <p className="font-bold text-on-surface">Bàn Giao & Bảo Hành:</p>
                             <p className="text-on-surface-variant">Khách hàng nghiệm thu, dán tem bảo hành và thanh toán.</p>
                          </div>
                       </li>
                    </ul>
                 </div>
               </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                <div className="bg-primary-container/10 p-6 rounded-2xl border border-primary-container/20 text-center">
                <div className="w-16 h-16 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-3xl">support_agent</span>
                </div>
                <h3 className="text-headline-md font-headline-md text-on-surface mb-2">Cần Thợ Gấp?</h3>
                <p className="text-body-sm text-on-surface-variant mb-6">Đội ngũ kỹ thuật của chúng tôi luôn túc trực 24/7, có mặt khảo sát tận nơi sau 30 phút nhận cuộc gọi.</p>
                <a href="tel:0982674327" className="inline-flex items-center gap-2 bg-primary-container text-on-primary px-6 py-3 rounded-full font-label-md text-label-md hover:bg-primary transition-colors w-full justify-center">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                  098.267.4327
                </a>
              </div>

              <div className="bg-surface rounded-2xl border border-surface-container-high shadow-md overflow-hidden">
                {/* Header */}
                <div className="bg-primary-container px-5 py-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-on-primary-container text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>grid_view</span>
                  <h3 className="text-label-md font-bold text-on-primary-container uppercase tracking-wider">Dịch Vụ Khác</h3>
                </div>
                {/* Service list */}
                <div className="divide-y divide-surface-container-high">
                  {servicesData
                    .filter(s => s.slug !== service.slug)
                    .slice(0, 3)
                    .map((otherService) => (
                    <a
                      key={otherService.slug}
                      href={`/dich-vu/${otherService.slug}`}
                      className="group flex items-center gap-3 px-5 py-4 hover:bg-surface-container-low transition-all"
                    >
                      <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 shadow border border-surface-container-high">
                        <img src={otherService.image} alt={otherService.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-label-md font-semibold text-on-surface group-hover:text-primary-container transition-colors line-clamp-2 leading-snug mb-1">
                          {otherService.title}
                        </h4>
                        <span className="inline-flex items-center gap-0.5 text-label-sm text-primary-container font-medium">
                          Xem chi tiết <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
                {/* Footer link */}
                <div className="px-5 py-3 bg-surface-container-low border-t border-surface-container-high">
                  <a href="/dich-vu" className="flex items-center justify-center gap-1 text-label-sm font-medium text-on-surface-variant hover:text-primary-container transition-colors">
                    Xem tất cả dịch vụ <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
