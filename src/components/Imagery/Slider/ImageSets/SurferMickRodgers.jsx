import { motion as m } from "framer-motion"
import { surferMickRodgers } from "../../../../assets/sliderData"

export default function SurferMickRodgers({ currentImage }) {
  return (
    <m.div
      key={0}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0, 1] }}
      exit={{ opacity: [1, 0, 0] }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="z-10 flex h-[424px] w-[90vw] items-center justify-center md:h-[600px] lg:h-[900px] 4xl:h-[1200px]"
    >
      {surferMickRodgers.map((image, index) => {
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
