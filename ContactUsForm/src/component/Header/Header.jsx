import styles from "./Header.module.css"


const Header = () => {

  return (
    <div className={styles.heading}>
      <div className={styles.title}>Get in <span className={styles.touch}>touch</span> </div>
      <div className={styles.description}>Reach out, and let's create a universe of possibilities together!</div>
    </div>
  )
}

export default Header