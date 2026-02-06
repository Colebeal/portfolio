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
        <div className="mx-10 mt-auto text-left md:my-auto">
          <li>
            <a
              onClick={() => {
                selectFolder(0)
              }}
              className="my-4 flex cursor-pointer justify-between hover:underline"
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
              className="my-4 flex cursor-pointer justify-between hover:underline"
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
              className="my-4 flex cursor-pointer justify-between hover:underline"
            >
              <span>Structure</span>
              <span className=" sm:mr-10">{imageData.structure.length}</span>
            </a>
          </li>
        </div>
      </ul>
    </>
  )
}
