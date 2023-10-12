import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window !== 'undefined') {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    }

    return initialValue;
  });

  const setItem = (newValue: T) => {
    setValue(newValue);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(newValue));
    }
  };

  return [value, setItem] as const;
}
