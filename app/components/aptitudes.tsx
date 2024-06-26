import { useTranslate } from '@/hooks/translate';
import { Aptitudes as Ap } from '../utils/data';
import Chip from './chip';

export default async function Aptitudes() {
  const { t } = await useTranslate();
  return (
    <section>
      <h2 className='text-5xl font-bold text-gray text-center mb-12'>{t('APTITUDES')}</h2>

      <div className='flex flex-wrap justify-center gap-2'>
        {Object.values(Ap).map((aptitude) => (
          <Chip key={aptitude} name={aptitude} />
        ))}
      </div>
    </section>
  );
}
