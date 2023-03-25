import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'
import { Link } from 'react-router-dom'
import GraphicDesign from '../images/graphdes.jpg'
import WebDesign from '../images/webdes.jpg'
import WebDev from '../images/webdev.jpg'

function Portfolio() {
  return (
    <div className='py-10 md:py-40 flex flex-col justify-between items-center' id='portfolio'>
       <div className=''>
            <h1 className='text-white font-bold text-center text-3xl '>Portfolio</h1>
            <p className='text-blueWhite text-sm text-center'>Some of my works.</p>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 mt-20">
            <div className='flex flex-col gap-4 bg-blue pt-10 py-10 pl-15 px-5 rounded-[5px]  hover:shadow-xl hover:scale-105'>
                <img src={WebDev} alt='design_image' className='h-[140px]'/>
                <FaIcons.FaCode className='text-lightBlue text-3xl'/>
                <div className="flex flex-col gap-4">
                    <span className="text-xl font-semibold text-white">Full Stack developer</span>
                    <a  target='_blank' rel='noreferrer' href='https://tinyurl.com/2p9u4brv'>
                        <span className="text-sm font-medium flex text-white hover:text-lightBlue cursor-pointer items-center" >View More Website and Web Apps <FaIcons.FaArrowRight className='text-sm ml-2'/></span>
                    </a>                    
                </div>
            </div>
            <div className='flex flex-col gap-4 bg-blue pt-10 py-10 pl-15 px-5 rounded-[5px]  hover:shadow-xl hover:scale-105'>
                <img src={WebDesign} alt='design_image' className='h-[140px]'/>
                <FaIcons.FaLaptopCode className='text-lightBlue text-3xl'/>
                <div className="flex flex-col gap-4">
                    <span className="text-xl font-semibold text-white">Web Designer</span>
                    <a target='_blank' rel='noreferrer' href='https://tinyurl.com/4b9t3vns'>
                        <span className="text-sm font-medium flex text-white hover:text-lightBlue cursor-pointer items-center" >View More Website Designs <FaIcons.FaArrowRight className='text-sm ml-2'/></span>
                    </a>
                </div>
            </div>
            <div className='flex flex-col gap-4 bg-blue pt-10 py-10 pl-15 px-5 rounded-[5px]  hover:shadow-xl hover:scale-105'>
                <img src={GraphicDesign} alt='design_image' className='h-[140px]'/>
                <div className="flex flex-col gap-4">
                    <FaIcons.FaPaintBrush className='text-lightBlue text-2xl'/>
                    <span className="text-xl font-semibold text-white">Graphic designer</span>
                    <a target='_blank' rel='noreferrer' href='http://bitly.ws/BToy'>
                        <span className="text-sm font-medium flex text-white hover:text-lightBlue cursor-pointer items-center">View More Designs <FaIcons.FaArrowRight className='text-sm ml-2'/></span>
                    </a>
                </div>
        </div>
    </div>
    </div>
  )
}

export default Portfolio
