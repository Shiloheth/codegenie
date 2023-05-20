'use client'


import { useState,useEffect } from "react";
import ThemeToggle from '@/components/themeToggle'
import Image from "next/image";


export default function App(){
  
  const[dark,setDark]=useState(true)


  

  useEffect(()=>{
    if (document.documentElement.getAttribute("data-theme") === "Dark") {
      setDark(true);
    } else {
      setDark(false);
    }
  },[])

  function toggleTheme(){
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) ||document.documentElement.getAttribute('data-theme')==='Light') {
      document.documentElement.setAttribute("data-theme", "Dark")
      localStorage.setItem("theme", "Dark");
      setDark(true)
    }
    else{
      document.documentElement.setAttribute("data-theme", "Light")
      localStorage.setItem("theme", "Light");
      setDark(false)
    }

}
  return(
    <>

    <div className="header">
      <div>CodeGenie</div>
      <ThemeToggle dark={dark} toggleTheme={toggleTheme}/>
    </div>
    <div className="flex flex-col md:flex-row md:space-x-4 md:h-[calc(100vh-150px)]">
      <div>
      <p>from the image below what will be the value of Nav if you visit the root page</p>
      <iframe src="https://codesandbox.io/p/sandbox/patient-framework-ybkm37?file=%2Fapp%2Flayout.tsx%3A11%2C21" width={900} height={500}></iframe>
      </div>
      <div className="bg-white dark:bg-[#131414] border-[#f1f1f2] dark:border-[#5b5c5f] rounded-lg border-2 min-h-[200px] h-full overflow-y-auto">
      <label className="group bg-[#131414] hover:bg-[#262727] block relative py-10 px-10 pl-50 mb-1 cursor-pointer text-xl select-none break-words">
        <button className="group align-middle relative top-15 left-15 h-[19px] w-[19px] bg-black rounded-full focus:bg-[#2563eb]">
          <span className="absolute align-middle top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2 w-2 bg-black focus:bg-[#18181b] rounded-full"></span>
        </button>
        <p className="inline-block mx-6">option a</p>
      </label>
      <label className="group bg-[#131414] hover:bg-[#262727] block relative py-10 px-10 pl-50 mb-1 cursor-pointer text-xl select-none break-words">
        <button className="group align-middle relative top-15 left-15 h-[19px] w-[19px] bg-black rounded-full focus:bg-[#2563eb]">
          <span className="absolute align-middle top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2 w-2 bg-black focus:bg-[#18181b] rounded-full"></span>
        </button>
        <p className="inline-block mx-6">option b</p>
      </label>
      <label className="group bg-[#131414] hover:bg-[#262727] block relative py-10 px-10 pl-50 mb-1 cursor-pointer text-xl select-none break-words">
        <button className="group align-middle relative top-15 left-15 h-[19px] w-[19px] bg-black rounded-full focus:bg-[#2563eb]">
          <span className="absolute align-middle top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2 w-2 bg-black focus:bg-[#18181b] rounded-full"></span>
        </button>
        <p className="inline-block mx-6">option c</p>
      </label>



      </div>
    </div>
  
    </>


  )
}

