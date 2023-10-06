import type { Metadata } from 'next';
import { VT323 } from 'next/font/google';
import MainContent from '../lib/main-content/main-content';
import Nav from '../lib/nav/nav';
import './globals.css';

const v = VT323({
  weight: '400',
  subsets: ['latin-ext', 'latin'],
});

export const metadata: Metadata = {
  title: 'Miguelmo - dev',
  description: "Miguelmo's personal website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={v.className}>
        <Nav />
        <MainContent />

        <article>{children}</article>
      </body>
    </html>
  );
}
