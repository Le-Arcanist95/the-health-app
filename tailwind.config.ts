import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            fontFamily: {
                lexend: 'var(--font-lexend)',
                lexendExa: 'var(--font-lexend-exa)',
                geistSans: 'var(--font-geist-sans)',
                geistMono: 'var(--font-geist-mono)',
            },
        },
    },
    plugins: [],
};
export default config;
