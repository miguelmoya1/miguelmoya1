import { useTranslate } from '@/hooks/translate';
import { formatTextToElements } from '../utils/formatTextToElements';

export default async function AboutMe() {
  const experience = (new Date().getFullYear() - 2017).toString();
  const { t } = await useTranslate();

  return (
    <section>
      <div className='relative z-[-1] text-justify max-w-[1024px]'>
        {formatTextToElements(t('ABOUT_ME_DESCRIPTION', { experience }))}
      </div>
    </section>
  );
}
