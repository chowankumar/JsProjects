import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";




const Navbar = () => {
    const [toogle, setToogle] = useState(false)

    const showSideMenu = () => {
        setToogle(true)

    }

    const removeSideMenu = () => {
        setToogle(false)
    }

    const Navitem = [
        {
            icon: <CiSearch />,
            name: "Search"
        },
        {
            icon: <CiDiscount1 />,
            name: "Offer",
            sub:"New"
        },
        {
            icon: "",
            name: "Help"
        },
        {
            icon: "",
            name: "Sign in"
        },
        {
            icon: "",
            name: "Cart"
        },

    ]
    return (
        <>
            <div className='border-overlay w-full h-full fixed' onClick={removeSideMenu} style={{
                opacity: toogle ? 1 : 0,
                visibility: toogle ? "visible" : "hidden"
            }}>
                <div onClick={(e) => e.stopPropagation()} className='w-[500px] bg-white h-full duration-[400ms]' style={{
                    left: toogle ? "0%" : "-100%"
                }}>

                </div>
            </div>



            <div className='p-2 shadow-xl'>
                <div className='max-w-[1200px]  mx-auto flex items-center gap-2 font-[500] text-[16px]'>
                    <img src="./images/swiggy-1.svg" alt="" className='w-[35px]' />
                    <p> <span className='border-b-[3px] border-b-orange-500 '>Ratanda</span> Jodhpur, Rajstan, India  <RxCaretDown onClick={showSideMenu} fontSize={25} className='inline text-orange-500' /></p>


                    <nav className='flex list-none gap-10 items-center ml-auto'>
                    {Navitem.map((item,index)=>{
                        return  <li className='flex items-center gap-2 hover:text-orange-600'>
                            {item.icon} 
                            {item.name}
                            <sup>{item.sub}
                            </sup>
                        </li>

                    })}
                </nav>
                </div>

               
            </div>
        </>

    )
}

export default Navbar