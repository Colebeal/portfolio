import { Link } from "react-router-dom"
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
    <header className="w-ful inset-x-0 z-20 m-5 h-[100px] animate-rise-up md:mt-10">
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
    </header>
  )
}
