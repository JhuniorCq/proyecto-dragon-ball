import styles from './CharacterCard.module.css'
export const CharacterCard = ({ name, description, image }) => {
  return (
    <div className={styles.boxCharacterCard}>
      <div className={styles.boxImage}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.boxText}>
        <h2>{name}</h2>
        {/* <p>{description}</p> */}
      </div>
    </div>
  )
}
