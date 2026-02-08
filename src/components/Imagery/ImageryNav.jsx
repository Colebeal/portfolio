import { Link } from "react-router-dom"
import { motion as m, AnimatePresence, easeInOut } from "framer-motion"

import {
  scottieAmex,
  labDF3,
  labOZ1i,
  people,
  structure,
  observations,
} from "../../assets/sliderData"

export default function ImageryNav({
  menuStatus,
  slideIndex,
  menuHandler,
  currentFolder,
  galleryHandler,
}) {
  const folderLength = [
    scottieAmex.length,
    labDF3.length,
    labOZ1i.length,
    people.length,
    structure.length,
    observations.length,
  ]

  return (
    <m.header
      initial={{ opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1.5, ease: easeInOut }}
      className="z-20 my-1 mb-6 flex h-10 w-full justify-center md:mt-10 lg:mb-0 xl:m-5"
    >
      <div className="z-50 flex h-fit w-fit rounded-lg border-[1px] border-black bg-white p-2 shadow-lg dark:bg-[#333333]">
        <Link onClick={menuHandler} className="m-2 font-semibold">
          Menu
        </Link>
        <h2 className="text-md m-2 w-[100px]">
          {slideIndex + 1} of {folderLength[currentFolder]}
        </h2>

        <Link onClick={galleryHandler} className="m-2 font-semibold">
          Gallery
        </Link>
      </div>
    </m.header>
  )
}

// Old ImageryNav.jsx style

// return (
//     <m.header
//       initial={{ opacity: 0 }}
//       animate={{ translateY: 0, opacity: 1 }}
//       transition={{ duration: 1, delay: 2, ease: easeInOut }}
//       className="z-20 m-5 flex h-[100px] w-full justify-center md:mt-10"
//     >
//       <div className="z-50 h-fit w-fit rounded-lg bg-orange-100 py-5 shadow-lg dark:bg-teal-900">
//         <h2 className="mb-2">
//           {slideIndex + 1} of {folderLength[currentFolder]}
//         </h2>
//         <Link onClick={menuHandler} className="m-5 mr-2 font-semibold">
//           Menu
//         </Link>
//         <Link onClick={galleryHandler} className="m-5 ml-2 font-semibold">
//           Gallery
//         </Link>
//       </div>
//     </m.header>
//   )
// }
