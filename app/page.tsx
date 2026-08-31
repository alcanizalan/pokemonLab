import Image from "next/image";
import NavBar from "../components/ui/nav-bar/nav-bar";

import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.navBarContainer}>
        <NavBar />
      </div>
    </main>
  );
}
