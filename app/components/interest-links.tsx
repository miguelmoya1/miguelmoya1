import { useTranslate } from '@/hooks/translate';
import Github from './svg/github';
import Linkedin from './svg/linkedin';

type Link = {
  icon?: any;
  title?: string;
  description: string;
  href: string;
};

export default async function InterestLinks() {
  const { t } = await useTranslate();

  const links: Link[] = [
    {
      icon: Github,
      description: t('FIND_MY_PROJECTS_AND_CONTRIBUTIONS_ON_GITHUB'),
      href: 'https://github.com/miguelmoya1',
    },
    {
      icon: Linkedin,
      description: t('FIND_MY_EXPERIENCE_AND_EDUCATION_ON_LINKEDIN'),
      href: 'https://www.linkedin.com/in/miguelmo/',
    },
  ];

  const prepareLinks = (link: Link, index: number) => {
    return (
      <a
        key={index}
        href={link.href}
        className='group w-72 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
        target='_blank'
        rel='noopener noreferrer'
      >
        <h2 className='mb-3 text-2xl font-semibold'>
          {link.icon && <link.icon />} {link.title}{' '}
          <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
            -&gt;
          </span>
        </h2>
        <p className='m-0 max-w-[30ch] text-sm opacity-50'>{link.description}</p>
      </a>
    );
  };

  return (
    <section className='flex items-center justify-center'>
      <div className='flex flex-wrap items-center justify-center gap-4'>{links.map(prepareLinks)}</div>
    </section>
  );
}
