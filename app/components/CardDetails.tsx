"use Client"
import React, { Fragment } from 'react'
import { CarProps } from '../Types';
import Image from 'next/image';
import {Dialog,Transition} from '@headlessui/react'
interface CarDetailsProps{
    Isopen:boolean;
    closeModel:()=>void    
    car:CarProps
}

const CardDetails = ({Isopen,closeModel,car}:CarDetailsProps) => {
  return (
    <>
    <Transition appear show={Isopen} as={Fragment}>

        <Dialog as='div' className='relative z-10 '
        
        onClick={closeModel}>
   <Transition.Child
   as={Fragment} enter='ease-out duration-300'
   enterFrom='opacity-0'
   enterTo='opacity-100'
   leave='ease-in duration-200'
   leaveFrom='opacity-100'
   leaveTo='opacity-0'



   >
    <div className='fixed inset-0 bg-black
    bg-opacity-25'/>
   </Transition.Child>
   <div className='fixed
    inset-0 overflow-y-auto
    '>
        <div className='flex min-h-full justify-center
        items-center'> </div>
    </div>
        </Dialog>
    </Transition>
    </>
  )
}

export default CardDetails
