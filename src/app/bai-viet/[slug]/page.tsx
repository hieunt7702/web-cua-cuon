import { getPostBySlug, posts } from "@/data/posts";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: "Bài viết không tồn tại - Cửa Cuốn Việt Đức",
    };
  }

  return {
    title: `${post.title} - Cửa Cuốn Việt Đức`,
    description: post.description,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.coverImage],
      type: "article",
      publishedTime: post.date,
    },
  };
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="py-16 bg-surface relative border-b border-surface-container-high">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10 pt-10">
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 mb-8 text-label-sm">
            <a href="/" className="text-on-surface-variant hover:text-primary-container transition-colors">Trang Chủ</a>
            <span className="text-surface-container-highest">/</span>
            <a href="/bai-viet" className="text-on-surface-variant hover:text-primary-container transition-colors">Bài Viết</a>
            <span className="text-surface-container-highest">/</span>
            <span className="text-primary-container line-clamp-1 max-w-[200px] sm:max-w-[300px]">{post.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Main Content */}
            <article className="lg:col-span-8">
              {/* Header */}
              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-4 text-label-sm text-on-surface-variant mb-6">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px]">visibility</span>
                    <span>{post.views} Lượt xem</span>
                  </div>
                </div>

                <h1 className="text-headline-md md:text-headline-lg font-headline-lg text-on-surface mb-6 uppercase leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-surface-container-high text-on-surface-variant text-label-sm rounded border border-surface-container-highest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cover Image */}
              <div className="w-full aspect-video rounded-xl overflow-hidden mb-12 shadow-lg">
                <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
              </div>

              {/* Markdown Content */}
              <div className="prose prose-sm md:prose-base dark:prose-invert prose-headings:font-headline-lg prose-headings:uppercase prose-h1:text-xl prose-h1:md:text-2xl prose-h2:text-lg prose-h2:md:text-xl prose-h3:text-base prose-h3:md:text-lg prose-a:text-primary-container hover:prose-a:text-primary max-w-none prose-img:rounded-xl">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {post.content}
                </ReactMarkdown>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 sticky top-24 space-y-8">
                <div className="bg-surface-container p-6 rounded-2xl border border-surface-container-high">
                  <h3 className="text-headline-md font-headline-md text-on-surface mb-4 uppercase border-b-2 border-primary-container pb-2 inline-block">
                    Bài Viết Mới Nhất
                  </h3>
                  <div className="space-y-4 mt-2">
                    {posts.filter(p => p.slug !== post.slug).slice(0, 5).map(recentPost => (
                      <a key={recentPost.slug} href={`/bai-viet/${recentPost.slug}`} className="group flex gap-4 items-start">
                        <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                          <img src={recentPost.coverImage} alt={recentPost.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div>
                          <h4 className="text-label-md text-on-surface group-hover:text-primary-container transition-colors line-clamp-2 leading-snug">
                            {recentPost.title}
                          </h4>
                          <div className="text-label-sm text-on-surface-variant mt-1.5 flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">calendar_month</span> {recentPost.date}
                          </div>
                        </div>
                      </a>
                    ))}
                    {posts.length <= 1 && (
                       <p className="text-on-surface-variant text-label-md italic">Đang cập nhật thêm bài viết...</p>
                    )}
                  </div>
                </div>

                <div className="bg-primary-container/10 p-6 rounded-2xl border border-primary-container/20 text-center">
                  <div className="w-16 h-16 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-3xl">support_agent</span>
                  </div>
                  <h3 className="text-headline-md font-headline-md text-on-surface mb-2">Cần Tư Vấn?</h3>
                  <p className="text-body-sm text-on-surface-variant mb-6">Liên hệ ngay để được hỗ trợ kỹ thuật và báo giá nhanh chóng nhất.</p>
                  <a href="tel:0982674327" className="inline-flex items-center gap-2 bg-primary-container text-on-primary px-6 py-3 rounded-full font-label-md text-label-md hover:bg-primary transition-colors w-full justify-center">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                    098.267.4327
                  </a>
                </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
