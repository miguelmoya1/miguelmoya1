import Link from 'next/link';
import Button from '../button/button';
import ChangeLanguage from '../change-language/change-language';
import ChangeRetro from '../change-retro/change-retro';
import styles from './nav.module.css';

export default function Nav() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href={'/'}>
          <Button>About me</Button>
        </Link>

        <Link href={'/aptitudes'}>
          <Button>Aptitudes</Button>
        </Link>
      </nav>

      <ChangeLanguage />
      <ChangeRetro />
    </header>
  );
}
