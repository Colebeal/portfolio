import {
  BsColumnsGap,
  BsCodeSlash,
  BsRocketTakeoff,
  BsWrench,
} from "react-icons/bs"

export default function Services({ servicesRef }) {
  return (
    <>
      <section
        ref={servicesRef}
        className="flex w-full flex-col justify-around text-left text-xl text-teal-900 dark:text-orange-50"
      >
        <h2 className="my-5 text-4xl text-teal-900 dark:text-orange-100 md:m-10 md:text-6xl">
          Services
        </h2>
        <div className="flex flex-wrap gap-20 rounded-lg bg-orange-50 p-10 pt-10 shadow-lg dark:bg-teal-900 md:mx-10 md:gap-20 md:p-20">
          <div className="grow basis-1/3">
            <BsColumnsGap className="text-6xl text-orange-200 dark:text-teal-800" />
            <h2 className="my-5 text-4xl text-teal-800 dark:text-orange-300">
              Design
            </h2>
            <p>
              Designing, wireframing and prototyping are vital to the success of
              a digital experience. Together we can partner around building a
              personalized user-interface and design for your site.
            </p>
          </div>
          <div className="bg grow basis-1/3">
            <BsCodeSlash className="text-6xl text-orange-200 dark:text-teal-800" />
            <h2 className="my-5 text-4xl text-teal-800 dark:text-orange-300">
              Development
            </h2>
            <p>
              Depending on your needs, I can build your project with a no code
              solution like webflow or squarespace. However if your ideas need
              the freedom, I would reccomend a custom coded web app.
            </p>
          </div>
          <div className="bg grow basis-1/3">
            <BsRocketTakeoff className="text-6xl text-orange-200 dark:text-teal-800" />
            <h2 className="my-5 text-4xl text-teal-800 dark:text-orange-300">
              Deployment
            </h2>
            <p>
              Together we can ensure that your site is not only online but
              searchable using SEO best practices. I can help demystify the
              process of staging, publishing and all things deployment.
            </p>
          </div>
          <div className="bg grow basis-1/3">
            <BsWrench className="text-6xl text-orange-200 dark:text-teal-800" />
            <h2 className="my-5 text-4xl text-teal-800 dark:text-orange-300">
              Maintenance
            </h2>
            <p>
              Whether created by me or not, I offer packages to run and maintain
              existing sites, make updates, and even create new features to keep
              your site feeling cutting edge.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
