import styles from './Planets.module.css'
import { URL_PLANETS } from '../../utilities/constants'
import { useGet } from '../../hooks/useGet'
import { PlanetCard } from './components/PlanetCard/PlanetCard'

export const Planets = () => {
  const { responseGet, loadingGet, errorGet } = useGet(URL_PLANETS)
  const planetsList = responseGet.items

  return (
    <div className={styles.boxPlanets}>
      <div className={styles.boxTitle}>
        <h1>PLANETAS</h1>
      </div>
      <div className={styles.planetsList}>
        {loadingGet
          ? (
            <div>Cargando :,v</div>
            )
          : errorGet
            ? (
              <div>Error :,v</div>
              )
            : (
                planetsList &&
        planetsList.map((planet) => (
          <PlanetCard
            key={planet.id}
            name={planet.name}
            description={planet.description}
            image={planet.image}
          />
        ))
              )}
      </div>
    </div>
  )
}
