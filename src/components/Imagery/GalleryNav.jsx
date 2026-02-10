import { Link } from "react-router-dom"
import { motion as m, AnimatePresence, easeInOut } from "framer-motion"
import ThemeToggle from "../ThemeToggle"

export default function GalleryNav({
  menuStatus,
  slideIndex,
  menuHandler,
  currentFolder,
  galleryHandler,
}) {
  return (
    <m.header
      initial={{ opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1.5, ease: easeInOut }}
      className="fixed bottom-8 left-0 z-10 my-1 mb-4 flex h-10 w-full items-center justify-center md:mt-10 lg:mb-0 xl:my-5"
    >
      <div className="z-50 flex h-fit w-fit items-center justify-center gap-4 rounded-lg border-[1px] border-black bg-white p-2 px-4 shadow-lg dark:border-white dark:bg-[#000] md:w-[20%]">
        <ThemeToggle />
        <div className="h-full w-[1px] bg-gray-700"></div>
        <Link onClick={menuHandler} className="m-2 text-sm font-semibold">
          Menu
        </Link>
      </div>
    </m.header>
  )
}
