import { AiFillInstagram } from 'react-icons/ai';
import { MdMail, MdOutlineComputer } from 'react-icons/md';

export default function MenuContents({ menuHandler, menuContentHandler, folderDisplayed, setFolderDisplayed, setSlideIndex }) {

  return(
    <>
      <main className="mx-10 pt-5 h-full text-left animate-fade-in overflow-auto">
        <div className="flex flex-col 2xl:flex-row ">
          <h3 className="pb-3 sm:pb-0 w-[100%] text-lg mb-3">About me</h3>
          <p>I am a twenty-something, now photography hobbyist, inspired primarily by shadows and natural light. Traditionally trained as an analogue photographer, I use this methodology of slow selective shooting in my digital workflow.</p>
        </div>
        <ul className="flex flex-col 2xl:flex-row mt-5 gap-3">
          <li className='flex gap-2'>
            <AiFillInstagram className='text-2xl text-teal-900 dark:text-white'/>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/colebeal/">
              <span className='hover:underline cursor-pointer'>@colebeal</span>
            </a>
          </li>
          <li href="mailto:cole@colebeal.com?subject=Let's connect!" className='flex gap-2'>
            <MdMail className='text-2xl text-teal-900 dark:text-white' />
            <a href="mailto:cole@colebeal.com?subject=Let's connect!">
              <span className='hover:underline cursor-pointer'>cole@colebeal.com</span>
            </a>
          </li>
          <li className='flex gap-2'>
            <MdOutlineComputer className='text-2xl text-teal-900 dark:text-white' />
            <a href="/dev">
              <span className='hover:underline cursor-pointer'>Web Development </span>
            </a>
          </li>
        </ul>
        <div className="mt-8 md:fixed md:right-0 md:bottom-32 md:w-[300px] h-[200px] bg-center bg-cover bg-[url('/images/people/Portfolio-116.jpg')]"></div>
      </main>
    </>
  )
}