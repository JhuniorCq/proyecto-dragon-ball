import { useNavigate, useParams } from 'react-router-dom'
import './CharacterDetails.css'
import { useGet } from '../../../../hooks/useGet'
import { URL_CHARACTERS } from '../../../../utilities/constants'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'

export const CharacterDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const { responseGet: characterData, loadingGet, errorGet } = useGet(
    `${URL_CHARACTERS}/${id}`
  )

  // Personaje 36 NO EXISTE, hacer un Navigate para mandarlo al anterior o al que sigue
  // TODO: Validar que cuando estemos en el personsaje 1, NO se pueda retroceder
  // TODO: Validar que cuando estemos en el último personaje, NO se pueda avanzar

  const showPreviousCharacter = () => {
    if (Number(id) === 1) return
    navigate(`/characters/${Number(id) - 1}`)
  }

  const showNextCharacter = () => {
    navigate(`/characters/${Number(id) + 1}`)
  }

  return (
    loadingGet
      ? (
        <div>Cargando :,v</div>
        )
      : errorGet
        ? (
          <div className='error-character'>
            <GrFormPrevious className='error-character__control-button error-character__control-button--previous' onClick={showPreviousCharacter} />
            <p>No se encontró al personaje.</p>
            <GrFormNext className='error-character__control-button error-character__control-button--next' onClick={showNextCharacter} />
          </div>
          )
        : (
          <div className='character-details'>
            <div className='character-details__box-image'>
              <GrFormPrevious className='character-details__control-button character-details__control-button--previous' onClick={showPreviousCharacter} />
              <img className='character-details__image' src={characterData.image} alt={characterData.name} />
              <GrFormNext className='character-details__control-button character-details__control-button--next' onClick={showNextCharacter} />
            </div>
            <div className='character-details__details'>
              <h1>{characterData.name} {id}</h1>
              <p>{characterData.description}</p>

              <h2>Planeta de Origen</h2>
              <p>{characterData.originPlanet.name}</p>

              <h2>Transformaciones</h2>
            </div>
          </div>
          )
  )
}
