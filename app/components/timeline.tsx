import { useTranslate } from '@/hooks/translate';
import { formatTextToElements } from '../utils/formatTextToElements';

type Job = {
  title: string;
  company: string;
  startDate: Date;
  endDate?: Date;
  description: JSX.Element[];
};

const formatSate = (date: Date) => {
  return Intl.DateTimeFormat('es-ES', {
    month: 'long',
    year: 'numeric',
  }).format(date);
};

export default async function Timeline() {
  const { t } = await useTranslate();

  const jobs: Job[] = [
    {
      title: 'Frontend Team Lead & Developer',
      company: 'GFT',
      startDate: new Date(2024, 0, 1),
      description: formatTextToElements(t('GFT_WORK_DESCRIPTION')),
    },
    {
      title: 'Frontend Team Lead & Developer',
      company: 'Nax Solutions',
      startDate: new Date(2023, 4, 1),
      endDate: new Date(2023, 11, 1),
      description: formatTextToElements(t('NAX_WORK_DESCRIPTION')),
    },
    {
      title: 'Frontend Team Lead & Developer',
      company: 'GESTORES 1880',
      startDate: new Date(2021, 11, 1),
      endDate: new Date(2023, 3, 1),
      description: formatTextToElements(t('GESTORES_WORK_DESCRIPTION')),
    },
    {
      title: 'Full Stack Developer',
      company: 'Ourside',
      startDate: new Date(2018, 9, 1),
      endDate: new Date(2021, 11, 1),
      description: formatTextToElements(t('OURSIDE_WORK_DESCRIPTION')),
    },
    {
      title: 'Full Stack Developer',
      company: 'Conwork SaaS Holding',
      startDate: new Date(2017, 2, 1),
      endDate: new Date(2018, 9, 1),
      description: formatTextToElements(t('CONWORK_WORK_DESCRIPTION')),
    },
  ];

  const formatLongDate = (date: Date) => {
    const years = date.getFullYear() - 1970;
    const months = date.getMonth();

    return `${years} ${t(years === 1 ? 'YEAR' : 'YEARS')}, ${months} ${
      months === 1 ? t('MONTH') : t('MONTHS')
    }`.replace(`, 0 ${months === 1 ? t('MONTH') : t('MONTHS')}`, '');
  };

  const formatDates = (job: Job) => {
    return `${formatSate(job.startDate)} - ${job.endDate ? formatSate(job.endDate) : ''} (${formatLongDate(
      new Date(+(job.endDate || new Date()) - +job.startDate),
    )})`;
  };

  function formatJob(job: Job, index: number) {
    return (
      <div key={index} className='flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <h3 className='text-3xl font-bold text-gray mb-1'>{job.company}</h3>
          <h4 className='text-xl font-semibold text-gray-200'>{job.title}</h4>
          <p className='tex-normal text-gray-400 mb-4'>{formatDates(job)}</p>
          <div className='text-lg text-gray-300 max-w-[600px] text-justify'>{job.description}</div>
        </div>
      </div>
    );
  }

  return (
    <section>
      <h2 className='text-5xl font-bold text-gray mb-12 text-center'>{t('TIMELINE')}</h2>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] mb-24">
        <div className='flex flex-col items-center justify-center gap-16 w-full'>
          {jobs?.length > 0 && jobs.map(formatJob)}
        </div>
      </div>
    </section>
  );
}
