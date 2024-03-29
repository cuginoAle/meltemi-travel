import type { Metadata } from 'next';
import { Kumbh_Sans } from 'next/font/google';
import './globals.css';

import Script from 'next/script';

const mainFont = Kumbh_Sans({
  variable: '--font-kumbh-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        strategy="lazyOnload"
      />
      <body className={`${mainFont.className}`}>
        <div className="max-w-screen-xl w-full left-1/2 -translate-x-1/2 z-50 pointer-events-none fixed top-0 h-svh shadow-2xl" />
        {children}
        <footer>
          <div className="max-w-screen-xl bg-white m-auto p-4 lg:p-8">
            <p className="text-primary-500 text-right">
              &copy; 1992 Meltemi travel
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
