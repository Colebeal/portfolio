import { Link } from "react-router-dom"

import '../App.css'
import ThemeToggle from "../components/ThemeToggle"

export default function App() {
  // document.body.style.overflow = 'hidden'
  // localStorage.getItem('theme') || localStorage.setItem('theme', 'dark') 

  return (
    <>
      <div id='greet' className="absolute h-full w-full max-w-[1280px] m-auto flex flex-col justify-center items-center animate-rise-up text-teal-900 ">
        <h2 className="dark:text-orange-100 text-6xl">Hi, I'm Cole.</h2>
        <div id="selfie" className="bg-orange-300 w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full m-5 bg-center bg-cover bg-[url('/images/people/Portfolio-116.jpg')]"></div>
        <div className="m-5">
          <Link to='/dev' className="p-3 m-2 sm:m-5 rounded-lg bg-orange-100 shadow-lg dark:bg-teal-900 dark:text-white">
            Development
          </Link>
          <Link to='/imagery' className="p-3 m-2 rounded-lg bg-orange-100 shadow-lg dark:bg-teal-900 dark:text-white">
            Imagery
          </Link>
        </div>
      </div>
      <div className="hidden">
        <ThemeToggle/> 
      </div>
    </>
)
}