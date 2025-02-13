import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "./main/header";
import { Content } from "./main/content";
import { Footer } from "./main/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
