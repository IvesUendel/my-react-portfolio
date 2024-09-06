import styles from "./About.module.css"
import { getImageUrl } from '../../utils'

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} alt='' className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt='cursor icon' />
            <div className={styles.aboutItemText}>
              <h3>Fontend Developer</h3>
              <p>I am a frontend developer with knowledge in essential tools like HTML, CSS, Javascript, ReactJS, Bootstrap, Tailwind, NextJS etc.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt='server icon'/>
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>As a junior developer and programming student, I have knowledge of backend tools like NodeJS, Java, and C#. With these technologies, I am capable of developing basic APIs, integrating systems, and working on solutions that prioritize performance and security. I am always looking to improve my skills and learn new practices to build efficient and scalable applications.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt='ui icon'/>
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>I am actively studying UI Design to enhance my skills in frontend development. My goal is to refine my ideas and create more intuitive and user-friendly interfaces, combining visual design with a great user experience.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About
