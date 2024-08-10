import { Link } from 'react-router-dom'
import './Home.css'
import planetsImage from '../../assets/image/planets.jpg'
import charactersImage from '../../assets/image/characters.avif'
import { Search } from '../../components/Search/Search'

export const Home = () => {
  return (
    <section className='home'>
      <div className='home__background'>
        <div className='home__box-title'>
          <h1 className='home__title'>DRAGON <span className='home__title--red'>BALL</span></h1>
        </div>

        <Search isHome />

        <div className='home__box-options'>
          <Link className='home__box-option' to='/planets'>
            <img src={planetsImage} alt='' />
            <h3 className='home__name-option'>Planetas</h3>
          </Link>
          <Link className='home__box-option' to='/characters'>
            <img src={charactersImage} alt='' />
            <h3 className='home__name-option'>Personajes</h3>
          </Link>
        </div>
      </div>
    </section>
  )
}
