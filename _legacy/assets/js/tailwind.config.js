tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        "colors": {
                "surface-container-highest": "rgb(var(--surface-container-highest) / <alpha-value>)",
                "surface-container-high": "rgb(var(--surface-container-high) / <alpha-value>)",
                "inverse-primary": "rgb(var(--inverse-primary) / <alpha-value>)",
                "primary-fixed": "rgb(var(--primary-fixed) / <alpha-value>)",
                "primary-fixed-dim": "rgb(var(--primary-fixed-dim) / <alpha-value>)",
                "on-secondary-container": "rgb(var(--on-secondary-container) / <alpha-value>)",
                "surface": "rgb(var(--surface) / <alpha-value>)",
                "on-primary": "rgb(var(--on-primary) / <alpha-value>)",
                "on-secondary-fixed-variant": "rgb(var(--on-secondary-fixed-variant) / <alpha-value>)",
                "tertiary-fixed": "rgb(var(--tertiary-fixed) / <alpha-value>)",
                "surface-variant": "rgb(var(--surface-variant) / <alpha-value>)",
                "secondary-fixed": "rgb(var(--secondary-fixed) / <alpha-value>)",
                "surface-bright": "rgb(var(--surface-bright) / <alpha-value>)",
                "on-error": "rgb(var(--on-error) / <alpha-value>)",
                "on-surface-variant": "rgb(var(--on-surface-variant) / <alpha-value>)",
                "surface-container-low": "rgb(var(--surface-container-low) / <alpha-value>)",
                "on-secondary": "rgb(var(--on-secondary) / <alpha-value>)",
                "surface-container": "rgb(var(--surface-container) / <alpha-value>)",
                "outline": "rgb(var(--outline) / <alpha-value>)",
                "inverse-surface": "rgb(var(--inverse-surface) / <alpha-value>)",
                "secondary": "rgb(var(--secondary) / <alpha-value>)",
                "on-tertiary": "rgb(var(--on-tertiary) / <alpha-value>)",
                "surface-tint": "rgb(var(--surface-tint) / <alpha-value>)",
                "surface-dim": "rgb(var(--surface-dim) / <alpha-value>)",
                "on-secondary-fixed": "rgb(var(--on-secondary-fixed) / <alpha-value>)",
                "primary-container": "rgb(var(--primary-container) / <alpha-value>)",
                "tertiary": "rgb(var(--tertiary) / <alpha-value>)",
                "on-tertiary-container": "rgb(var(--on-tertiary-container) / <alpha-value>)",
                "secondary-container": "rgb(var(--secondary-container) / <alpha-value>)",
                "on-primary-container": "rgb(var(--on-primary-container) / <alpha-value>)",
                "inverse-on-surface": "rgb(var(--inverse-on-surface) / <alpha-value>)",
                "secondary-fixed-dim": "rgb(var(--secondary-fixed-dim) / <alpha-value>)",
                "on-tertiary-fixed-variant": "rgb(var(--on-tertiary-fixed-variant) / <alpha-value>)",
                "on-background": "rgb(var(--on-background) / <alpha-value>)",
                "outline-variant": "rgb(var(--outline-variant) / <alpha-value>)",
                "tertiary-container": "rgb(var(--tertiary-container) / <alpha-value>)",
                "error": "rgb(var(--error) / <alpha-value>)",
                "on-error-container": "rgb(var(--on-error-container) / <alpha-value>)",
                "on-surface": "rgb(var(--on-surface) / <alpha-value>)",
                "error-container": "rgb(var(--error-container) / <alpha-value>)",
                "background": "rgb(var(--background) / <alpha-value>)",
                "primary": "rgb(var(--primary) / <alpha-value>)",
                "tertiary-fixed-dim": "rgb(var(--tertiary-fixed-dim) / <alpha-value>)",
                "surface-container-lowest": "rgb(var(--surface-container-lowest) / <alpha-value>)",
                "on-primary-fixed": "rgb(var(--on-primary-fixed) / <alpha-value>)",
                "on-primary-fixed-variant": "rgb(var(--on-primary-fixed-variant) / <alpha-value>)",
                "on-tertiary-fixed": "rgb(var(--on-tertiary-fixed) / <alpha-value>)"
        },
        "borderRadius": {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
        },
        "spacing": {
                "max-width": "1440px",
                "margin-mobile": "16px",
                "gutter": "24px",
                "margin-desktop": "64px",
                "base": "8px"
        },
        "fontFamily": {
                "body-md": [
                        "Montserrat"
                ],
                "headline-md": [
                        "Montserrat"
                ],
                "headline-lg-mobile": [
                        "Montserrat"
                ],
                "label-sm": [
                        "Montserrat"
                ],
                "display-lg": [
                        "Montserrat"
                ],
                "body-lg": [
                        "Montserrat"
                ],
                "label-md": [
                        "Montserrat"
                ],
                "headline-lg": [
                        "Montserrat"
                ]
        },
        "fontSize": {
                "body-md": [
                        "16px",
                        {
                                "lineHeight": "24px",
                                "fontWeight": "400"
                        }
                ],
                "headline-md": [
                        "24px",
                        {
                                "lineHeight": "32px",
                                "fontWeight": "600"
                        }
                ],
                "headline-lg-mobile": [
                        "24px",
                        {
                                "lineHeight": "32px",
                                "fontWeight": "700"
                        }
                ],
                "label-sm": [
                        "12px",
                        {
                                "lineHeight": "16px",
                                "fontWeight": "700"
                        }
                ],
                "display-lg": [
                        "56px",
                        {
                                "lineHeight": "64px",
                                "letterSpacing": "-0.02em",
                                "fontWeight": "900"
                        }
                ],
                "body-lg": [
                        "18px",
                        {
                                "lineHeight": "28px",
                                "fontWeight": "400"
                        }
                ],
                "label-md": [
                        "14px",
                        {
                                "lineHeight": "20px",
                                "letterSpacing": "0.05em",
                                "fontWeight": "600"
                        }
                ],
                "headline-lg": [
                        "32px",
                        {
                                "lineHeight": "40px",
                                "fontWeight": "700"
                        }
                ]
        }
},
    },
};
