import styles from './aptitudes.module.css';

export default function Aptitudes() {
  return (
    <div className={styles.content}>
      <h2>Aptitudes</h2>

      <div className={styles.aptitudes}>
        <div>
          <h3>Frontend</h3>
          <ul>
            <li>Angular</li>
            <li>capacitor</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Redux</li>
            <li>TypeScript</li>
          </ul>
        </div>

        <div>
          <h3>Backend</h3>
          <ul>
            <li>Nextjs</li>
            <li>Nestjs</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
