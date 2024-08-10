import './Planets.css'
import { SEARCH_TYPES, URL_PLANETS } from '../../utilities/constants'
import { useGet } from '../../hooks/useGet'
import { PlanetCard } from './components/PlanetCard/PlanetCard'
import { Search } from '../../components/Search/Search'
import { useState } from 'react'
import { ControlButtons } from '../../components/ControlButtons/ControlButtons'

export const Planets = () => {
  const [url, setUrl] = useState(URL_PLANETS)
  const { responseGet, loadingGet, errorGet } = useGet(url)

  return (
    <div className='box-planets'>
      <div className='box-planets__box-title'>
        <h1>PLANETAS</h1>
      </div>

      <Search searchType={SEARCH_TYPES.planets} />

      <ControlButtons back={() => setUrl(responseGet.links.previous)} next={() => setUrl(responseGet.links.next)} />

      <div className='box-planets__list'>
        {loadingGet
          ? (
            <div>Cargando :,v</div>
            )
          : errorGet
            ? (
              <div>Error :,v</div>
              )
            : (
                responseGet.items &&
              responseGet.items.map((planet) => (
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
