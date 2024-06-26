import styles from './chip.module.css';

export type ChipProps = {
  name: string;
};

export default function Chip({ name }: ChipProps) {
  return (
    <div className={styles.chip}>
      <span>{name}</span>
    </div>
  );
}
