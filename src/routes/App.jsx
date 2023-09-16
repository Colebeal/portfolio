import '../App.css'
import { Routes, Route } from 'react-router-dom'


import Greet from '../components/Greet'
import Imagery from './Imagery'
import Dev from './Dev'

  function App() {

  return(
    <>   
      <Routes>
        <Route path="/" element={<Greet />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/imagery" element={<Imagery />} />
        <Route path="*" element={<Greet />} />
      </Routes>
    </>
  )
}


export default App
