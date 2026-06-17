const fs = require('fs');

const files = ['index.html', 'gioi-thieu.html', 'dich-vu.html', 'san-pham.html', 'lien-he.html', 'bai-viet.html', 'template.html'];

const oldText = "Giải pháp an ninh toàn diện cho ngôi nhà của bạn. Cam kết chất lượng, giá cạnh tranh, đội ngũ thợ chuyên nghiệp có mặt nhanh chóng sau 30 phút.";
const newText = "Giải pháp an ninh toàn diện. Phục vụ chuyên nghiệp, tận tâm, có mặt nhanh chóng sau 30 phút.";

// The copyright text currently looks like: © 2024 <span class="font-medium text-primary-container">Cửa Cuốn Việt Đức</span>. Đã đăng ký bản quyền.
// We want to replace 2024 with <span id="currentYear"></span> and add a small inline script to set it.

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');

    // 1. Shorten the description
    if (html.includes(oldText)) {
        html = html.replace(oldText, newText);
    } else {
        console.log(`Could not find old description in ${file}, maybe it was formatted differently.`);
        // Try a regex replacement just in case of newlines
        html = html.replace(/Giải pháp an ninh toàn diện cho ngôi nhà của bạn\. Cam kết chất lượng, giá cạnh tranh, đội ngũ thợ chuyên nghiệp có mặt nhanh chóng sau 30 phút\./g, newText);
    }

    // 2. Change 2024 to dynamic year
    // Look for © 2024 or &copy; 2024
    if (html.includes('© 2024')) {
        html = html.replace('© 2024', '© <span id="current-year"></span>');
    }

    // 3. Add script to bottom of body if not exists
    const scriptTag = `<script>document.getElementById('current-year').textContent = new Date().getFullYear();</script>\n</body>`;
    if (html.includes('id="current-year"') && !html.includes(`document.getElementById('current-year').textContent`)) {
        html = html.replace('</body>', scriptTag);
    }

    fs.writeFileSync(file, html);
    console.log(`Updated text and year in ${file}`);
});
