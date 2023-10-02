import {TfiArrowCircleDown} from 'react-icons/tfi'
import {IoMdArrowRoundDown} from 'react-icons/io'


export default function Hero() {

  return (
    <section className='md:flex md:w-full'>
      <div id='hero' className='ml-10 min-h-[700px] hidden md:block md:col-span-5 grow relative basis-4/5 rounded-lg'></div>
      <div className="m-5 md:my-0 flex flex-col-reverse md:flex-row justify-center items-start md:items-end basis-1/5">
        <h1 className="text-teal-700 dark:text-orange-300 text-5xl md:text-7xl font-semibold md:[writing-mode:vertical-lr]">Developer</h1>
        <h1 className="text-teal-900 dark:text-orange-100 text-7xl md:text-9xl font-semibold md:[writing-mode:vertical-lr]">Cole Beal</h1>
      </div>
      <div className='m-5 mb-2'>
        <img src="/images/hero-image.jpg" alt="Self Portrait at a Picnic" className='md:hidden cover rounded-lg'/>
      </div>
    </section>
  )
}

  // md:grid md:grid-cols-6