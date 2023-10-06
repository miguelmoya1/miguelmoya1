'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '../button/button';
import ChangeRetro from '../change-retro/change-retro';
import styles from './nav.module.css';

export default function Nav() {
  const router = usePathname();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href={'/'}>
          <Button className={router == '/' ? 'active' : ''}>About me</Button>
        </Link>

        <Link href={'/aptitudes'}>
          <Button className={router == '/aptitudes' ? 'active' : ''}>Aptitudes</Button>
        </Link>
      </nav>

      <ChangeRetro />
    </header>
  );
}
