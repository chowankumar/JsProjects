import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import a from "./../../data/category"


const Category = () => {

    const [slide,setSlide] = useState(0);

    const incSlide =()=>{
        if(a.length - 4 === slide) return false  
        setSlide((prev)=>prev+1)

    }
    const decSlide =()=>{
        setSlide((prev)=>prev-1)
    }
  return (
    <div className='my-3 max-w-[1200px] mx-auto'>

        <div className='flex justify-between items-center'>
            <h1 className='font-[650] text-[27px]'>Whats's on your mind?</h1>
            <div className='flex gap-2'>
                <div className='bg-[#e2e2e7] rounded-full h-[30px] w-[30px] flex items-center justify-center cursor-pointer'><FaArrowLeft  onClick={decSlide}/></div>
                <div className='bg-[#e2e2e7] rounded-full h-[30px] w-[30px] flex items-center justify-center cursor-pointer'> <FaArrowRight onClick={incSlide} /></div>
                
            </div>
        </div>

       <div className='flex overflow-hidden w-[900px] mx-auto'>
       {
        a.map((item,index)=>{
            return(
                <div style={{transform:`translateX(-${slide * 100}%)`}} className='w-[225px] shrink-0'>
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                </div>
            )
            
        })
        }
       </div>

    </div>
  )
}

export default Category