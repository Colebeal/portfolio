import {observations, people, structure} from "../../assets/sliderData"
import {BsLayoutWtf} from 'react-icons/bs'

export default function ImageryNav({menuStatus, slideIndex, menuHandler, currentFolder, galleryHandler}) {
  const folderLength = [31, 39, 36]
  const navStyles = {
    show: 'z-20 fixed bottom-0 inset-x-0 w-full h-[100px] animate-rise-up',
    hide: 'z-20 hidden fixed bottom-0 inset-x-0 w-full h-[100px]'
  }


  return (
    <header className={!menuStatus ? navStyles.show : navStyles.hide}>
      <div className="z-20">
        <h2 className="text-center">{slideIndex + 1} of {folderLength[currentFolder]}</h2> 
        <button onClick={menuHandler} className="bg-transparent rounded-none mt-2 ">menu</button>
        <button onClick={galleryHandler} className="bg-transparent rounded-none mt-2">gallery</button>
      </div>
    </header>
  )
}