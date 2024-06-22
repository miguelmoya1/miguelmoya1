import ChangeLanguage from './change-language';

export default function Header() {
  return (
    <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex lg:sticky lg:top-8'>
      <div className='fixed left-0 top-0 flex flex-col items-center w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
        <h1 className='mb-4 text-xl text-center font-bold leading-tight tracking-tight text-gray-900 dark:text-white'>
          Miguel Moya Ortega - Full Stack Developer
        </h1>
        <hr />
        <h2>Construyendo experiencias web eficientes y escalables</h2>
      </div>
      <div className='fixed flex flex-col items-center bottom-0 left-0 pb-12 lg:pb-0 flex h-48 w-full items-end justify-end bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none'>
        By Miguelmo
        <ChangeLanguage />
      </div>
    </div>
  );
}
