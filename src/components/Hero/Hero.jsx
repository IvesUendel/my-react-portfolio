import React from 'react'

import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Uendel Araujo</h1>
        <p className={styles.description}>I'm a 5th semester software engineering student and I love programming, I've studied programming since I was 15, but only now have I been able to really dedicate myself to university</p>
        <a href='mailto:uendel.quebec@hotmail.com' className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/heroImage.jpg")} alt="My photo" className={styles.heroImg}/>
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Hero
