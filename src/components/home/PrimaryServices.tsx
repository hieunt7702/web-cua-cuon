import Link from "next/link";
import { servicesData } from "@/data/services";

export function PrimaryServices() {

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-8 md:mb-12 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"></div>
          <h2 className="text-headline-md md:text-headline-lg font-headline-lg text-on-surface mb-4 uppercase relative z-10">Dịch Vụ Cung Cấp Chính</h2>
          <div className="w-24 h-1 bg-primary-container mx-auto relative z-10"></div>
          <p className="mt-4 text-body-md font-body-md text-on-surface-variant max-w-2xl mx-auto relative z-10">Chúng tôi cung cấp giải pháp toàn diện cho hệ thống cửa cuốn, đảm bảo an toàn và vận hành trơn tru cho mọi công trình.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-surface-container rounded-lg overflow-hidden card-shadow group">
              <div className="relative h-48 overflow-hidden flex items-center justify-center bg-surface-container-high">
                {service.image ? (
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <span className="material-symbols-outlined text-6xl text-outline-variant group-hover:scale-110 transition-transform duration-500" style={{ fontVariationSettings: "'FILL' 0" }}>{service.icon}</span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container/50 to-transparent pointer-events-none"></div>
                <div className="absolute top-4 right-4 bg-primary-container text-on-primary-container text-label-sm font-label-sm px-3 py-1 rounded-full uppercase">24/7 Service</div>
              </div>
              <div className="p-6">
                <h3 className="text-headline-md font-headline-md text-on-surface mb-2 line-clamp-2" title={service.title}>{service.title}</h3>
                <p className="text-body-md font-body-md text-on-surface-variant mb-4 line-clamp-2">{service.excerpt}</p>
                <Link className="inline-flex items-center text-primary-container font-label-md text-label-md hover:text-primary transition-colors" href={`/dich-vu/${service.slug}`}>
                  Xem chi tiết <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
