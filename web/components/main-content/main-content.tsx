import Link from 'next/link';
import Github from '../svg/github';
import Linkedin from '../svg/linkedin';
import styles from './main-content.module.css';

export default function MainContent() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Miguel Moya Ortega</h1>

      <div className={styles.socials}>
        <Link href='https://github.com/miguelmoya1' aria-label='Link to Github'>
          <Github className={styles.images} />
        </Link>

        <Link href='https://www.linkedin.com/in/miguelmo' aria-label='Link to Linkedin'>
          <Linkedin className={styles.images} />
        </Link>
      </div>
    </main>
  );
}
