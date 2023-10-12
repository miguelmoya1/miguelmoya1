import Link from 'next/link';
import { useTranslate } from '../../lib/hooks/use-translate';
import Button from '../button/button';
import ChangeLanguage from '../change-language/change-language';
import styles from './nav.module.css';

interface Props {
  className?: string;
}

export default async function Nav({ className }: Props) {
  const { t } = await useTranslate();

  return (
    <header className={styles.header + ' ' + className}>
      <nav className={styles.nav}>
        <Link href={'/'}>
          <Button>{t('ABOUT_ME')}</Button>
        </Link>

        <Link href={'/aptitudes'}>
          <Button>{t('APTITUDES')}</Button>
        </Link>

        <Link href={'/resume'}>
          <Button>{t('RESUME')}</Button>
        </Link>
      </nav>

      <nav className={styles.nav}>
        <ChangeLanguage />
      </nav>
    </header>
  );
}
