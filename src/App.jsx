import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import './style/App.scss'
import data from './data.json'
import { useState, useEffect } from 'react'

function App() {

  const [appData, setAppData]= useState(data);

  return (
    <Router>
      <div className='container'>
        <Header />
        <Main appData={appData} setAppData={setAppData} />
        <Footer />
      </div>
    </Router>
  )
}

export default App
