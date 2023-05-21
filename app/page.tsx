'use client'


import { useState,useEffect } from "react";
import ThemeToggle from '@/components/themeToggle'
import Image from "next/image";


export default function App(){
  
  


  return(
    <>

    <div className="flex p-3 border-700 dark:border-neutral mx-1 w-auto border-b-2 ">
      <div className="flex flex-1 items-center gap-2 text-xl font-bold">CodeGenie</div>
      <ThemeToggle/>
    </div>
    <div className="flex flex-row ">
      <div className="p-8">
      <h1 className="text-xl font-bold">useSelectedLayoutSegments hook</h1>
      <p className="mt-6 mb-3">from the image below what will be the value of Nav if you visit the root page</p>
      <iframe src="https://codesandbox.io/p/sandbox/patient-framework-ybkm37?file=%2Fapp%2Flayout.tsx%3A11%2C21" width={900} height={500}></iframe>
      </div>
      <div className="mt-20 p-20" >
      <label className="group bg-[#eaeaea] hover:bg-[#d9d6d5] dark:bg-[#131414] dark:hover:bg-[#262727] block relative py-10 px-10 pl-50 mb-1 cursor-pointer text-xl select-none break-words">
        <button className="group align-middle relative top-15 left-15 h-[19px] w-[19px] bg-white rounded-full focus:bg-[#2563eb]">
          <span className="absolute align-middle top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2 w-2 bg-white focus:bg-[#18181b] rounded-full"></span>
        </button>
        <p className="inline-block mx-6">option a</p>
      </label>
      <label className="group bg-[#eaeaea] hover:bg-[#d9d6d5] dark:bg-[#131414] dark:hover:bg-[#262727] block relative py-10 px-10 pl-50 mb-1 cursor-pointer text-xl select-none break-words">
        <button className="group align-middle relative top-15 left-15 h-[19px] w-[19px] bg-white rounded-full focus:bg-[#2563eb]">
          <span className="absolute align-middle top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2 w-2 bg-white focus:bg-[#18181b] rounded-full"></span>
        </button>
        <p className="inline-block mx-6">option a</p>
      </label>
      <label className="group bg-[#eaeaea] hover:bg-[#d9d6d5] dark:bg-[#131414] dark:hover:bg-[#262727] block relative py-10 px-10 pl-50 mb-1 cursor-pointer text-xl select-none break-words">
        <button className="group align-middle relative top-15 left-15 h-[19px] w-[19px] bg-white rounded-full focus:bg-[#2563eb]">
          <span className="absolute align-middle top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2 w-2 bg-white focus:bg-[#18181b] rounded-full"></span>
        </button>
        <p className="inline-block mx-6">option a</p>
      </label>

      </div>
    </div>
  
    </>


  )
}

