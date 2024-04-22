import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import { motion as m } from "framer-motion"

import { HiOutlineHome } from "react-icons/hi"
import { IoMenu } from "react-icons/io5"
import { IoClose } from "react-icons/io5"

import ThemeToggle from "../ThemeToggle"

export default function Nav({ servicesRef, aboutRef, porfolioRef }) {
  const [isHovering, setIsHovering] = useState(false)
  const [isScroll, setIsScroll] = useState(null)

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    })

    console.log(ref)
  }

  const menuHandler = () => {
    setIsHovering(!isHovering)
  }

  const location = useLocation().pathname

  const devHome = "/dev/home"

  return (
    <>
      <m.header
        initial={{ translateY: -25, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="z-10 hidden h-12 w-screen items-center justify-between px-10 text-base text-teal-900 dark:text-orange-100 lg:my-5 lg:flex"
      >
        <Link
          to={location == devHome ? "../.." : "/dev/home"}
          className="hidden md:block"
        >
          <HiOutlineHome className="animate-fade-in cursor-pointer text-2xl" />
        </Link>
        <ul className="hidden items-center gap-20 md:flex">
          <li className="cursor-pointer transition-colors hover:text-orange-300">
            <Link state={"about"} to={"/dev/home"}>
              About
            </Link>
          </li>
          <li
            onMouseOver={() => setIsHovering(true)}
            onMouseOut={menuHandler}
            className="relative"
          >
            <Link
              state={"portfolio"}
              className="cursor-pointer transition-colors hover:text-orange-300"
              to={"/dev/home"}
            >
              Portfolio
            </Link>

            <ul
              className={`absolute -left-6 top-8 z-10 flex w-fit flex-col gap-5 rounded-md bg-orange-50 p-6 shadow-md transition-opacity dark:bg-teal-950 ${
                isHovering ? "opacity-1" : "opacity-0"
              }`}
            >
              <li>
                <Link
                  className="cursor-pointer whitespace-nowrap transition-colors hover:text-orange-300"
                  to="/dev/bonsai"
                >
                  Bonsai Buddy
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer whitespace-nowrap transition-colors hover:text-orange-300"
                  to="/dev/dorff-designs"
                >
                  Dorff Designs
                </Link>
              </li>
            </ul>
          </li>
          <li className="cursor-pointer transition-colors hover:text-orange-300">
            <Link state={"services"} to={"/dev/home"}>
              Services
            </Link>
          </li>
          <li>
            <a href="mailto:cole@colebeal.com">Email</a>
          </li>
        </ul>
        <div className="fixed bottom-10 right-10 z-20 flex h-fit w-fit flex-col gap-4 rounded-md p-2 md:static md:flex-row">
          <ThemeToggle />
        </div>
      </m.header>

      {/* MOBILE NAVIGATION */}

      <div className="fixed bottom-10 right-5 z-20 flex h-fit w-fit gap-4 rounded-md bg-orange-200 p-2 shadow-2xl dark:bg-teal-800 md:gap-6 lg:hidden">
        <ThemeToggle className="md:text-4xl" />
        <Link state={"home"} to="/dev/home">
          <HiOutlineHome className="animate-fade-in cursor-pointer text-2xl text-teal-900 dark:text-orange-50 md:text-4xl" />
        </Link>
        <div className="relative">
          {isHovering ? (
            <IoClose
              onClick={menuHandler}
              className="animate-fade-in cursor-pointer text-2xl text-teal-900 dark:text-orange-50 md:text-4xl"
            />
          ) : (
            <IoMenu
              onClick={menuHandler}
              className="animate-fade-in cursor-pointer text-2xl text-teal-900 dark:text-orange-50 md:text-4xl"
            />
          )}
          <ul
            className={` absolute -right-2 bottom-14 -z-10 flex flex-col gap-4 rounded-lg bg-orange-200 p-6 px-10 text-right text-4xl shadow-lg dark:bg-teal-800 md:px-16 md:py-12 md:text-6xl ${
              isHovering ? "" : "hidden "
            }`}
          >
            <li>
              <Link
                onClick={menuHandler}
                state={"about"}
                to="/dev/home"
                className="text-teal-900 dark:text-orange-300"
              >
                About
              </Link>
            </li>
            <li className="flex flex-col gap-2 md:gap-6 ">
              <Link
                state={"portfolio"}
                onClick={menuHandler}
                to="/dev/home"
                className="whitespace-nowrap text-teal-900 dark:text-orange-300"
              >
                Portfolio
              </Link>
              <Link
                onClick={menuHandler}
                to="/dev/bonsai"
                className="whitespace-nowrap text-xl text-teal-600 dark:text-orange-200 md:text-3xl"
              >
                Bonsai Buddy
              </Link>
              <Link
                onClick={menuHandler}
                to="/dev/dorff-designs"
                className="whitespace-nowrap text-xl text-teal-600 dark:text-orange-200 md:text-3xl"
              >
                Dorff Designs
              </Link>
            </li>
            <li>
              <Link
                onClick={menuHandler}
                state={"services"}
                to="/dev/home"
                className="text-teal-900 dark:text-orange-300"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
