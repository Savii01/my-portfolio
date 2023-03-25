import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'

function RenderAlertModal({visible, }) {
    if(!visible) return null;
  return (
    <div className='fixed inset-0 bg-darkBlue bg-opacity-30 backdrop-blur-sm flex justify-center items-center animate-popIn p-4'>
      {renderAlert()} 
    </div>
  )
}
const renderAlert =(onClose)=> (
<div className="px-4 py-3 text-white leading-normal flex gap-6 bg-blue rounded">
    <p>Your message submitted successfully</p> 
    <AiIcons.AiOutlineClose className='text-lightBlue text-xl font-bold cursor-pointer' onClick={onClose}/>
</div>
)
export default RenderAlertModal
