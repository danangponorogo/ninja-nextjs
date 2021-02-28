import Head from 'next/head'
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, laudantium cupiditate aliquam cum omnis quaerat velit tempora suscipit mollitia quas incidunt illum totam quis, quia, amet vel inventore. Ducimus, aspernatur.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, laudantium cupiditate aliquam cum omnis quaerat velit tempora suscipit mollitia quas incidunt illum totam quis, quia, amet vel inventore. Ducimus, aspernatur.</p>
      <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
    </div>
  )
}
