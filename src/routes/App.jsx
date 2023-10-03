import { Link } from "react-router-dom"

import ThemeToggle from "../components/ThemeToggle"

export default function App() {
  document.body.style.overflow = "hidden"

  return (
    <>
      <div
        id="greet"
        className="absolute m-auto flex h-full w-full animate-rise-up flex-col items-center justify-center text-teal-900 "
      >
        <h2 className="text-6xl dark:text-orange-100">Hi, I'm Cole.</h2>
        <div
          id="selfie"
          className="m-5 h-[250px] w-[250px] rounded-full bg-orange-300 bg-[url('/images/people/Portfolio-116.jpg')] bg-cover bg-center md:h-[300px] md:w-[300px]"
        ></div>
        <div className="m-5">
          <Link
            to="/dev"
            className="m-2 rounded-lg bg-orange-100 p-3 shadow-lg dark:bg-teal-900 dark:text-white sm:m-5"
          >
            Development
          </Link>
          <Link
            to="/imagery"
            className="m-2 rounded-lg bg-orange-100 p-3 shadow-lg dark:bg-teal-900 dark:text-white"
          >
            Imagery
          </Link>
        </div>
      </div>
      <div className="hidden">
        <ThemeToggle />
      </div>
    </>
  )
}
