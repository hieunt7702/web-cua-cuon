const fs = require('fs');

const files = ['index.html', 'gioi-thieu.html', 'dich-vu.html', 'san-pham.html', 'lien-he.html', 'bai-viet.html', 'template.html'];

const newLogoHtml = `<div class="flex items-center gap-3">
                    <div class="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary-container to-yellow-600 shadow-lg border border-white/10 shrink-0">
                        <span class="material-symbols-outlined text-white text-2xl md:text-3xl" style="font-variation-settings: 'FILL' 1;">roofing</span>
                    </div>
                    <div class="flex flex-col justify-center">
                        <span class="text-xl md:text-2xl font-black uppercase tracking-widest text-on-surface leading-none" style="font-family: 'Montserrat', sans-serif;">
                            Việt <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-yellow-500">Đức</span>
                        </span>
                        <span class="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-on-surface-variant mt-1.5 leading-none">Hệ Thống Cửa Cuốn</span>
                    </div>
                </div>`;

const newHeaderLogoHtml = `<div class="flex items-center gap-3">
<div class="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary-container to-yellow-600 shadow-lg border border-white/10 shrink-0">
    <span class="material-symbols-outlined text-white text-2xl md:text-3xl" style="font-variation-settings: 'FILL' 1;">roofing</span>
</div>
<div class="flex flex-col justify-center">
    <span class="text-xl md:text-2xl font-black uppercase tracking-widest text-on-surface leading-none" style="font-family: 'Montserrat', sans-serif;">
        Việt <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-yellow-500">Đức</span>
    </span>
    <span class="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-on-surface-variant mt-1.5 leading-none">Hệ Thống Cửa Cuốn</span>
</div>
</div>`;

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');

    // Replace Header Logo
    const headerRegex = /<div class="flex items-center gap-3">\s*<span class="material-symbols-outlined text-primary-container text-3xl" style="font-variation-settings: 'FILL' 1;">roofing<\/span>\s*<span class="text-headline-md font-headline-md font-bold text-primary-container">\s*Cửa Cuốn Việt Đức\s*<\/span>\s*<\/div>/g;
    html = html.replace(headerRegex, newHeaderLogoHtml);

    // Replace Footer Logo
    const footerRegex = /<div class="flex items-center gap-3">\s*<span class="material-symbols-outlined text-primary-container text-4xl" style="font-variation-settings: 'FILL' 1;">roofing<\/span>\s*<span class="text-title-lg md:text-headline-sm font-headline-sm font-bold text-on-surface uppercase tracking-wide">\s*Cửa Cuốn Việt Đức\s*<\/span>\s*<\/div>/g;
    html = html.replace(footerRegex, newLogoHtml);

    fs.writeFileSync(file, html);
    console.log('Updated logo in ' + file);
});
