import React from 'react';
import styles from "@/components/Button/button.module.css";
import Link from "next/link";

function Button({text, url}) {
    return (
        <Link href={url} >
        <button className={styles.container}>{text}</button>
        </Link>
    );
}

export default Button;