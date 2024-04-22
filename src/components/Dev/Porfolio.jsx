import { Link } from "react-router-dom"
import { AiFillGithub } from "react-icons/ai"

export default function Portfolio({ porfolioRef }) {
  return (
    <div className=" md:my-12 xl:mx-12">
      <h2 className="my-5 text-left text-4xl text-teal-900 dark:text-orange-100 md:my-10 md:text-6xl">
        Portfolio
      </h2>
      <section
        ref={porfolioRef}
        className="flex w-full flex-col items-center justify-start gap-10 lg:flex-row"
      >
        <article className="my-6 mt-0 flex w-full max-w-2xl flex-shrink-0 flex-grow flex-col gap-4 lg:w-1/2 xl:max-w-lg">
          <img
            className="aspect-square max-w-2xl rounded-lg object-cover object-top shadow-lg xl:max-w-lg"
            src="/images/bonsai-care-mobile.png"
            alt=""
          />
          <div className="rounded-lg bg-orange-100 px-4 py-6 text-left text-xl shadow-lg dark:bg-teal-900 dark:text-orange-100">
            <h3 className="text-3xl text-teal-700 dark:text-orange-300">
              Bonsai Buddy
            </h3>
            <p className="my-3">
              A Bonsai Hobbyist's best friend, where you can track all of your
              trees' progress, and get tree specific care tips from an AI
              Assistant.
            </p>
            <div className="mr-4 flex justify-between">
              <Link
                to="/dev/bonsai"
                className="text-orange-400 underline  underline-offset-8 hover:text-orange-300 dark:text-orange-300 dark:hover:text-orange-200"
              >
                View Case Study
              </Link>
              <a
                href="https://github.com/Colebeal/bonsai?tab=readme-ov-file#bonsai-buddy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub className="text-4xl text-orange-400 hover:text-orange-300 dark:text-orange-300 dark:hover:text-orange-200" />
              </a>
            </div>
          </div>
        </article>
        <article className="my-6 flex w-full max-w-2xl flex-shrink flex-grow-0 flex-col gap-4 lg:w-1/2 xl:max-w-lg">
          <img
            className="aspect-square max-w-2xl rounded-lg object-cover object-top shadow-lg xl:max-w-lg"
            src="/images/dorff_gallery_model.webp"
            alt=""
          />
          <div className="rounded-lg bg-orange-100 px-4 py-6 text-left text-xl shadow-lg dark:bg-teal-900 dark:text-orange-100">
            <h3 className="text-3xl text-teal-700 dark:text-orange-300">
              Dorff Designs
            </h3>
            <p className="my-3">
              A creative solution for a multifaceted craftsman. Aaron Dorff can
              do it all, and this website aims to display all the various skills
              he offers
            </p>
            <div className="mr-4 flex justify-between">
              <Link
                to="/dev/dorff-designs"
                className="  text-orange-400 underline  underline-offset-8 hover:text-orange-300 dark:text-orange-300 dark:hover:text-orange-200"
              >
                View Case Study
              </Link>
              <a
                href="https://github.com/Colebeal/aaron-dorff"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub className="text-4xl text-orange-400 hover:text-orange-300 dark:text-orange-300 dark:hover:text-orange-200" />
              </a>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}
