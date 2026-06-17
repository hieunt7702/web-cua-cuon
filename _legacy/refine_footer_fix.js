const fs = require('fs');

const files = ['index.html', 'gioi-thieu.html', 'dich-vu.html', 'san-pham.html', 'lien-he.html', 'bai-viet.html', 'template.html'];

const newFooterHtml = `<!-- Footer -->
<footer class="bg-surface-container-low w-full border-t border-surface-container-high relative overflow-hidden mt-auto">
    <!-- Subtle Background Glow -->
    <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-container/5 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24 relative z-10">
        <!-- Changed to lg:grid-cols-5 to give the first column more space -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            
            <!-- Column 1: Brand & Contact (Takes 2 columns on large screens) -->
            <div class="space-y-6 lg:col-span-2 lg:pr-8">
                <div class="flex items-center gap-3 mb-6">
                    <span class="material-symbols-outlined text-primary-container text-4xl" style="font-variation-settings: 'FILL' 1;">roofing</span>
                    <!-- Reduced font size from text-headline-md to text-title-lg to prevent wrapping -->
                    <span class="text-title-lg md:text-headline-sm font-headline-sm font-bold text-on-surface uppercase tracking-wide">
                        Cửa Cuốn Việt Đức
                    </span>
                </div>
                <p class="text-body-md text-on-surface-variant leading-relaxed">
                    Giải pháp an ninh toàn diện cho ngôi nhà của bạn. Cam kết chất lượng, giá cạnh tranh, đội ngũ thợ chuyên nghiệp có mặt nhanh chóng sau 30 phút.
                </p>
                <div class="space-y-4 pt-4 border-t border-surface-container-high">
                    <div class="flex items-center gap-4 text-on-surface-variant group">
                        <div class="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0 group-hover:bg-primary-container transition-colors shadow-sm">
                            <span class="material-symbols-outlined text-primary-container group-hover:text-on-primary-container text-xl" style="font-variation-settings: 'FILL' 1;">call</span>
                        </div>
                        <div class="overflow-hidden">
                            <div class="text-label-sm uppercase tracking-widest opacity-70 mb-0.5">Hotline 24/7</div>
                            <a href="tel:0982674327" class="text-title-lg font-medium text-primary-container hover:text-primary transition-colors">098.267.4327</a>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 text-on-surface-variant group">
                        <div class="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0 group-hover:bg-primary-container transition-colors shadow-sm">
                            <span class="material-symbols-outlined text-primary-container group-hover:text-on-primary-container text-xl" style="font-variation-settings: 'FILL' 1;">mail</span>
                        </div>
                        <div class="overflow-hidden">
                            <div class="text-label-sm uppercase tracking-widest opacity-70 mb-0.5">Email Doanh Nghiệp</div>
                            <!-- Removed break-all, use truncate or break-words if needed, but with col-span-2 it will fit -->
                            <a href="mailto:cuacuonvietduc0421@gmail.com" class="text-body-lg text-on-surface hover:text-primary-container transition-colors truncate block">cuacuonvietduc0421@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Column 2: Dịch Vụ Nổi Bật -->
            <div>
                <h3 class="text-title-lg font-headline-sm text-on-surface mb-6 relative inline-block">
                    Dịch Vụ Nổi Bật
                    <span class="absolute -bottom-2 left-0 w-12 h-1 bg-primary-container rounded-full"></span>
                </h3>
                <ul class="space-y-4">
                    <li><a href="dich-vu.html" class="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container transition-all hover:translate-x-2"><span class="material-symbols-outlined text-sm">chevron_right</span> Sửa cửa cuốn 24/7</a></li>
                    <li><a href="dich-vu.html" class="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container transition-all hover:translate-x-2"><span class="material-symbols-outlined text-sm">chevron_right</span> Lắp đặt cửa cuốn mới</a></li>
                    <li><a href="dich-vu.html" class="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container transition-all hover:translate-x-2"><span class="material-symbols-outlined text-sm">chevron_right</span> Thay motor chính hãng</a></li>
                    <li><a href="dich-vu.html" class="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container transition-all hover:translate-x-2"><span class="material-symbols-outlined text-sm">chevron_right</span> Sửa bình lưu điện (UPS)</a></li>
                    <li><a href="dich-vu.html" class="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container transition-all hover:translate-x-2"><span class="material-symbols-outlined text-sm">chevron_right</span> Sao chép Remote cửa cuốn</a></li>
                </ul>
            </div>

            <!-- Column 3: Hỗ Trợ Khách Hàng -->
            <div>
                <h3 class="text-title-lg font-headline-sm text-on-surface mb-6 relative inline-block">
                    Hỗ Trợ Khách Hàng
                    <span class="absolute -bottom-2 left-0 w-12 h-1 bg-primary-container rounded-full"></span>
                </h3>
                <ul class="space-y-4">
                    <li><a href="gioi-thieu.html" class="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container transition-all hover:translate-x-2"><span class="material-symbols-outlined text-sm">chevron_right</span> Về Chúng Tôi</a></li>
                    <li><a href="bai-viet.html" class="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container transition-all hover:translate-x-2"><span class="material-symbols-outlined text-sm">chevron_right</span> Bảng giá dịch vụ</a></li>
                    <li><a href="bai-viet.html" class="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container transition-all hover:translate-x-2"><span class="material-symbols-outlined text-sm">chevron_right</span> Chính sách bảo hành</a></li>
                    <li><a href="bai-viet.html" class="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container transition-all hover:translate-x-2"><span class="material-symbols-outlined text-sm">chevron_right</span> Quy trình tiếp nhận</a></li>
                    <li><a href="lien-he.html" class="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container transition-all hover:translate-x-2"><span class="material-symbols-outlined text-sm">chevron_right</span> Gửi yêu cầu hỗ trợ</a></li>
                </ul>
            </div>

            <!-- Column 4: Mạng Lưới Phục Vụ -->
            <div>
                <h3 class="text-title-lg font-headline-sm text-on-surface mb-6 relative inline-block">
                    Mạng Lưới Phục Vụ
                    <span class="absolute -bottom-2 left-0 w-12 h-1 bg-primary-container rounded-full"></span>
                </h3>
                <p class="text-body-md text-on-surface-variant mb-4">Hệ thống trạm dịch vụ có mặt khắp các khu vực trọng điểm, đảm bảo có mặt sau 30 phút:</p>
                <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1.5 bg-surface-container border border-surface-container-high rounded-full text-label-sm text-on-surface hover:border-primary-container transition-colors cursor-default">TP. Hồ Chí Minh</span>
                    <span class="px-3 py-1.5 bg-surface-container border border-surface-container-high rounded-full text-label-sm text-on-surface hover:border-primary-container transition-colors cursor-default">Bình Dương</span>
                    <span class="px-3 py-1.5 bg-surface-container border border-surface-container-high rounded-full text-label-sm text-on-surface hover:border-primary-container transition-colors cursor-default">Đồng Nai</span>
                    <span class="px-3 py-1.5 bg-surface-container border border-surface-container-high rounded-full text-label-sm text-on-surface hover:border-primary-container transition-colors cursor-default">Long An</span>
                </div>
            </div>

        </div>
    </div>

    <!-- Bottom Bar -->
    <div class="bg-surface py-6 border-t border-surface-container-high relative z-10">
        <div class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-4">
            <p class="text-body-sm text-on-surface-variant">
                © 2024 <span class="font-medium text-primary-container">Cửa Cuốn Việt Đức</span>. Đã đăng ký bản quyền.
            </p>
            <div class="flex items-center gap-4">
                <a href="#" class="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container transition-all shadow-sm"><span class="material-symbols-outlined text-lg">public</span></a>
                <a href="https://zalo.me/0982674327" class="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container transition-all shadow-sm"><span class="material-symbols-outlined text-lg">chat</span></a>
            </div>
        </div>
    </div>
</footer>`;

const footerRegex = /<!-- Footer -->[\s\S]*?<\/footer>/;

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');

    if (footerRegex.test(html)) {
        html = html.replace(footerRegex, newFooterHtml);
        fs.writeFileSync(file, html);
        console.log('Updated footer in ' + file);
    }
});
