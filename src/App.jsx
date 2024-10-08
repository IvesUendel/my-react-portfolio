
import styles from './App.module.css'
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import Knowledge from './components/Knowledge/Knowledge'
import Navbar from './components/NavBar/Navbar'

function App() {
  

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Knowledge />
    </div>
  )
}

export default App
