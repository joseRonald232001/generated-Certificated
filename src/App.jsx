import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AllUsers from './components/AllUsers'
import Register from './components/Register'
import Certificados from './components/Certificados'

function App() {

  return (

    <HashRouter>
    <>
    <Routes>
      <Route path='/users' element={<AllUsers/>} />
      <Route path='/' element={<Register/>} />
      <Route path='/certificados' element={<Certificados/>} />
    </Routes>
    </>
    </HashRouter>
  )
}

export default App
