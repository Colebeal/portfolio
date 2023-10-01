
export default function Footer() {
  return (
    <footer className="w-screen">
      <div className= "mx-16 my-8 md:my-0 flex flex-col-reverse md:flex-row justify-around items-center text-teal-900 dark:text-orange-100 border-t-2 border-teal-800 dark:border-teal-800">
        <div className="text-lg text-teal-900 dark:text-orange-100">
          <span className="text-xl" >© </span>
          <span> 2023 • Cole Beal</span>
        </div>
        <ul className="h-full md:flex justify-center items-center p-5 gap-20 text-lg">
          <li>
            <a href="https://github.com/Colebeal" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/colebeal/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/colebeal/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="/imagery">
              Imagery
            </a>
          </li>
          <li>
            <a href="mailto:beal.cole@gmail.com">
              Email
            </a>
          </li>
        </ul>
        <div className="hidden md:block text-lg text-teal-900 dark:text-orange-100 pointer">
          <span>Imprint</span>    
        </div>
      </div>
    </footer>
  )
}