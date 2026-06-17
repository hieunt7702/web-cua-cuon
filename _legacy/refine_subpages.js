const fs = require('fs');

const pages = [
    {
        file: 'index.html',
        navText: 'Trang Chủ'
    },
    {
        file: 'gioi-thieu.html',
        navText: 'Giới Thiệu',
        breadcrumb: 'Giới Thiệu',
        title: 'Về Cửa Cuốn Việt Đức',
        subtitle: 'Đơn vị tiên phong trong lĩnh vực lắp đặt và sửa chữa cửa cuốn tại khu vực Miền Nam với hơn 10 năm kinh nghiệm.'
    },
    {
        file: 'dich-vu.html',
        navText: 'Dịch Vụ',
        breadcrumb: 'Dịch Vụ',
        title: 'Dịch Vụ Cửa Cuốn 24/7',
        subtitle: 'Chuyên cung cấp dịch vụ Sửa chữa - Lắp đặt - Bảo dưỡng cửa cuốn chuyên nghiệp, nhanh chóng và tận tâm.'
    },
    {
        file: 'san-pham.html',
        navText: 'Sản Phẩm',
        breadcrumb: 'Sản Phẩm',
        title: 'Cửa Cuốn & Phụ Kiện',
        subtitle: 'Phân phối các dòng cửa cuốn Đức, Úc cao cấp và các linh phụ kiện thay thế chính hãng chất lượng cao.'
    },
    {
        file: 'lien-he.html',
        navText: 'Liên Hệ',
        breadcrumb: 'Liên Hệ',
        title: 'Liên Hệ Chăm Sóc Khách Hàng',
        subtitle: 'Kết nối với tổng đài Cửa Cuốn Việt Đức. Luôn có thợ kỹ thuật túc trực 24/7 để hỗ trợ bạn ngay lập tức.'
    }
];

const inactiveClass = 'text-label-md font-label-md text-on-surface-variant hover:text-primary-container transition-colors duration-200';
const activeClass = 'text-label-md font-label-md text-primary-container border-b-2 border-primary-container pb-1 opacity-80 transition-opacity';

pages.forEach(page => {
    let html = fs.readFileSync(page.file, 'utf8');

    // --- 1. Fix Nav Active States ---
    
    // First, make all links inactive
    html = html.replace(/class="text-label-md font-label-md text-primary-container border-b-2 border-primary-container pb-1 opacity-80 transition-opacity"/g, `class="${inactiveClass}"`);
    
    // Then, make the current page's link active
    // We look for: <a class="inactiveClass" href="page.file">page.navText</a>
    const linkRegex = new RegExp(`<a class="${inactiveClass}" href="${page.file}">${page.navText}</a>`, 'g');
    html = html.replace(linkRegex, `<a class="${activeClass}" href="${page.file}">${page.navText}</a>`);

    // --- 2. Fix Hero Section (for subpages) ---
    if (page.file !== 'index.html') {
        const newHero = `<!-- Page Hero -->
<section class="py-16 md:py-20 bg-surface relative overflow-hidden border-b border-surface-container-high">
    <!-- Sophisticated background accent -->
    <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
    <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-container/10 to-transparent pointer-events-none"></div>
    <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-container/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10 flex flex-col items-center text-center">
        <!-- Breadcrumb / Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container border border-surface-container-high mb-6 shadow-sm">
            <span class="material-symbols-outlined text-primary-container text-sm">home</span>
            <span class="text-label-sm text-on-surface-variant">/</span>
            <span class="text-label-sm font-label-sm text-primary-container uppercase tracking-widest">${page.breadcrumb}</span>
        </div>
        
        <!-- Elegant Title -->
        <h1 class="text-headline-lg md:text-display-sm font-display-lg text-on-surface mb-4 uppercase tracking-wide">
            ${page.title}
        </h1>
        
        <!-- Subtle Divider -->
        <div class="w-16 h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent mb-6"></div>
        
        <!-- Subtitle -->
        <p class="text-body-md md:text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            ${page.subtitle}
        </p>
    </div>
</section>`;

        // Find the old hero section
        const heroRegex = /<!-- Page Hero -->[\s\S]*?<\/section>/;
        if (heroRegex.test(html)) {
            html = html.replace(heroRegex, newHero);
        } else {
            console.log('Hero section not found in ' + page.file);
        }
    }

    fs.writeFileSync(page.file, html);
    console.log('Updated ' + page.file);
});
