import './PlanetCard.css'

export const PlanetCard = ({ name, description, image }) => {
  return (
    <div className='planet-card'>
      <div className='planet-card__box-image'>
        <img src={image} alt={name} />
      </div>
      <div className='planet-card__box-text'>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
