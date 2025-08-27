import { NAVLINKS } from '@/constants'
import React from 'react'
import { AboutMe, Contacts, Home, Services } from '../../components'



const Board = ({currentIndex}) => {
  return (
    <div className='mt-4 bg-primary-green min-h-[50vh] text-white'>
      <div>
        {currentIndex == 0 && <Home/>}
        {currentIndex == 1 && <AboutMe/>}
        {currentIndex == 2 && <Services/>}
        {currentIndex == 3 && <Contacts/>}
      </div>
    </div>
  )
}

export default Board
