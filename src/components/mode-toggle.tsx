'use client';

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import styles from './component.module.css';

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    if (theme === 'dark') {
        return (
            <div>
                <button className={styles.transparent_button} onClick={() => setTheme("light")}>
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0"/>
                </button>
            </div>
            
        )
    } else {
        return (
            <div>
                <button className={styles.transparent_button} onClick={() => setTheme("dark")}>
                    <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
                </button>
            </div>
        )
    }
}