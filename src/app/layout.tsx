// Code: Layout component for the app
// create a layout component
// Path: src/app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import Providers from '@/app/providers';
import { Inter } from 'next/font/google';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* <div className="bg-gray-400 h-screen w-screen"> */}
                <Providers>
                    <Header />
                    {/* <div className="bg-gray-200 container mx-auto px-4 max-w-4xl"> */}
                    {children}
                    {/* </div> */}
                </Providers>
                {/* </div> */}
            </body>
        </html>
    );
}
