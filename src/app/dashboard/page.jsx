"use client"
import React from 'react';
import useSWR from 'swr'
import styles from './page.module.css'
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import Image from "next/image";

const Dashboard = () => {
    const session = useSession();

    const router = useRouter();
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const {data, error, isLoading} = useSWR(`api/posts?username=${session.data?.user.name}`, fetcher)

    if (session.status === "loading") {
        return <p>Loading...</p>
    }
    if (session.status === "unauthenticated") {
        router?.push("/dashboard/login")
    }

        
    console.log(session)
    if (session.status === "authenticated") {
        return (
            <div className={styles.container}>
                <div className={styles.posts}>
                    {data.map(post => (
                        <div className={styles.post} key={post.id}>
                            <div className={styles.imgContainer}>
                                <Image src={post.img} alt=""/>
                            </div>
                            <h2 className={styles.postTitle}>{post.title}</h2>
                            <span className={styles.delete}>X</span>
                        </div>
                    ))}
                </div>
                <form className={styles.new} onSubmit={handleSubmit}>
                    <h1>Add New Post</h1>
                    <input type="text" placeholder={"Title"} className={styles.input}/>
                    <input type="text" placeholder={"Des"} className={styles.input}/>
                    <input type="text" placeholder={"Image"} className={styles.input}/>
                    <textarea placeholder={"Content"} rows={30} cols={10} className={styles.textArea}/>
                    <button className={styles.button}>Send</button>
                </form>
            </div>
        );
    }

};


export default Dashboard;