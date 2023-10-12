import Card from '../../components/card/card';
import { useTranslate } from '../../lib/hooks/use-translate';
import { experience } from './data';
import styles from './resume.module.css';

export default async function Resume() {
  const { t } = await useTranslate();
  return (
    <div className={styles.container}>
      <h1>{t('RESUME')}</h1>

      <h2>{t('EXPERIENCE')}</h2>

      <div className={styles.cards}>
        {experience.map((item, index) => (
          <Card key={index} title={item.title} description={item.subtitle} extraInfo={item.years} old={index !== 0} />
        ))}
      </div>
    </div>
  );
}
