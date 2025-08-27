import { NAVLINKS } from '@/constants'
import React from 'react'
import { AboutMe, Contacts, Home, Services } from '../../components'



const Board = ({currentTab, setCurrentTab}) => {
  console.log(currentTab)
  return (
    <div className='bg-white min-h-[50vh]'>
      <div>
        {currentTab == 'home' && <Home  currentTab = {currentTab} setCurrentTab={setCurrentTab} />}
        {currentTab == 'about me' && <AboutMe/>}
        {currentTab == 'services' && <Services/>}
        {currentTab == 'contacts' && <Contacts/>}
      </div>
    </div>
  )
}

export default Board
