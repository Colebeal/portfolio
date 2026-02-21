import { AiFillInstagram } from "react-icons/ai"
import { MdMail, MdOutlineComputer } from "react-icons/md"
import { Link } from "react-router-dom"

export default function MenuContents({
  menuHandler,
  menuContentHandler,
  folderDisplayed,
  setFolderDisplayed,
  setSlideIndex,
}) {
  return (
    <>
      <main className="mx-10 h-full animate-fade-in overflow-auto pt-2 text-left">
        <div className="flex flex-col gap-4  ">
          <h2 className="w-[100%] text-2xl">About me</h2>
          <p>
            Over my +10 years as a working photographer, I seek out clients who
            want to create high quality, stylized imagery.
          </p>
          <p>
            I have been fortunate to work with a wide range of clients,
            primarily in professional sports. I have a particular affinity for
            shooting golf, and am always looking for new opportunities to expand
            my portfolio and collaborate with like-minded clients.
          </p>
          <div className="gap-2">
            <h3 className="mb-2 text-2xl">Clients</h3>
            <ul>
              <li>L.A.B. Golf - Staff Photographer</li>
              <li>Red Bull</li>
              <li>SURFER Magazine</li>
              <li>TCSS</li>
              <li>DeadKooks Surfboards</li>
              <li>Bing Surfboards</li>
              <li>Kassia Surf</li>
              <li>Wilderness Collective</li>
            </ul>
            <p className="hidden">
              L.A.B. Golf, Red Bull, SURFER Magazine, TCSS, DeadKook Surfboards,
              Bing Surfboards, Kassia Surf, Wilderness Collective.
            </p>
          </div>
        </div>
        <ul className=" mt-5 flex flex-col gap-3">
          <li>
            <h3 className="text-2xl font-bold">Get In Touch</h3>
          </li>
          <li
            href="mailto:cole@colebeal.com?subject=Let's connect!"
            className="flex gap-2"
          >
            <MdMail className="text-2xl text-teal-900 dark:text-white" />
            <a
              href="mailto:cole@colebeal.com?subject=Let's connect"
              data-gtm-event="cta_click"
              data-gtm-location="menu"
              data-gtm-label="email"
            >
              <span className="cursor-pointer hover:underline">
                cole@colebeal.com
              </span>
            </a>
          </li>
          <li className="flex gap-2">
            <AiFillInstagram className="text-2xl text-teal-900 dark:text-white" />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/colebeal/"
              data-gtm-event="cta_click"
              data-gtm-location="menu"
              data-gtm-label="instagram"
            >
              <span className="cursor-pointer hover:underline">@colebeal</span>
            </a>
          </li>
        </ul>
        {/* <div className="mt-8 aspect-[4/3] bg-[url('/images/hero-image.jpg')] bg-cover bg-center md:fixed md:bottom-32 md:right-0 md:w-[300px]"></div> */}
      </main>
    </>
  )
}
