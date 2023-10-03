export default function Portfolio({ porfolioRef }) {
  return (
    <section
      ref={porfolioRef}
      className="my-10 flex flex-col gap-5 text-left text-xl text-teal-700 md:mx-12 md:mb-24 md:mt-32 md:text-3xl "
    >
      <h2 className=" text-4xl text-teal-800 md:text-6xl">Portfolio</h2>
      <div></div>
      <p className="text-4xl">This section is still under construction...</p>
      <span>
        For more information about previous projects,
        <a
          className="mx-2 text-teal-600 underline underline-offset-4 hover:text-teal-800 dark:text-teal-300 "
          href="mailto:beal.cole@gmail.com"
        >
          shoot me an email!
        </a>
      </span>
    </section>
  )
}
