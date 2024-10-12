import React from 'react'
import Photo1 from '../images/photo1.png'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'
import { HashLink as Link } from 'react-router-hash-link'


function Home() {
  return (

    <div className='py-10 md:py-32 md:flex lg:w-[1400px] justify-center items-center' id='home'>
      <div className='flex flex-col md:flex justify-between items-center animate-fadeInLeft'>
        <div className='w-[400px] md:w-[800px] animate-fadeInRight  md:hidden'>
           <img src={Photo1} alt="photo1" />
        </div>
        <div className='flex mb-10 md:flex-col gap-5 md:pr-10 lg:pr-20 '>
          <a target='_blank' rel='noreferrer' href='https://github.com/Savii01'>
            <FaIcons.FaGithub className='text-blueWhite hover:text-lightBlue cursor-pointer text-2xl hover:animate-headShake'/>
          </a>
          <a target='_blank' rel='noreferrer' href='https://twitter.com/Savii_01'>
          <FaIcons.FaTwitter className='text-blueWhite hover:text-lightBlue cursor-pointer text-2xl hover:animate-headShake'/>
          </a>
          <a target='_blank' rel='noreferrer' href='https://www.instagram.com/andrewsdesign_/'>
            <FaIcons.FaInstagram className='text-blueWhite hover:text-lightBlue cursor-pointer text-2xl hover:animate-headShake'/>
          </a>
          <a target='_blank' rel='noreferrer' href='https://api.whatsapp.com/send/?phone=2349049152073&text&type=phone_number&app_absent=0'>
            <FaIcons.FaWhatsapp className='text-blueWhite hover:text-lightBlue cursor-pointer text-2xl hover:animate-headShake'/>
          </a>
          <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/saviour-andrew1/'>
            <FaIcons.FaLinkedin className='text-blueWhite hover:text-lightBlue cursor-pointer text-2xl hover:animate-headShake'/>
          </a>
          <a target='_blank' rel='noreferrer' href='https://web.facebook.com/anthony.saviour.942/'>
            <FaIcons.FaFacebook className='text-blueWhite hover:text-lightBlue cursor-pointer text-2xl hover:animate-headShake'/>
          </a>
        </div>
       
      </div>
      <div className=' text-center md:text-left flex flex-col gap-2 text-white animate-fadeIn'>
        <h1 className='font-semibold text-4xl lg:text-5xl '>Hi, I'm Saviour</h1>
        <p className='text-blueWhite font-medium text-xl lg:text-2xl '>Full stack developer/Graphic Design</p>
        <p className='text-white text-base font-thin mt-2  lg:pr-20'>High level experience in web design and graphic designing with knowledge required in the production of quality work and services.
        </p>
        <Link to='#contact' smooth className='active:text-lightBlue' >
          <button className='ml-24 md:ml-0 text-white bg-blue font-medium py-4 px-2 w-[140px] text-center rounded-md mt-5 hover:bg-lightBlue hover:text-darkBlue hover:animate-headShake flex gap-2'>Contact Me <FaIcons.FaPaperPlane className=' font-bold text-xl '/></button>
        </Link>
      </div>
      <div className=' w-[600px] top-10 hidden md:block md:right-0 md:w-[800px] animate-fadeInRight'>
        <img src={Photo1} alt="photo1"  />
      </div>
    </div>
  )
}

export default Home
