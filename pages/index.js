import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Indonesia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Selamat datang <a href="https://nextjs.org">Next.js Indonesia</a>
        </h1>

        <p className={styles.description}>
          Halaman ini sedang dalam pengembangan{" ,"}
          <code className={styles.code}>pages/index.js</code>
          temukan berbagai resources dari Next.js global
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/NextJS-Indonesia" className={styles.card}>
            <h3>Kontribusi &rarr;</h3>
            <p>
              Welcome buat yang ingin berkontribusi, silahkan visit Repository
            </p>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Dokumentasi &rarr;</h3>
            <p>Berbagai informasi dengan fitur Next.js dan API</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Belajar &rarr;</h3>
            <p>Pelajari Next.js dengan lebih interaktif dan tersedia kuis!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Contoh dan Tutorial &rarr;</h3>
            <p>Banyak contoh project Next.js</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>Deploy Next.js dengan menggunakan Vercel.</p>
          </a>

          <a
            href="https://t.me/nextjs_id"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h3>Group Telegram &rarr;</h3>
            <p>Diskusi bersama Komunitas Next.js Indonesia</p>
          </a>

          <a
            href="https://discord.gg/pQF9b74"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h3>Group Discord Frontend Indonesia &rarr;</h3>
            <p>Diskusi bersama Komunitas Frontend Indonesia</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
