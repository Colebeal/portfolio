import { motion as m } from "framer-motion"
import { labOZ1i } from "../../../assets/sliderData"

export default function LabOZ1i({ currentImage }) {
  return (
    <m.div
      key={0}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0, 1] }}
      exit={{ opacity: [1, 0, 0] }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="z-10 w-[90vw] lg:max-h-[900px]"
    >
      {labOZ1i.map((image, index) => {
        return (
          <img
            id={image.id}
            key={index}
            width="1600px"
            className={currentImage === index ? image.className : image.hidden}
            src={image.src}
          />
        )
      })}
    </m.div>
  )
}
