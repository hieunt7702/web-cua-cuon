const fs = require('fs');

const files = ['index.html', 'gioi-thieu.html', 'dich-vu.html', 'san-pham.html', 'lien-he.html', 'bai-viet.html', 'template.html'];

const newFooterHtml = `<!-- Footer -->
<footer class="bg-[#0a0a0b] text-gray-300 w-full border-t border-gray-800 relative overflow-hidden mt-auto">
    <!-- Subtle Background Glow (Gold/Primary) -->
    <div class="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-[150px] pointer-events-none"></div>

    <div class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16 relative z-10">
        <!-- Compact Grid with 5 columns -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            
            <!-- Column 1: Brand & Contact (Takes 2 columns) -->
            <div class="space-y-6 lg:col-span-2 lg:pr-12">
                <div class="flex items-center gap-3 mb-2">
                    <span class="material-symbols-outlined text-primary-container text-4xl" style="font-variation-settings: 'FILL' 1;">roofing</span>
                    <span class="text-xl font-bold text-white uppercase tracking-wide">
                        Cửa Cuốn Việt Đức
                    </span>
                </div>
                <p class="text-sm text-gray-400 leading-relaxed">
                    Giải pháp an ninh toàn diện cho ngôi nhà của bạn. Cam kết chất lượng, giá cạnh tranh, đội ngũ thợ chuyên nghiệp có mặt nhanh chóng sau 30 phút.
                </p>
                <div class="space-y-3 pt-4 border-t border-gray-800">
                    <div class="flex items-center gap-3 group cursor-pointer">
                        <div class="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center shrink-0 group-hover:border-primary-container transition-colors">
                            <span class="material-symbols-outlined text-primary-container text-lg" style="font-variation-settings: 'FILL' 1;">call</span>
                        </div>
                        <div class="overflow-hidden">
                            <div class="text-xs uppercase tracking-widest text-gray-500 mb-0.5">Hotline 24/7</div>
                            <a href="tel:0982674327" class="text-base font-medium text-white group-hover:text-primary-container transition-colors">098.267.4327</a>
                        </div>
                    </div>
                    <div class="flex items-center gap-3 group cursor-pointer">
                        <div class="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center shrink-0 group-hover:border-primary-container transition-colors">
                            <span class="material-symbols-outlined text-primary-container text-lg" style="font-variation-settings: 'FILL' 1;">mail</span>
                        </div>
                        <div class="overflow-hidden">
                            <div class="text-xs uppercase tracking-widest text-gray-500 mb-0.5">Email Doanh Nghiệp</div>
                            <a href="mailto:cuacuonvietduc0421@gmail.com" class="text-sm text-white group-hover:text-primary-container transition-colors truncate block">cuacuonvietduc0421@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Column 2: Dịch Vụ Nổi Bật -->
            <div>
                <h3 class="text-base font-bold text-white mb-6 uppercase tracking-wider">
                    Dịch Vụ
                </h3>
                <ul class="space-y-3">
                    <li><a href="dich-vu.html" class="flex items-center gap-2 text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all"><span class="material-symbols-outlined text-xs text-primary-container">chevron_right</span> Sửa cửa cuốn 24/7</a></li>
                    <li><a href="dich-vu.html" class="flex items-center gap-2 text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all"><span class="material-symbols-outlined text-xs text-primary-container">chevron_right</span> Lắp đặt cửa cuốn mới</a></li>
                    <li><a href="dich-vu.html" class="flex items-center gap-2 text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all"><span class="material-symbols-outlined text-xs text-primary-container">chevron_right</span> Thay motor chính hãng</a></li>
                    <li><a href="dich-vu.html" class="flex items-center gap-2 text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all"><span class="material-symbols-outlined text-xs text-primary-container">chevron_right</span> Sửa bình lưu điện (UPS)</a></li>
                    <li><a href="dich-vu.html" class="flex items-center gap-2 text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all"><span class="material-symbols-outlined text-xs text-primary-container">chevron_right</span> Sao chép Remote</a></li>
                </ul>
            </div>

            <!-- Column 3: Hỗ Trợ Khách Hàng -->
            <div>
                <h3 class="text-base font-bold text-white mb-6 uppercase tracking-wider">
                    Hỗ Trợ
                </h3>
                <ul class="space-y-3">
                    <li><a href="gioi-thieu.html" class="flex items-center gap-2 text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all"><span class="material-symbols-outlined text-xs text-primary-container">chevron_right</span> Về Chúng Tôi</a></li>
                    <li><a href="bai-viet.html" class="flex items-center gap-2 text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all"><span class="material-symbols-outlined text-xs text-primary-container">chevron_right</span> Bảng giá dịch vụ</a></li>
                    <li><a href="bai-viet.html" class="flex items-center gap-2 text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all"><span class="material-symbols-outlined text-xs text-primary-container">chevron_right</span> Chính sách bảo hành</a></li>
                    <li><a href="bai-viet.html" class="flex items-center gap-2 text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all"><span class="material-symbols-outlined text-xs text-primary-container">chevron_right</span> Quy trình tiếp nhận</a></li>
                    <li><a href="lien-he.html" class="flex items-center gap-2 text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all"><span class="material-symbols-outlined text-xs text-primary-container">chevron_right</span> Gửi yêu cầu hỗ trợ</a></li>
                </ul>
            </div>

            <!-- Column 4: Mạng Lưới Phục Vụ -->
            <div>
                <h3 class="text-base font-bold text-white mb-6 uppercase tracking-wider">
                    Phục Vụ
                </h3>
                <p class="text-sm text-gray-400 mb-4 leading-relaxed">Hệ thống trạm dịch vụ có mặt sau 30 phút tại các khu vực:</p>
                <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-xs text-gray-300">TP. Hồ Chí Minh</span>
                    <span class="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-xs text-gray-300">Bình Dương</span>
                    <span class="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-xs text-gray-300">Đồng Nai</span>
                    <span class="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-xs text-gray-300">Long An</span>
                </div>
            </div>

        </div>
    </div>

    <!-- Bottom Bar -->
    <div class="bg-[#050505] py-5 border-t border-gray-900 relative z-10">
        <div class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-4">
            <p class="text-xs text-gray-500">
                © 2024 <span class="text-gray-300">Cửa Cuốn Việt Đức</span>. Đã đăng ký bản quyền.
            </p>
            <div class="flex items-center gap-3">
                <a href="#" class="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-container transition-all"><span class="material-symbols-outlined text-sm">public</span></a>
                <a href="https://zalo.me/0982674327" class="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-container transition-all"><span class="material-symbols-outlined text-sm">chat</span></a>
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
