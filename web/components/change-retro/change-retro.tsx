'use client';

import { useRetroMode } from '../../lib/hooks/use-retro-mode';
import Button from '../button/button';

export default function ChangeRetro() {
  const [_, toggleRetro] = useRetroMode();

  return <Button onClick={toggleRetro}>Change retro</Button>;
}
