import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="w-screen">
      <div className="mx-16 my-8 flex flex-col-reverse items-center justify-around border-t-2 border-teal-800 text-teal-900 dark:border-teal-800 dark:text-orange-100 md:my-0 md:flex-row">
        <div className="text-lg text-teal-900 dark:text-orange-100">
          <span className="text-xl">© </span>
          <span> 2023 • Cole Beal</span>
        </div>
        <ul className="h-full items-center justify-center gap-20 p-5 text-lg md:flex">
          <li>
            <a
              href="https://github.com/Colebeal"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/colebeal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/colebeal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <Link to="../imagery">Imagery</Link>
          </li>
          <li>
            <a href="mailto:beal.cole@gmail.com">Email</a>
          </li>
        </ul>
        <div className="pointer hidden text-lg text-teal-900 dark:text-orange-100 md:block">
          <span>Imprint</span>
        </div>
      </div>
    </footer>
  )
}
