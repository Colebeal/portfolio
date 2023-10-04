import ThemeToggle from "../ThemeToggle"
import { HiOutlineHome } from "react-icons/hi"
import { Link } from "react-router-dom"
import { motion as m } from "framer-motion"

export default function Nav({ servicesRef, aboutRef, porfolioRef }) {
  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <m.header
        initial={{ translateY: -25, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
        className="z-10 hidden h-12 w-screen items-center justify-between px-10 text-lg text-teal-900 dark:text-orange-100 md:my-5 md:flex"
      >
        <Link to=".." className="hidden md:block">
          <HiOutlineHome className="animate-fade-in cursor-pointer text-2xl" />
        </Link>
        <ul className="hidden items-center gap-20 md:flex">
          <li className="cursor-pointer">
            <a
              onClick={() => {
                handleScroll(aboutRef.current)
              }}
            >
              About
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              onClick={() => {
                handleScroll(servicesRef.current)
              }}
            >
              Services
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              onClick={() => {
                handleScroll(porfolioRef.current)
              }}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a href="mailto:beal.cole@gmail.com">Email</a>
          </li>
        </ul>
        <div className="fixed bottom-10 right-10 z-20 flex h-fit w-fit flex-col gap-4 rounded-md p-2 md:static md:flex-row">
          <ThemeToggle />
        </div>
      </m.header>
      <div className="fixed bottom-10 right-5 z-20 flex h-fit w-fit gap-4 rounded-md bg-orange-100 p-2 shadow-lg dark:bg-teal-900 md:top-16 md:hidden">
        <ThemeToggle />
        <Link to="..">
          <HiOutlineHome className="animate-fade-in cursor-pointer text-2xl text-teal-900 dark:text-orange-50" />
        </Link>
        {/* {isGallery && <HiMenu onClick={menuHandler} className="z-50 text-2xl cursor-pointer text-teal-900 dark:text-orange-50 animate-fade-in"/>} */}
      </div>
    </>
  )
}
