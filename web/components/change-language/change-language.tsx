'use client';

import En from '../svg/en';
import Es from '../svg/es';
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
      <Es width={24} height={24} onClick={() => changeLanguage('es')} />

      <En width={24} height={24} onClick={() => changeLanguage('en')} />
    </div>
  );
}
