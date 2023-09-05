export default function ImageryNav({ returnHomeHandler, slideIndex, menuHandler}) {
  return (
    <header className="fixed bottom-3 inset-x-0 z-20 w-[100%] h-[100px] animate-rise-up">
      <div className="z-20">
        <h2 className="text-center">{slideIndex} of 66</h2> 
        <button onClick={menuHandler} className="bg-transparent border-t-teal-700 dark:border-t-white rounded-none mt-2 ">menu</button>
      </div>
    </header>
  )
}