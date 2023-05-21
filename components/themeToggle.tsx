import { useState,useEffect } from "react";




export default function ThemeToggle() {

  const[dark,setDark]=useState(false)


  

  useEffect(()=>{
    if (document.documentElement.classList.contains('dark')) {
      setDark(true);
    } else {
      setDark(false);
    }
  },[])

  function toggleTheme(){
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      localStorage.setItem("theme", "light");
      setDark(false)
    }
    else{
     document.documentElement.classList.remove('light')
     document.documentElement.classList.add('dark')
     localStorage.setItem("theme","dark")
     setDark(true)
    }


  }





  return(
    <div className="flex gap-4">
      <button className={dark?'':"bg-[#eaeaea] border-2 border-transparent  rounded-full "} onClick={()=>{if(dark){toggleTheme()}}}>
      <svg data-testid="geist-icon" fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" ><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2"></path><path d="M12 21v2"></path><path d="M4.22 4.22l1.42 1.42"></path><path d="M18.36 18.36l1.42 1.42"></path><path d="M1 12h2"></path><path d="M21 12h2"></path><path d="M4.22 19.78l1.42-1.42"></path><path d="M18.36 5.64l1.42-1.42"></path></svg>
      </button>
      <button className={dark?"bg-[#333333] border-2 border-transparent rounded-full":''} onClick={()=>{if(!dark){toggleTheme()}}}>
      <svg data-testid="geist-icon" fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path></svg>
      </button>
     
     
    </div>
  )
}