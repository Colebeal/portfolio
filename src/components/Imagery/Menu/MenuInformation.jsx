export default function MenuInformation({menuContentHandler}) {
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
              <a href="" className=" hover:underline flex justify-between mt-10">
                <span>Observations</span>
                <span className=" mr-10">26</span>
              </a>
            </li>
            <li>
              <a href="" className=" hover:underline flex justify-between m-10">
                <span>People</span>
                <span className=" mr-10">28</span>
              </a>
            </li>
            <li>
              <a href="" className=" hover:underline flex justify-between mx-10">
                <span>Structure</span>
                <span className=" mr-10">27</span>
              </a>
            </li>
          </div>
          <div className="m-10 text-left">
            <h2 className="font-semibold">Published Works</h2>
            <li className="m-10">
              <a href="" className=" hover:underline flex justify-between">
                <span>The Process</span>
                <span className="mr-10">213</span>
              </a>
            </li>
          </div>
        </ul>
    </>
  )
}