import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'

function GraphicdesignModal({visible, onClose}) {

     if(!visible) return null;

  return (
   <div className='p-4 fixed inset-0 bg-darkBlue bg-opacity-30 backdrop-blur-sm flex justify-center items-center animate-popIn'>
        <div className="bg-blue w-[500px] rounded-xl flex justify-between h-[350px] p-6 shadow-xl md:hidden">
            <div className="">
                <span className='text-xl font-semibold text-white'>Graphic Designer</span>
                <ul className='mt-8 flex flex-col gap-4'>
                    <li className='flex text-white font-light'><span className='text-lightBlue mr-2 text-xl font-bold'>-</span>I develop identities for brands.</li>
                    <li className='flex text-white font-light'><span className='text-lightBlue mr-2 text-xl font-bold'>-</span>A good user of adobe photoshop, illustrator & inDesign.</li>
                    <li className='flex text-white font-light'><span className='text-lightBlue mr-2 text-xl font-bold'>-</span>A creative and outstanding Designer.</li>
                    <li className='flex text-white font-light'><span className='text-lightBlue mr-2 text-xl font-bold'>-</span>Good in illustrations and digital arts.</li>
                   
                </ul>
            </div>
            <AiIcons.AiOutlineClose className='text-lightBlue text-2xl font-bold cursor-pointer md:text-xl' onClick={onClose}/>
        </div>
        <div className="bg-blue w-[500px] rounded-xl flex justify-between h-[350px] p-6 shadow-xl hidden md:h-[300px] md:flex">
            <div className="">
                <span className='text-xl font-semibold text-white'>Graphic Designer</span>
                <ul className='mt-8 flex flex-col gap-4'>
                    <li className='flex text-white font-light '><AiIcons.AiOutlineCheckCircle className='text-lightBlue text-2xl mr-2 md:text-xl '/>I develop identities for brands.</li>
                    <li className='flex text-white font-light '><AiIcons.AiOutlineCheckCircle className='text-lightBlue text-2xl mr-2 md:text-xl '/>A good user of adobe photoshop, illustrator & inDesign.</li>
                    <li className='flex text-white font-light '><AiIcons.AiOutlineCheckCircle className='text-lightBlue text-2xl mr-2 md:text-xl '/>A creative and outstanding Designer..</li>
                    <li className='flex text-white font-light '><AiIcons.AiOutlineCheckCircle className='text-lightBlue text-2xl mr-2 md:text-xl '/>Good in illustrations and digital arts.</li>
                   
                </ul>
            </div>
            <AiIcons.AiOutlineClose className='text-lightBlue text-2xl font-bold cursor-pointer md:text-xl' onClick={onClose}/>
        </div>
    </div>
  )
}

export default GraphicdesignModal
