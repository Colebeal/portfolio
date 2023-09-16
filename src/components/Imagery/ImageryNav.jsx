import { Link } from "react-router-dom"
import {BsLayoutWtf} from 'react-icons/bs'

import {observations, people, structure} from "../../assets/sliderData"

export default function ImageryNav({menuStatus, slideIndex, menuHandler, currentFolder, galleryHandler}) {
  const folderLength = [31, 39, 36]
  const navStyles = {
    show: 'z-20 fixed flex justify-center bottom-3 inset-x-0 w-full h-[100px] animate-rise-up',
    hide: 'z-20 hidden flex justify-center fixed bottom-5 inset-x-0 w-full h-[100px]'
  }


  return (
    <header className={!menuStatus ? navStyles.show : navStyles.hide}>
      <div className="z-20 bg-orange-100 dark:bg-teal-900 w-fit h-fit py-4 rounded-lg shadow-lg">
        <h2 className="mb-2">{slideIndex + 1} of {folderLength[currentFolder]}</h2> 
        <Link onClick={menuHandler} className="m-5 mr-2 font-semibold">Menu</Link>
        <Link onClick={galleryHandler} className="m-5 ml-2 font-semibold">Gallery</Link>
      </div>
    </header>
  )
}