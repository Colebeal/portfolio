import { motion as m } from "framer-motion"
import { people } from "../../../assets/sliderData"

export default function People({ currentImage }) {
  return (
    <m.div
      key={1}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0, 1] }}
      exit={{ opacity: [1, 0, 0] }}
      transition={{ duration: 2, delay: 0.25 }}
      className="z-10"
    >
      {people.map((image, index) => {
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
