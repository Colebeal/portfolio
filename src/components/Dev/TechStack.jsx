import { motion as m } from "framer-motion"

export default function TechStack({ aboutRef }) {
  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
      ref={aboutRef}
      id="tech"
      className="my-2 flex overflow-x-hidden text-2xl text-orange-300 md:my-5 md:p-5 md:text-5xl"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="mx-2 md:mx-6">react</span>
        <span className="mx-2 md:mx-6">tailwind</span>
        <span className="mx-2 md:mx-6">ux/ui</span>
        <span className="mx-2 text-teal-700 md:mx-6">technologies:</span>
        <span className="mx-2 md:mx-6">html</span>
        <span className="mx-2 md:mx-6">css</span>
        <span className="mx-2 md:mx-6">javascript</span>
      </div>
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="mx-2 md:mx-6">react</span>
        <span className="mx-2 md:mx-6">tailwind</span>
        <span className="mx-2 md:mx-6">ux/ui</span>
        <span className="mx-2 text-teal-700 md:mx-6">technologies:</span>
        <span className="mx-2 md:mx-6">html</span>
        <span className="mx-2 md:mx-6">css</span>
        <span className="mx-2 md:mx-6">javascript</span>
      </div>
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="mx-2 md:mx-6">react</span>
        <span className="mx-2 md:mx-6">tailwind</span>
        <span className="mx-2 md:mx-6">ux/ui</span>
        <span className="mx-2 text-teal-700 md:mx-6">technologies:</span>
        <span className="mx-2 md:mx-6">html</span>
        <span className="mx-2 md:mx-6">css</span>
        <span className="mx-2 md:mx-6">javascript</span>
      </div>
    </m.section>
  )
}
