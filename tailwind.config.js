/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx}",
        "app/**/*.{ts,tsx}",
        "components/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "color-schemes-color-scheme-1-accent": "var(--color-schemes-color-scheme-1-accent)",
                "color-schemes-color-scheme-1-background": "var(--color-schemes-color-scheme-1-background)",
                "primitives-color-neutral": "var(--primitives-color-neutral)",
                "primitives-color-neutral-dark": "var(--primitives-color-neutral-dark)",
                "primitives-color-neutral-darker": "var(--primitives-color-neutral-darker)",
                "primitives-color-neutral-light": "var(--primitives-color-neutral-light)",
                "primitives-color-neutral-lighter": "var(--primitives-color-neutral-lighter)",
                "primitives-color-neutral-lightest": "var(--primitives-color-neutral-lightest)",
                "primitives-opacity-neutral-darkest-10": "var(--primitives-opacity-neutral-darkest-10)",
                "primitives-opacity-neutral-darkest-15": "var(--primitives-opacity-neutral-darkest-15)",
                "primitives-opacity-neutral-darkest-20": "var(--primitives-opacity-neutral-darkest-20)",
                "primitives-opacity-neutral-darkest-30": "var(--primitives-opacity-neutral-darkest-30)",
                "primitives-opacity-neutral-darkest-40": "var(--primitives-opacity-neutral-darkest-40)",
                "primitives-opacity-neutral-darkest-5": "var(--primitives-opacity-neutral-darkest-5)",
                "primitives-opacity-neutral-darkest-50": "var(--primitives-opacity-neutral-darkest-50)",
                "primitives-opacity-neutral-darkest-60": "var(--primitives-opacity-neutral-darkest-60)",
                "primitives-opacity-transparent": "var(--primitives-opacity-transparent)",
                "primitives-opacity-white-10": "var(--primitives-opacity-white-10)",
                "primitives-opacity-white-15": "var(--primitives-opacity-white-15)",
                "primitives-opacity-white-20": "var(--primitives-opacity-white-20)",
                "primitives-opacity-white-30": "var(--primitives-opacity-white-30)",
                "primitives-opacity-white-40": "var(--primitives-opacity-white-40)",
                "primitives-opacity-white-5": "var(--primitives-opacity-white-5)",
                "primitives-opacity-white-50": "var(--primitives-opacity-white-50)",
                "primitives-opacity-white-60": "var(--primitives-opacity-white-60)",
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            fontFamily: {
                "heading-h1": "var(--heading-h1-font-family)",
                "heading-h2": "var(--heading-h2-font-family)",
                "heading-h3": "var(--heading-h3-font-family)",
                "heading-h4": "var(--heading-h4-font-family)",
                "heading-h5": "var(--heading-h5-font-family)",
                "heading-h6": "var(--heading-h6-font-family)",
                "heading-tagline": "var(--heading-tagline-font-family)",
                "text-large-bold": "var(--text-large-bold-font-family)",
                "text-large-extra-bold": "var(--text-large-extra-bold-font-family)",
                "text-large-light": "var(--text-large-light-font-family)",
                "text-large-link": "var(--text-large-link-font-family)",
                "text-large-medium": "var(--text-large-medium-font-family)",
                "text-large-normal": "var(--text-large-normal-font-family)",
                "text-large-semi-bold": "var(--text-large-semi-bold-font-family)",
                "text-medium-bold": "var(--text-medium-bold-font-family)",
                "text-medium-extra-bold": "var(--text-medium-extra-bold-font-family)",
                "text-medium-light": "var(--text-medium-light-font-family)",
                "text-medium-link": "var(--text-medium-link-font-family)",
                "text-medium-medium": "var(--text-medium-medium-font-family)",
                "text-medium-normal": "var(--text-medium-normal-font-family)",
                "text-medium-semi-bold": "var(--text-medium-semi-bold-font-family)",
                "text-regular-bold": "var(--text-regular-bold-font-family)",
                "text-regular-extra-bold": "var(--text-regular-extra-bold-font-family)",
                "text-regular-light": "var(--text-regular-light-font-family)",
                "text-regular-link": "var(--text-regular-link-font-family)",
                "text-regular-medium": "var(--text-regular-medium-font-family)",
                "text-regular-normal": "var(--text-regular-normal-font-family)",
                "text-regular-semi-bold": "var(--text-regular-semi-bold-font-family)",
                "text-small-bold": "var(--text-small-bold-font-family)",
                "text-small-extra-bold": "var(--text-small-extra-bold-font-family)",
                "text-small-light": "var(--text-small-light-font-family)",
                "text-small-link": "var(--text-small-link-font-family)",
                "text-small-medium": "var(--text-small-medium-font-family)",
                "text-small-normal": "var(--text-small-normal-font-family)",
                "text-small-semi-bold": "var(--text-small-semi-bold-font-family)",
                "text-tiny-bold": "var(--text-tiny-bold-font-family)",
                "text-tiny-extra-bold": "var(--text-tiny-extra-bold-font-family)",
                "text-tiny-light": "var(--text-tiny-light-font-family)",
                "text-tiny-link": "var(--text-tiny-link-font-family)",
                "text-tiny-medium": "var(--text-tiny-medium-font-family)",
                "text-tiny-normal": "var(--text-tiny-normal-font-family)",
                "text-tiny-semi-bold": "var(--text-tiny-semi-bold-font-family)",
                sans: [
                    "ui-sans-serif",
                    "system-ui",
                    "sans-serif",
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                    '"Noto Color Emoji"',
                ],
            },
            boxShadow: {
                large: "var(--large)",
                medium: "var(--medium)",
                small: "var(--small)",
                xlarge: "var(--xlarge)",
                xsmall: "var(--xsmall)",
                xxlarge: "var(--xxlarge)",
                xxsmall: "var(--xxsmall)",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
    },
    darkMode: ["class"],
    plugins: [],
};