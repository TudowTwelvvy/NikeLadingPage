import { headerLogo } from "../assets/images";
import {hamburger } from "../assets/icons"
import { navLinks } from "../constants";
import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";


function Nav() {
  const [isOpen, setisOpen] = useState(false)

  const handleClick=()=>{
    setisOpen((prev)=>{
      return !prev
    })
  }
  return (
    <header className="padding-x py-8 absolute z-10 w-full lg:bg-transparent">
      <nav className="flex justify-between items-center max-container  ">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29}/>
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link, index)=>{
            return (<li key={index}>
              <a href={link.href} className="font-montserrat leading-normal text-lg text-slate-gray hover:bg-coral-red hover:text-white p-2 rounded-lg">{link.label}</a>
            </li>)
          })}
        </ul>

        <div className="hidden max-lg:block relative ">
          <div  onClick={handleClick}>
           { !isOpen ? <img src={hamburger} alt="hamburger" width={25} height={25} className=""/> : <ImCancelCircle className="text-red-500 text-lg"/> }

          </div>
          {
            isOpen && (
            <ul className=" absolute mt-2 -right-14  p-2 border-[2px] border-red-500 flex flex-col gap-2 w-[120px]">
              {
                navLinks.map((link)=>{
                  return (
                    <li key={link} className="border-b  hover:bg-red-500 hover:text-white p-2 cursor-pointer">{link.label}</li>
                  )
                })
              }
            </ul>
            )
          }
        </div>

        
      </nav>
    </header>
  )
}

export default Nav