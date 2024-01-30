import { motion as m } from "framer-motion"
import { Link } from "react-router-dom"

import ThemeToggle from "../components/ThemeToggle"

export default function App() {
  document.body.style.overflow = "hidden"

  const loadAnimation = {
    initialTitle: { translateY: 500, opacity: 0 },
    initial: { opacity: 1 },
    animate: {
      translateY: 0,
      opacity: 1,
      transition: { duration: 0.25, ease: "easeInOut" },
    },
    exit: { opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  }

  return (
    <>
      <m.div
        id="greet"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="absolute m-auto flex h-full w-full flex-col items-center justify-center text-teal-900 "
      >
        <m.h2
          initial={{ translateY: 150, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-6xl dark:text-orange-100"
        >
          Hi, I'm Cole.
        </m.h2>
        <m.div
          initial={{ translateY: 0, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ duration: .8, delay: .75, ease: "easeInOut" }}
        >
          <div
            id="selfie"
            className="m-5 h-[250px] w-[250px] rounded-full bg-orange-300 bg-[url('/images/people/Portfolio-116.jpg')] bg-cover bg-center md:h-[300px] md:w-[300px]"
          ></div>
          <div className="mt-10">
            <Link
              to="/dev"
              className="m-2 rounded-lg bg-orange-100 p-3 shadow-lg dark:bg-teal-900 dark:text-white sm:m-5"
            >
              Web Developer
            </Link>
            <Link
              to="/imagery"
              className="m-2 rounded-lg bg-orange-100 p-3 shadow-lg dark:bg-teal-900 dark:text-white"
            >
              Photographer
            </Link>
          </div>
        </m.div>
      </m.div>
      <div className="hidden">
        <ThemeToggle />
      </div>
    </>
  )
}
