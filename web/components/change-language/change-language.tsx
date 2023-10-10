'use client';

import Button from '../button/button';

export default async function ChangeLanguage() {
  async function changeLanguage(lang: string) {
    await fetch('/api/language', {
      method: 'POST',
      body: JSON.stringify({ lang }),
    });

    location.reload();
  }

  return (
    <>
      <Button onClick={() => changeLanguage('es')}>es</Button>
      <Button onClick={() => changeLanguage('en')}>en</Button>
    </>
  );
}
