import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import './ControlButtons.css'

export const ControlButtons = ({ back, next }) => {
  return (
    <div className='box-controls'>
      <GrFormPrevious className='box-control__button' onClick={back} />
      <GrFormNext className='box-control__button' onClick={next} />
    </div>
  )
}
