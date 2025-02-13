import { ModeToggle } from '@/components/mode-toggle';
import styles from './header.module.css';
import Link from 'next/link';

export function Header() {
    return (
        <div id='header' className={styles.container}>
            <div className={styles.nav_item}>
                <Link href="#experiences" scroll>Experiences</Link>
            </div>
            <div className={styles.nav_item}>
                <Link href="#skills" scroll>Skills</Link>
            </div>
            <div className={styles.nav_item}>
                <Link href="#contact" scroll>Contact</Link>
            </div>
            <div className={styles.nav_item}>
                <ModeToggle />
            </div>
        </div>
    )
}