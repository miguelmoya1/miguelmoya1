import styles from './card.module.css';

interface Props {
  title: string;
  description: string;
  extraInfo?: string;
  old?: boolean;
}

export default function Card({ title, description, extraInfo, old }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.card__title}>{title}</div>
      <div className={styles.card__description}>{description}</div>
      {extraInfo && (
        <div className={`${styles['card__extra-info']} ${old ? styles['card__extra-info--old'] : ''}`}>{extraInfo}</div>
      )}
    </div>
  );
}
