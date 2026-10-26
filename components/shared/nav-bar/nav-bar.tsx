import styles from './nav-bar.module.css'

import Link from "next/link";

export default function NavBar() {
    return (
        <nav className={styles.navBar}>
            <Link href="/pokedex">Pokedex</Link>
        </nav>    
    )
}