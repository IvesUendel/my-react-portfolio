import React, {useState} from 'react'

import styles from './Navbar.module.css'
import {getImageUrl} from "../../utils"

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>Uendel Araujo</a>
      <div className={styles.menu}>
       <img className={styles.menuBtn} src={menuOpen ? getImageUrl("nav/closeImage.png") : getImageUrl("nav/menuImage.png")} alt='menu-button' onClick={() => setMenuOpen(!menuOpen)}/>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
          <li><a href="#about">About me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
