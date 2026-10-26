"use client"
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";
import styles from './pokemon-modal.module.css'

export default function PokemonModal({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    const close = () => router.back();

    const stopPropagation = (event: MouseEvent) => event.stopPropagation();

    return (
        <div className={styles.overlay} onClick={close}>
            <div className={styles.modal} onClick={stopPropagation}>
                <button className={styles.closeButton} onClick={close} aria-label="Close">
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
}
