import { AiFillInstagram } from 'react-icons/ai';
import { MdMail, MdOutlineComputer } from 'react-icons/md';

export default function MenuContents({ menuHandler, menuContentHandler, folderDisplayed, setFolderDisplayed, setSlideIndex }) {

  return(
    <>
      <main className="mx-10 pt-5 h-full text-left animate-fade-in overflow-auto">
        <div className="flex flex-col 2xl:flex-row ">
          <h3 className="pb-3 sm:pb-0 w-[100%] font-bold">About me</h3>
          <p>I am a twenty-something, now photography hobbyist, that primarily looks to compose timeless images inspired by shadows and natural light. Traditionally trained as an analogue photographer, I use this methodology of shooting in my digital workflow. With a heavy emphasis on color, tone, and feeling of an image.</p>
        </div>
        <div className="fixed right-0 bottom-32 w-[300px] h-[200px] bg-center bg-cover bg-[url('/images/people/Portfolio-116.jpg')]"></div>
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
            <a href="/development">
              <span className='hover:underline cursor-pointer'>Web Development </span>
            </a>
          </li>
        </ul>
      </main>
    </>
  )
}