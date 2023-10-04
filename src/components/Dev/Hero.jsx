import { TfiArrowCircleDown } from "react-icons/tfi"
import { IoMdArrowRoundDown } from "react-icons/io"
import { animate, motion as m } from "framer-motion"

export default function Hero() {
  let initialName =
    window.innerWidth < 768 ? { opacity: 0 } : { translateY: -100, opacity: 0 }
  let initialTitle =
    window.innerWidth < 768 ? { opacity: 0 } : { translateY: 100, opacity: 0 }
  let animate =
    window.innerWidth < 768 ? { opacity: 1 } : { translateY: 0, opacity: 1 }

  return (
    <section className="md:flex md:w-full">
      <m.div
        id="hero"
        initial={{ translateY: 25, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
        className="relative ml-10 hidden min-h-[700px] grow basis-4/5 rounded-lg md:col-span-5 md:block"
      ></m.div>
      <div className="m-5 flex basis-1/5 flex-col-reverse items-start justify-center md:my-0 md:flex-row md:items-end">
        <m.h1
          initial={initialTitle}
          animate={animate}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-5xl font-semibold text-teal-700 dark:text-orange-300 md:text-7xl md:[writing-mode:vertical-lr]"
        >
          Developer
        </m.h1>
        <m.h1
          initial={initialName}
          animate={animate}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-7xl font-semibold text-teal-900 dark:text-orange-100 md:text-9xl md:[writing-mode:vertical-lr]"
        >
          Cole Beal
        </m.h1>
      </div>
      <m.div
        initial={{ translateY: 25, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.25, ease: "easeInOut" }}
        className="m-5 mb-2"
      >
        <img
          src="/images/hero-image.jpg"
          alt="Self Portrait at a Picnic"
          className="cover rounded-lg md:hidden"
        />
      </m.div>
    </section>
  )
}

// md:grid md:grid-cols-6
