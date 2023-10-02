import ThemeToggle from '../ThemeToggle'
import { HiOutlineHome } from 'react-icons/hi'
import { Link } from 'react-router-dom'

export default function Nav({servicesRef, aboutRef, porfolioRef}) {

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return(
    <header className="hidden md:my-5 px-10 h-12 w-screen text-lg md:flex justify-between items-center z-10 text-teal-900 dark:text-orange-100">
      <Link to=".." className='hidden md:block'> 
        <HiOutlineHome className="text-2xl cursor-pointer animate-fade-in"/>
      </Link>
      <ul className="hidden md:flex gap-20 items-center">
        <li className='cursor-pointer'>
          <a onClick={()=>{handleScroll(aboutRef.current)}}>
            About
          </a>
        </li>
        <li className='cursor-pointer'  >
          <a onClick={()=>{handleScroll(servicesRef.current)}}>
            Services
          </a>
        </li>
        <li className='cursor-pointer'>
          <a onClick={()=>{handleScroll(porfolioRef.current)}}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="mailto:beal.cole@gmail.com">
            Email
          </a>
        </li>
      </ul>
      <div className='z-20 flex flex-col md:flex-row w-fit h-fit p-2 rounded-md gap-4 fixed md:static bottom-10 right-10'>
        <ThemeToggle />
      </div>
    </header>
  )
}