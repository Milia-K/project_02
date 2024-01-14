import React from 'react'
import './main.scss'
import {Routes, Route } from 'react-router-dom' 
import About from '../../Pages/About/About'
import List from '../../Pages/List/List'
import Game from '../../Pages/Game/Game'
import MyWordsList from '../../Pages/MyWordsList/MyWordsList'


function Main({appData}) {

  return (

    <main className='Main'>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/list" element={<List  appData={appData} />} />       
        <Route path="/game" element={<Game appData={appData}/>} />
        <Route path="/mywords" element={<MyWordsList  />} />
      </Routes>
    </main>
  )
}

export default Main