import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'

function Work({visible, onClose}) {
    if(!visible) return null;

  return (
    <div className='justify-center items-center flex flex-col '>
        <span className="text-darkBlue font-semibold bg-lightBlue p-2 pl-4 w-[170px] rounded-md mt-4 flex cursor-pointer" onClick={onClose}>Click to close<AiIcons.AiOutlineClose className='text-darkBlue text-2xl ml-2 md:text-xl '/></span>
        <div className="flex justify-center gap-5 mt-10">
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <span className="text-base text-blueWhite font-bold">Lead Designer</span>
                    <span className="text-base text-blueWhite font-regular">Andrews Design</span>
                    <span className="text-sm text-grayBlue  flex items-center gap-2"><FaIcons.FaCalendar className=''/> 2020 - Present</span>
                </div>
                <div className="flex flex-col mt-[100px] md:mt-[90px] ">
                    <span className="text-base text-blueWhite font-bold">Lead Designer</span>
                    <span className="text-base text-blueWhite font-regular">De_Nsentip Twins<br/> Foundation</span>
                    <span className="text-sm text-grayBlue  flex items-center gap-2"><FaIcons.FaCalendar className=''/>2021 - 2022</span>
                </div>

            </div>
            <div className='w-[2px] h-72 md:h-60 bg-lightBlue relative'>
                <div className="w-3 h-3 rounded-full absolute right-[-5px] bg-lightBlue"></div>
                <div className="w-3 h-3 rounded-full absolute right-[-5px] bg-lightBlue mt-20"></div>
                <div className="w-3 h-3 rounded-full absolute right-[-5px] bg-lightBlue mt-44 md:mt-40"></div>
                <div className="w-3 h-3 rounded-full absolute right-[-5px] bg-lightBlue mt-72 md:mt-60"></div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col mt-20 ">
                    <span className="text-base text-blueWhite font-bold">Fullstack Developer</span>
                    <span className="text-base text-blueWhite font-regular">High Tech Synergy</span>
                    <span className="text-sm text-grayBlue  flex items-center gap-2"><FaIcons.FaCalendar className=''/>2022 - Present</span>
                </div>
                <div className="flex flex-col mt-[130px] md:mt-[90px] ">
                    <span className="text-base text-blueWhite font-bold">Junior Graphic designer</span>
                    <span className="text-base text-blueWhite font-regular">Create8 studios</span>
                    <span className="text-sm text-grayBlue  flex items-center gap-2"><FaIcons.FaCalendar className=''/>2021 - 2022</span>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Work
