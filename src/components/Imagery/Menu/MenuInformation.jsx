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
  

  return(
    <>
      <ul className="pt-5 flex flex-col h-full animate-fade-in">
        <div className="text-left mx-10">
          <li>
            <h2 className="text-base">Personal Works</h2> 
            <a onClick={()=>{selectFolder(0)}} className="cursor-pointer hover:underline flex justify-between m-10">
              <span>Observations</span>
              <span className=" sm:mr-10">{imageData.observations.length}</span>
            </a>
          </li>
          <li>
            <a onClick={()=>{selectFolder(1)}} className="cursor-pointer hover:underline flex justify-between m-10">
              <span>People</span>
              <span className=" sm:mr-10">{imageData.people.length}</span>
            </a>
          </li>
          <li>
            <a onClick={()=>{selectFolder(2)}} className="cursor-pointer hover:underline flex justify-between mx-10"> 
              <span>Structure</span>
              <span className=" sm:mr-10">{imageData.structure.length}</span>
            </a>
          </li>
        </div>
        <div className="m-10 text-left">
          <h2 className="font-semibold text-base">Published Works</h2>
          <li className="m-10">
            <a className="hover:cursor-default hover:underline flex justify-between">
              <span>The Process (coming soon)</span>
              <span className="sm:mr-10">109</span>
            </a>
          </li>
        </div>
      </ul>
    </>
  )
}