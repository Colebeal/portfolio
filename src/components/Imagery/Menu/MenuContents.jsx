export default function MenuContents({ menuHandler, menuContentHandler, folderDisplayed, setFolderDisplayed, setSlideIndex }) {

  console.log('MenuContents:', setFolderDisplayed)

  return(
    <>
      <div className="absolute top-10 left-10 gap-4">
        <span onClick={menuContentHandler} className="text-lg cursor-pointer mr-5">Menu</span>
        <span onClick={menuContentHandler} className="underline text-lg cursor-pointer font-semibold">Info</span>            
      </div>
      <main className="mx-10 pt-[15%] flex h-full text-left animate-fade-in">
        <div className="flex my-10">
          <h3 className="w-[60%] font-bold">About me</h3>
          <p>I am a twenty-something, now photography hobbyist, that primarily looks to compose timeless images inspired by shadows and natural light. Traditionally trained as an analogue photographer, I use this methodology of shooting in my digital workflow. With a heavy emphasis on color, tone, and feeling of an image.</p>
        </div>
      </main>
    </>
  )
}