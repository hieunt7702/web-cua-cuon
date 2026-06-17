"use client";

import { useState } from "react";
import { Product, productCategories, productsData } from "@/data/products";
import Link from "next/link";

export function ProductList() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = activeCategory === "all" 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
      {/* Tab Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {productCategories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-2 rounded-full font-medium text-body-md transition-colors ${
              activeCategory === category.id
                ? "bg-primary-container text-on-primary-container shadow-lg"
                : "bg-surface-container border border-surface-container-high text-on-surface hover:text-primary-container"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <Link href={`/san-pham/${product.id}`} key={product.id} className="bg-surface rounded-2xl border border-surface-container-high overflow-hidden group hover:border-primary-container/50 transition-colors shadow-lg flex flex-col">
            <div className="aspect-square bg-surface-container-high relative overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="text-label-sm text-on-surface-variant mb-2 uppercase">{product.categoryLabel}</div>
              <h3 className="text-headline-md text-on-surface mb-2 flex-grow">{product.name}</h3>
              <p className="text-body-sm text-on-surface-variant mb-4 line-clamp-2">{product.shortDesc}</p>
              <span className="block w-full text-center py-2 border border-primary-container text-primary-container rounded-xl group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                Xem chi tiết
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
