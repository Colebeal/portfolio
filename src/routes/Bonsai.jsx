import { motion as m } from "framer-motion"
import { useRef, useLayoutEffect } from "react"
import Nav from "../components/Dev/Nav"
import { Link } from "react-router-dom"

const Bonsai = () => {
  const navRef = useRef(null)
  const errorRef = useRef(null)
  const asyncRef = useRef(null)
  const dbRef = useRef(null)
  const authRef = useRef(null)
  const apiRef = useRef(null)
  const tsRef = useRef(null)

  const lazyAnimation = {
    initial: { translateY: 50, opacity: 0 },
    animate: {
      translateY: 0,
      opacity: 1,
      transition: { duration: 1, delay: 0.25, ease: "easeInOut" },
    },
  }

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <>
      <Nav />
      <section className="m-5 md:m-20 md:mt-12">
        <div className="flex flex-col items-center justify-center gap-10 text-left text-xl text-teal-700 md:mx-12  md:text-3xl xl:flex-row ">
          <m.img
            variants={lazyAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            src="/images/bonsai-care-mobile.png"
            alt="Landing Page for Clients website"
            className="contain rounded-lg xl:mx-10 "
          />

          <m.div
            variants={lazyAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col flex-wrap gap-6 text-xl md:basis-1/2 lg:my-10 lg:flex-nowrap "
          >
            <h2 className="text-6xl dark:text-orange-300 xl:text-7xl">
              Where bonsai enthusiasts elevate their craft
            </h2>

            <div className="w-full text-teal-950 dark:text-orange-100 2xl:text-3xl">
              <p>
                Being someone who practices bonsai myself, I took notice to the
                fact that it's hardly a craft that has many modern tools
                available to aid its community members in creating beautiful
                trees. I set out to create this project to fill my own need for
                an app that allows me to track my tree's progress, and easily
                get training tips from a chatGPT assistant.
              </p>
            </div>
            <div className="w-full text-teal-950 dark:text-orange-100 2xl:text-3xl">
              <p>
                With this in mind, I used this as a learning opportunity to
                create a useful tool while also learning new technologies. In my
                pursuit, I gained experience using TypeScript, Nextjs, SASS,
                Firebase, and OpenAI's chatGPT API. This simple app created to
                help me track my trees has now become a pivotal point of
                learning.
              </p>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://bonsai-buddy.vercel.app/"
                className="text-3xl text-orange-400 underline underline-offset-8 hover:text-orange-500 dark:hover:text-orange-200"
              >
                <h3>View Live Site</h3>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Colebeal/bonsai?tab=readme-ov-file#bonsai-buddy"
                className="flex items-end text-2xl text-orange-300 hover:text-orange-400 dark:hover:text-orange-200"
              >
                <h4>View Source Code</h4>
              </a>
            </div>
          </m.div>
        </div>
      </section>

      <div ref={navRef} className="m-5 mt-12 text-left  md:m-20">
        <div className="flex flex-col flex-wrap items-center justify-center gap-20 lg:my-10 lg:flex-nowrap xl:flex-row">
          <div className="flex w-full flex-col   xl:flex-nowrap">
            <h2 className="my-5 basis-full text-6xl dark:text-orange-300 xl:text-7xl">
              Key Learnings
            </h2>
            <h3 className="basis-full text-4xl text-teal-700 dark:text-teal-600 xl:text-5xl">
              Table of Contents
            </h3>

            <ul className="mt-6 flex w-full flex-col justify-between gap-4 rounded-lg py-1 text-2xl dark:text-orange-100  md:text-3xl ">
              <li
                onClick={() => handleScroll(errorRef)}
                className="cursor-pointer hover:text-orange-400"
              >
                Error Handling
              </li>
              <li
                onClick={() => handleScroll(asyncRef)}
                className="cursor-pointer hover:text-orange-400"
              >
                Asynchronous Programming
              </li>
              <li
                onClick={() => handleScroll(dbRef)}
                className="cursor-pointer hover:text-orange-400"
              >
                Database Management
              </li>
              <li
                onClick={() => handleScroll(authRef)}
                className="cursor-pointer hover:text-orange-400"
              >
                User Authentication
              </li>
              <li
                onClick={() => handleScroll(apiRef)}
                className="cursor-pointer hover:text-orange-400"
              >
                The API Layer
              </li>
              <li
                onClick={() => handleScroll(tsRef)}
                className="cursor-pointer hover:text-orange-400"
              >
                TypeScript
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        ref={errorRef}
        className="m-5 my-8 flex flex-col flex-wrap gap-4 text-left text-xl text-teal-700 md:m-20 lg:gap-10"
      >
        <h2 className="basis-full text-4xl dark:text-orange-300 xl:text-7xl">
          Error Handling
        </h2>
        <p className="flex-grow basis-1/3 text-teal-950 dark:text-orange-100 xl:text-3xl">
          This project provided a unique perspective on error handling,
          fundamentally shaping the approach to writing code. It involved
          evaluating all possible failure points and accounting for them,
          ensuring a straightforward and seamless user experience. This process
          was crucial in maintaining the integrity of the application and
          providing a robust user interface.
        </p>
        <p className="flex flex-grow basis-1/3 text-teal-950 dark:text-orange-100 xl:text-3xl">
          A key learning was the implementation of a global error state provided
          by the useContext hook. This state was used in a reusable error
          component, designed to display relevant errors wherever placed. This
          approach to error handling has significantly influenced the thought
          process behind writing code, and evaluating possible points of
          failure, all while emphasizing the importance of robust and
          user-friendly design.
        </p>
        <p
          onClick={() => handleScroll(navRef)}
          className="cursor-pointer text-teal-700 underline underline-offset-8 hover:text-orange-400 dark:text-teal-600 dark:hover:text-orange-400"
        >
          Return to Top
        </p>
      </div>
      <div
        ref={asyncRef}
        className="m-5 my-8 flex flex-col flex-wrap gap-8 text-left text-xl text-teal-700 md:m-20 lg:gap-10"
      >
        <h2 className="basis-full text-4xl dark:text-orange-300 xl:text-7xl">
          Asynchronous Programming
        </h2>
        <p className="flex-grow basis-1/3 text-teal-950 dark:text-orange-100 xl:text-3xl">
          I learned how the browser executes code and gained the ability to
          allocate tasks out of the synchronous queue. This knowledge was
          instrumental in managing tasks efficiently and ensuring the smooth
          operation of the application.
        </p>
        <p className="flex flex-grow basis-1/3 text-teal-950 dark:text-orange-100 xl:text-3xl">
          A significant learning was the importance of accounting for the time
          it takes to complete these tasks on the front end. Implementing
          loading states and loading animations proved to be an effective
          strategy for enhancing UX/UI. This not only improved the user
          experience but also provided a more professional look and feel to the
          application.
        </p>
        <p
          onClick={() => handleScroll(navRef)}
          className="cursor-pointer text-teal-700 underline underline-offset-8 hover:text-orange-400 dark:text-teal-600 dark:hover:text-orange-400"
        >
          Return to Top
        </p>
      </div>
      <div
        ref={dbRef}
        className="m-5 my-8 flex flex-col flex-wrap gap-4 text-left text-xl text-teal-700 md:m-20 lg:gap-10"
      >
        <h2 className="basis-full text-4xl dark:text-orange-300 xl:text-7xl">
          Database Management
        </h2>
        <p className="flex-grow basis-1/4 text-teal-950 dark:text-orange-100 xl:text-3xl">
          A significant focus in this project was placed on working with
          databases. The first step involved setting up a scalable structure for
          users, ensuring it could handle large amounts of data efficiently.
          This was followed by formatting the data in a user-friendly manner
          that facilitated ease of use on the front end.
        </p>
        <p className="flex-grow basis-1/4 text-teal-950 dark:text-orange-100 xl:text-3xl">
          A key part of the process was sorting data entries to identify the
          most recent ones. This was complemented by working with file uploads
          and passing the link reference to the NoSQL database, a strategy that
          effectively eliminated redundant data requests.
        </p>
        <p className="flex text-teal-950 dark:text-orange-100 xl:text-3xl">
          The useEffect hook was utilized to fetch data from Firebase both
          onMount and when data was added or deleted, with careful attention
          paid to avoid causing an infinite re-render loop. In this project, I
          learned about working with various database operations, including
          reading, writing, deleting, and amending data. This experience
          provided a comprehensive entry-level understanding of database
          management in a real-world application.
        </p>
        <p
          onClick={() => handleScroll(navRef)}
          className="cursor-pointer text-teal-700 underline underline-offset-8 hover:text-orange-400 dark:text-teal-600 dark:hover:text-orange-400"
        >
          Return to Top
        </p>
      </div>
      <div
        ref={authRef}
        className="m-5 my-8 flex flex-col flex-wrap gap-4 text-left text-xl text-teal-700 md:m-20 lg:gap-10"
      >
        <h2 className="basis-full text-4xl dark:text-orange-300 xl:text-7xl">
          User Authentication
        </h2>
        <p className="flex-grow basis-1/3 text-teal-950 dark:text-orange-100 xl:text-3xl">
          With aid of the useContext hook I was able to share the state of the
          current user with the rest of the application. This approach helped
          create a seamless user experience across the application, ensuring
          that user-specific data and features were readily available.
        </p>
        <p className="flex flex-grow basis-1/3 text-teal-950 dark:text-orange-100 xl:text-3xl">
          Moreover, I learned this highlighted the importance of gatekeeping
          application features for logged-in users. This was achieved using the
          NextJS Router, which proved to be an efficient tool for managing
          access to application features based on user authentication status.
          This experience underscored the importance of secure and efficient
          user authentication in real-world applications.
        </p>
        <p
          onClick={() => handleScroll(navRef)}
          className="cursor-pointer text-teal-700 underline underline-offset-8 hover:text-orange-400 dark:text-teal-600 dark:hover:text-orange-400"
        >
          Return to Top
        </p>
      </div>
      <div
        ref={apiRef}
        className="m-5 my-8 flex flex-col flex-wrap gap-4 text-left text-xl text-teal-700 md:m-20 lg:gap-10"
      >
        <h2 className="basis-full text-4xl dark:text-orange-300 xl:text-7xl">
          The API Layer
        </h2>
        <p className="flex-grow basis-1/3 text-teal-950 dark:text-orange-100 xl:text-3xl">
          It was a practical experience in making HTTP requests and using
          async/await and Fetch for network communication with OpenAI’s API. A
          first for me was passing data from the front end to the API layer,
          which highlighted to me the importance of effective data management in
          client-server communication. This importance was later emphasized when
          engineering a prompt for ChatGPT to output data in a usable format. I
          was able to achieve this by instructing ChatGPT to output in JSON
          format followed by a structured JSON object displaying the format I
          wished to receive.
          <Link
            to="https://github.com/Colebeal/bonsai/blob/main/src/lib/promptData.ts"
            className="m-3 text-orange-400 underline underline-offset-8 hover:text-orange-300 dark:hover:text-orange-200"
          >
            See the prompt.
          </Link>
        </p>
        <p className="flex flex-grow basis-1/3 text-teal-950 dark:text-orange-100 xl:text-3xl">
          Following the OpenAI documentation for implementation was a valuable
          learning experience, emphasizing the importance of understanding and
          adhering to API documentation for successful integration. This
          included token management and the need to guard against overspending.
          This emphasized the importance of efficient resource management when
          working with APIs.
        </p>
        <p
          onClick={() => handleScroll(navRef)}
          className="cursor-pointer text-teal-700 underline underline-offset-8 hover:text-orange-400 dark:text-teal-600 dark:hover:text-orange-400"
        >
          Return to Top
        </p>
      </div>
      <div className="m-5 my-8 flex flex-col flex-wrap gap-4 text-left text-xl text-teal-700 md:m-20 lg:gap-10">
        <h2 className="basis-full text-4xl dark:text-orange-300 xl:text-7xl">
          TypeScript
        </h2>
        <p className="flex-grow basis-1/3 text-teal-950 dark:text-orange-100 xl:text-3xl">
          The project served as an introduction to TypeScript, highlighting the
          importance of a strongly typed language. Before this project I was
          ignorant of how TypeScript can enhance code maintainability, making it
          easier for others to contribute without fear of breaking the code.
          However, now I don’t see myself reverting to JavaScript for future
          projects.
        </p>
        <p className="flex-grow basis-1/3 text-teal-950 dark:text-orange-100 xl:text-3xl">
          Coming from JavaScript, the concept of compiling and the potential
          errors that can arise at build time were initially unfamiliar. The
          assumption was that if the code was working in the development server,
          that was all that mattered. However, when the time came to deploy my
          application to Vercel it revealed that the code had not been
          successfully compiled.
        </p>
        <p className="flex text-teal-950 dark:text-orange-100 xl:text-3xl">
          This experience displayed the importance of regularly checking if the
          code compiles before committing it to GitHub. It also emphasized the
          need to plan your project before building, with pseudocode, thus
          considering how the code should run and what each function should do
          to ensure expected performance.
        </p>
        <p
          onClick={() => handleScroll(navRef)}
          className="cursor-pointer text-teal-700 underline underline-offset-8 hover:text-orange-400 dark:text-teal-600 dark:hover:text-orange-400"
        >
          Return to Top
        </p>
      </div>
    </>
  )
}

export default Bonsai
