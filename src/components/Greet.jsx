export default function Greet({ dev, imagery }) {

  return (
    <div id='greet' className=" text-teal-900 flex flex-col items-center font-dm-sans animate-rise-up max-w-[1280px]">
      <h1 className="dark:text-white">Hi, I'm Cole.</h1>
      <div id="selfie" className="bg-orange-300 w-[200px] h-[200px] rounded-full m-5 dark:bg-yellow-400"></div>
      <div>
        <button onClick={dev} className="m-5 dark:bg-teal-800">Development</button>
        <button onClick={imagery} className="m-5 dark:bg-teal-800">Imagery</button>
      </div>
    </div>
  )
}