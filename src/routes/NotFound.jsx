import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai"
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <>
      <a
        href="/"
        className="flex max-w-full animate-rise-up cursor-pointer items-center gap-6 font-dm-sans transition-opacity"
      >
        <div>
          <h1 className="m-5 mb-3 text-[10rem]">Lost?</h1>
        </div>
        <div className="items-baseline text-left">
          <h2 className="text-2xl">Lets get you where you wanted to go.</h2>
          <ul className="m-7 ml-0 flex items-center gap-4">
            <li>
              <a
                href="https://github.com/Colebeal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub className="text-4xl hover:text-teal-900" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/colebeal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin className="text-4xl hover:text-teal-900" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/colebeal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram className="text-4xl hover:text-teal-900" />
              </a>
            </li>
            <li className="rounded-lg border-2 border-teal-900 p-2 hover:border-teal-700 hover:bg-orange-50">
              <a href="/dev" rel="noopener noreferrer">
                Web Development
              </a>
            </li>
            <li className="rounded-lg border-2 border-teal-900 p-2 hover:border-teal-700 hover:bg-orange-50">
              <a href="/imagery" rel="noopener noreferrer">
                Imagery
              </a>
            </li>
          </ul>
          <Link
            to="/"
            className="m-5 ml-0 w-fit border-b-2 border-b-transparent hover:border-b-black dark:hover:border-b-white"
          >
            or Click me to return to home
          </Link>
        </div>
      </a>
    </>
  )
}
