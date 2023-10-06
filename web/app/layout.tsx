import type { Metadata } from 'next';
import { VT323 } from 'next/font/google';
import MainContent from '../components/main-content/main-content';
import Nav from '../components/nav/nav';
import './globals.css';
import styles from './layout.module.css';

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

        <article className={styles.article}>{children}</article>
      </body>
    </html>
  );
}
