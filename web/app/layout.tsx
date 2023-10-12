import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import MainContent from '../components/main-content/main-content';
import Nav from '../components/nav/nav';
import './globals.css';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: 'Miguelmo - dev',
  description: "Miguelmo's personal website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cookiesStore = cookies();

  const isRetroMode = cookiesStore.has('retroMode');

  return (
    <html lang='en'>
      <body className={isRetroMode ? 'retro' : ''}>
        <Nav />

        <MainContent />

        <article className={styles.article}>{children}</article>
      </body>
    </html>
  );
}
