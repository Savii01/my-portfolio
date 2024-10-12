import React from 'react'
import Me from '../images/me.jpg'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'


function About() {
 

  return (
    <div className='py-10 md:py-40 md:pb-40 flex flex-col justify-between items-center animate-fade-In' id='about'>
        <div className='xl:mb-10'>
            <h1 className='text-white font-bold text-center text-3xl '>About Me</h1>
            <p className='text-blueWhite text-sm text-center'>A  little Thing to know about me.</p>
        </div>
        <div className='flex  lg:flex lg:gap-10 xl:ml-[200px]'>
            <div className='mt-10  flex flex-col'>
                <img src={Me} alt="" className='w-[200px] h-[200px] object-cover self-center rounded-[20px] md:w-[1600px] md:h-[350px] lg:w-[1200px] lg:h-[350px] xl:h-[400px] xl:w-[800px]' />
                <p className='text-white  text-base font-thin mt-5 text-center md:hidden '>A dedicated and creative graphic artist and web developer 
                with experience working in deadline-driven environments and a strong focus on working within budget constraints. Skilled at planning, 
                developing, and executing original design concepts for a variety of projects.
                </p>
                 <div className='text-blueWhite  flex justify-center items-center gap-10  mt-7 md:gap-20 md:hidden'>
                    <div className="justify-center items-center flex flex-col">
                        <span className='text-sm  font-bold'>03+</span> 
                        <span className='text-sm  font-bold text-center'>Years <br/>Experience</span>
                    </div>
                    <div className="justify-center items-center flex flex-col">
                        <span className='text-sm  font-bold'>15+</span> 
                        <span className='text-sm  font-bold text-center'>Projects <br/>Done</span>
                    </div>
                    <div className="justify-center items-center flex flex-col">
                        <span className='text-sm  font-bold'>03+</span> 
                        <span className='text-sm  font-bold text-center'>Companies <br/>Worked</span>
                    </div>
                </div>
                <a target='_blank' rel='noreferrer' href='https://tinyurl.com/mr2j2p4p '>
                    <button className='ml-20 text-white bg-blue w-[170px] px-4 py-4 flex gap-2 rounded-md mt-7 hover:text-darkBlue hover:animate-headShake hover:bg-lightBlue md:hidden'>Download CV<BsIcons.BsDownload className='font-bold text-xl'/> </button>
                </a>
            </div>
            <div className=' text-blueWhite mt-5 hidden md:ml-5 md:mt-10 md:block'>
                <p className='text-white leading-[2rem] text-center hidden md:text-left md:flex md:pr-20 xl:pr-[300px]'>A dedicated and creative graphic artist and web developer with experience working 
                in deadline-driven environments and a strong focus on working within budget constraints. Skilled at planning, developing, 
                and executing original design concepts for a variety of projects.
                </p>
                <div className='flex font-bold gap-10 mt-10 md:gap-20'>
                    <div className="flex  flex-col">
                        <span className='text-sm  font-bold'>03+</span> 
                        <span className='text-sm  font-bold '>Years <br/>Experience</span>
                    </div>
                    <div className="flex flex-col">
                        <span className='text-sm  font-bold'>15+</span> 
                        <span className='text-sm  font-bold '>Projects <br/>Done</span>
                    </div>
                    <div className="flex flex-col">
                        <span className='text-sm  font-bold'>03+</span> 
                        <span className='text-sm  font-bold '>Companies <br/>Worked</span>
                    </div>
                </div>
               <a target='_blank' rel='noreferrer' href='http://https://tinyurl.com/mr2j2p4p '>
                    <button className='bg-blue w-[170px] px-4 py-4 text-white flex gap-2 rounded-md mt-10 hover:bg-lightBlue hover:animate-headShake hover:text-darkBlue'>Download CV<BsIcons.BsDownload className='font-bold text-xl'/> </button>
                </a> 
            </div>
        </div>
    </div>
  )
}

export default About
