import styles from './page.module.css';

export default function Home() {
  const value = `My name is Miguel Moya Ortega. I'm a Full Stack Developer based in Alicante, 
  Spain, and I'm very passionate and dedicated to my work. With ${
    new Date().getFullYear() - new Date('01/01/2017').getFullYear()
  } years experience as a professional Full Stack
    Developer, I have acquired the skills necessary to build great and premium
    websites, apps and services.`;

  return <p className={styles.text}>{value}</p>;
}
