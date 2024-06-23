import { useTranslate } from '@/hooks/translate';
import { formatTextToElements } from '../utils/formatTextToElements';

export default async function AboutMe() {
  const experience = (new Date().getFullYear() - 2017).toString();
  const { t } = await useTranslate();

  return (
    <section>
      <div className="relative z-[-1] max-w-[600px] text-justify flex flex-col place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        {formatTextToElements(t('ABOUT_ME_DESCRIPTION', { experience }))}
      </div>
    </section>
  );
}
