import {observations, people, structure} from "../../assets/sliderData"

export default function ImageryNav({ slideIndex, menuHandler, currentFolder }) {
  const folderLength = [15, 21, 19]


  // const imageCount = () => {
  //   console.log('length',folderLength)
  // }


  return (
    <header className="fixed bottom-3 inset-x-0 z-20 w-[100%] h-[100px] animate-rise-up">
      <div className="z-20">
        <h2 className="text-center">{slideIndex + 1} of {folderLength[currentFolder]}</h2> 
        <button onClick={menuHandler} className="bg-transparent border-t-teal-700 dark:border-t-white rounded-none mt-2 ">menu</button>
      </div>
    </header>
  )
}