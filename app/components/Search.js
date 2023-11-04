  "use client"

import React,{useState} from 'react'
import { useRouter } from 'next/navigation'



export default function Search() {
  const [search,setSearch]=React.useState("");
  const router=useRouter;
console.log(search);
  function handleChange(e){
    setSearch(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault();
     setSearch("");
    router.push(`/${search}/`)
  }  
 

  return (
  <form className="w-50 flex justify-center md:justify-between" onSubmit={handleSubmit}>
    <input
    type='text'
    value={search}
    onChange={handleChange}
    className='bg-white p-2 w-80 text-xl rounded-xl'
    placeholder='search here'
    />
    <button className='"p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold'>
    submit </button> 
  </form>
  )
}
