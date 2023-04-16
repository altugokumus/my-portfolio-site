import React from 'react'
import styles from "../components/header.module.css"
import Link from 'next/link'

const Page = () => {
  return (
    <div className={styles.headerContainer}>
        <h1>
            Altug
        </h1>
        <ul className={styles.navItems}>
            <li><Link className={styles.link} href={"/"}>Home</Link></li>
            <li><Link className={styles.link} href={"/about"}>About</Link></li>
            <li><Link id={styles.coding} className={styles.link} href={"/coding"}>Code</Link></li>
            <li><Link id={styles.design} className={styles.link} href={"/design"}>Design</Link></li>
            <li><Link className={styles.link} href={"/contact"}>Contact</Link></li>
        </ul>
    </div>
  )
}

export default Page