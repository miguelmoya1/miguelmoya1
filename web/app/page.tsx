import { useTranslate } from '../lib/hooks/use-translate';
import styles from './page.module.css';

export default async function AboutMe() {
  const { t } = await useTranslate();

  const years = `${new Date().getFullYear() - new Date('01/01/2017').getFullYear()}`;

  return <p className={styles.text}>{t('ABOUT_ME_CONTENT', { years })}</p>;
}
