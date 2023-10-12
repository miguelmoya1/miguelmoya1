import { useTranslate } from '../../lib/hooks/use-translate';
import styles from './aptitudes.module.css';

export default async function Aptitudes() {
  const { t } = await useTranslate();

  return (
    <div className={styles.content}>
      <h2>{t('APTITUDES')}</h2>

      <div className={styles.aptitudes}>
        <div>
          <h3>Frontend</h3>
          <ul>
            <li>Angular</li>
            <li>capacitor</li>
            <li>React</li>
            <li>Redux</li>
            <li>TypeScript</li>
          </ul>
        </div>

        <div>
          <h3>Backend</h3>
          <ul>
            <li>Next.js</li>
            <li>Nest.js</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
