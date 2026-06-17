const fs = require('fs');

const files = ['index.html', 'gioi-thieu.html', 'dich-vu.html', 'san-pham.html', 'lien-he.html', 'template.html'];
let headerHtml = '';
let footerHtml = '';

// The new theme check script to inject into <head>
const themeCheckScript = `
<script>
    if (localStorage.getItem('theme') === 'light') {
        document.documentElement.classList.remove('dark');
    } else if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark');
    }
</script>
`;

// The new theme toggle script to replace the old one
const themeToggleScript = `<script>
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const html = document.documentElement;

    // Set initial icon
    if (html.classList.contains('dark')) {
        themeIcon.textContent = 'light_mode';
    } else {
        themeIcon.textContent = 'dark_mode';
    }

    themeToggleBtn.addEventListener('click', () => {
        html.classList.toggle('dark');
        if (html.classList.contains('dark')) {
            themeIcon.textContent = 'light_mode';
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.textContent = 'dark_mode';
            localStorage.setItem('theme', 'light');
        }
    });
</script>`;

const oldThemeToggleRegex = /<script>\s*const themeToggleBtn = document.getElementById\('theme-toggle'\);[\s\S]*?<\/script>/;

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');

    // 1. Inject Theme Check Script into <head>
    if (!html.includes('localStorage.getItem(\'theme\')')) {
        html = html.replace('</head>', themeCheckScript + '</head>');
    }

    // 2. Replace Old Theme Toggle Script
    if (oldThemeToggleRegex.test(html)) {
        html = html.replace(oldThemeToggleRegex, themeToggleScript);
    }

    // 3. Add "Bài Viết" to Navigation
    // Look for the "Liên Hệ" link in the nav and insert "Bài Viết" before it
    const lienHeLinkRegexDesktop = /<li><a class="(.*?)" href="lien-he\.html">Liên Hệ<\/a><\/li>/;
    
    if (lienHeLinkRegexDesktop.test(html) && !html.includes('href="bai-viet.html"')) {
        const inactiveClass = 'text-label-md font-label-md text-on-surface-variant hover:text-primary-container transition-colors duration-200';
        html = html.replace(lienHeLinkRegexDesktop, `<li><a class="${inactiveClass}" href="bai-viet.html">Bài Viết</a></li>\n<li><a class="$1" href="lien-he.html">Liên Hệ</a></li>`);
    }

    fs.writeFileSync(file, html);
});

// Create bai-viet.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Extract Header and Footer
const headerMatch = indexHtml.match(/([\s\S]*?)<!-- Hero Banner -->|([\s\S]*?)<!-- Page Hero -->/);
const footerMatch = indexHtml.match(/<!-- Footer -->([\s\S]*)/);

if (headerMatch && footerMatch) {
    let headerHtml = headerMatch[1] || headerMatch[2];
    let footerHtml = '<!-- Footer -->' + footerMatch[1];
    
    // Set proper active link for bai-viet.html
    const inactiveClass = 'text-label-md font-label-md text-on-surface-variant hover:text-primary-container transition-colors duration-200';
    const activeClass = 'text-label-md font-label-md text-primary-container border-b-2 border-primary-container pb-1 opacity-80 transition-opacity';
    
    // reset all links to inactive in headerHtml
    headerHtml = headerHtml.replace(/class="text-label-md font-label-md text-primary-container border-b-2 border-primary-container pb-1 opacity-80 transition-opacity"/g, `class="${inactiveClass}"`);
    // set bai-viet active
    headerHtml = headerHtml.replace(new RegExp(`<a class="${inactiveClass}" href="bai-viet.html">Bài Viết</a>`), `<a class="${activeClass}" href="bai-viet.html">Bài Viết</a>`);

    const baiVietContent = `
<!-- Page Hero -->
<section class="py-16 md:py-20 bg-surface relative overflow-hidden border-b border-surface-container-high">
    <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
    <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-container/10 to-transparent pointer-events-none"></div>
    <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-container/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10 flex flex-col items-center text-center">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container border border-surface-container-high mb-6 shadow-sm">
            <span class="material-symbols-outlined text-primary-container text-sm">home</span>
            <span class="text-label-sm text-on-surface-variant">/</span>
            <span class="text-label-sm font-label-sm text-primary-container uppercase tracking-widest">Tin Tức - Bài Viết</span>
        </div>
        
        <h1 class="text-headline-lg md:text-display-sm font-display-lg text-on-surface mb-4 uppercase tracking-wide">
            Cẩm Nang Cửa Cuốn
        </h1>
        
        <div class="w-16 h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent mb-6"></div>
        
        <p class="text-body-md md:text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Tổng hợp các kiến thức, kinh nghiệm và mẹo hay về cách sử dụng, bảo quản và khắc phục sự cố cửa cuốn hiệu quả nhất.
        </p>
    </div>
</section>

<!-- Blog Grid -->
<section class="py-24 bg-background relative overflow-hidden border-t border-surface-container-high">
    <div class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Article 1 -->
            <article class="bg-surface rounded-2xl border border-surface-container-high overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div class="aspect-video relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1590847926227-c8d19760081e?w=800&q=80" alt="Cách bảo dưỡng cửa cuốn" class="w-full h-full object-cover">
                    <div class="absolute top-4 left-4 bg-primary-container text-on-primary-container text-label-sm px-3 py-1 rounded-full font-medium">Mẹo hay</div>
                </div>
                <div class="p-6">
                    <div class="flex items-center gap-2 text-label-sm text-on-surface-variant mb-3">
                        <span class="material-symbols-outlined text-sm">calendar_month</span>
                        <span>15/10/2023</span>
                    </div>
                    <h2 class="text-headline-md text-on-surface mb-3 line-clamp-2 hover:text-primary-container transition-colors cursor-pointer">Hướng dẫn cách bảo dưỡng cửa cuốn định kỳ ngay tại nhà</h2>
                    <p class="text-body-sm text-on-surface-variant mb-4 line-clamp-3">Bảo dưỡng cửa cuốn thường xuyên giúp tăng tuổi thọ và hạn chế tối đa các sự cố kẹt lá, đứt cáp. Tìm hiểu ngay 5 bước bảo dưỡng đơn giản...</p>
                    <a href="#" class="inline-flex items-center gap-1 text-primary-container hover:text-primary font-medium text-body-sm transition-colors">
                        Đọc tiếp <span class="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                </div>
            </article>

            <!-- Article 2 -->
            <article class="bg-surface rounded-2xl border border-surface-container-high overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div class="aspect-video relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" alt="Lỗi cửa cuốn thường gặp" class="w-full h-full object-cover">
                    <div class="absolute top-4 left-4 bg-primary-container text-on-primary-container text-label-sm px-3 py-1 rounded-full font-medium">Kiến thức</div>
                </div>
                <div class="p-6">
                    <div class="flex items-center gap-2 text-label-sm text-on-surface-variant mb-3">
                        <span class="material-symbols-outlined text-sm">calendar_month</span>
                        <span>02/11/2023</span>
                    </div>
                    <h2 class="text-headline-md text-on-surface mb-3 line-clamp-2 hover:text-primary-container transition-colors cursor-pointer">5 Lỗi cửa cuốn thường gặp nhất và cách khắc phục nhanh chóng</h2>
                    <p class="text-body-sm text-on-surface-variant mb-4 line-clamp-3">Cửa cuốn không nhận remote, bấm cửa không lên hay kêu to lạch cạch? Bài viết này sẽ chỉ ra nguyên nhân và giải pháp sửa chữa tạm thời hiệu quả.</p>
                    <a href="#" class="inline-flex items-center gap-1 text-primary-container hover:text-primary font-medium text-body-sm transition-colors">
                        Đọc tiếp <span class="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                </div>
            </article>

            <!-- Article 3 -->
            <article class="bg-surface rounded-2xl border border-surface-container-high overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div class="aspect-video relative overflow-hidden bg-surface-container-high flex items-center justify-center">
                    <span class="material-symbols-outlined text-8xl text-surface-container-highest">settings_remote</span>
                    <div class="absolute top-4 left-4 bg-primary-container text-on-primary-container text-label-sm px-3 py-1 rounded-full font-medium">Tin tức</div>
                </div>
                <div class="p-6">
                    <div class="flex items-center gap-2 text-label-sm text-on-surface-variant mb-3">
                        <span class="material-symbols-outlined text-sm">calendar_month</span>
                        <span>20/11/2023</span>
                    </div>
                    <h2 class="text-headline-md text-on-surface mb-3 line-clamp-2 hover:text-primary-container transition-colors cursor-pointer">Bảng giá sao chép, làm mới Remote cửa cuốn tại TPHCM</h2>
                    <p class="text-body-sm text-on-surface-variant mb-4 line-clamp-3">Cập nhật bảng giá dịch vụ làm thêm chìa khóa, sao chép remote cửa cuốn các loại mã gạt, mã nhảy mới nhất năm 2024.</p>
                    <a href="#" class="inline-flex items-center gap-1 text-primary-container hover:text-primary font-medium text-body-sm transition-colors">
                        Đọc tiếp <span class="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                </div>
            </article>
        </div>
    </div>
</section>
`;

    let finalHtml = headerHtml + baiVietContent + footerHtml;
    
    // Adjust title and meta description
    finalHtml = finalHtml.replace(/<title>.*?<\/title>/, '<title>Tin Tức & Cẩm Nang Cửa Cuốn - Cửa Cuốn Việt Đức</title>');
    finalHtml = finalHtml.replace(/<meta name="description" content=".*?">/, '<meta name="description" content="Tổng hợp các bài viết chia sẻ kinh nghiệm, cách sửa chữa, bảo dưỡng và bảng giá dịch vụ cửa cuốn mới nhất từ Cửa Cuốn Việt Đức.">');
    
    fs.writeFileSync('bai-viet.html', finalHtml);
    console.log('Created bai-viet.html');
}

console.log('All updates complete');
