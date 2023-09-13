import './App.css'
import Greet from './components/Greet'
import Dev from './components/Dev'
import Imagery from './components/Imagery/Imagery'
import { BiSun, BiMoon } from 'react-icons/bi'
import { useState,useEffect } from 'react'

function App() {
  const [greeted, setGreeted] = useState(false)
  const [path, setPath] = useState(null)
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log(theme)
  };

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
        {theme==='light' ? <BiSun onClick={handleThemeSwitch} className="absolute top-5 right-3 m-5 z-50 text-2xl cursor-pointer text-teal-900 dark:text-orange-50 animate-fade-in"/>: <BiMoon onClick={handleThemeSwitch} className="absolute top-5 right-3 m-5 z-50 text-2xl cursor-pointer text-teal-900 dark:text-orange-50 animate-fade-in"/>}
        <Greet dev={openDev} imagery={openImagery} />
      </>
    )
  } else if (path) {
    return (
      <>
        {theme==='light' ? <BiSun onClick={handleThemeSwitch} className="absolute top-5 right-3 m-5 z-50 text-2xl cursor-pointer text-teal-900 dark:text-orange-50 animate-fade-in"/>: <BiMoon onClick={handleThemeSwitch} className="absolute top-5 right-3 m-5 z-50 text-2xl cursor-pointer text-teal-900 dark:text-orange-50 animate-fade-in"/>}
        <Dev returnHomeHandler={returnHomeHandler} />
      </>
    )
  } else if (!path) {
    return (
      <>
        {theme==='light' ? <BiSun onClick={handleThemeSwitch} className="absolute top-5 right-3 m-5 z-50 text-2xl cursor-pointer text-teal-900 dark:text-orange-50 animate-fade-in"/>: <BiMoon onClick={handleThemeSwitch} className="absolute top-5 right-3 m-5 z-50 text-2xl cursor-pointer text-teal-900 dark:text-orange-50 animate-fade-in"/>}
        <Imagery returnHomeHandler={returnHomeHandler}/>
      </>
    )
  }
}

export default App
