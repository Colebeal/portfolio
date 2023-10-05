import { AiFillInstagram } from "react-icons/ai"
import { MdMail, MdOutlineComputer } from "react-icons/md"
import { Link } from "react-router-dom"

export default function MenuContents({
  menuHandler,
  menuContentHandler,
  folderDisplayed,
  setFolderDisplayed,
  setSlideIndex,
}) {
  return (
    <>
      <main className="mx-10 h-full animate-fade-in overflow-auto pt-5 text-left">
        <div className="flex flex-col 2xl:flex-row ">
          <h2 className="mb-3 w-[100%] pb-3 text-xl sm:pb-0">About me</h2>
          <p>
            I am a twenty-something, now photography hobbyist, inspired
            primarily by shadows and natural light. Traditionally trained as an
            analogue photographer, I use this methodology of slow selective
            shooting in my digital workflow.
          </p>
        </div>
        <ul className="mt-5 flex flex-col gap-3 2xl:flex-row">
          <li className="flex gap-2">
            <AiFillInstagram className="text-2xl text-teal-900 dark:text-white" />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/colebeal/"
            >
              <span className="cursor-pointer hover:underline">@colebeal</span>
            </a>
          </li>
          <li
            href="mailto:cole@colebeal.com?subject=Let's connect!"
            className="flex gap-2"
          >
            <MdMail className="text-2xl text-teal-900 dark:text-white" />
            <a href="mailto:cole@colebeal.com?subject=Let's connect!">
              <span className="cursor-pointer hover:underline">
                cole@colebeal.com
              </span>
            </a>
          </li>
          <li className="flex gap-2">
            <MdOutlineComputer className="text-2xl text-teal-900 dark:text-white" />
            <Link to="../dev">
              <span className="cursor-pointer hover:underline">
                Web Development{" "}
              </span>
            </Link>
          </li>
        </ul>
        <div className="mt-8 h-[200px] bg-[url('/images/people/Portfolio-116.jpg')] bg-cover bg-center md:fixed md:bottom-32 md:right-0 md:w-[300px]"></div>
      </main>
    </>
  )
}
