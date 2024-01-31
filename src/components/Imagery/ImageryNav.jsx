import { Link } from "react-router-dom"
import { motion as m, AnimatePresence, easeInOut } from "framer-motion"

import { observations, people, structure } from "../../assets/sliderData"

export default function ImageryNav({
  menuStatus,
  slideIndex,
  menuHandler,
  currentFolder,
  galleryHandler,
}) {

  const folderLength = [observations.length, people.length, structure.length]

  return (
    <m.header
      initial={{ opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 2, ease: easeInOut }}
      className="z-20 m-5 flex h-10 w-full justify-center  md:mt-10"
    >
      <div className="flex z-50 h-fit w-fit rounded-lg bg-orange-100 p-2 shadow-lg dark:bg-teal-900">
        <Link onClick={menuHandler} className="m-2 font-semibold">
          Menu
        </Link>
        <h2 className="m-2 text-md w-[100px]">
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
