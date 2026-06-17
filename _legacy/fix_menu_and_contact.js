const fs = require('fs');

const files = ['index.html', 'gioi-thieu.html', 'dich-vu.html', 'san-pham.html', 'lien-he.html', 'template.html'];

files.forEach(file => {
    let html = fs.readFileSync(file, 'utf8');

    // 1. Phone number replacements
    html = html.replace(/0961 685 345/g, '098.267.4327');
    html = html.replace(/0961685345/g, '0982674327');
    html = html.replace(/098 267 4327/g, '098.267.4327'); // format standardized

    // 2. Email addition to Footer
    const footerHotlineStr1 = `<div class="flex items-center gap-2 text-on-surface-variant">\n<span class="material-symbols-outlined text-primary-container" style="font-variation-settings: 'FILL' 1;">call</span>\n<span class="font-label-md">Hotline: 098.267.4327</span>\n</div>`;
    const footerHotlineStr2 = `<div class="flex items-center gap-2 text-on-surface-variant">\r\n<span class="material-symbols-outlined text-primary-container" style="font-variation-settings: 'FILL' 1;">call</span>\r\n<span class="font-label-md">Hotline: 098.267.4327</span>\r\n</div>`;
    
    const emailBlock = `\n<div class="flex items-center gap-2 text-on-surface-variant">\n<span class="material-symbols-outlined text-primary-container" style="font-variation-settings: 'FILL' 1;">mail</span>\n<span class="font-label-md">Email: cuacuonvietduc0421@gmail.com</span>\n</div>`;
    const emailBlockWin = `\r\n<div class="flex items-center gap-2 text-on-surface-variant">\r\n<span class="material-symbols-outlined text-primary-container" style="font-variation-settings: 'FILL' 1;">mail</span>\r\n<span class="font-label-md">Email: cuacuonvietduc0421@gmail.com</span>\r\n</div>`;

    if (!html.includes('cuacuonvietduc0421@gmail.com')) {
        if (html.includes(footerHotlineStr1)) {
            html = html.replace(footerHotlineStr1, footerHotlineStr1 + emailBlock);
        } else if (html.includes(footerHotlineStr2)) {
            html = html.replace(footerHotlineStr2, footerHotlineStr2 + emailBlockWin);
        } else {
            // Fallback: Just insert after the hotline line in footer
            html = html.replace(/<span class="font-label-md">Hotline: 098.267.4327<\/span>\s*<\/div>/g, '<span class="font-label-md">Hotline: 098.267.4327</span>\n</div>\n<div class="flex items-center gap-2 text-on-surface-variant">\n<span class="material-symbols-outlined text-primary-container" style="font-variation-settings: \'FILL\' 1;">mail</span>\n<span class="font-label-md">Email: cuacuonvietduc0421@gmail.com</span>\n</div>');
        }
    }

    // 3. Email addition to Contact page (lien-he.html)
    if (file === 'lien-he.html' && !html.includes('Email Doanh Nghiệp')) {
        const emailContactCard = `
                <div class="bg-surface-container p-6 rounded-2xl border border-surface-container-high flex items-center gap-6">
                    <div class="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0 text-primary-container">
                        <span class="material-symbols-outlined text-3xl">mail</span>
                    </div>
                    <div>
                        <div class="text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">Email Doanh Nghiệp</div>
                        <a href="mailto:cuacuonvietduc0421@gmail.com" class="text-headline-lg text-primary-container font-medium hover:text-primary transition-colors" style="font-size: 1.25rem;">cuacuonvietduc0421@gmail.com</a>
                    </div>
                </div>
`;
        html = html.replace('<!-- Quick Contact Info -->\n            <div class="w-full lg:w-1/2 space-y-8">', '<!-- Quick Contact Info -->\n            <div class="w-full lg:w-1/2 space-y-8">' + emailContactCard);
    }

    // 4. Replace the specific Nav Links for the Menu
    html = html.replace(/href="[^"]*"([^>]*)>Trang Chủ<\/a>/g, 'href="index.html"$1>Trang Chủ</a>');
    html = html.replace(/href="[^"]*"([^>]*)>Giới Thiệu<\/a>/g, 'href="gioi-thieu.html"$1>Giới Thiệu</a>');
    html = html.replace(/href="[^"]*"([^>]*)>Dịch Vụ<\/a>/g, 'href="dich-vu.html"$1>Dịch Vụ</a>');
    html = html.replace(/href="[^"]*"([^>]*)>Sản Phẩm<\/a>/g, 'href="san-pham.html"$1>Sản Phẩm</a>');
    html = html.replace(/href="[^"]*"([^>]*)>Liên Hệ<\/a>/g, 'href="lien-he.html"$1>Liên Hệ</a>');

    fs.writeFileSync(file, html);
});

console.log('Fixed links, phone numbers, and added email successfully.');
