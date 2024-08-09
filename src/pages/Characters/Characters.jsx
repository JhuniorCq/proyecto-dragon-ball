import { useState } from 'react'
import { useGet } from '../../hooks/useGet'
import { URL_CHARACTERS } from '../../utilities/constants'
import styles from './Characters.module.css'
import { CharacterCard } from './components/CharacterCard.jsx/CharacterCard'

export const Characters = () => {
  const [url, setUrl] = useState(URL_CHARACTERS)
  const { responseGet, loadingGet, errorGet } = useGet(url)

  return (
    <div className={styles.boxCharacters}>
      <div className={styles.boxTitle}>
        <h1>PERSONAJES</h1>
      </div>
      <div>
        <button onClick={() => setUrl(responseGet.links.previous)}>
          Antes
        </button>
        <button onClick={() => setUrl(responseGet.links.next)}>
          Siguiente
        </button>
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
                responseGet.items &&
          responseGet.items.map((character) => (
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
