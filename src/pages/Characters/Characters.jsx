import { useGet } from '../../hooks/useGet'
import { URL_CHARACTERS } from '../../utilities/constants'
import styles from './Characters.module.css'
import { CharacterCard } from './components/CharacterCard.jsx/CharacterCard'

export const Characters = () => {
  const { responseGet, loadingGet, errorGet } = useGet(URL_CHARACTERS)
  const charactersList = responseGet.items

  return (
    <div className={styles.boxCharacters}>
      <div className={styles.boxTitle}>
        <h1>PERSONAJES</h1>
      </div>
      <div className={styles.charactersList}>
        {loadingGet
          ? (
            <div>Cargando :,v</div>
            )
          : errorGet
            ? (
              <div>Error :v</div>
              )
            : (
                charactersList &&
          charactersList.map((character) => (
            <CharacterCard
              key={character.id}
              name={character.name}
              description={character.description}
              image={character.image}
            />
          ))
              )}
      </div>
    </div>
  )
}
