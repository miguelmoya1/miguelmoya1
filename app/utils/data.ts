export enum Aptitudes {
  TYPESCRIPT = 'Typescript',
  ANGULAR = 'Angular',
  REACT = 'React',
  REACT_NATIVE = 'React Native',
  CAPACITOR = 'Capacitor',
  NESTJS = 'Nest.JS',
  NEXTJS = 'Next.JS',
  NX = 'Nx',
  JEST = 'Jest',
  CYPRESS = 'Cypress',
}

export type Job = {
  title: string;
  company: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  aptitudes?: Aptitudes[];
};

export const jobs: Job[] = [
  {
    title: 'Frontend Team Lead & Developer',
    company: 'GFT',
    aptitudes: [Aptitudes.TYPESCRIPT, Aptitudes.ANGULAR, Aptitudes.NX, Aptitudes.JEST, Aptitudes.CYPRESS],
    startDate: new Date(2024, 0, 1),
    description: 'GFT_WORK_DESCRIPTION',
  },
  {
    title: 'Frontend Team Lead & Developer',
    company: 'Nax Solutions',
    aptitudes: [
      Aptitudes.TYPESCRIPT,
      Aptitudes.ANGULAR,
      Aptitudes.NX,
      Aptitudes.JEST,
      Aptitudes.CYPRESS,
      Aptitudes.CAPACITOR,
    ],
    startDate: new Date(2023, 4, 1),
    endDate: new Date(2023, 11, 1),
    description: 'NAX_WORK_DESCRIPTION',
  },
  {
    title: 'Frontend Team Lead & Developer',
    company: 'GESTORES 1880',
    aptitudes: [Aptitudes.TYPESCRIPT, Aptitudes.ANGULAR, Aptitudes.NX, Aptitudes.JEST, Aptitudes.CYPRESS],
    startDate: new Date(2021, 11, 1),
    endDate: new Date(2023, 3, 1),
    description: 'GESTORES_WORK_DESCRIPTION',
  },
  {
    title: 'Full Stack Developer',
    company: 'Ourside',
    aptitudes: [Aptitudes.TYPESCRIPT, Aptitudes.REACT, Aptitudes.REACT_NATIVE, Aptitudes.NEXTJS],
    startDate: new Date(2018, 9, 1),
    endDate: new Date(2021, 11, 1),
    description: 'OURSIDE_WORK_DESCRIPTION',
  },
  {
    title: 'Full Stack Developer',
    company: 'Conwork SaaS Holding',
    aptitudes: [Aptitudes.TYPESCRIPT, Aptitudes.ANGULAR],
    startDate: new Date(2017, 2, 1),
    endDate: new Date(2018, 9, 1),
    description: 'CONWORK_WORK_DESCRIPTION',
  },
];
