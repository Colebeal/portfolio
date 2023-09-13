import { useState, useEffect } from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark' 
  );
  
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      console.log(theme)
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTimeout(() => {console.log(theme)}, 1000);
      console.log(theme)
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log(theme)
  };

  return (
    <>
      {theme === 'light' ? <BiSun onClick={handleThemeSwitch} className="absolute top-5 right-3 m-5 z-50 text-2xl cursor-pointer text-teal-900 dark:text-orange-50 animate-fade-in"/>: <BiMoon onClick={handleThemeSwitch} className="absolute top-5 right-3 m-5 z-50 text-2xl cursor-pointer text-teal-900 dark:text-orange-50 animate-fade-in"/>}
    </>  


  )
}