import type { Metadata } from "next";
import { posts } from "@/data/posts";
export const metadata: Metadata = {
  title: "Tin Tức & Cẩm Nang Cửa Cuốn - Cửa Cuốn Việt Đức",
  description: "Tổng hợp các kiến thức, kinh nghiệm và mẹo hay về cách sử dụng, bảo quản và khắc phục sự cố cửa cuốn hiệu quả nhất.",
};

export default function BaiViet() {
  return (
    <>
      {/* Page Hero */}
      <section className="py-16 md:py-20 bg-surface relative overflow-hidden border-b border-surface-container-high">
        <div className="absolute inset-0 opacity-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-container/10 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-container/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container border border-surface-container-high mb-6 shadow-sm">
            <span className="material-symbols-outlined text-primary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
            <span className="text-label-sm text-on-surface-variant">/</span>
            <span className="text-label-sm font-label-sm text-primary-container uppercase tracking-widest">Tin Tức - Bài Viết</span>
          </div>
          
          <h1 className="text-headline-lg md:text-display-sm font-display-lg text-on-surface mb-4 uppercase tracking-wide">
            Cẩm Nang Cửa Cuốn
          </h1>
          
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent mb-6"></div>
          
          <p className="text-body-md md:text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Tổng hợp các kiến thức, kinh nghiệm và mẹo hay về cách sử dụng, bảo quản và khắc phục sự cố cửa cuốn hiệu quả nhất.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-background relative overflow-hidden border-t border-surface-container-high">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-surface rounded-2xl border border-surface-container-high overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="aspect-video relative overflow-hidden shrink-0">
                  <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                  {post.tags[0] && (
                    <div className="absolute top-4 left-4 bg-primary-container text-on-primary-container text-label-sm px-3 py-1 rounded-full font-medium">
                      {post.tags[0].replace("#", "")}
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap items-center gap-4 text-label-sm text-on-surface-variant mb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
                      <span>{post.views}</span>
                    </div>
                  </div>
                  <h2 className="text-headline-md text-on-surface mb-3 line-clamp-2 hover:text-primary-container transition-colors cursor-pointer">
                    <a href={`/bai-viet/${post.slug}`}>{post.title}</a>
                  </h2>
                  <p className="text-body-sm text-on-surface-variant mb-4 line-clamp-3 flex-grow">
                    {post.description}
                  </p>
                  <a href={`/bai-viet/${post.slug}`} className="inline-flex items-center gap-1 text-primary-container hover:text-primary font-medium text-body-sm transition-colors mt-auto w-max">
                    Đọc tiếp <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
