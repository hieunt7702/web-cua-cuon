import Link from "next/link";
import { productsData } from "@/data/products";

export function FeaturedProducts() {
  const categories = [
    {
      title: "CỬA CUỐN MẮC VÕNG VÀ SONG NGANG",
      products: productsData.filter(p => p.category === 'mac-vong' || p.category === 'song-ngang').slice(0, 4)
    },
    {
      title: "CỬA CUỐN NHÔM KHE THOÁNG",
      products: productsData.filter(p => p.category === 'khe-thoang').slice(0, 4)
    },
    {
      title: "CỬA CUỐN TẤM LIỀN",
      products: productsData.filter(p => p.category === 'tam-lien').slice(0, 4)
    },
    {
      title: "LÁ CỬA CUỐN",
      products: productsData.filter(p => p.category === 'la-nan').slice(0, 4)
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-surface">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop space-y-16">
        {categories.map((category, idx) => (
          <div key={idx}>
            {/* Header section */}
            <div className="flex justify-between items-end border-b border-surface-container-high pb-3 mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-primary uppercase tracking-wide">{category.title}</h2>
              <Link href={`/san-pham`} className="text-sm md:text-base text-on-surface-variant hover:text-primary transition-colors font-medium flex items-center gap-1 shrink-0 ml-4">
                Xem tất cả
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </Link>
            </div>
            
            {/* Products grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {category.products.map(product => (
                <Link href={`/san-pham/${product.id}`} key={product.id} className="group block">
                  <div className="bg-surface-container-low rounded-lg overflow-hidden aspect-[4/3] mb-4 border border-surface-container-high shadow-sm hover:shadow-md transition-shadow">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-bold text-on-surface group-hover:text-primary transition-colors text-sm md:text-base line-clamp-2">
                    {product.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
