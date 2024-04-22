import { motion as m, AnimatePresence, easeInOut } from "framer-motion"
import { Link } from "react-router-dom"
import { HiOutlineHome, HiMenu } from "react-icons/hi"

import ThemeToggle from "../ThemeToggle"

export default function MiniMenu({ isGallery, menuHandler }) {
  const mobileToggles = {
    slider:
      "basis-1/5 z-40 flex lg:flex-col  w-fit h-fit p-2 rounded-md gap-4 bg-orange-100 dark:bg-teal-900 fixed top-10 right-5 shadow-lg",
    gallery:
      " z-40 flex flex-col w-fit h-fit p-2 rounded-md gap-4 bg-orange-100 dark:bg-teal-900 fixed bottom-10 md:top-10 right-5 shadow-lg",
  }

  return (
    <div className={isGallery ? mobileToggles.gallery : mobileToggles.slider}>
      <ThemeToggle />
      <Link to="..">
        <HiOutlineHome className=" cursor-pointer text-2xl text-teal-900 dark:text-orange-50 md:text-4xl lg:text-2xl" />
      </Link>
      <HiMenu
        onClick={menuHandler}
        className="z-50 cursor-pointer text-2xl text-teal-900 dark:text-orange-50 md:hidden"
      />
    </div>
  )
}
