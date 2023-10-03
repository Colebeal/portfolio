import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai"

export default function About() {
  return (
    <section
      id="about"
      className="my-10 flex flex-col items-start justify-between text-left text-xl text-teal-900 dark:text-orange-100 md:mx-12 md:mb-24 md:mt-32 md:flex-row md:text-3xl"
    >
      <div className="basis-3/4 md:max-w-7xl">
        <p className="mb-5">
          As a self-taught developer, my mission is to work with like-minded
          individuals to create unique and engaging experiences purposed to
          solve your unique problems. Whether custom or using a CMS of your
          choice, let's explore options to create something that meets your
          needs.
        </p>
        <a
          href="mailto:beal.cole@gmail.com"
          className="font text-orange-300 underline underline-offset-8 hover:text-orange-400 dark:hover:text-orange-200"
        >
          <h3>Lets collaborate</h3>
        </a>
      </div>
      <div className="hidden basis-1/4 flex-col items-end gap-2 md:flex">
        <p className="mb-2 border-b-2 border-orange-100 pb-2 text-lg dark:border-teal-900">
          Wanna stay connected?
        </p>
        <a
          href="https://github.com/Colebeal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="text-4xl hover:text-teal-900" />
        </a>
        <a
          href="https://www.linkedin.com/in/colebeal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className="text-4xl hover:text-teal-900" />
        </a>
        <a
          href="https://www.instagram.com/colebeal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram className="text-4xl hover:text-teal-900" />
        </a>
      </div>
    </section>
  )
}
