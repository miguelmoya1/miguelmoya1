'use client';

import Button from '../button/button';
interface Props {
  label: string;
}

export default function ChangeRetro({ label }: Props) {
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

  return <Button onClick={toggleRetro}>{label}</Button>;
}
