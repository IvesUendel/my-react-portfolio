import styles from "./Knowledge.module.css"

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssLine } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { SiCsharp } from "react-icons/si";

const Knowledge = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Knowledge</h2>
      <div className={styles.content}>
        <FaHtml5 className={styles.icons} title="HTML 5" />
        <FaCss3Alt className={styles.icons} title="CSS 3"/>
        <IoLogoJavascript className={styles.icons} title="Javascript"/>
        <FaReact className={styles.icons} title="ReactJS"/>
        <FaBootstrap className={styles.icons} title="Bootstrap"/>
        <RiTailwindCssLine className={styles.icons} title="TailWind"/>
        <RiNextjsFill className={styles.icons} title="NextJS"/>
        <FaNodeJs className={styles.icons} title="NodeJS"/>
        <FaJava className={styles.icons} title="Java"/>
        <SiCsharp className={styles.icons} title="C Sharp"/>
      </div>
    </section>
  )
}

export default Knowledge
