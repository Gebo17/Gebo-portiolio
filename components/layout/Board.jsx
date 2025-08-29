import { NAVLINKS } from '@/constants'
import React from 'react'
import { AboutMe, Branding, Contacts, Home, Services } from '../../components'


const Board = ({ currentTab, setCurrentTab }) => {
  return (
    <div className="bg-white min-h-[50vh]">
      <div>
        {currentTab === "home" && (
          <Home currentTab={currentTab} setCurrentTab={setCurrentTab} />
        )}
        {currentTab === "about me" && (
          <AboutMe currentTab={currentTab} setCurrentTab={setCurrentTab} />
        )}
        {currentTab === "services" && (
          <Services currentTab={currentTab} setCurrentTab={setCurrentTab} />
        )}
        {currentTab === "contacts" && (
          <Contacts currentTab={currentTab} setCurrentTab={setCurrentTab} />
        )}
      </div>
    </div> 
  );
};

export default Board;