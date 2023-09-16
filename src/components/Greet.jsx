import { Link } from "react-router-dom"

export default function Greet({ dev, imagery }) {

  return (
    <div id='greet' className=" text-teal-900 flex flex-col items-center font-dm-sans animate-rise-up max-w-[1280px]">
      <h1 className="dark:text-white">Hi, I'm Cole.</h1>
      <div id="selfie" className="bg-orange-300 w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full m-5 bg-center bg-cover bg-[url('/images/people/Portfolio-116.jpg')]"></div>
      <div className="m-5">
        <Link to='/dev' className="p-3 m-2 sm:m-5 rounded-lg bg-orange-100 shadow-lg dark:bg-teal-900 dark:text-white">
          Development
        </Link>
        <Link to='/imagery' className="p-3 m-2 rounded-lg bg-orange-100 shadow-lg dark:bg-teal-900 dark:text-white">
          Imagery
        </Link>
      </div>
    </div>
  )
} 