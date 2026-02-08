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
            With +10 years of experience as a working photographer, I seek out
            clients who want create high quality, stylized imagery that will
            drive business objectives.
          </p>
        </div>
        <ul className="mt-5 flex flex-col gap-3 2xl:flex-row">
          <li>
            <h3 className="text-lg font-bold">Get In Touch</h3>
          </li>
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
        </ul>
        <div className=" mt-8 aspect-[4/3] bg-[url('/images/hero-image.jpg')] bg-cover bg-center md:fixed md:bottom-32 md:right-0 md:w-[300px]"></div>
      </main>
    </>
  )
}
