import type { Metadata } from 'next';
import { Lexend, Lexend_Exa } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const lexend = Lexend({
    subsets: ['latin-ext'],
    display: 'swap',
    variable: '--font-lexend',
});

const lexendExa = Lexend_Exa({
    subsets: ['latin-ext'],
    display: 'swap',
    variable: '--font-lexend-exa',
});

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: 'The HEALTH App - Holistic Education and Lifestyle Toolkit for Health',
    description:
        'The HEALTH App is a holistic toolkit for well-being, providing expert content on fitness, nutrition, meditation, sleep, and more. It empowers users with personalized tools and resources to enhance physical, mental, and emotional health, supporting a balanced and informed lifestyle.',
    keywords: [
        'health app',
        'holistic health',
        'wellness toolkit',
        'meditation',
        'exercise',
        'nutrition',
        'sleep health',
        'lifestyle improvement',
        'philosophy',
        'mindfulness',
        'healthy living',
        'fitness',
        'food education',
        'holistic well-being',
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${lexend.variable} ${lexendExa.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
