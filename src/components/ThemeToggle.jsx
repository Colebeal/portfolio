import { useState, useEffect } from "react"
import { BiSun, BiMoon } from "react-icons/bi"

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark")

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      console.log(theme)
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setTimeout(() => {
        console.log(theme)
      }, 1000)
      console.log(theme)
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "light" ? "dark" : "light")
    console.log(theme)
  }

  return (
    <>
      {theme === "light" ? (
        <BiSun
          onClick={handleThemeSwitch}
          className="z-50 animate-fade-in cursor-pointer text-2xl text-teal-900"
        />
      ) : (
        <BiMoon
          onClick={handleThemeSwitch}
          className="z-50 animate-fade-in cursor-pointer text-2xl text-teal-900 dark:text-orange-50"
        />
      )}
    </>
  )
}

// {theme === 'light' ? <BiSun onClick={handleThemeSwitch} className="fixed top-9 right-4 md:absolute md:right-3 md:m-5 z-50 text-2xl cursor-pointer text-teal-900 animate-fade-in"/>: <BiMoon onClick={handleThemeSwitch} className=" fixed top-10 right-3 md:absolute md:top-5 md:right-3 md:m-5 z-50 text-2xl cursor-pointer text-teal-900 dark:text-orange-50 animate-fade-in"/>}
