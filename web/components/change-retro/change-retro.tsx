'use client';

import Button from '../button/button';

export default function ChangeRetro() {
  async function toggleRetro() {
    const response = await fetch('/api/theme', {
      method: 'POST',
    });

    const body = await response.json();

    if (body.isRetroMode) {
      document.body.classList.add('retro');
    } else {
      document.body.classList.remove('retro');
    }
  }

  return <Button onClick={toggleRetro}>Change retro</Button>;
}
