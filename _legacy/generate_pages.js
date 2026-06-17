const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');

// Replace navigation links in indexHtml to make sure they point to correct files
// Assuming current links are <a href="#" ...
indexHtml = indexHtml.replace(/<a href=\"#\" class=\"text-body-lg font-body-lg font-medium text-on-surface hover:text-primary-container transition-colors\">Trang Chủ<\/a>/, '<a href=\"index.html\" class=\"text-body-lg font-body-lg font-medium text-primary-container hover:text-primary transition-colors\">Trang Chủ</a>');
indexHtml = indexHtml.replace(/<a href=\"#\" class=\"text-body-lg font-body-lg font-medium text-on-surface hover:text-primary-container transition-colors\">Giới Thiệu<\/a>/, '<a href=\"gioi-thieu.html\" class=\"text-body-lg font-body-lg font-medium text-on-surface hover:text-primary-container transition-colors\">Giới Thiệu</a>');
indexHtml = indexHtml.replace(/<a href=\"#\" class=\"text-body-lg font-body-lg font-medium text-on-surface hover:text-primary-container transition-colors\">Dịch Vụ<\/a>/, '<a href=\"dich-vu.html\" class=\"text-body-lg font-body-lg font-medium text-on-surface hover:text-primary-container transition-colors\">Dịch Vụ</a>');
indexHtml = indexHtml.replace(/<a href=\"#\" class=\"text-body-lg font-body-lg font-medium text-on-surface hover:text-primary-container transition-colors\">Sản Phẩm<\/a>/, '<a href=\"san-pham.html\" class=\"text-body-lg font-body-lg font-medium text-on-surface hover:text-primary-container transition-colors\">Sản Phẩm</a>');
indexHtml = indexHtml.replace(/<a href=\"#\" class=\"text-body-lg font-body-lg font-medium text-on-surface hover:text-primary-container transition-colors\">Liên Hệ<\/a>/, '<a href=\"lien-he.html\" class=\"text-body-lg font-body-lg font-medium text-on-surface hover:text-primary-container transition-colors\">Liên Hệ</a>');

// Also replace Mobile Nav links
indexHtml = indexHtml.replace(/<a href=\"#\" class=\"block text-body-lg font-body-lg text-on-surface hover:text-primary-container\">Trang Chủ<\/a>/, '<a href=\"index.html\" class=\"block text-body-lg font-body-lg text-primary-container hover:text-primary\">Trang Chủ</a>');
indexHtml = indexHtml.replace(/<a href=\"#\" class=\"block text-body-lg font-body-lg text-on-surface hover:text-primary-container\">Giới Thiệu<\/a>/, '<a href=\"gioi-thieu.html\" class=\"block text-body-lg font-body-lg text-on-surface hover:text-primary-container\">Giới Thiệu</a>');
indexHtml = indexHtml.replace(/<a href=\"#\" class=\"block text-body-lg font-body-lg text-on-surface hover:text-primary-container\">Dịch Vụ<\/a>/, '<a href=\"dich-vu.html\" class=\"block text-body-lg font-body-lg text-on-surface hover:text-primary-container\">Dịch Vụ</a>');
indexHtml = indexHtml.replace(/<a href=\"#\" class=\"block text-body-lg font-body-lg text-on-surface hover:text-primary-container\">Sản Phẩm<\/a>/, '<a href=\"san-pham.html\" class=\"block text-body-lg font-body-lg text-on-surface hover:text-primary-container\">Sản Phẩm</a>');
indexHtml = indexHtml.replace(/<a href=\"#\" class=\"block text-body-lg font-body-lg text-on-surface hover:text-primary-container\">Liên Hệ<\/a>/, '<a href=\"lien-he.html\" class=\"block text-body-lg font-body-lg text-on-surface hover:text-primary-container\">Liên Hệ</a>');

fs.writeFileSync('index.html', indexHtml);

// Extract Header and Footer
const headerMatch = indexHtml.match(/([\s\S]*?)<!-- Hero Banner -->/);
const footerMatch = indexHtml.match(/<!-- Footer -->([\s\S]*)/);

if (!headerMatch || !footerMatch) {
    console.error('Could not find header or footer anchors in index.html');
    process.exit(1);
}

const headerHtml = headerMatch[1];
const footerHtml = '\n    <!-- Footer -->' + footerMatch[1];

// Function to generate a page
function generatePage(filename, title, description, contentHtml) {
    let pageHtml = headerHtml + contentHtml + footerHtml;
    // Replace title
    pageHtml = pageHtml.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
    // Ensure Meta description is present
    if (pageHtml.includes('<meta name="description"')) {
        pageHtml = pageHtml.replace(/<meta name="description" content=".*?">/, `<meta name="description" content="${description}">`);
    } else {
        pageHtml = pageHtml.replace(/<\/title>/, `</title>\n<meta name="description" content="${description}">`);
    }
    
    // Set active class on nav links for the current page
    if (filename === 'gioi-thieu.html') {
        pageHtml = pageHtml.replace(/href="gioi-thieu.html" class=".*?text-on-surface/, 'href="gioi-thieu.html" class="text-body-lg font-body-lg font-medium text-primary-container');
        pageHtml = pageHtml.replace(/href="index.html" class=".*?text-primary-container/, 'href="index.html" class="text-body-lg font-body-lg font-medium text-on-surface hover:text-primary-container transition-colors');
    }
    else if (filename === 'dich-vu.html') {
        pageHtml = pageHtml.replace(/href="dich-vu.html" class=".*?text-on-surface/, 'href="dich-vu.html" class="text-body-lg font-body-lg font-medium text-primary-container');
        pageHtml = pageHtml.replace(/href="index.html" class=".*?text-primary-container/, 'href="index.html" class="text-body-lg font-body-lg font-medium text-on-surface hover:text-primary-container transition-colors');
    }
    else if (filename === 'san-pham.html') {
        pageHtml = pageHtml.replace(/href="san-pham.html" class=".*?text-on-surface/, 'href="san-pham.html" class="text-body-lg font-body-lg font-medium text-primary-container');
        pageHtml = pageHtml.replace(/href="index.html" class=".*?text-primary-container/, 'href="index.html" class="text-body-lg font-body-lg font-medium text-on-surface hover:text-primary-container transition-colors');
    }
    else if (filename === 'lien-he.html') {
        pageHtml = pageHtml.replace(/href="lien-he.html" class=".*?text-on-surface/, 'href="lien-he.html" class="text-body-lg font-body-lg font-medium text-primary-container');
        pageHtml = pageHtml.replace(/href="index.html" class=".*?text-primary-container/, 'href="index.html" class="text-body-lg font-body-lg font-medium text-on-surface hover:text-primary-container transition-colors');
    }

    fs.writeFileSync(filename, pageHtml);
    console.log('Created ' + filename);
}

// -------------------------------------------------------------
// 1. PAGE: GIỚI THIỆU (gioi-thieu.html)
// -------------------------------------------------------------
const gioiThieuContent = `
<!-- Page Hero -->
<section class="py-24 bg-surface-container relative overflow-hidden">
    <div class="absolute inset-0 bg-primary-container/5 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center">
        <h1 class="text-display-lg font-display-lg text-on-surface mb-6 uppercase">Về Cửa Cuốn Việt Đức</h1>
        <div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent mx-auto mb-8"></div>
        <p class="text-body-lg font-body-lg text-on-surface-variant max-w-3xl mx-auto">Đơn vị tiên phong trong lĩnh vực lắp đặt và sửa chữa cửa cuốn tại khu vực Miền Nam với hơn 10 năm kinh nghiệm.</p>
    </div>
</section>

<!-- Lịch sử và Tầm nhìn -->
<section class="py-24 bg-background relative overflow-hidden border-t border-surface-container-high">
    <div class="absolute top-0 right-0 w-96 h-96 bg-secondary-container/10 rounded-full blur-[100px] pointer-events-none"></div>
    <div class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div class="flex flex-col lg:flex-row gap-16 items-center">
            <div class="w-full lg:w-1/2">
                <div class="inline-flex items-center gap-2 bg-surface-container px-4 py-2 rounded-full mb-6 border border-surface-container-high shadow-sm">
                    <span class="material-symbols-outlined text-primary-container text-lg">history_edu</span>
                    <span class="text-label-sm font-label-sm text-on-surface uppercase tracking-widest">Lịch sử hình thành</span>
                </div>
                <h2 class="text-headline-lg font-headline-lg text-on-surface mb-6 uppercase">Hành Trình Hơn 10 Năm Phục Vụ</h2>
                <p class="text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                    Khởi nguồn từ một xưởng dịch vụ nhỏ vào năm 2013, Cửa Cuốn Việt Đức đã không ngừng nỗ lực vươn lên thành một trong những công ty hàng đầu chuyên cung cấp, lắp đặt và sửa chữa cửa cuốn chuyên nghiệp.
                </p>
                <p class="text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                    Chúng tôi tự hào là đối tác tin cậy của hàng nghìn gia đình, cửa hàng và nhà xưởng, bảo vệ an toàn cho các công trình trải dài khắp TP.Hồ Chí Minh, Bình Dương và Đồng Nai.
                </p>
            </div>
            <div class="w-full lg:w-1/2">
                <div class="aspect-video rounded-3xl overflow-hidden shadow-2xl relative border border-surface-container-highest">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" alt="Lịch sử Cửa Cuốn Việt Đức" class="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Giá trị cốt lõi -->
<section class="py-24 bg-surface relative overflow-hidden border-t border-surface-container-high">
    <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-[100px] pointer-events-none"></div>
    <div class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div class="text-center mb-16">
            <h2 class="text-headline-lg font-headline-lg text-on-surface mb-4 uppercase">Giá Trị Cốt Lõi</h2>
            <div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent mx-auto"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-surface-container p-8 rounded-2xl border border-surface-container-high text-center hover:-translate-y-2 transition-transform duration-300">
                <span class="material-symbols-outlined text-5xl text-primary-container mb-4">verified</span>
                <h3 class="text-headline-md text-on-surface mb-3">Chất Lượng Uy Tín</h3>
                <p class="text-body-md text-on-surface-variant">Cam kết sử dụng linh kiện chính hãng, bảo hành dài hạn 100%.</p>
            </div>
            <div class="bg-surface-container p-8 rounded-2xl border border-surface-container-high text-center hover:-translate-y-2 transition-transform duration-300">
                <span class="material-symbols-outlined text-5xl text-primary-container mb-4">speed</span>
                <h3 class="text-headline-md text-on-surface mb-3">Phục Vụ Siêu Tốc</h3>
                <p class="text-body-md text-on-surface-variant">Có mặt ngay sau 30 phút nhận yêu cầu, phục vụ 24/7 kể cả Lễ Tết.</p>
            </div>
            <div class="bg-surface-container p-8 rounded-2xl border border-surface-container-high text-center hover:-translate-y-2 transition-transform duration-300">
                <span class="material-symbols-outlined text-5xl text-primary-container mb-4">groups</span>
                <h3 class="text-headline-md text-on-surface mb-3">Đội Ngũ Tận Tâm</h3>
                <p class="text-body-md text-on-surface-variant">Thợ lành nghề, đạo đức tốt, báo giá minh bạch trước khi làm.</p>
            </div>
        </div>
    </div>
</section>
`;
generatePage('gioi-thieu.html', 'Giới Thiệu Cửa Cuốn Việt Đức - Lịch Sử & Tầm Nhìn', 'Tìm hiểu về Cửa Cuốn Việt Đức, đơn vị uy tín hàng đầu trong lĩnh vực lắp đặt và sửa chữa cửa cuốn tại TP.HCM, Bình Dương và Đồng Nai.', gioiThieuContent);

// -------------------------------------------------------------
// 2. PAGE: DỊCH VỤ (dich-vu.html)
// -------------------------------------------------------------
let servicesHtml = '';
const servicesList = [
    'Nhận sửa cửa cuốn hư hỏng', 'Nhận sửa cửa cuốn không đóng mở được', 'Nhận sửa cửa cuốn trọn gói', 
    'Nhận sửa cửa cuốn giá rẻ', 'Nhận sửa cửa cuốn theo yêu cầu', 'Nhận sửa cửa cuốn đóng mở kêu ầm ầm', 
    'Nhận sửa cửa cuốn 24/7', 'Nhận sửa cửa cuốn ngoài giờ làm việc (ban đêm)', 'Nhận sửa cửa cuốn hư thanh nhôm lá nhôm', 
    'Nhận sửa cửa cuốn hư bạc đạn', 'Nhận sửa cửa cuốn hư đường ray', 'Nhận sửa cửa cuốn hư motor', 
    'Nhận sửa cửa cuốn hư điều khiển lên (xuống)', 'Nhận sửa cửa cuốn quên chìa khóa', 'Nhận sửa cửa cuốn bị khóa trong', 
    'Nhận sửa cửa cuốn Tphcm', 'Nhận sửa cửa cuốn tại nhà', 'Nhận sửa cửa cuốn tận nơi', 
    'Nhận thi công lắp đặt cửa cuốn', 'Nhận cải tạo nâng cấp cửa cuốn', 'Nhận di dời cửa cuốn trọn gói', 
    'Nhận sửa cửa cuốn hư ròng rọc', 'Nhận sửa cửa cuốn lưu động', 'Nhận thay thế linh kiện cửa cuốn', 'Nhận thay thế phụ kiện cửa cuốn'
];

servicesList.forEach(s => {
    servicesHtml += `
            <div class="bg-surface p-4 rounded-xl shadow-sm border border-surface-container-high hover:border-primary-container/50 transition-colors flex items-start gap-3 group relative z-10">
                <span class="material-symbols-outlined text-primary-container shrink-0 mt-0.5 group-hover:scale-110 transition-transform" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                <span class="text-body-md text-on-surface">${s}</span>
            </div>`;
});

const dichVuContent = `
<!-- Page Hero -->
<section class="py-24 bg-surface-container relative overflow-hidden">
    <div class="absolute inset-0 bg-primary-container/5 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center">
        <h1 class="text-display-lg font-display-lg text-on-surface mb-6 uppercase">Dịch Vụ Cửa Cuốn 24/7</h1>
        <div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent mx-auto mb-8"></div>
        <p class="text-body-lg font-body-lg text-on-surface-variant max-w-3xl mx-auto">Chuyên cung cấp dịch vụ Sửa chữa - Lắp đặt - Bảo dưỡng cửa cuốn chuyên nghiệp, nhanh chóng và tận tâm.</p>
    </div>
</section>

<!-- Detailed Services List -->
<section class="py-24 bg-background relative overflow-hidden border-t border-surface-container-high">
    <div class="absolute top-1/2 right-0 w-96 h-96 bg-secondary-container/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
    <div class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div class="text-center mb-16">
            <h2 class="text-headline-lg font-headline-lg text-on-surface mb-4 uppercase">Danh Mục Dịch Vụ Cứu Hộ Tại Nhà</h2>
            <div class="w-24 h-1 bg-primary-container mx-auto mb-6"></div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            ${servicesHtml}
        </div>
    </div>
</section>

<!-- Bảng giá tham khảo -->
<section class="py-24 bg-surface relative overflow-hidden border-t border-surface-container-high">
    <div class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div class="text-center mb-16">
            <h2 class="text-headline-lg font-headline-lg text-on-surface mb-4 uppercase">Bảng Giá Tham Khảo</h2>
            <div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent mx-auto"></div>
        </div>
        <div class="overflow-x-auto rounded-2xl border border-surface-container-high">
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="bg-surface-container">
                        <th class="p-4 text-headline-md text-on-surface border-b border-surface-container-highest">Loại Dịch Vụ</th>
                        <th class="p-4 text-headline-md text-on-surface border-b border-surface-container-highest">Giá Khởi Điểm (VNĐ)</th>
                        <th class="p-4 text-headline-md text-on-surface border-b border-surface-container-highest">Bảo Hành</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="hover:bg-surface-container-low transition-colors">
                        <td class="p-4 border-b border-surface-container-high text-on-surface-variant">Sửa lỗi kẹt lá cửa cuốn</td>
                        <td class="p-4 border-b border-surface-container-high text-primary-container font-medium">Từ 300.000đ</td>
                        <td class="p-4 border-b border-surface-container-high text-on-surface-variant">03 Tháng</td>
                    </tr>
                    <tr class="hover:bg-surface-container-low transition-colors">
                        <td class="p-4 border-b border-surface-container-high text-on-surface-variant">Thay thế remote / Làm thêm chìa khóa</td>
                        <td class="p-4 border-b border-surface-container-high text-primary-container font-medium">Từ 250.000đ/chìa</td>
                        <td class="p-4 border-b border-surface-container-high text-on-surface-variant">06 Tháng</td>
                    </tr>
                    <tr class="hover:bg-surface-container-low transition-colors">
                        <td class="p-4 border-b border-surface-container-high text-on-surface-variant">Sửa chữa bình lưu điện UPS</td>
                        <td class="p-4 border-b border-surface-container-high text-primary-container font-medium">Từ 500.000đ</td>
                        <td class="p-4 border-b border-surface-container-high text-on-surface-variant">06 Tháng</td>
                    </tr>
                    <tr class="hover:bg-surface-container-low transition-colors">
                        <td class="p-4 border-b border-surface-container-high text-on-surface-variant">Bảo dưỡng toàn bộ cửa cuốn</td>
                        <td class="p-4 border-b border-surface-container-high text-primary-container font-medium">Từ 400.000đ/Bộ</td>
                        <td class="p-4 border-b border-surface-container-high text-on-surface-variant">-</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p class="text-body-sm text-center mt-4 text-on-surface-variant italic">*Lưu ý: Bảng giá mang tính tham khảo, giá thực tế sẽ báo trực tiếp sau khi thợ khảo sát tận nơi miễn phí.</p>
    </div>
</section>
`;
generatePage('dich-vu.html', 'Dịch Vụ Sửa Chữa & Lắp Đặt Cửa Cuốn Chuyên Nghiệp 24/7', 'Cung cấp dịch vụ sửa chữa, bảo dưỡng, làm remote, thay bình lưu điện và lắp đặt cửa cuốn nhanh chóng, uy tín và giá rẻ nhất.', dichVuContent);

// -------------------------------------------------------------
// 3. PAGE: SẢN PHẨM (san-pham.html)
// -------------------------------------------------------------
const sanPhamContent = `
<!-- Page Hero -->
<section class="py-24 bg-surface-container relative overflow-hidden">
    <div class="absolute inset-0 bg-primary-container/5 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center">
        <h1 class="text-display-lg font-display-lg text-on-surface mb-6 uppercase">Cửa Cuốn & Phụ Kiện</h1>
        <div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent mx-auto mb-8"></div>
        <p class="text-body-lg font-body-lg text-on-surface-variant max-w-3xl mx-auto">Phân phối các dòng cửa cuốn Đức, Úc cao cấp và các linh phụ kiện thay thế chính hãng.</p>
    </div>
</section>

<!-- Product Grid -->
<section class="py-24 bg-background relative overflow-hidden border-t border-surface-container-high">
    <div class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        
        <!-- Tab Categories -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
            <button class="px-6 py-2 rounded-full bg-primary-container text-on-primary-container font-medium text-body-md transition-colors shadow-lg">Tất Cả</button>
            <button class="px-6 py-2 rounded-full bg-surface-container border border-surface-container-high text-on-surface hover:text-primary-container font-medium text-body-md transition-colors">Cửa Cuốn Đức</button>
            <button class="px-6 py-2 rounded-full bg-surface-container border border-surface-container-high text-on-surface hover:text-primary-container font-medium text-body-md transition-colors">Motor Cửa Cuốn</button>
            <button class="px-6 py-2 rounded-full bg-surface-container border border-surface-container-high text-on-surface hover:text-primary-container font-medium text-body-md transition-colors">Bình Lưu Điện</button>
            <button class="px-6 py-2 rounded-full bg-surface-container border border-surface-container-high text-on-surface hover:text-primary-container font-medium text-body-md transition-colors">Remote</button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Product 1 -->
            <div class="bg-surface rounded-2xl border border-surface-container-high overflow-hidden group hover:border-primary-container/50 transition-colors shadow-lg">
                <div class="aspect-square bg-surface-container-high relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1590847926227-c8d19760081e?w=800&q=80" alt="Cửa cuốn Đức" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
                <div class="p-6">
                    <div class="text-label-sm text-on-surface-variant mb-2">CỬA CUỐN KHE THOÁNG</div>
                    <h3 class="text-headline-md text-on-surface mb-4">Cửa Cuốn Đức Titadoor</h3>
                    <a href="tel:0961685345" class="block w-full text-center py-2 border border-primary-container text-primary-container rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-colors">Liên hệ báo giá</a>
                </div>
            </div>
            <!-- Product 2 -->
            <div class="bg-surface rounded-2xl border border-surface-container-high overflow-hidden group hover:border-primary-container/50 transition-colors shadow-lg">
                <div class="aspect-square bg-surface-container-high relative overflow-hidden p-8 flex items-center justify-center">
                    <span class="material-symbols-outlined text-9xl text-surface-container-highest">settings_power</span>
                </div>
                <div class="p-6">
                    <div class="text-label-sm text-on-surface-variant mb-2">MOTOR CỬA CUỐN</div>
                    <h3 class="text-headline-md text-on-surface mb-4">Motor YH Chính Hãng Đài Loan</h3>
                    <a href="tel:0961685345" class="block w-full text-center py-2 border border-primary-container text-primary-container rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-colors">Liên hệ báo giá</a>
                </div>
            </div>
            <!-- Product 3 -->
            <div class="bg-surface rounded-2xl border border-surface-container-high overflow-hidden group hover:border-primary-container/50 transition-colors shadow-lg">
                <div class="aspect-square bg-surface-container-high relative overflow-hidden p-8 flex items-center justify-center">
                    <span class="material-symbols-outlined text-9xl text-surface-container-highest">battery_charging_full</span>
                </div>
                <div class="p-6">
                    <div class="text-label-sm text-on-surface-variant mb-2">BÌNH LƯU ĐIỆN (UPS)</div>
                    <h3 class="text-headline-md text-on-surface mb-4">Bình Lưu Điện YH 400kg</h3>
                    <a href="tel:0961685345" class="block w-full text-center py-2 border border-primary-container text-primary-container rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-colors">Liên hệ báo giá</a>
                </div>
            </div>
            <!-- Product 4 -->
            <div class="bg-surface rounded-2xl border border-surface-container-high overflow-hidden group hover:border-primary-container/50 transition-colors shadow-lg">
                <div class="aspect-square bg-surface-container-high relative overflow-hidden p-8 flex items-center justify-center">
                    <span class="material-symbols-outlined text-9xl text-surface-container-highest">settings_remote</span>
                </div>
                <div class="p-6">
                    <div class="text-label-sm text-on-surface-variant mb-2">REMOTE CHÍNH HÃNG</div>
                    <h3 class="text-headline-md text-on-surface mb-4">Tay Điều Khiển Remote YH</h3>
                    <a href="tel:0961685345" class="block w-full text-center py-2 border border-primary-container text-primary-container rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-colors">Liên hệ báo giá</a>
                </div>
            </div>
        </div>
    </div>
</section>
`;
generatePage('san-pham.html', 'Sản Phẩm Cửa Cuốn Cao Cấp - Phụ Kiện Chính Hãng', 'Tổng hợp các loại cửa cuốn Đức, Úc, Đài Loan và phụ kiện motor, bình lưu điện, remote cửa cuốn chính hãng chất lượng cao.', sanPhamContent);

// -------------------------------------------------------------
// 4. PAGE: LIÊN HỆ (lien-he.html)
// -------------------------------------------------------------

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

const lienHeContent = `
<!-- Page Hero -->
<section class="py-24 bg-surface-container relative overflow-hidden">
    <div class="absolute inset-0 bg-primary-container/5 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center">
        <h1 class="text-display-lg font-display-lg text-on-surface mb-6 uppercase">Liên Hệ Chăm Sóc Khách Hàng</h1>
        <div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent mx-auto mb-8"></div>
        <p class="text-body-lg font-body-lg text-on-surface-variant max-w-3xl mx-auto">Kết nối với tổng đài Cửa Cuốn Việt Đức. Luôn có thợ kỹ thuật túc trực 24/7 để hỗ trợ bạn ngay lập tức.</p>
    </div>
</section>

<!-- Contact Form & Info -->
<section class="py-24 bg-background relative overflow-hidden border-t border-surface-container-high">
    <div class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div class="flex flex-col lg:flex-row gap-16">
            <!-- Form -->
            <div class="w-full lg:w-1/2 bg-surface p-8 rounded-3xl border border-surface-container-high shadow-xl">
                <h2 class="text-headline-lg font-headline-lg text-on-surface mb-6">Gửi Yêu Cầu Cho Chúng Tôi</h2>
                <form class="space-y-6">
                    <div>
                        <label class="block text-body-sm text-on-surface-variant mb-2">Họ & Tên</label>
                        <input type="text" class="w-full bg-surface-container border border-surface-container-high rounded-xl px-4 py-3 text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all" placeholder="Nhập tên của bạn">
                    </div>
                    <div>
                        <label class="block text-body-sm text-on-surface-variant mb-2">Số Điện Thoại *</label>
                        <input type="tel" class="w-full bg-surface-container border border-surface-container-high rounded-xl px-4 py-3 text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all" placeholder="Nhập số điện thoại để thợ gọi lại" required>
                    </div>
                    <div>
                        <label class="block text-body-sm text-on-surface-variant mb-2">Nội Dung Yêu Cầu</label>
                        <textarea class="w-full bg-surface-container border border-surface-container-high rounded-xl px-4 py-3 text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all" rows="4" placeholder="Mô tả sự cố bạn đang gặp phải..."></textarea>
                    </div>
                    <button type="submit" class="w-full bg-primary-container hover:bg-primary text-on-primary-container font-medium text-body-lg py-4 rounded-xl transition-colors shadow-lg">Gửi Yêu Cầu Ngay</button>
                </form>
            </div>
            
            <!-- Quick Contact Info -->
            <div class="w-full lg:w-1/2 space-y-8">
                <div>
                    <h2 class="text-headline-lg font-headline-lg text-on-surface mb-6">Thông Tin Liên Hệ Nhanh</h2>
                    <p class="text-body-lg text-on-surface-variant mb-8">Gọi trực tiếp cho đường dây nóng hoặc nhắn tin Zalo để được phản hồi lập tức. Miễn phí kiểm tra và báo giá tận nhà.</p>
                </div>
                
                <div class="bg-surface-container p-6 rounded-2xl border border-surface-container-high flex items-center gap-6">
                    <div class="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0 text-primary-container">
                        <span class="material-symbols-outlined text-3xl">phone_in_talk</span>
                    </div>
                    <div>
                        <div class="text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">Hotline Kỹ Thuật 24/7</div>
                        <a href="tel:0961685345" class="text-headline-lg text-primary-container font-medium hover:text-primary transition-colors">0961 685 345</a>
                    </div>
                </div>
                
                <div class="bg-surface-container p-6 rounded-2xl border border-surface-container-high flex items-center gap-6">
                    <div class="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0 text-primary-container">
                        <span class="material-symbols-outlined text-3xl">forum</span>
                    </div>
                    <div>
                        <div class="text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">Chat Trực Tuyến</div>
                        <a href="https://zalo.me/0961685345" target="_blank" class="text-headline-lg text-primary-container font-medium hover:text-primary transition-colors">Zalo: 0961 685 345</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Branches List -->
<section class="py-24 bg-surface border-t border-surface-container-high relative overflow-hidden">
    <div class="absolute top-0 right-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

    <div class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div class="text-center mb-16">
            <h2 class="text-headline-lg font-headline-lg text-on-surface mb-4 uppercase">Hệ Thống Chi Nhánh Cửa Cuốn Việt Đức</h2>
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

generatePage('lien-he.html', 'Liên Hệ Cửa Cuốn Việt Đức - Tổng Đài Gọi Thợ 24/7', 'Thông tin liên hệ và hệ thống chi nhánh của Cửa Cuốn Việt Đức tại TP.HCM, Bình Dương, Đồng Nai. Có mặt ngay sau 30 phút.', lienHeContent);
