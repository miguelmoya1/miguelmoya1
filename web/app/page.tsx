import { headers } from 'next/headers';
import styles from './page.module.css';

async function getStaticProps(props?: any) {
  const headersList = headers();

  console.log('headersList', headersList);

  return {
    props,
  };
}

export default async function Home(args: any) {
  const value = 'Hello World';

  const props = await getStaticProps(args);

  console.log('props', props);

  return <p className={styles.text}>{value}</p>;
}
