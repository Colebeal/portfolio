import {BsColumnsGap, BsCodeSlash, BsRocketTakeoff, BsWrench} from 'react-icons/bs'

export default function Services({servicesRef}) {
  return(
    <>
      <section ref={servicesRef} className='flex flex-col justify-around text-xl w-full text-left text-teal-900 dark:text-orange-50'>
        <h2 className='my-5 md:m-10 text-4xl md:text-6xl text-teal-900 dark:text-orange-100'>Services</h2>
        <div className='md:mx-10 p-10 md:p-20 pt-10 bg-orange-50 dark:bg-teal-900 shadow-lg rounded-lg flex flex-wrap gap-20 md:gap-20'>
          <div className='basis-1/3 grow'>
            <BsColumnsGap className='text-6xl text-orange-200 dark:text-teal-800'/>
            <h2 className='my-5 text-4xl text-teal-800 dark:text-orange-300'>Design</h2>
            <p>Designing, wireframing and prototyping are vital to the success of a digital experience. Together we can partner around building a personalized user-interface and design for your site. </p>
          </div>
          <div className='basis-1/3 grow bg'>
            <BsCodeSlash className='text-6xl text-orange-200 dark:text-teal-800'/>
            <h2 className='my-5 text-4xl text-teal-800 dark:text-orange-300'>Development</h2>
            <p>Depending on your needs, I can build your project with a no code solution like webflow or squarespace. However if your ideas need the freedom, I would reccomend a custom coded web app.</p>
          </div>
          <div className='basis-1/3 grow bg'>
            <BsRocketTakeoff className='text-6xl text-orange-200 dark:text-teal-800'/>
            <h2 className='my-5 text-4xl text-teal-800 dark:text-orange-300'>Deployment</h2>
            <p>Together we can ensure that your site is not only online but searchable using SEO best practices. I can help demystify the process of staging, publishing and all things deployment.</p>
          </div>
          <div className='basis-1/3 grow bg'>
            <BsWrench className='text-6xl text-orange-200 dark:text-teal-800'/>
            <h2 className='my-5 text-4xl text-teal-800 dark:text-orange-300'>Maintenance</h2>
            <p>Whether created by me or not, I offer packages to run and maintain existing sites, make updates, and even create new features to keep your site feeling cutting edge.</p>    
          </div>
        </div>
      </section>
    </>
  )
}