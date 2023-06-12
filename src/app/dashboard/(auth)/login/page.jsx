"use client"
import React from 'react';
import styles from './page.module.css'
import {signIn} from "next-auth/react";

const Login = () => {
    return (
        <div className={styles.container}>
            <button onClick={() => signIn("google")} className={styles.button}>Login with Google</button>
            <button onClick={() => signIn("github")} className={styles.button}>Login with Github</button>
        </div>
    );
};

export default Login;