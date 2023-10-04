import { Link } from "react-router-dom"
import { motion as m, AnimatePresence, easeInOut } from "framer-motion"
import { BsLayoutWtf } from "react-icons/bs"

import { observations, people, structure } from "../../assets/sliderData"

export default function ImageryNav({
  menuStatus,
  slideIndex,
  menuHandler,
  currentFolder,
  galleryHandler,
}) {
  const folderLength = [31, 39, 36]

  return (
    <m.header
      initial={{ opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 2, ease: easeInOut }}
      className="z-20 m-5 flex h-[100px] w-full justify-center md:mt-10"
    >
      <div className="z-50 h-fit w-fit rounded-lg bg-orange-100 py-5 shadow-lg dark:bg-teal-900">
        <h2 className="mb-2">
          {slideIndex + 1} of {folderLength[currentFolder]}
        </h2>
        <Link onClick={menuHandler} className="m-5 mr-2 font-semibold">
          Menu
        </Link>
        <Link onClick={galleryHandler} className="m-5 ml-2 font-semibold">
          Gallery
        </Link>
      </div>
    </m.header>
  )
}
