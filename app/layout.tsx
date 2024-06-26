import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Miguelmo - Full Stack Developer',
  description: 'Miguel Moya Ortega - Full Stack Developer',
  keywords: [
    'Miguel Moya Ortega',
    'Full Stack Developer',
    'Software Engineer',
    'Web Developer',
    'miguelmo',
    'miguelmo.dev',
  ],
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  twitter: {
    card: 'summary',
    site: '@miguelmo',
    creator: '@miguelmo',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
