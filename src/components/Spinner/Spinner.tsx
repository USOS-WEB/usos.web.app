import styles from './Spinner.module.css'

const Spinner = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.shadow}></div>
        <div className={styles.shadow}></div>
        <div className={styles.shadow}></div>
        <span>Loading</span>
      </div>
    </>
  )
}

export default Spinner
