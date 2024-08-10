import { useState } from 'react'
import { useGet } from '../../hooks/useGet'
import { SEARCH_TYPES, URL_CHARACTERS } from '../../utilities/constants'
import './Characters.css'
import { CharacterCard } from './components/CharacterCard.jsx/CharacterCard'
import { ControlButtons } from '../../components/ControlButtons/ControlButtons'
import { Search } from '../../components/Search/Search'

export const Characters = () => {
  const [url, setUrl] = useState(URL_CHARACTERS)
  const { responseGet, loadingGet, errorGet } = useGet(url)

  return (
    <div className='box-characters'>
      <div className='box-characters__box-title'>
        <h1>PERSONAJES</h1>
      </div>

      <Search searchType={SEARCH_TYPES.characters} />

      <ControlButtons back={() => setUrl(responseGet.links.previous)} next={() => setUrl(responseGet.links.next)} />

      <div className='box-characters__list'>
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
