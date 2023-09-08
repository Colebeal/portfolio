import imageData from "../../../assets/sliderData"

export default function MenuInformation({  setCurrentFolder, setSlideIndex, menuHandler, menuContentHandler }) {
    
  // function selectFolderHandler(folderIndex) {
  //   menuHandler()
  //    // setFolderDisplayed(0)
  //   setSlideIndex(5)
  //   menuHandler()
  // }

  const selectFolder = (e) => {
    setCurrentFolder(e)
    setSlideIndex(0)
    menuHandler()
  }

console.log('MenuInformation', setCurrentFolder)
  

  return(
    <>
        <div className="absolute top-10 left-10 gap-4">
          <span onClick={menuContentHandler} className="underline text-lg cursor-pointer mr-5 font-semibold">Menu</span>
          <span onClick={menuContentHandler} className="text-lg cursor-pointer">Info</span>            
        </div>
        <ul className="flex flex-col pt-[15%] h-full animate-fade-in">
          <div className="text-left m-10">
            <h2 className="font-semibold">Personal Works</h2> 
            <li className="m-10">
              <a onClick={()=>{selectFolder(0)}} className="cursor-pointer hover:underline flex justify-between mt-10">
                <span>Observations</span>
                <span className=" mr-10">{imageData.observations.length}</span>
              </a>
            </li>
            <li>
              <a onClick={()=>{selectFolder(1)}} className="cursor-pointer hover:underline flex justify-between m-10">
                <span>People</span>
                <span className=" mr-10">{imageData.people.length}</span>
              </a>
            </li>
            <li>
              <a onClick={()=>{selectFolder(2)}} className="cursor-pointer hover:underline flex justify-between mx-10"> 
                <span>Structure</span>
                <span className=" mr-10">{imageData.structure.length}</span>
              </a>
            </li>
          </div>
          <div className="m-10 text-left">
            <h2 className="font-semibold">Published Works</h2>
            <li className="m-10">
              <a className="cursor-pointer hover:underline flex justify-between">
                <span>The Process</span>
                <span className="mr-10">213</span>
              </a>
            </li>
          </div>
        </ul>
    </>
  )
}