const fs = require('fs');

const binhDuongAddresses = [
    '215 Đại lộ Bình Dương, Phú Hòa, Thủ Dầu Một',
    'Số 12, Đường D1, KDC Việt Sing, Thuận An',
    '85 Đ. Nguyễn Thị Minh Khai, Phú Hòa, Thủ Dầu Một',
    'Lô D8, KCN Mỹ Phước 1, Bến Cát',
    '105 Đ. Trần Hưng Đạo, Dĩ An, Bình Dương',
    '19 Nguyễn Trãi, Phường Dĩ An, TP. Dĩ An',
    '92 Đường ĐT743B, Phường An Bình, TP. Dĩ An',
    '45 Lê Hồng Phong, Phường Tân Bình, TP. Dĩ An',
    '72 Trần Quý Cáp, TP. Dĩ An',
    '180 Lý Thường Kiệt, Dĩ An, Bình Dương',
    '34B Kha Vạn Cân, An Bình, Dĩ An',
    '500 Quốc lộ 1K, Bình An, Dĩ An',
    '120 Nguyễn An Ninh, Dĩ An, Bình Dương',
    '88 ĐT743A, Bình Thắng, Dĩ An',
    '201 Lê Lợi, TP. Thủ Dầu Một',
    '155 Thích Quảng Đức, Phú Cường, Thủ Dầu Một',
    '33 Cách Mạng Tháng 8, Chánh Nghĩa, Thủ Dầu Một',
    '99 Huỳnh Văn Lũy, Phú Lợi, Thủ Dầu Một',
    '77 Phạm Ngọc Thạch, Hiệp Thành, Thủ Dầu Một'
];

const dongNaiAddresses = [
    '12 Đồng Khởi, Phường Tân Hiệp, TP. Biên Hòa',
    '35 Đ. 30/4, Phường Trung Dũng, TP. Biên Hòa',
    '80 Võ Thị Sáu, Phường Thống Nhất, TP. Biên Hòa',
    '112 Đường 5A, KDC Biên Hòa, Phường An Bình',
    '68 Đường N1, Phường Thống Nhất, TP. Biên Hòa',
    '145/22 KP3, Phường Trảng Dài, TP. Biên Hòa',
    '800/15 KP2, Phường Trảng Dài, TP. Biên Hòa',
    '25A Đinh Tiên Hoàng, KP 3, Trảng Bom',
    '38/9, Đ. Hùng Vương, TT. Trảng Bom',
    '1280, QL51, Long Đức, Long Thành',
    '45 Phạm Văn Thuận, Tam Hiệp, TP. Biên Hòa',
    '210 Bùi Văn Hòa, Long Bình, TP. Biên Hòa',
    '55 Nguyễn Ái Quốc, Hố Nai, TP. Biên Hòa',
    '90 Trần Công An, Trung Dũng, TP. Biên Hòa',
    '33 Hồ Văn Đại, Quang Vinh, TP. Biên Hòa',
    '18 Lê Duẩn, Long Thành, Đồng Nai',
    '75 Tôn Đức Thắng, Nhơn Trạch, Đồng Nai',
    '122 Nguyễn Hữu Cảnh, Nhơn Trạch, Đồng Nai',
    '99 Hùng Vương, Long Khánh, Đồng Nai'
];

const hcmAddresses = [
    '235 Đ. Điện Biên Phủ, Phường 7, Quận 3',
    '115 Mai Chí Thọ, An Phú, Quận 2',
    '180 Nguyễn Thị Minh Khai, Phường 6, Quận 3',
    '315 Đ. Nguyễn Văn Linh, Phường Tân Phú, Quận 7',
    '105 Châu Văn Liêm, Phường 10, Quận 5',
    '495 Cách Mạng Tháng 8, Phường 13, Quận 10',
    '95 Hoàng Hoa Thám, Phường 13, Tân Bình',
    '265 Cộng Hòa, Phường 12, Tân Bình',
    '135 Trường Chinh, Phường 14, Tân Bình',
    '75 Đ. Lê Lai, Phường Bến Nghé, Quận 1',
    '125 Đ. Trần Não, Phường Bình An, Quận 2',
    '215 Đ. Khánh Hội, Phường 3, Quận 4',
    '95 Hậu Giang, Phường 6, Quận 6',
    '85 Đ. Nguyễn Duy Trinh, Phường 15, Quận 9',
    '145 Đ. Quang Trung, Phường 10, Gò Vấp',
    '515 Đ. Phan Văn Trị, Phường 5, Gò Vấp',
    '175 Đ. Nguyễn Oanh, Phường 17, Gò Vấp',
    '85 Đ. Đinh Bộ Lĩnh, Phường 26, Bình Thạnh',
    '35 Nguyễn Xí, Phường 26, Bình Thạnh'
];

function buildAddressListNoScroll(list) {
    return list.map(a => `
                    <li class="flex items-start gap-3 text-body-sm text-on-surface-variant mb-4">
                        <span class="material-symbols-outlined text-primary-container shrink-0 mt-0.5 text-xl">location_on</span>
                        <span>${a}</span>
                    </li>`).join('');
}

const branchesSectionHtml = `<!-- Branches Section -->
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
</section>
`;

const lienHeBranchesSectionHtml = branchesSectionHtml.replace('<!-- Branches Section -->', '<!-- Branches List -->');

// Replace in index.html
let index = fs.readFileSync('index.html', 'utf8');
index = index.replace(/<!-- Branches Section -->[\s\S]*?(?=<!-- Footer -->)/, branchesSectionHtml + '    ');
fs.writeFileSync('index.html', index);

// Replace in lien-he.html
let lienHe = fs.readFileSync('lien-he.html', 'utf8');
lienHe = lienHe.replace(/<!-- Branches List -->[\s\S]*?(?=<!-- Footer -->)/, lienHeBranchesSectionHtml + '    ');
fs.writeFileSync('lien-he.html', lienHe);

console.log('Addresses updated successfully.');
