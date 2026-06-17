const fs = require('fs');

const files = ['index.html', 'gioi-thieu.html', 'dich-vu.html', 'san-pham.html', 'lien-he.html', 'bai-viet.html', 'template.html'];

const newFooterHtml = `<!-- Footer -->
<footer class="bg-surface-container w-full border-t-[4px] border-primary-container relative overflow-hidden mt-auto">
    <div class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            
            <!-- Column 1: Brand & Contact -->
            <div class="space-y-6 lg:col-span-2 lg:pr-8">
                <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-primary-container text-4xl" style="font-variation-settings: 'FILL' 1;">roofing</span>
                    <span class="text-title-lg md:text-headline-sm font-headline-sm font-bold text-on-surface uppercase tracking-wide">
                        Cửa Cuốn Việt Đức
                    </span>
                </div>
                <p class="text-body-md text-on-surface-variant leading-relaxed">
                    Giải pháp an ninh toàn diện cho ngôi nhà của bạn. Cam kết chất lượng, giá cạnh tranh, đội ngũ thợ chuyên nghiệp có mặt nhanh chóng sau 30 phút.
                </p>
                <div class="space-y-3 pt-4 border-t border-surface-container-highest">
                    <div class="flex items-center gap-2 text-on-surface-variant">
                        <span class="material-symbols-outlined text-primary-container text-xl" style="font-variation-settings: 'FILL' 1;">call</span>
                        <span class="font-medium text-on-surface">Hotline:</span>
                        <a href="tel:0982674327" class="text-primary-container hover:text-primary transition-colors font-medium text-body-md">098.267.4327</a>
                    </div>
                    <div class="flex items-center gap-2 text-on-surface-variant">
                        <span class="material-symbols-outlined text-primary-container text-xl" style="font-variation-settings: 'FILL' 1;">mail</span>
                        <span class="font-medium text-on-surface">Email:</span>
                        <a href="mailto:cuacuonvietduc0421@gmail.com" class="hover:text-primary-container transition-colors truncate text-body-md">cuacuonvietduc0421@gmail.com</a>
                    </div>
                </div>
            </div>

            <!-- Column 2: Dịch Vụ Nổi Bật -->
            <div>
                <h3 class="text-title-lg font-headline-sm text-on-surface mb-6 relative inline-block">
                    Dịch Vụ Nổi Bật
                    <span class="absolute -bottom-2 left-0 w-8 h-1 bg-primary-container rounded-full"></span>
                </h3>
                <ul class="space-y-4">
                    <li><a href="dich-vu.html" class="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container transition-all hover:translate-x-1"><span class="material-symbols-outlined text-sm">chevron_right</span> Sửa cửa cuốn 24/7</a></li>
                    <li><a href="dich-vu.html" class="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container transition-all hover:translate-x-1"><span class="material-symbols-outlined text-sm">chevron_right</span> Lắp đặt cửa cuốn mới</a></li>
                    <li><a href="dich-vu.html" class="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container transition-all hover:translate-x-1"><span class="material-symbols-outlined text-sm">chevron_right</span> Thay motor chính hãng</a></li>
                    <li><a href="dich-vu.html" class="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container transition-all hover:translate-x-1"><span class="material-symbols-outlined text-sm">chevron_right</span> Sửa bình lưu điện (UPS)</a></li>
                    <li><a href="dich-vu.html" class="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container transition-all hover:translate-x-1"><span class="material-symbols-outlined text-sm">chevron_right</span> Sao chép Remote</a></li>
                </ul>
            </div>

            <!-- Column 3: Hỗ Trợ Khách Hàng -->
            <div>
                <h3 class="text-title-lg font-headline-sm text-on-surface mb-6 relative inline-block">
                    Hỗ Trợ Khách Hàng
                    <span class="absolute -bottom-2 left-0 w-8 h-1 bg-primary-container rounded-full"></span>
                </h3>
                <ul class="space-y-4">
                    <li><a href="gioi-thieu.html" class="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container transition-all hover:translate-x-1"><span class="material-symbols-outlined text-sm">chevron_right</span> Về Chúng Tôi</a></li>
                    <li><a href="bai-viet.html" class="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container transition-all hover:translate-x-1"><span class="material-symbols-outlined text-sm">chevron_right</span> Bảng giá dịch vụ</a></li>
                    <li><a href="bai-viet.html" class="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container transition-all hover:translate-x-1"><span class="material-symbols-outlined text-sm">chevron_right</span> Chính sách bảo hành</a></li>
                    <li><a href="bai-viet.html" class="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container transition-all hover:translate-x-1"><span class="material-symbols-outlined text-sm">chevron_right</span> Quy trình tiếp nhận</a></li>
                    <li><a href="lien-he.html" class="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container transition-all hover:translate-x-1"><span class="material-symbols-outlined text-sm">chevron_right</span> Gửi yêu cầu hỗ trợ</a></li>
                </ul>
            </div>

            <!-- Column 4: Mạng Lưới Phục Vụ -->
            <div>
                <h3 class="text-title-lg font-headline-sm text-on-surface mb-6 relative inline-block">
                    Mạng Lưới Phục Vụ
                    <span class="absolute -bottom-2 left-0 w-8 h-1 bg-primary-container rounded-full"></span>
                </h3>
                <p class="text-body-md text-on-surface-variant mb-4">Hệ thống trạm dịch vụ có mặt sau 30 phút tại các khu vực:</p>
                <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-surface-container-high border border-surface-container-highest rounded-full text-label-sm text-on-surface">TP. Hồ Chí Minh</span>
                    <span class="px-3 py-1 bg-surface-container-high border border-surface-container-highest rounded-full text-label-sm text-on-surface">Bình Dương</span>
                    <span class="px-3 py-1 bg-surface-container-high border border-surface-container-highest rounded-full text-label-sm text-on-surface">Đồng Nai</span>
                    <span class="px-3 py-1 bg-surface-container-high border border-surface-container-highest rounded-full text-label-sm text-on-surface">Long An</span>
                </div>
            </div>

        </div>
    </div>

    <!-- Bottom Bar -->
    <div class="bg-surface-container-high py-6 border-t border-surface-container-highest relative z-10">
        <div class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-4">
            <p class="text-body-sm text-on-surface-variant">
                © 2024 <span class="font-medium text-primary-container">Cửa Cuốn Việt Đức</span>. Đã đăng ký bản quyền.
            </p>
            <div class="flex items-center gap-4">
                <a href="#" class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container transition-all shadow-sm"><span class="material-symbols-outlined text-lg">public</span></a>
                <a href="https://zalo.me/0982674327" class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container transition-all shadow-sm"><span class="material-symbols-outlined text-lg">chat</span></a>
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
