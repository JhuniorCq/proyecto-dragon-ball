import { useState } from 'react'
import { SEARCH_TYPES } from '../../utilities/constants'
import './Search.css'

export const Search = ({ isHome, searchType = SEARCH_TYPES.characters }) => {
  const [placeholder, setPlaceHolder] = useState(searchType)
  const [inputSearch, setInputSearch] = useState('')

  const changeSearchType = () => {
    const newSearchType = placeholder === SEARCH_TYPES.characters ? SEARCH_TYPES.planets : SEARCH_TYPES.characters
    setPlaceHolder(newSearchType)
  }

  const handleInput = ({ target }) => {
    const { value } = target
    setInputSearch(value)
  }

  const handleSearch = (event) => {
    event.preventDefault()
    // Acá debo enviar al usuario a la ruta en donde se muestra el personaje o planeta de manera individual
    console.log('Enviando:', inputSearch)
  }

  return (
    <form className='search' onSubmit={handleSearch}>
      <input className='search__input' onChange={handleInput} type='text' placeholder={placeholder === SEARCH_TYPES.characters ? 'Busca tu personaje favorito' : 'Busca el planeta que quieras conocer'} />
      <button className='search__button search__button--search'>Buscar</button>
      {
        isHome && <button className='search__button search__button--change' type='button' onClick={changeSearchType}>Cambiar búsqueda</button>
      }
    </form>
  )
}
