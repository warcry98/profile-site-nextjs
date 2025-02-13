import { ArrowUp, Mail } from 'lucide-react';
import styles from './footer.module.css';
import Link from 'next/link';

export function Footer() {
    return (
        <div id='contact' className={styles.container}>
            <Mail />
            <a href='mailto:wahid.sholihul.fikri@gmail.com' className={styles.email}>wahid.sholihul.fikri@gmail.com</a>
            <div className={styles.arrow_up}>
                <Link href='#header'>
                    <ArrowUp />
                </Link>
            </div>
        </div>
    )
}