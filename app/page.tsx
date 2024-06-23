import AboutMe from './components/about-me';
import Header from './components/header';
import InterestLinks from './components/interest-links';
import Timeline from './components/timeline';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Header />

      <AboutMe />

      <InterestLinks />

      <Timeline />
    </main>
  );
}
