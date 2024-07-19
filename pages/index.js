import Head from "next/head";
import styles from "../styles/Home.module.css";
import Router from "next/router";
import useTheme from "../hooks/useTheme";
import { Button } from "../components";

export default function Home() {
  const { themes, setTheme, currentTheme } = useTheme();

  const redirectToWish = () => {
    const id = currentTheme.id;
    const wishPage = id == 0 ? "/Aditi Dhake" : `/Aditi Dhake/${id}`; // Adjust the URL as needed
    Router.push(wishPage);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Birthday Wish</title>
        <meta name="description" content="An app to generate birthday wishes :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.main}>
          <h1 className={styles.title}>
            Just a little surprise all coded for you, <span className={styles.span}>My Love</span>
          </h1>
        </div>

        {/* Theme Color */}
        <div className={styles.themeWrapper}>
          <form
            className={styles.theme}
            id="theme-input"
            onChange={(e) => setTheme(e.target.id)}
          >
            {themes.map((item) => (
              <input
                key={item.id}
                type="radio"
                className={item.name}
                id={item.id}
                name="theme"
                value={item.color}
                defaultChecked={currentTheme.id === item.id}
              />
            ))}
          </form>
        </div>

        <div className={styles.buttonContainer}>
          <Button className={styles.button} onClick={redirectToWish} text="Go!" />
        </div>
        <p className={styles.desc}>
          Crafted by{" "}
          <a
            className={styles.span}
            href="https://github.com/Unobhautik"
            target="_blank"
            rel="noreferrer"
          >
            Bhautik
          </a>
        </p>
      </main>
    </div>
  );
}
