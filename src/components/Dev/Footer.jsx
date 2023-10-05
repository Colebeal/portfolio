import { Link } from "react-router-dom"
import { useState } from "react"
import { motion as m, AnimatePresence } from "framer-motion"
import { SiTailwindcss, SiReact, SiNetlify, SiGithub } from "react-icons/si"

export default function Footer() {
  const [isImprint, setIsImprint] = useState(false)

  return (
    <footer className="relative w-screen">
      <div className="mx-16 my-8 flex flex-col-reverse items-center justify-around border-t-2 border-teal-800 text-teal-900 dark:border-teal-800 dark:text-orange-100 md:my-0 md:flex-row">
        <div className="text-base text-teal-900 dark:text-orange-100">
          <span className="text-xl">© </span>
          <span> 2023</span>
        </div>
        <ul className="h-full items-center justify-center gap-20 p-5 text-base md:flex">
          <li>
            <a
              href="https://github.com/Colebeal"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/colebeal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/colebeal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <Link to="../imagery">Imagery</Link>
          </li>
          <li>
            <a href="mailto:beal.cole@gmail.com">Email</a>
          </li>
        </ul>
        <div
          onMouseOver={() => setIsImprint(true)}
          onMouseOut={() => setIsImprint(false)}
          className="hidden p-5 text-base text-teal-900 dark:text-orange-100 md:block"
        >
          <span className="cursor-pointer">Imprint</span>

          {/* IMPRINT */}

          <AnimatePresence>
            {isImprint && (
              <m.div
                initial={{ translateY: -375, opacity: 0 }}
                animate={{ translateY: -350, opacity: 1 }}
                exit={{ translateY: -375, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute right-10 m-5 whitespace-nowrap rounded-lg p-5 px-10 text-left backdrop-blur-sm backdrop-brightness-150 backdrop-opacity-100"
              >
                <ul className="flex flex-col gap-4 text-base">
                  <li className="flex items-center gap-2">
                    <SiReact className="text-xl text-orange-300" />
                    React for Code
                  </li>
                  <li className="flex items-center gap-2">
                    <SiTailwindcss className="text-xl text-orange-300" />
                    Tailwind for Styles
                  </li>
                  <li className="flex items-center gap-2">
                    <SiNetlify className="text-xl text-orange-300" />
                    Netlify for hosting
                  </li>
                  <li className="flex items-center gap-2">
                    <SiGithub className="text-xl text-orange-300" />
                    Github for versions
                  </li>
                  <li className="flex items-center gap-2">
                    Heading Font: <h2>Acorn</h2>
                  </li>
                  <li>Body Font: GT Planar</li>
                </ul>
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </footer>
  )
}
