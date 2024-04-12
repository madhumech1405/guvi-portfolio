import React, { useState } from 'react'
import {Bars3Icon}from "@heroicons/react/24/solid"
export default function Header() {
    const [toggleMenu,settoggleMenu]=useState(false)
  return (
    <header className='flex justify-between py-2 px-5 bg-primary'>
        <a  className='font-bold text-black'  href='#'> MADHUSUDHANAN</a>
        <nav className='hidden md:block'>
        <ul className='flex '> 
            <li><a href='/'> HOME</a></li>
            <li><a href='#about'> ABOUT</a></li>
            <li><a href='#work'> Project</a></li>
            <li><a href='#concat'> concat</a></li>
            <li><a href='#resume'>resume</a></li>
        </ul>
        </nav>
      {toggleMenu &&  <nav  className='block md:hidden '>
        <ul onClick={()=>settoggleMenu(!toggleMenu)} className='flex  flex-col text-white mobile-nav '> 
            <li><a href='/'> HOME</a></li>
            <li><a href='#about'> ABOUT</a></li>
            <li><a href='#work'> Project</a></li>
            <li><a href='#concat'> concat</a></li>
            <li><a href='#resume'>resume</a></li>
        </ul>
        </nav>}
        <button  onClick={()=>settoggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='h-5' /></button>
    </header>
  )
}
