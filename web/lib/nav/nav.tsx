import Button from '../../components/button/button';
import ChangeRetro from '../../components/change-retro/change-retro';
import styles from './nav.module.css';

export default function Nav() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Button className='active'>Click me</Button>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </nav>

      <ChangeRetro />
    </header>
  );
}
