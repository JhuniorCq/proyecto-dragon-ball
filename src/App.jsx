import styles from './App.module.css'
import { MyRoutes } from './routes/MyRoutes'

function App () {
  return (
    <div className={styles.boxApp}>
      <MyRoutes />
    </div>
  )
}

export default App
