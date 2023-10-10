'use client';

import Button from '../button/button';
import styles from './change-language.module.css';

export default function ChangeLanguage() {
  async function changeLanguage(lang: string) {
    await fetch('/api/language', {
      method: 'POST',
      body: JSON.stringify({ lang }),
    });

    location.reload();
  }

  return (
    <div className={styles.container}>
      <Button onClick={() => changeLanguage('es')}>es</Button>
      <Button onClick={() => changeLanguage('en')}>en</Button>
    </div>
  );
}
