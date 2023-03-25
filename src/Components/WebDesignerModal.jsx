import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'


function WebDesignerModal({visible, onClose}) {
    if(!visible) return null;
  return (
    <div className='fixed inset-0 bg-darkBlue bg-opacity-30 backdrop-blur-sm flex justify-center items-center animate-popIn p-4'>
        <div className="bg-blue w-[1000px] rounded-xl flex justify-between h-[500px] p-6 shadow-xl md:h-[1000px] md:hidden">
            <div className="">
                <span className='text-xl font-semibold text-white'>Web Designer</span>
                <ul className='mt-8 flex flex-col gap-4'>
                    <li className='flex text-white font-light '><span className='text-lightBlue text-xl font-bold mr-2'>-</span>Creating a functional website that meets client's needs.</li>
                    <li className='flex text-white font-light '><span className='text-lightBlue text-xl font-bold mr-2'>-</span>Create a seamless website with intuitive navigation, optimized page load speeds, and easy use.</li>
                    <li className='flex text-white font-light '><span className='text-lightBlue text-xl font-bold mr-2'>-</span>Create engaging and informative content to complement website design.</li>
                    <li className='flex text-white font-light '><span className='text-lightBlue text-xl font-bold mr-2'>-</span>SEO principles include on-page and off-page optimization to build high-quality backlinks.</li>
                   
                </ul>
            </div>
            <AiIcons.AiOutlineClose className='text-lightBlue text-4xl font-bold cursor-pointer' onClick={onClose}/>
        </div>
        <div className="bg-blue w-[500px] rounded-xl flex justify-between hidden h-[500px] p-6 shadow-xl md:h-[400px] md:flex">
            <div className="">
                <span className='text-xl font-semibold text-white'>Web Designer</span>
                <ul className='mt-8 flex flex-col gap-4'>
                    <li className='flex text-white font-light '><span className='text-lightBlue text-xl font-bold mr-2'>-</span>Creating a functional website that meets client's needs.</li>
                    <li className='flex text-white font-light '><span className='text-lightBlue text-xl font-bold mr-2'>-</span>Create a seamless website with intuitive navigation, optimized page load speeds, and easy use.</li>
                    <li className='flex text-white font-light '><span className='text-lightBlue text-xl font-bold mr-2'>-</span>Create engaging and informative content to complement website design.</li>
                    <li className='flex text-white font-light '><span className='text-lightBlue text-xl font-bold mr-2'>-</span>SEO principles include on-page and off-page optimization to build high-quality backlinks.</li>
                   
                </ul>
            </div>
            <AiIcons.AiOutlineClose className='text-lightBlue text-4xl font-bold cursor-pointer' onClick={onClose}/>
        </div>
    </div>
  )
}

export default WebDesignerModal
