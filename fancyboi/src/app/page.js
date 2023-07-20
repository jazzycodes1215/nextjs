import styles from './page.module.css'
import styled from "styled-components";
import Link from 'next/link';



export default function Home() {
  return (
<div>
    <video autoPlay muted loop id="myVideo">
      <source src="/coffee.mp4" type="video/mp4"></source>
      </video>

    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.links}>
          <Link href="/">SHOP</Link>
          <Link href="/">ABOUT</Link>
          <Link href="/">QUIZ</Link>
        </div>

        <h1>Bean Delights</h1>

        <div className={styles.links}>
          <Link href="/">Learn</Link>
          <Link href="/">Blog</Link>
          <Link href="/Contact">Contact</Link>
        </div>
        {/* <img src="/bag.svg"></img> */}
      </div>
      <div className={styles.hero}>
        <div className={styles.cta}>
          <div className={styles.ctainn}>
            <h2>A Special Coffee For You</h2>
            <p>Find out your coffee personality. Take our coffee quiz today!</p>
            <button>Take Quiz</button>
          </div>
        </div>  
      </div>
    </main>
    </div>
  )
}
