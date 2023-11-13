import react from 'react'
import styles from '../styles/Main.module.css'


const Main = () => {
    return (
        <div className={styles.mainContainer}>
        
          <div className={styles.headerContainer}>
            <div className={styles.titleText}>My Todos test</div>
          </div>

          <div className={styles.contentContainer}>
            <div className={styles.todoListContainer}>
              
            </div>
          </div>
      </div>    
    );
  }
  
  export default Main;