import imageData from "../../../assets/sliderData"

export default function MenuInformation({
  setCurrentFolder,
  setSlideIndex,
  menuHandler,
  menuContentHandler,
}) {
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

  return (
    <>
      <ul className="flex h-full animate-fade-in flex-col pt-5">
        <div className="mx-10 text-left">
          <li>
            <h2 className="text-base">Personal Works</h2>
            <a
              onClick={() => {
                selectFolder(0)
              }}
              className="m-10 flex cursor-pointer justify-between hover:underline"
            >
              <span>Observations</span>
              <span className=" sm:mr-10">{imageData.observations.length}</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                selectFolder(1)
              }}
              className="m-10 flex cursor-pointer justify-between hover:underline"
            >
              <span>People</span>
              <span className=" sm:mr-10">{imageData.people.length}</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                selectFolder(2)
              }}
              className="mx-10 flex cursor-pointer justify-between hover:underline"
            >
              <span>Structure</span>
              <span className=" sm:mr-10">{imageData.structure.length}</span>
            </a>
          </li>
        </div>
        <div className="m-10 text-left">
          <h2 className="text-base font-semibold">Published Works</h2>
          <li className="m-10">
            <a className="flex justify-between hover:cursor-default hover:underline">
              <span>The Process (coming soon)</span>
              <span className="sm:mr-10">109</span>
            </a>
          </li>
        </div>
      </ul>
    </>
  )
}
