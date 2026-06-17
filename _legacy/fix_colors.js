const fs = require('fs');
let css = fs.readFileSync('assets/css/style.css', 'utf8');

function hexToRgb(hex) {
    hex = hex.replace('#', '');
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return r + ' ' + g + ' ' + b;
}

css = css.replace(/:\s*#([0-9a-fA-F]{3,6});/g, (match, p1) => {
    return ': ' + hexToRgb(p1) + ';';
});

fs.writeFileSync('assets/css/style.css', css);

let twConfig = fs.readFileSync('assets/js/tailwind.config.js', 'utf8');
twConfig = twConfig.replace(/"var\(--(.*?)\)"/g, '"rgb(var(--$1) / <alpha-value>)"');
fs.writeFileSync('assets/js/tailwind.config.js', twConfig);
console.log('Fixed CSS and Tailwind config!');
