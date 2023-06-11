"use client"
import React from 'react';
import useSWR from 'swr'
import styles from './page.module.css'

const Dashboard = () => {
    // const [data, setData] = useState([])
    // const [error, setError] = useState(false)
    // const [isLoading, setIsLoading] = useState(false)


    // useEffect(() => {
    //     const getData = async () => {
    //         setIsLoading(true)
    //         const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
    //             cache: "no-store"
    //         })
    //
    //         if (!res.ok) {
    //             setError(true)
    //         }
    //         const data = await res.json();
    //         setData(data)
    //         setIsLoading(false)
    //     }
    //
    //     getData();
    // }, [])


    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const {data, error, isLoading} = useSWR('https://jsonplaceholder.typicode.com/posts/', fetcher)

    console.log(data)
    return (
        <div className={styles.container}>
            Dashboard
        </div>
    );
};

export default Dashboard;