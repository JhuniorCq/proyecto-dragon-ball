import styles from './PlanetCard.module.css'

export const PlanetCard = ({ name, description, image }) => {
  return (
    <div className={styles.boxPlanetCard}>
      <div className={styles.boxImage}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.boxText}>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
