export default function MenuContents({ menuContentHandler }) {

  return(
    <div className="absolute top-10 left-10 gap-4">
      <span onClick={menuContentHandler} className="text-lg cursor-pointer mr-5">Menu</span>
      <span onClick={menuContentHandler} className="underline text-lg cursor-pointer font-semibold">Info</span>            
    </div>
  )
}