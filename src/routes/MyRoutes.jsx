import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Planets } from '../pages/Planets/Planets'
import { Characters } from '../pages/Characters/Characters'
import { CharacterDetails } from '../pages/Characters/components/CharacterDetails/CharacterDetails'

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/planets' element={<Planets />} />
      <Route path='/characters' element={<Characters />} />
      <Route path='/characters/:id' element={<CharacterDetails />} />
    </Routes>
  )
}
