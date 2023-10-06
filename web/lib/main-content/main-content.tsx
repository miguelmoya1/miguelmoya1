import Link from 'next/link';
import Github from '../../components/svgs/github';
import Linkedin from '../../components/svgs/linkedin';
import styles from './main-content.module.css';

export default function MainContent() {
  return (
    <main className={styles.container}>
      <p>Miguel</p>

      <div className={styles.socials}>
        <Link href='https://github.com/miguelmoya1'>
          <Github className={styles.images} />
        </Link>

        <Link href='https://en.wikipedia.org/wiki/Next.js'>
          <Linkedin className={styles.images} />
        </Link>
      </div>
    </main>
  );
}
