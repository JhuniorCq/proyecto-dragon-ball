import styles from './Home.module.css'
import planetsImage from '../../assets/image/planets.jpg'
import charactersImage from '../../assets/image/characters.avif'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <section className={styles.boxHome}>
      <div className={styles.boxTitle}>
        <h1>Dragon Ball</h1>
      </div>

      <div className={styles.boxOptions}>
        <Link className={styles.boxOption} to='/planets'>
          <img src={planetsImage} alt='' />
        </Link>
        <Link className={styles.boxOption} to='/characters'>
          <img src={charactersImage} alt='' />
        </Link>
      </div>
    </section>
  )
}
