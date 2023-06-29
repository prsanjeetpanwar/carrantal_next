"use client"
import React from 'react'
import Image from 'next/image'
import { customButtonProps } from '../Types'


const CustomButton = ({btnType,title,containerStyles,handleclick,textStyles,rightIcon}:customButtonProps) => {
  return (
    <button disabled={false} 
    type={`button`}
     className={`custom-btn ${containerStyles}`}
     onClick={(handleclick)}>
    <span className={`flex-1  ${textStyles}`} >
      {title}
    </span>
    {rightIcon && (
      <div className='relative w-6 h-6'>
        <Image src={rightIcon}
        fill 
        className='object-contain'/>
      </div>
    ) }
    </button>
  )
}

export default CustomButton
