export default function MenuInformation({menuContentHandler}) {
  return(
    <>
        <div className="absolute top-10 left-10 gap-4">
          <span onClick={menuContentHandler} className="underline text-lg cursor-pointer mr-5 font-semibold">Menu</span>
          <span onClick={menuContentHandler} className="text-lg cursor-pointer">Info</span>            
        </div>
        <ul className="flex flex-col justify-center h-full animate-fade-in">
        <li>
            <a href="" className=" hover:underline flex justify-between m-10">
              <span>The Process</span>
              <span className=" mr-10">213</span>
            </a>
          </li>
        <li className="my-0">
            <a href="" className=" hover:underline flex justify-between mx-10">
              <span>The Process</span>
              <span className=" mr-10">213</span>
            </a>
          </li>
          <li>
            <a href="" className=" hover:underline flex justify-between m-10">
              <span>The Process</span>
              <span className="mr-10">213</span>
            </a>
          </li>
        </ul>
    </>
  )
}