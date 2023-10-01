export default function Portfolio({porfolioRef}) {
  return(
    <section ref={porfolioRef} className='flex flex-col text-left text-xl gap-5 my-10 md:mx-12 md:mt-32 md:mb-24 md:text-3xl text-teal-700 '>
      <h2 className=' text-4xl md:text-6xl text-teal-800'>Portfolio</h2>
      <div></div>
      <p className="text-4xl">This section is still under construction...</p>
      <span>For more information about previous projects, 
        <a className="mx-2 text-teal-600 dark:text-teal-300 hover:text-teal-800 underline underline-offset-4 " href="mailto:beal.cole@gmail.com">shoot me an email!</a>
      </span>
    </section>
  )
}