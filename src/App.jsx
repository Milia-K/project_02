import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import './style/App.scss'

function App() {


  return (
    <Router>
      <div className='container'>
        <Header />
        <Main/>
        <Footer />
      </div>
    </Router>
  )
}

export default App
