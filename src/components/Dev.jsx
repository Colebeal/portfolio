import {AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'

export default function Dev({ returnHomeHandler }) { 

  return (
    <div onClick={returnHomeHandler} className="cursor-pointer font-dm-sans max-w-full transition-opacity animate-rise-up flex flex-col items-center">
      <h1 className="m-5 mb-1">This section is currently under construction.</h1>
      <h2 className='text-2xl'>Feel free to check out some of my finished work.</h2>
      <ul className='flex justify-center items-center gap-4 m-5'>
        <li>
          <a href="https://github.com/Colebeal" target="_blank" rel="noopener noreferrer" ><AiFillGithub className='text-7xl hover:text-teal-900'/></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/colebeal/" target="_blank" rel="noopener noreferrer" ><AiFillLinkedin className='text-5xl hover:text-teal-900'/></a>
        </li>
        <li>
          <a href="https://www.instagram.com/colebeal/" target="_blank" rel="noopener noreferrer" ><AiFillInstagram className='text-4xl hover:text-teal-900'/></a>
        </li>
      </ul>
      <span className="m-5 border-b-2 border-b-transparent hover:border-b-black w-fit">or Click me to return to home</span>
    </div>
  )
}