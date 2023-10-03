import { TfiArrowCircleDown } from "react-icons/tfi"
import { IoMdArrowRoundDown } from "react-icons/io"

export default function Hero() {
  return (
    <section className="md:flex md:w-full">
      <div
        id="hero"
        className="relative ml-10 hidden min-h-[700px] grow basis-4/5 rounded-lg md:col-span-5 md:block"
      ></div>
      <div className="m-5 flex basis-1/5 flex-col-reverse items-start justify-center md:my-0 md:flex-row md:items-end">
        <h1 className="text-5xl font-semibold text-teal-700 dark:text-orange-300 md:text-7xl md:[writing-mode:vertical-lr]">
          Developer
        </h1>
        <h1 className="text-7xl font-semibold text-teal-900 dark:text-orange-100 md:text-9xl md:[writing-mode:vertical-lr]">
          Cole Beal
        </h1>
      </div>
      <div className="m-5 mb-2">
        <img
          src="/images/hero-image.jpg"
          alt="Self Portrait at a Picnic"
          className="cover rounded-lg md:hidden"
        />
      </div>
    </section>
  )
}

// md:grid md:grid-cols-6
