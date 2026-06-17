const fs = require('fs');

const styleCss = fs.readFileSync('_legacy/assets/css/style.css', 'utf-8');
const tailwindConfigStr = fs.readFileSync('_legacy/assets/js/tailwind.config.js', 'utf-8');

// Extract root and dark variables
const rootVarsMatch = styleCss.match(/:root\s*{([^}]+)}/);
const darkVarsMatch = styleCss.match(/\.dark\s*{([^}]+)}/);

const rootVars = rootVarsMatch ? rootVarsMatch[1].trim() : '';
const darkVars = darkVarsMatch ? darkVarsMatch[1].trim() : '';

// Extract color keys from rootVars
const colorKeys = rootVars.split('\n').map(l => l.trim().split(':')[0].replace('--', '')).filter(k => k);

let globalsCss = `@import 'tailwindcss';

@theme {
  --spacing-max-width: 1440px;
  --spacing-margin-mobile: 16px;
  --spacing-gutter: 24px;
  --spacing-margin-desktop: 64px;
  --spacing-base: 8px;

  --font-body-md: var(--font-montserrat), sans-serif;
  --font-headline-md: var(--font-montserrat), sans-serif;
  --font-headline-lg-mobile: var(--font-montserrat), sans-serif;
  --font-label-sm: var(--font-montserrat), sans-serif;
  --font-display-lg: var(--font-montserrat), sans-serif;
  --font-body-lg: var(--font-montserrat), sans-serif;
  --font-label-md: var(--font-montserrat), sans-serif;
  --font-headline-lg: var(--font-montserrat), sans-serif;

  --text-body-md: 16px;
  --text-body-md--line-height: 24px;
  --text-body-md--font-weight: 400;

  --text-headline-md: 24px;
  --text-headline-md--line-height: 32px;
  --text-headline-md--font-weight: 600;

  --text-headline-lg-mobile: 24px;
  --text-headline-lg-mobile--line-height: 32px;
  --text-headline-lg-mobile--font-weight: 700;

  --text-label-sm: 12px;
  --text-label-sm--line-height: 16px;
  --text-label-sm--font-weight: 700;

  --text-display-lg: 56px;
  --text-display-lg--line-height: 64px;
  --text-display-lg--letter-spacing: -0.02em;
  --text-display-lg--font-weight: 900;

  --text-body-lg: 18px;
  --text-body-lg--line-height: 28px;
  --text-body-lg--font-weight: 400;

  --text-label-md: 14px;
  --text-label-md--line-height: 20px;
  --text-label-md--letter-spacing: 0.05em;
  --text-label-md--font-weight: 600;

  --text-headline-lg: 32px;
  --text-headline-lg--line-height: 40px;
  --text-headline-lg--font-weight: 700;
`;

colorKeys.forEach(k => {
    globalsCss += `  --color-${k}: rgb(var(--${k}));\n`;
});

globalsCss += `
}

@custom-variant dark (&:is(.dark *));

:root {
${rootVars}
}

.dark {
${darkVars}
}

.pulse-animation {
    animation: pulse 2s infinite;
}
@keyframes pulse {
    0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(252, 192, 81, 0.7); }
    70% { transform: scale(1); box-shadow: 0 0 0 15px rgba(252, 192, 81, 0); }
    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(252, 192, 81, 0); }
}
.hero-overlay {
    background: linear-gradient(90deg, rgba(26,26,26,0.8) 0%, rgba(26,26,26,0.4) 100%);
}
.card-shadow {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
}
.dark .card-shadow {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.4);
}
`;

fs.writeFileSync('src/app/globals.css', globalsCss);
console.log('globals.css written successfully.');
