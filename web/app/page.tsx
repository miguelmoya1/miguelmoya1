export default function Home() {
  const value = `My name is Miguel Moya Ortega. I'm a Full Stack Developer based in San
    Vicente del Raspeig, Spain, and I'm very passionate and dedicated to my
    work. With ${
      new Date().getFullYear() - new Date("01/03/2017").getFullYear()
    } years experience as a professional Full Stack
    Developer, I have acquired the skills necessary to build great and premium
    websites, apps and services.`;

  return <p>{value}</p>;
}
