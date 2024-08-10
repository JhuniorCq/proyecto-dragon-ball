import { Link } from 'react-router-dom'
import './CharacterCard.css'
export const CharacterCard = ({ id, name, image }) => {
  return (
    <Link className='character-card' to={`/characters/${id}`}>
      <div className='character-card__box-image'>
        <img src={image} alt={name} />
      </div>
      <div className='character-card__box-name'>
        <h2>{name}</h2>
      </div>
    </Link>
  )
}
