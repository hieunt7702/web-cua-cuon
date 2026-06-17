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
            <div class="bg-surface p-4 rounded-xl shadow-sm border border-surface-container-high hover:border-primary-container/50 transition-colors flex items-start gap-3 group relative z-10">
                <span class="material-symbols-outlined text-primary-container shrink-0 mt-0.5 group-hover:scale-110 transition-transform" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                <span class="text-body-md text-on-surface">${s}</span>
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
                    <li class="flex items-start gap-3 text-body-sm text-on-surface-variant mb-4">
                        <span class="material-symbols-outlined text-primary-container shrink-0 mt-0.5 text-xl">location_on</span>
                        <span>${a}</span>
                    </li>`).join('');
}

const aboutHtml = `<!-- About Us Section -->
<section class="py-24 bg-surface border-b border-surface-container-high relative overflow-hidden">
    <div class="absolute -top-40 -left-40 w-96 h-96 bg-primary-container/10 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div class="flex flex-col md:flex-row gap-12 items-center">
            <div class="w-full md:w-1/2 relative">
                <div class="aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-2xl relative group">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTuix2ZgXq2q2IeB2maYHC8tC0gTo-312jqpUljbIO_WtchHyC7Ogynat8frArRWpid5XgwF5CxDwGixbHOMyeUPwxPxOzlufqqEtB3JrNLsmW0lRJXvH5_A8CF9QBAZBeoP1Y7i7HN0dXrlRrQoisfy3USLneF1mCvYTlwdLsBZtGV7P-hndbpqXfxOO3Hu1IiMtNfbM-o3L2RCOY4hQ2_T3wJkjIIGW2037HftigvOhQ3qNPgq_YQFdL-pOrzeQFgnELTvwSuXWy" alt="Về Cửa Cuốn Việt Đức" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div class="absolute bottom-6 left-6 text-white">
                        <div class="font-display-lg text-4xl mb-1 text-primary-container">10+</div>
                        <div class="font-label-md text-sm uppercase tracking-widest text-white/80">Năm Kinh Nghiệm</div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/2">
                <div class="inline-flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full mb-6">
                    <span class="material-symbols-outlined text-primary-container text-xl" style="font-variation-settings: 'FILL' 1;">info</span>
                    <span class="text-label-sm font-label-sm text-on-surface uppercase tracking-widest">Về Chúng Tôi</span>
                </div>
                <h2 class="text-headline-lg font-headline-lg text-on-surface mb-6 uppercase">Cửa Cuốn Việt Đức</h2>
                <p class="text-body-lg font-body-lg text-on-surface-variant mb-6 leading-relaxed">
                    Được thành lập với sứ mệnh mang đến sự an tâm tuyệt đối cho mọi gia đình và doanh nghiệp, <strong>Cửa Cuốn Việt Đức</strong> tự hào là đơn vị tiên phong trong lĩnh vực lắp đặt, sửa chữa và bảo dưỡng cửa cuốn.
                </p>
                <p class="text-body-md font-body-md text-on-surface-variant mb-8 leading-relaxed">
                    Với đội ngũ kỹ thuật viên lành nghề, trang thiết bị hiện đại và linh kiện chính hãng, chúng tôi cam kết mang lại dịch vụ nhanh chóng, chuyên nghiệp và giá cả cạnh tranh nhất thị trường.
                </p>
                <a href="tel:0961685345" class="inline-flex items-center gap-3 bg-primary-container hover:bg-primary text-on-primary-container text-label-md font-label-md px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-primary-container/20 group">
                    <span class="material-symbols-outlined group-hover:rotate-12 transition-transform" style="font-variation-settings: 'FILL' 1;">engineering</span>
                    GỌI THỢ NGAY
                </a>
            </div>
        </div>
    </div>
</section>`;

const extraSectionsHtml = `<!-- Detailed Services List -->
<section class="py-24 bg-background relative overflow-hidden border-t border-surface-container-high">
    <div class="absolute top-1/2 right-0 w-96 h-96 bg-secondary-container/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

    <div class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div class="text-center mb-16">
            <h2 class="text-headline-lg font-headline-lg text-on-surface mb-4 uppercase">Chúng Tôi Chuyên Sửa Chữa Cứu Hộ Cửa Cuốn Tại Nhà</h2>
            <div class="w-24 h-1 bg-primary-container mx-auto mb-6"></div>
            <p class="text-body-lg font-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
                Gọi thợ sửa cửa cuốn tận nơi tại nhà nội thành TPHCM với giá cả phải chăng và phục vụ nhiệt tình chu đáo nhất, chúng tôi luôn lấy nhu cầu của khách hàng làm trung tâm cho mọi dịch vụ.
            </p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
${servicesHtml}
        </div>
    </div>
</section>

<!-- 3 Steps Process -->
<section class="py-24 bg-surface-container-low relative overflow-hidden border-t border-surface-container-high">
    <div class="absolute bottom-0 left-1/2 w-96 h-96 bg-primary-container/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

    <div class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div class="text-center mb-16">
            <h2 class="text-headline-lg font-headline-lg text-on-surface mb-4 uppercase">Quy Trình 3 Bước Nhanh Chóng</h2>
            <div class="w-24 h-1 bg-primary-container mx-auto"></div>
        </div>
        
        <div class="relative max-w-5xl mx-auto">
            <div class="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-surface-container-highest z-0"></div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                <div class="bg-surface-container p-8 rounded-2xl shadow-lg border border-surface-container-high text-center relative group hover:-translate-y-2 transition-transform duration-300">
                    <div class="w-16 h-16 mx-auto bg-surface border-4 border-primary-container text-primary-container rounded-full flex items-center justify-center font-display-lg text-2xl mb-6 shadow-xl">1</div>
                    <h3 class="text-headline-md font-headline-md text-on-surface mb-3">Nhận Yêu Cầu</h3>
                    <p class="text-body-md text-on-surface-variant">Nhận Yêu Cầu Hotline/Zalo, điều phối thợ đến ngay sau 30 phút.</p>
                </div>
                <div class="bg-surface-container p-8 rounded-2xl shadow-lg border border-surface-container-high text-center relative group hover:-translate-y-2 transition-transform duration-300">
                    <div class="w-16 h-16 mx-auto bg-surface border-4 border-primary-container text-primary-container rounded-full flex items-center justify-center font-display-lg text-2xl mb-6 shadow-xl">2</div>
                    <h3 class="text-headline-md font-headline-md text-on-surface mb-3">Tiến Hành Sửa Chữa</h3>
                    <p class="text-body-md text-on-surface-variant">Kiểm tra lỗi, báo giá minh bạch và tiến hành khắc phục sự cố triệt để.</p>
                </div>
                <div class="bg-surface-container p-8 rounded-2xl shadow-lg border border-surface-container-high text-center relative group hover:-translate-y-2 transition-transform duration-300">
                    <div class="w-16 h-16 mx-auto bg-surface border-4 border-primary-container text-primary-container rounded-full flex items-center justify-center font-display-lg text-2xl mb-6 shadow-xl">3</div>
                    <h3 class="text-headline-md font-headline-md text-on-surface mb-3">Bàn Giao & Thanh Toán</h3>
                    <p class="text-body-md text-on-surface-variant">Kiểm tra vận hành, bàn giao cho khách hàng và tiến hành thanh toán, bảo hành.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="py-16 px-margin-mobile md:px-margin-desktop bg-background border-t border-surface-container-high">
    <div class="max-w-max-width mx-auto bg-gradient-to-r from-primary-container to-secondary-container rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
        
        <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div class="text-center md:text-left">
                <h2 class="text-display-lg font-display-lg text-on-primary-container mb-4 text-4xl md:text-5xl">Nhận Báo Giá Ưu Đãi!</h2>
                <p class="text-body-lg font-body-lg text-on-primary-container/80 max-w-xl text-lg">
                    Thợ đến ngay sau 30 phút, có mặt khảo sát tận nơi hoàn toàn miễn phí.
                </p>
            </div>
            <div class="flex flex-col sm:flex-row gap-4 shrink-0">
                <a href="tel:0961685345" class="bg-on-primary-container text-primary-container hover:bg-surface hover:text-primary px-8 py-4 rounded-xl font-label-md text-label-md flex items-center justify-center gap-2 transition-all shadow-xl hover:scale-105">
                    <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">phone_in_talk</span>
                    GỌI NGAY
                </a>
                <a href="https://zalo.me/0961685345" target="_blank" class="bg-white/20 hover:bg-white/30 text-on-primary-container backdrop-blur-sm border border-white/30 px-8 py-4 rounded-xl font-label-md text-label-md flex items-center justify-center gap-2 transition-all hover:scale-105">
                    <span class="material-symbols-outlined">chat</span>
                    NHẮN TIN ZALO
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Branches Section -->
<section class="py-24 bg-surface border-t border-surface-container-high relative overflow-hidden">
    <div class="absolute top-0 right-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

    <div class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div class="text-center mb-16">
            <h2 class="text-headline-lg font-headline-lg text-on-surface mb-4 uppercase">Địa Chỉ Chi Nhánh Cửa Cuốn Việt Đức</h2>
            <div class="w-24 h-1 bg-primary-container mx-auto"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Binh Duong -->
            <div class="bg-surface-container-low p-6 rounded-2xl border border-surface-container-high shadow-sm hover:shadow-md transition-shadow">
                <div class="flex items-center gap-3 mb-6 pb-4 border-b border-surface-container-highest">
                    <span class="material-symbols-outlined text-primary-container text-3xl" style="font-variation-settings: 'FILL' 1;">location_city</span>
                    <h3 class="text-headline-md font-headline-md text-on-surface">Bình Dương</h3>
                </div>
                <ul class="relative z-10">
${buildAddressListNoScroll(binhDuongAddresses)}
                </ul>
            </div>
            
            <!-- Dong Nai -->
            <div class="bg-surface-container-low p-6 rounded-2xl border border-surface-container-high shadow-sm hover:shadow-md transition-shadow">
                <div class="flex items-center gap-3 mb-6 pb-4 border-b border-surface-container-highest">
                    <span class="material-symbols-outlined text-primary-container text-3xl" style="font-variation-settings: 'FILL' 1;">location_city</span>
                    <h3 class="text-headline-md font-headline-md text-on-surface">Đồng Nai</h3>
                </div>
                <ul class="relative z-10">
${buildAddressListNoScroll(dongNaiAddresses)}
                </ul>
            </div>

            <!-- HCMC -->
            <div class="bg-surface-container-low p-6 rounded-2xl border border-surface-container-high shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
                <div class="flex items-center gap-3 mb-6 pb-4 border-b border-surface-container-highest">
                    <span class="material-symbols-outlined text-primary-container text-3xl" style="font-variation-settings: 'FILL' 1;">location_city</span>
                    <h3 class="text-headline-md font-headline-md text-on-surface">TP. Hồ Chí Minh</h3>
                </div>
                <ul class="relative z-10">
${buildAddressListNoScroll(hcmAddresses)}
                </ul>
            </div>
        </div>
    </div>
</section>`;

let html = fs.readFileSync('index.html', 'utf8');

// Replace about section
html = html.replace(/<!-- About Us Section -->[\s\S]*?(?=<!-- Primary Services Grid -->)/, aboutHtml + '\n    ');

// Replace extra sections
html = html.replace(/<!-- Detailed Services List -->[\s\S]*?(?=<!-- Footer -->)/, extraSectionsHtml + '\n    ');

fs.writeFileSync('index.html', html);
console.log('Sections reverted and refined!');
