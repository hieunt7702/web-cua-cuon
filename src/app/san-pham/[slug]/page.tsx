import { notFound } from "next/navigation";
import { productsData } from "@/data/products";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const product = productsData.find((p) => p.id === resolvedParams.slug);

  if (!product) {
    return {
      title: "Sản phẩm không tồn tại - Cửa Cuốn Việt Đức",
    };
  }

  return {
    title: `${product.name} - Cửa Cuốn Việt Đức`,
    description: product.shortDesc,
  };
}

export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.id,
  }));
}

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = productsData.find((p) => p.id === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  let relatedProducts = productsData
    .filter((p) => p.category === product.category && p.id !== product.id);

  if (relatedProducts.length < 4) {
    const otherProducts = productsData
      .filter((p) => p.category !== product.category && p.id !== product.id)
      .sort(() => 0.5 - Math.random());
    
    relatedProducts = [...relatedProducts, ...otherProducts].slice(0, 4);
  } else {
    relatedProducts = relatedProducts.slice(0, 4);
  }

  return (
    <>
      <section className="py-16 md:py-20 bg-surface relative overflow-hidden border-b border-surface-container-high">
        <div className="absolute inset-0 opacity-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-container/10 to-transparent pointer-events-none"></div>
        
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="inline-flex items-center gap-2 mb-8 text-label-sm">
            <Link href="/" className="text-on-surface-variant hover:text-primary-container transition-colors">Trang Chủ</Link>
            <span className="text-surface-container-highest">/</span>
            <Link href="/san-pham" className="text-on-surface-variant hover:text-primary-container transition-colors">Sản Phẩm</Link>
            <span className="text-surface-container-highest">/</span>
            <span className="text-primary-container">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Product Image */}
            <div className="bg-surface-container rounded-3xl overflow-hidden shadow-lg border border-surface-container-high relative">
              <div className="aspect-square">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container border border-surface-container-high mb-6 shadow-sm self-start">
                <span className="text-label-sm font-label-sm text-primary-container uppercase tracking-widest">{product.categoryLabel}</span>
              </div>
              
              <h1 className="text-headline-lg font-headline-lg text-on-surface mb-6 uppercase leading-tight">
                {product.name}
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-primary-container to-transparent mb-6"></div>
              
              <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                {product.shortDesc}
              </p>

              <div className="bg-surface-container-low p-6 rounded-2xl border border-surface-container-high mb-8">
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-4">Thông số cơ bản</h3>
                <ul className="space-y-3">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <span className="material-symbols-outlined text-primary-container shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <span className="text-body-md text-on-surface">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                 <a href="tel:0982674327" className="flex-1 inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary-container px-6 py-4 rounded-xl font-medium text-label-lg hover:bg-primary transition-all shadow-lg hover:shadow-xl">
                   <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                   Nhận Báo Giá Ngay
                 </a>
                 <a href="https://zalo.me/0982674327" target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 bg-surface-container-high text-on-surface border border-surface-container-highest px-6 py-4 rounded-xl font-medium text-label-lg hover:bg-surface-container-highest transition-all shadow-sm">
                   <span className="material-symbols-outlined">chat</span>
                   Zalo Hỗ Trợ
                 </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-24 bg-background relative overflow-hidden border-t border-surface-container-high">
          <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
              <div>
                <h2 className="text-headline-md font-headline-md text-on-surface mb-4 uppercase">Sản Phẩm Liên Quan</h2>
                <div className="w-24 h-1 bg-primary-container"></div>
              </div>
              <Link href="/san-pham" className="inline-flex items-center gap-1 text-label-md text-primary-container hover:text-primary transition-colors">
                Xem tất cả <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relProduct) => (
                <Link href={`/san-pham/${relProduct.id}`} key={relProduct.id} className="bg-surface rounded-2xl border border-surface-container-high overflow-hidden group hover:border-primary-container/50 transition-colors shadow-lg flex flex-col">
                  <div className="aspect-square bg-surface-container-high relative overflow-hidden">
                    <img src={relProduct.image} alt={relProduct.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-headline-sm text-on-surface mb-2 line-clamp-2">{relProduct.name}</h3>
                    <p className="text-body-sm text-on-surface-variant mb-4 line-clamp-2 flex-grow">{relProduct.shortDesc}</p>
                    <span className="block w-full text-center py-2 border border-primary-container text-primary-container rounded-xl group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                      Xem chi tiết
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
