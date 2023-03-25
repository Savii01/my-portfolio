import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'

function FullstackModal({visible, onClose}) {

    if(!visible) return null;

  return (
    <div className='fixed inset-0 bg-darkBlue bg-opacity-30 backdrop-blur-sm flex justify-center items-center animate-popIn p-4'>
        <div className="bg-blue w-[500px] rounded-xl flex justify-between h-[300px] p-6 shadow-xl md:h-[250px] md:hidden">
            <div className="">
                <span className='text-xl font-semibold text-white'>Full-Stack Developer</span>
                <ul className='mt-8 flex flex-col gap-4'>
                    <li className='flex text-white font-light '><span className='text-lightBlue text-xl font-bold mr-2'>-</span>I develop fontends and backends.</li>
                    <li className='flex text-white font-light '><span className='text-lightBlue text-xl font-bold mr-2'>-</span>Good user of HTML, CSS AND JS.</li>
                    <li className='flex text-white font-light '><span className='text-lightBlue text-xl font-bold mr-2'>-</span>Creation of backends using Node.js and MSSQL.</li>
                    <li className='flex text-white font-light '><span className='text-lightBlue text-xl font-bold mr-2'>-</span>Creative and a professional.</li>
                   
                </ul>
            </div>
            <AiIcons.AiOutlineClose className='text-lightBlue text-xl font-bold cursor-pointer' onClick={onClose}/>
        </div>
        <div className="bg-blue w-[500px] rounded-xl flex justify-between hidden h-[300px] p-6 shadow-xl md:h-[250px] md:flex">
            <div className="">
                <span className='text-xl font-semibold text-white'>Full-Stack Developer</span>
                <ul className='mt-8 flex flex-col gap-4'>
                    <li className='flex text-white font-light '><AiIcons.AiOutlineCheckCircle className='text-lightBlue text-xl  mr-2'/>I develop fontends and backends.</li>
                    <li className='flex text-white font-light '><AiIcons.AiOutlineCheckCircle className='text-lightBlue text-xl  mr-2'/>Good user of HTML, CSS AND JS.</li>
                    <li className='flex text-white font-light '><AiIcons.AiOutlineCheckCircle className='text-lightBlue text-xl  mr-2'/>Creation of backends using Node.js and MSSQL.</li>
                    <li className='flex text-white font-light '><AiIcons.AiOutlineCheckCircle className='text-lightBlue text-xl  mr-2'/>Creative and a professional.</li>
                   
                </ul>
            </div>
            <AiIcons.AiOutlineClose className='text-lightBlue text-xl font-bold cursor-pointer' onClick={onClose}/>
        </div>
    </div>
  )
}

export default FullstackModal
