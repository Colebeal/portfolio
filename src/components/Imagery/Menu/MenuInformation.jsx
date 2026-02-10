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
          <h2 className="mb-5 text-xl font-bold">Portfolio</h2>
          <li>
            <a
              onClick={() => {
                selectFolder(0)
              }}
              className="my-4 flex cursor-pointer justify-between hover:underline"
            >
              <span>Scottie Scheffler • PGA</span>
              <span className=" sm:mr-10">{imageData.scottieAmex.length}</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                selectFolder(1)
              }}
              className="my-4 flex cursor-pointer justify-between hover:underline"
            >
              <span>L.A.B. Golf • DF3</span>
              <span className=" sm:mr-10">{imageData.labDF3.length}</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                selectFolder(2)
              }}
              className="my-4 flex cursor-pointer justify-between hover:underline"
            >
              <span>L.A.B. Golf • OZ1i</span>
              <span className=" sm:mr-10">{imageData.labOZ1i.length}</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                selectFolder(3)
              }}
              className="my-4 flex cursor-pointer justify-between hover:underline"
            >
              <span>L.A.B. Golf • OZ1i HS</span>
              <span className=" sm:mr-10">{imageData.labHeelShaft.length}</span>
            </a>
          </li>
          <h2 className="mb-5 mt-28 text-xl font-bold">Archives</h2>
          <li>
            <a
              onClick={() => {
                selectFolder(4)
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
                selectFolder(5)
              }}
              className="my-4 flex cursor-pointer justify-between hover:underline"
            >
              <span>Structure</span>
              <span className=" sm:mr-10">{imageData.structure.length}</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                selectFolder(6)
              }}
              className="my-4 flex cursor-pointer justify-between hover:underline"
            >
              <span>Observations</span>
              <span className=" sm:mr-10">{imageData.observations.length}</span>
            </a>
          </li>
        </div>
      </ul>
    </>
  )
}
