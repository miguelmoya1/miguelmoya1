import { Inder, VT323 } from 'next/font/google';
import { useEffect } from 'react';
import { useLocalStorage } from './use-local-storage';

const v = VT323({
  weight: '400',
  subsets: ['latin-ext', 'latin'],
});

const i = Inder({
  weight: '400',
  subsets: ['latin-ext', 'latin'],
});

export function useRetroMode() {
  const [retroMode, setRetroMode] = useLocalStorage('retroMode', false);

  useEffect(() => {
    if (retroMode) {
      document.body.classList.add('retro', v.className);
      document.body.classList.remove(i.className);
    } else {
      document.body.classList.remove('retro', v.className);
      document.body.classList.add(i.className);
    }
  }, [retroMode]);

  function toggleRetroMode() {
    setRetroMode(!retroMode);
  }

  return [retroMode, toggleRetroMode] as const;
}
