import { motion as m } from "framer-motion"

export default function Portfolio({ porfolioRef }) {
  const lazyAnimation = {
    initial: { translateY: 50, opacity: 0 },
    animate: {
      translateY: 0,
      opacity: 1,
      transition: { duration: 1, delay: 0.25, ease: "easeInOut" },
    },
  }
  return (
    <>
      <section ref={porfolioRef} className="m-5 md:m-20 md:mt-0">
        <div className="flex flex-col gap-10 text-left text-xl text-teal-700 md:mx-12 md:mt-32 md:text-3xl ">
          <m.h2
            variants={lazyAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            ref={porfolioRef}
            className=" text-4xl text-teal-700 dark:text-orange-100 md:text-6xl"
          >
            Portfolio
          </m.h2>
          <m.div
            variants={lazyAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className=" min-h-[20vh] w-full rounded-lg bg-none bg-contain bg-no-repeat backdrop-opacity-50 lg:min-h-[80vh] lg:bg-[url('/images/Dorff-Hero.webp')]"
          >
            <img
              src="/images/Dorff-Hero.webp"
              alt="Landing Page for Clients website"
              className="contain rounded-lg lg:hidden"
            />
          </m.div>
          <m.div
            variants={lazyAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col flex-wrap gap-10 lg:my-10 lg:flex-nowrap xl:flex-row"
          >
            <div className=" w-full xl:h-[30vh] ">
              <h2 className="text-6xl dark:text-orange-300 xl:text-7xl">
                A creative solution for a multifaceted craftsman
              </h2>
            </div>
            <div className="w-full text-teal-600 dark:text-orange-100 xl:text-3xl">
              The client for this project had struggled in the past to clearly
              communicate the differing services that he offered. He needed a
              distinct place that he could display his photography and on camera
              work, as well as attract new clients for his woodworking business.
            </div>
            <div className="w-full text-teal-600 dark:text-orange-100 xl:text-3xl">
              With this in mind, I thought it best to architect a site answering
              the question, Who is Aaron Dorff? in a way that leads the user
              toward our call to action of contacting him for his on camera
              work, photographic services, or woodworking ability.
            </div>
          </m.div>
        </div>
      </section>
      <m.div
        variants={lazyAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-wrap xl:flex-nowrap"
      >
        <img
          src="/images/dorff_gallery_model.webp"
          alt="image gallery of clients on camera work"
          className="xl:max-w-[50vw] xl:basis-1/2"
        />
        <img
          src="/images/dorff_products.webp"
          alt="clients product page with the bedframes highlighted"
          className="xl:max-w-[50vw] xl:basis-1/2"
        />
      </m.div>
      <m.div
        variants={lazyAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="m-5 text-left  md:m-20"
      >
        <div className="flex flex-col flex-wrap gap-20 lg:my-10 lg:flex-nowrap xl:flex-row">
          <div className=" w-full basis-2/3 ">
            <p className="mb-2 font-['Gt-Planar-Bold'] text-xl text-teal-700">
              Design and Goal
            </p>
            <h2 className="mb-10 text-6xl text-teal-700 dark:text-orange-200 xl:text-5xl">
              Crafting a holistic depitction of this client
            </h2>
            <p className="w-full text-xl text-teal-600 dark:text-orange-100 xl:text-2xl">
              Broken into three distinct sections, the site is designed to
              provide a clear picture of the client's abilities and services.
              The first section is a gallery of his photography, the second a
              overview of his past woodworking projects and the third a gallery
              of his on camera work. Each containing a distinct call to action
              to contact him for his services. The most intentional of the three
              sections is the craftsman tab. Considering most of his work is
              custom, it didnt make sense to build him a shopify storefront.
              Instead, I chose to implement a simple catalogue style gallery of
              images that when clicked, would open a modal containing aproduct
              description, a handful of FAQ's and a mailto link for an order
              CTA.
            </p>
            <p className="my-5 w-full text-xl text-teal-600 dark:text-orange-100 xl:text-2xl">
              When designing the site, I wanted to make sure that the clients
              honest charm and scrappy work ethic were paplable. Combined with
              the fact that he spends most of his time in the wilderness, I made
              the site using a dusty color palette reminiscent of a desert
              sunrise. For font I used Crimbo Vintage, and Vintage Rovery to
              resemble the clients favorite hideaway, Pioneertown in the
              Southern California desert.
            </p>
            <p className="my-5 w-full text-xl text-teal-600 dark:text-orange-100 xl:text-2xl">
              The final thing worth calling out was the intention behind site
              layout, and the integral transition animations made with framer
              motion. The intention was to maintain the same layout throughout
              the site only changing his title, and the cooresponding content.
              Simple, however it is an ever so slight nod to the client's
              steadfast charachter among his various disciplines. Designed to
              share a similar feel on both desktop and mobile, the site has a
              playful feel that is sure to please the client and his customers.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://aarondorff.netlify.app/"
              className="text-left text-3xl text-orange-300 underline underline-offset-8 hover:text-orange-400 dark:hover:text-orange-200"
            >
              <h3>See this site for yourself</h3>
            </a>
          </div>
          <div className="m-auto basis-1/3">
            <img
              src="/images/m-products.webp"
              alt="mobile view of clients product page"
              className="hidden max-h-[800px] rounded-lg lg:block"
            />
          </div>
        </div>
      </m.div>
    </>
  )
}
