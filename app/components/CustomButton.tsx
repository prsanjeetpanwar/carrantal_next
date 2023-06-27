"use client"
import React from 'react'
import Image from 'next/image'
import { customButtonProps } from '../Types'


const CustomButton = ({title,containerStyles,handleclick}:customButtonProps) => {
  return (
    <button disabled={false} 
    type={`button`}
     className={`custom-btn ${containerStyles}`}
     onClick={(handleclick)}>
    <span className={'flex-1 '} >
      {title}
    </span>
    </button>
  )
}

export default CustomButton
