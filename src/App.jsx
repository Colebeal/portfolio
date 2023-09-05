import './App.css'
import Greet from './components/Greet'
import Dev from './components/Dev'
import Imagery from './components/Imagery/Imagery'

import { useState } from 'react'

function App() {
  const [greeted, setGreeted] = useState(false)
  const [path, setPath] = useState(null)
  
  const returnHomeHandler = () => {
    setGreeted(false);
  }

  const openDev = () => {
    setGreeted(true);
    setPath(true)
    document.getElementById('greet').classList.toggle('animate-fade-out')
  }

  const openImagery = () => {
    setGreeted(true);
    setPath(false);
  }


  // Conditionally Rendering the APP

  if (!greeted) {
    return (
      <>
        <Greet dev={openDev} imagery={openImagery} />
      </>
    )
  } else if (path) {
    return (
      <>
        <Dev returnHomeHandler={returnHomeHandler} />
      </>
    )
  } else if (!path) {
    return (
      <>
        <Imagery returnHomeHandler={returnHomeHandler} />
      </>
    )
  }
}

export default App
