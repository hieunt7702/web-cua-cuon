const fs = require('fs');

const servicesList = [
    'Nhận sửa cửa cuốn hư hỏng',
    'Nhận sửa cửa cuốn không đóng mở được',
    'Nhận sửa cửa cuốn trọn gói',
    'Nhận sửa cửa cuốn giá rẻ',
    'Nhận sửa cửa cuốn theo yêu cầu',
    'Nhận sửa cửa cuốn đóng mở kêu ầm ầm',
    'Nhận sửa cửa cuốn 24/7',
    'Nhận sửa cửa cuốn ngoài giờ làm việc (ban đêm)',
    'Nhận sửa cửa cuốn hư thanh nhôm lá nhôm',
    'Nhận sửa cửa cuốn hư bạc đạn',
    'Nhận sửa cửa cuốn hư đường ray',
    'Nhận sửa cửa cuốn hư motor',
    'Nhận sửa cửa cuốn hư điều khiển lên (xuống)',
    'Nhận sửa cửa cuốn quên chìa khóa',
    'Nhận sửa cửa cuốn bị khóa trong',
    'Nhận sửa cửa cuốn Tphcm',
    'Nhận sửa cửa cuốn tại nhà',
    'Nhận sửa cửa cuốn tận nơi',
    'Nhận thi công lắp đặt cửa cuốn',
    'Nhận cải tạo nâng cấp cửa cuốn',
    'Nhận di dời cửa cuốn trọn gói',
    'Nhận sửa cửa cuốn hư ròng rọc',
    'Nhận sửa cửa cuốn lưu động',
    'Nhận thay thế linh kiện cửa cuốn',
    'Nhận thay thế phụ kiện cửa cuốn'
];

let servicesHtml = '';
servicesList.forEach(s => {
    servicesHtml += `
            <div class="bg-surface-container/50 backdrop-blur-sm p-5 rounded-2xl border border-surface-container-high hover:border-primary-container/50 hover:bg-surface-container transition-all duration-300 flex items-center gap-4 group cursor-pointer hover:shadow-lg hover:-translate-y-1">
                <div class="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center shrink-0 group-hover:bg-primary-container/20 transition-colors">
                    <span class="material-symbols-outlined text-primary-container text-xl" style="font-variation-settings: 'FILL' 1;">build_circle</span>
                </div>
                <span class="text-body-md font-body-md text-on-surface group-hover:text-primary-container transition-colors">${s}</span>
            </div>`;
});

const binhDuongAddresses = [
    '230 Đại lộ Bình Dương, Phú Hòa, Thủ Dầu Một',
    'Số 1, Đường D1, KDC Việt Sing, Thuận An',
    '55 Đ. Nguyễn Thị Minh Khai, Phú Hòa, Thủ Dầu Một',
    'Lô D2, KCN Mỹ Phước 1, Bến Cát',
    '100 Đ. Trần Hưng Đạo, Dĩ An, Bình Dương',
    '15 Nguyễn Trãi, Phường Dĩ An, TP. Dĩ An',
    '88 Đường ĐT743B, Phường An Bình, TP. Dĩ An',
    '32 Lê Hồng Phong, Phường Tân Bình, TP. Dĩ An',
    '68 Trần Quý Cáp, TP. Dĩ An'
];

const dongNaiAddresses = [
    'Đồng Khởi, Phường Tân Hiệp, TP. Biên Hòa',
    'Đ. 30/4, Phường Trung Dũng, TP. Biên Hòa',
    'Võ Thị Sáu, Phường Thống Nhất, TP. Biên Hòa',
    '100 Đường 5A, Khu Dân Cư Biên Hòa, Phường An Bình, Thành phố Biên Hòa',
    '56 Đường N1, Phường Thống Nhất, Thành phố Biên Hòa',
    '123/45 KP3, Phường Trảng Dài, Thành phố Biên Hòa',
    '789/10 KP2, Phường Trảng Dài, Thành phố Biên Hòa',
    '19A Đinh Tiên Hoàng, Khu phố 3, Trảng Bom',
    '28/6, Đ. Hùng Vương, TT. Tràng Bỏm, Trảng Bom',
    '1267, QL51, Long Đức, Long Thành, Đồng Nai, Việt Nam'
];

const hcmAddresses = [
    '220 Đ. Điện Biên Phủ, Phường 7, Quận 3',
    '101 Mai Chí Thọ, An Phú, Quận 2',
    '170 Nguyễn Thị Minh Khai, Phường 6, Quận 3',
    '300 Đ. Nguyễn Văn Linh, Phường Tân Phú, Quận 7',
    '99 Châu Văn Liêm, Phường 10, Quận 5',
    '481 Cách Mạng Tháng 8, Phường 13, Quận 10',
    '89 Hoàng Hoa Thám, Phường 13, Tân Bình',
    '250 Cộng Hòa, Phường 12, Tân Bình',
    '120 Trường Chinh, Phường 14, Tân Bình',
    '60 Đ. Lê Lai, Phường Bến Nghé, Quận 1',
    '112 Đ. Trần Não, Phường Bình An, Quận 2',
    '199 Đ. Khánh Hội, Phường 3, Quận 4',
    '88 Hậu Giang, Phường 6, Quận 6',
    '75 Đ. Nguyễn Duy Trinh, Phường 15, Quận 9',
    '130 Đ. Quang Trung, Phường 10, Gò Vấp',
    '500 Đ. Phan Văn Trị, Phường 5, Gò Vấp',
    '162 Đ. Nguyễn Oanh, Phường 17, Gò Vấp',
    '77 Đ. Đinh Bộ Lĩnh, Phường 26, Bình Thạnh',
    '25 Nguyễn Xí, Phường 26, Bình Thạnh'
];

function buildAddressListNoScroll(list) {
    return list.map(a => `
                    <li class="flex items-start gap-4 p-4 rounded-xl hover:bg-surface transition-colors border border-transparent hover:border-surface-container-highest group">
                        <div class="w-10 h-10 rounded-full bg-surface border border-surface-container-highest flex items-center justify-center shrink-0 group-hover:bg-primary-container/10 group-hover:border-primary-container/30 transition-colors">
                            <span class="material-symbols-outlined text-primary-container text-lg" style="font-variation-settings: 'FILL' 1;">location_on</span>
                        </div>
                        <span class="text-body-md font-body-md text-on-surface-variant group-hover:text-on-surface transition-colors pt-2 leading-relaxed">${a}</span>
                    </li>`).join('');
}

const aboutHtml = `<!-- About Us Section -->
<section class="py-24 bg-surface border-b border-surface-container-high relative overflow-hidden">
    <!-- Decorative background elements -->
    <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-container/5 rounded-full blur-[100px] pointer-events-none"></div>
    
    <div class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div class="flex flex-col lg:flex-row gap-16 items-center">
            
            <div class="w-full lg:w-1/2">
                <div class="inline-flex items-center gap-2.5 bg-primary-container/10 border border-primary-container/20 px-5 py-2 rounded-full mb-8">
                    <span class="material-symbols-outlined text-primary-container text-xl" style="font-variation-settings: 'FILL' 1;">stars</span>
                    <span class="text-label-sm font-label-sm text-primary-container uppercase tracking-[0.2em]">Về Chúng Tôi</span>
                </div>
                <h2 class="text-display-lg font-display-lg text-on-surface mb-8 uppercase leading-tight">
                    Cửa Cuốn <br/>
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-secondary-container">Việt Đức</span>
                </h2>
                <div class="space-y-6 mb-10">
                    <p class="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
                        Được thành lập với sứ mệnh mang đến sự an tâm tuyệt đối cho mọi gia đình và doanh nghiệp, <strong>Cửa Cuốn Việt Đức</strong> tự hào là đơn vị tiên phong trong lĩnh vực lắp đặt, sửa chữa và bảo dưỡng cửa cuốn.
                    </p>
                    <p class="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
                        Với đội ngũ kỹ thuật viên lành nghề, trang thiết bị hiện đại và linh kiện chính hãng, chúng tôi cam kết mang lại dịch vụ nhanh chóng, chuyên nghiệp và giá cả cạnh tranh nhất thị trường.
                    </p>
                </div>
                
                <div class="flex flex-wrap gap-6 items-center">
                    <a href="tel:0961685345" class="bg-gradient-to-r from-primary-container to-secondary-container hover:from-primary hover:to-primary text-on-primary-container text-label-md font-label-md px-10 py-5 rounded-2xl transition-all shadow-[0_8px_30px_rgb(252,192,81,0.3)] hover:shadow-[0_8px_40px_rgb(252,192,81,0.5)] flex items-center gap-3 hover:-translate-y-1">
                        <span class="material-symbols-outlined text-2xl" style="font-variation-settings: 'FILL' 1;">phone_in_talk</span>
                        GỌI THỢ NGAY
                    </a>
                    
                    <div class="flex items-center gap-4">
                        <div class="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center border border-surface-container-highest shadow-inner">
                            <span class="material-symbols-outlined text-primary-container text-2xl" style="font-variation-settings: 'FILL' 1;">support_agent</span>
                        </div>
                        <div>
                            <p class="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest mb-1">Hỗ trợ 24/7</p>
                            <p class="text-headline-md font-headline-md text-on-surface">0961 685 345</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="w-full lg:w-1/2 relative mt-8 lg:mt-0">
                <!-- Luxury Image Frame -->
                <div class="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-surface-container-highest group">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTuix2ZgXq2q2IeB2maYHC8tC0gTo-312jqpUljbIO_WtchHyC7Ogynat8frArRWpid5XgwF5CxDwGixbHOMyeUPwxPxOzlufqqEtB3JrNLsmW0lRJXvH5_A8CF9QBAZBeoP1Y7i7HN0dXrlRrQoisfy3USLneF1mCvYTlwdLsBZtGV7P-hndbpqXfxOO3Hu1IiMtNfbM-o3L2RCOY4hQ2_T3wJkjIIGW2037HftigvOhQ3qNPgq_YQFdL-pOrzeQFgnELTvwSuXWy" alt="Cửa Cuốn Việt Đức" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
                    
                    <!-- Floating Badge -->
                    <div class="absolute bottom-8 left-8 right-8 bg-surface/80 backdrop-blur-xl border border-surface-container-highest p-6 rounded-2xl flex items-center gap-6 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <div class="w-16 h-16 bg-gradient-to-br from-primary-container to-secondary-container rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                            <span class="material-symbols-outlined text-on-primary-container text-3xl" style="font-variation-settings: 'FILL' 1;">workspace_premium</span>
                        </div>
                        <div>
                            <div class="font-display-lg text-4xl text-on-surface mb-1 leading-none">10+</div>
                            <div class="font-label-md text-sm text-on-surface-variant uppercase tracking-widest">Năm Kinh Nghiệm</div>
                        </div>
                    </div>
                </div>
                
                <!-- Decorative Corner -->
                <div class="absolute -top-6 -right-6 w-32 h-32 border-t-4 border-r-4 border-primary-container/50 rounded-tr-[3rem] -z-10"></div>
                <div class="absolute -bottom-6 -left-6 w-32 h-32 border-b-4 border-l-4 border-primary-container/50 rounded-bl-[3rem] -z-10"></div>
            </div>
            
        </div>
    </div>
</section>`;

const extraSectionsHtml = `<!-- Detailed Services List -->
<section class="py-32 bg-background relative overflow-hidden">
    <!-- Abstract glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-container/5 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div class="text-center mb-20">
            <div class="inline-flex items-center gap-2 bg-surface-container px-4 py-2 rounded-full mb-6 border border-surface-container-high shadow-lg">
                <span class="material-symbols-outlined text-primary-container text-lg" style="font-variation-settings: 'FILL' 1;">handyman</span>
                <span class="text-label-sm font-label-sm text-on-surface uppercase tracking-widest">Dịch Vụ Chuyên Sâu</span>
            </div>
            <h2 class="text-display-lg font-display-lg text-on-surface mb-6 uppercase">Sửa Chữa Cứu Hộ Tại Nhà</h2>
            <div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent mx-auto mb-8"></div>
            <p class="text-body-lg font-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
                Gọi thợ sửa cửa cuốn tận nơi tại nhà nội thành TPHCM với giá cả phải chăng và phục vụ nhiệt tình chu đáo nhất. Chúng tôi luôn lấy sự an tâm của khách hàng làm kim chỉ nam.
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
${servicesHtml}
        </div>
    </div>
</section>

<!-- 3 Steps Process -->
<section class="py-32 bg-surface relative border-t border-surface-container-high">
    <div class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="text-center mb-24">
            <h2 class="text-display-lg font-display-lg text-on-surface mb-6 uppercase">Quy Trình 3 Bước</h2>
            <div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent mx-auto"></div>
        </div>
        
        <div class="relative max-w-6xl mx-auto">
            <!-- Luxury connecting line -->
            <div class="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-primary-container/30 to-transparent z-0"></div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
                <!-- Step 1 -->
                <div class="flex flex-col items-center text-center group">
                    <div class="w-36 h-36 rounded-full bg-surface-container border border-surface-container-highest shadow-2xl flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500">
                        <div class="w-[7.5rem] h-[7.5rem] rounded-full bg-gradient-to-br from-surface-container-high to-surface flex items-center justify-center">
                            <span class="text-display-lg font-display-lg text-transparent bg-clip-text bg-gradient-to-br from-primary-container to-secondary-container">1</span>
                        </div>
                        <!-- Glow effect -->
                        <div class="absolute inset-0 bg-primary-container/20 rounded-full blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div class="inline-flex items-center gap-2 bg-primary-container/10 px-5 py-2 rounded-full mb-6 border border-primary-container/20">
                        <span class="material-symbols-outlined text-primary-container text-sm">support_agent</span>
                        <span class="text-label-sm font-label-sm text-primary-container uppercase tracking-wider">Tiếp Nhận</span>
                    </div>
                    <h3 class="text-headline-lg font-headline-lg text-on-surface mb-4">Nhận Yêu Cầu</h3>
                    <p class="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">Tiếp nhận qua Hotline/Zalo, điều phối thợ kỹ thuật cao đến ngay sau 30 phút.</p>
                </div>

                <!-- Step 2 -->
                <div class="flex flex-col items-center text-center group">
                    <div class="w-36 h-36 rounded-full bg-surface-container border border-surface-container-highest shadow-2xl flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500">
                        <div class="w-[7.5rem] h-[7.5rem] rounded-full bg-gradient-to-br from-surface-container-high to-surface flex items-center justify-center">
                            <span class="text-display-lg font-display-lg text-transparent bg-clip-text bg-gradient-to-br from-primary-container to-secondary-container">2</span>
                        </div>
                        <div class="absolute inset-0 bg-primary-container/20 rounded-full blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div class="inline-flex items-center gap-2 bg-primary-container/10 px-5 py-2 rounded-full mb-6 border border-primary-container/20">
                        <span class="material-symbols-outlined text-primary-container text-sm">engineering</span>
                        <span class="text-label-sm font-label-sm text-primary-container uppercase tracking-wider">Thực Thi</span>
                    </div>
                    <h3 class="text-headline-lg font-headline-lg text-on-surface mb-4">Sửa Chữa</h3>
                    <p class="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">Kiểm tra chính xác lỗi, báo giá minh bạch và xử lý dứt điểm sự cố tại chỗ.</p>
                </div>

                <!-- Step 3 -->
                <div class="flex flex-col items-center text-center group">
                    <div class="w-36 h-36 rounded-full bg-surface-container border border-surface-container-highest shadow-2xl flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500">
                        <div class="w-[7.5rem] h-[7.5rem] rounded-full bg-gradient-to-br from-surface-container-high to-surface flex items-center justify-center">
                            <span class="text-display-lg font-display-lg text-transparent bg-clip-text bg-gradient-to-br from-primary-container to-secondary-container">3</span>
                        </div>
                        <div class="absolute inset-0 bg-primary-container/20 rounded-full blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div class="inline-flex items-center gap-2 bg-primary-container/10 px-5 py-2 rounded-full mb-6 border border-primary-container/20">
                        <span class="material-symbols-outlined text-primary-container text-sm">handshake</span>
                        <span class="text-label-sm font-label-sm text-primary-container uppercase tracking-wider">Hoàn Tất</span>
                    </div>
                    <h3 class="text-headline-lg font-headline-lg text-on-surface mb-4">Bàn Giao</h3>
                    <p class="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">Nghiệm thu vận hành êm ái, thanh toán và cung cấp phiếu bảo hành dài hạn.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="py-24 px-margin-mobile md:px-margin-desktop bg-background">
    <div class="max-w-max-width mx-auto relative rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <!-- Luxury deep dark gradient background -->
        <div class="absolute inset-0 bg-gradient-to-br from-surface-container-highest via-surface-container to-surface z-0"></div>
        
        <!-- Golden accents -->
        <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-container/20 via-transparent to-transparent z-0 pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary-container/20 via-transparent to-transparent z-0 pointer-events-none"></div>
        
        <!-- Border highlight -->
        <div class="absolute inset-0 border border-white/10 rounded-[3rem] z-10 pointer-events-none"></div>

        <div class="relative z-20 px-8 py-20 md:p-24 flex flex-col xl:flex-row items-center justify-between gap-16 text-center xl:text-left">
            <div class="max-w-3xl">
                <div class="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-2.5 rounded-full mb-10 shadow-lg">
                    <span class="material-symbols-outlined text-primary-container text-xl" style="font-variation-settings: 'FILL' 1;">timer</span>
                    <span class="text-label-sm font-label-sm text-white uppercase tracking-[0.2em]">Phục Vụ Tốc Độ Cao</span>
                </div>
                <h2 class="text-display-lg font-display-lg text-white mb-8 text-5xl md:text-[4rem] leading-[1.1]">
                    Nhận Báo Giá Ưu Đãi <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-secondary-container">Dành Riêng Cho Bạn!</span>
                </h2>
                <p class="text-body-lg font-body-lg text-white/70 text-xl leading-relaxed">
                    Thợ đến ngay sau 30 phút, khảo sát thực tế và báo giá chi tiết tận nơi <strong class="text-white">hoàn toàn miễn phí</strong>.
                </p>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-6 shrink-0 w-full xl:w-auto">
                <a href="tel:0961685345" class="bg-gradient-to-r from-primary-container to-secondary-container hover:from-primary hover:to-primary text-on-primary-container px-10 py-6 rounded-[1.5rem] font-label-md text-label-md flex items-center justify-center gap-3 transition-all shadow-[0_10px_40px_rgba(252,192,81,0.3)] hover:shadow-[0_10px_50px_rgba(252,192,81,0.5)] hover:-translate-y-2 w-full sm:w-auto">
                    <span class="material-symbols-outlined text-3xl" style="font-variation-settings: 'FILL' 1;">phone_in_talk</span>
                    GỌI NGAY: 0961 685 345
                </a>
                <a href="https://zalo.me/0961685345" target="_blank" class="bg-white/5 hover:bg-white/10 text-white backdrop-blur-md border border-white/20 px-10 py-6 rounded-[1.5rem] font-label-md text-label-md flex items-center justify-center gap-3 transition-all hover:-translate-y-2 w-full sm:w-auto">
                    <span class="material-symbols-outlined text-3xl">forum</span>
                    NHẮN TIN ZALO
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Branches Section -->
<section class="py-32 bg-surface-container-low border-t border-surface-container-high relative">
    <div class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="text-center mb-24">
            <h2 class="text-display-lg font-display-lg text-on-surface mb-6 uppercase">Hệ Thống Trạm Dịch Vụ</h2>
            <div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent mx-auto mb-8"></div>
            <p class="text-body-lg font-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">Mạng lưới phân bổ rộng khắp, đảm bảo có mặt khắc phục sự cố cho bạn trong thời gian nhanh nhất dù ở bất cứ đâu.</p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <!-- Binh Duong -->
            <div class="bg-surface-container p-10 rounded-[2.5rem] border border-surface-container-high shadow-2xl relative overflow-hidden group hover:border-primary-container/30 transition-colors duration-500">
                <div class="absolute top-0 right-0 w-48 h-48 bg-primary-container/5 rounded-bl-full pointer-events-none group-hover:bg-primary-container/10 transition-colors duration-500"></div>
                <div class="flex items-center gap-5 mb-10 pb-6 border-b border-surface-container-highest">
                    <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-container to-secondary-container flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                        <span class="material-symbols-outlined text-on-primary-container text-3xl" style="font-variation-settings: 'FILL' 1;">business</span>
                    </div>
                    <h3 class="text-display-lg text-3xl font-display-lg text-on-surface">Bình Dương</h3>
                </div>
                <ul class="space-y-3 relative z-10">
${buildAddressListNoScroll(binhDuongAddresses)}
                </ul>
            </div>
            
            <!-- Dong Nai -->
            <div class="bg-surface-container p-10 rounded-[2.5rem] border border-surface-container-high shadow-2xl relative overflow-hidden group hover:border-primary-container/30 transition-colors duration-500">
                <div class="absolute top-0 right-0 w-48 h-48 bg-primary-container/5 rounded-bl-full pointer-events-none group-hover:bg-primary-container/10 transition-colors duration-500"></div>
                <div class="flex items-center gap-5 mb-10 pb-6 border-b border-surface-container-highest">
                    <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-container to-secondary-container flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                        <span class="material-symbols-outlined text-on-primary-container text-3xl" style="font-variation-settings: 'FILL' 1;">business</span>
                    </div>
                    <h3 class="text-display-lg text-3xl font-display-lg text-on-surface">Đồng Nai</h3>
                </div>
                <ul class="space-y-3 relative z-10">
${buildAddressListNoScroll(dongNaiAddresses)}
                </ul>
            </div>

            <!-- HCMC -->
            <div class="bg-surface-container p-10 rounded-[2.5rem] border border-surface-container-high shadow-2xl relative overflow-hidden group hover:border-primary-container/30 transition-colors duration-500 md:col-span-2 lg:col-span-1">
                <div class="absolute top-0 right-0 w-48 h-48 bg-primary-container/5 rounded-bl-full pointer-events-none group-hover:bg-primary-container/10 transition-colors duration-500"></div>
                <div class="flex items-center gap-5 mb-10 pb-6 border-b border-surface-container-highest">
                    <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-container to-secondary-container flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                        <span class="material-symbols-outlined text-on-primary-container text-3xl" style="font-variation-settings: 'FILL' 1;">business</span>
                    </div>
                    <h3 class="text-display-lg text-3xl font-display-lg text-on-surface">TP. Hồ Chí Minh</h3>
                </div>
                <ul class="space-y-3 relative z-10">
${buildAddressListNoScroll(hcmAddresses)}
                </ul>
            </div>
        </div>
    </div>
</section>`;

let html = fs.readFileSync('index.html', 'utf8');

// Replace old about section
html = html.replace(/<!-- About Us Section -->[\s\S]*?(?=<!-- Primary Services Grid -->)/, aboutHtml + '\n    ');

// Replace old extra sections
html = html.replace(/<!-- Detailed Services List -->[\s\S]*?(?=<!-- Footer -->)/, extraSectionsHtml + '\n    ');

fs.writeFileSync('index.html', html);
console.log('Sections beautifully redesigned!');
