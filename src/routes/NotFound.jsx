import {AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function NotFound() { 

  return (
    <>
      <a href='/' className="cursor-pointer font-dm-sans max-w-full transition-opacity animate-rise-up flex items-center gap-6">
        <div>
          <h1 className="m-5 mb-3 text-[10rem]">Lost?</h1>
        </div>
        <div className='text-left items-baseline'>
          <h2 className='text-2xl'>Lets get you where you wanted to go.</h2>
          <ul className='flex items-center gap-4 m-7 ml-0'>
            <li>
              <a href="https://github.com/Colebeal" target="_blank" rel="noopener noreferrer" ><AiFillGithub className='text-4xl hover:text-teal-900'/></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/colebeal/" target="_blank" rel="noopener noreferrer" ><AiFillLinkedin className='text-4xl hover:text-teal-900'/></a>
            </li>
            <li>
              <a href="https://www.instagram.com/colebeal/" target="_blank" rel="noopener noreferrer" ><AiFillInstagram className='text-4xl hover:text-teal-900'/></a>
            </li>
            <li className='border-2 border-teal-900 p-2 rounded-lg hover:bg-orange-50 hover:border-teal-700'>
              <a href="/dev" rel="noopener noreferrer" >Web Development</a>
            </li>
            <li className='border-2 border-teal-900 p-2 rounded-lg hover:bg-orange-50 hover:border-teal-700'>
              <a href="/imagery" rel="noopener noreferrer">Imagery</a>
            </li>
          </ul>
          <Link to="/" className="m-5 ml-0 border-b-2 border-b-transparent hover:border-b-black dark:hover:border-b-white w-fit">or Click me to return to home</Link>
        </div>
      </a>
    </>
  )
}