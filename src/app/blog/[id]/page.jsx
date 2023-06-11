import React from 'react';
import styles from './page.module.css'
import Image from "next/image";
import {notFound} from "next/navigation";

async function getData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: "no-store"
    })

    if (!res.ok) {
        return notFound()
    }

    return res.json()
}

const BlogPost = async ({params}) => {
    const data = await getData(params.id);
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{data.title}</h1>
                    <p className={styles.desc}></p>
                    <div className={styles.author}>
                        <Image src='' alt='' width={40} height={40}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;