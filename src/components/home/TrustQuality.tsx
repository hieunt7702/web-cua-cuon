export function TrustQuality() {
  return (
    <section className="py-8 md:py-12 bg-surface border-b border-surface-container-high">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-gutter">
          <div className="flex items-center gap-4 bg-gradient-to-br from-surface to-primary/5 border border-primary/20 p-5 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
            </div>
            <div>
              <h3 className="text-label-md font-bold text-on-surface uppercase mb-1">Có Mặt Sau 30 Phút</h3>
              <p className="text-label-sm text-amber-700">Khắc phục sự cố khẩn cấp 24/7</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-gradient-to-br from-surface to-primary/5 border border-primary/20 p-5 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
            </div>
            <div>
              <h3 className="text-label-md font-bold text-on-surface uppercase mb-1">Cam Kết Chất Lượng</h3>
              <p className="text-label-sm text-amber-700">Linh kiện chính hãng 100%</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-gradient-to-br from-surface to-primary/5 border border-primary/20 p-5 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>engineering</span>
            </div>
            <div>
              <h3 className="text-label-md font-bold text-on-surface uppercase mb-1">Đội Ngũ Chuyên Nghiệp</h3>
              <p className="text-label-sm text-amber-700">Thợ lành nghề, nhiều kinh nghiệm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
