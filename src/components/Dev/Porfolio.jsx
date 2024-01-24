import { lazy } from "react"

export default function Portfolio({ porfolioRef }) {
  return (
    <section
      ref={porfolioRef}
      loading="lazy"
      className="my-10 flex flex-col gap-10 text-left text-xl text-teal-700 md:mx-12 md:mb-24 md:mt-32 md:text-3xl "
    >
      <h2 className=" text-4xl text-orange-100 md:text-6xl">Portfolio</h2>
      <div className=" min-h-[20vh] lg:min-h-[80vh] w-full rounded-lg bg-cover bg-no-repeat backdrop-opacity-50 bg-none lg:bg-[url('/images/Dorff-Hero.webp')]">
        <img
          src="/images/Dorff-Hero.webp"
          alt="Landing Page for Aaron Dorff"
          className="contain rounded-lg lg:hidden"
        />
      </div>
      <div className="flex flex-col flex-wrap lg:flex-nowrap xl:flex-row lg:my-10 gap-10">
        <div className=" xl:h-[30vh] w-full ">
          <h2 className="text-6xl xl:text-7xl dark:text-orange-300">
            A creative solution for a multifaceted craftsman
          </h2>
        </div>
        <div className="w-full xl:text-3xl text-teal-600 dark:text-orange-100">
          The client for this project had struggled in the past to clearly
          communicate the differing services that he offered. He needed a
          distinct place that he could display his photography and on camera work, as well as attract new
          clients for his woodworking business.
        </div>
        <div className="w-full xl:text-3xl text-teal-600 dark:text-orange-100">
          With this in mind, I thought it best to architect a site answering the
          question, Who is Aaron Dorff? in a way that leads the user toward our
          call to action of contacting him for his on camera work, photographic
          services, or woodworking ability.
        </div>
      </div>
    </section>
  )
}

{
  /* <p className="text-4xl">This section is still under construction...</p>
<span>
  For more information about previous projects,
  <a
    className="mx-2 text-teal-600 underline underline-offset-4 hover:text-teal-800 dark:text-teal-300 "
    href="mailto:cole@colebeal.com?subject=Would love to see more!"
  >
    shoot me an email!
  </a>
</span> */
}
