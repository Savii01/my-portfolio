import React,{useState, useRef} from 'react'
import About from '../Components/About'
import Home from '../Components/Home'
import Top from '../Components/Top'
import Skills from '../Components/Skills'
import {Router,Routes,Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Services from '../Components/Services'
import Portfolio from '../Components/Portfolio'
import Contact from '../Components/Contact'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'
import { HashLink as Link } from 'react-router-hash-link'


function LandingPage() {
   const [showMenu, setShowMenu] = useState(false)
  return (
    
    <BrowserRouter>
      <div className='font-sans'>
        <div className='bg-darkBlue  my-[150px] px-10 px-5  sm:px-20 md:px-10 lg:px-20 xl:px-40'>
          <Top className='mb-20'/> 
          <Home className='mb-20'/>
          <About className='mb-20'/>
          <Skills className='mb-20'/>
          <Services className='mb-20'/>
          <Portfolio className='mb-20'/>
          <Contact/>
        </div>

    <div className="bg-lightBlue text-darkBlue text-4xl px-10 md:px-40 py-20">
      <div className="md:flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-5xl font-bold">Saviour.</span>
          <span className='text-xl font-medium'>Fullstack developer</span>
        </div>
        <div className={`text-sm md:flex`}>
            <ul className='md:flex md:gap-5 md:font-semibold md:text-sm'>
              <Link to='#skills' smooth>
                  <li className='cursor-pointer mb-4 md:hover:text-white md:hover:bg-darkBlue md:hover:px-5 md:hover:py-2 md:hover:rounded' onClick={()=>setShowMenu(!showMenu)}>Skills</li>
                </Link>
                <Link to='#services'>
                <li className='cursor-pointer mb-4 md:hover:text-white md:hover:bg-darkBlue md:hover:px-5 md:hover:py-2 md:hover:rounded' onClick={()=>setShowMenu(!showMenu)}>Services</li>
                </Link>
                <Link to='#portfolio' smooth>
                  <li className='cursor-pointer mb-4 md:hover:text-white md:hover:bg-darkBlue md:hover:px-5 md:hover:py-2 md:hover:rounded' onClick={()=>setShowMenu(!showMenu)}>Portfolio</li>
                </Link>
                <Link to='#contact' smooth>
                  <li className='cursor-pointer mb-4 md:hover:text-white md:hover:bg-darkBlue md:hover:px-5 md:hover:py-2 md:hover:rounded' onClick={()=>setShowMenu(!showMenu)}>ContactMe</li>
                </Link>
            </ul>
          </div>
          <div className='grid grid-cols-3 gap-5 md:pr-10 lg:pr-20 '>
            <a target='_blank' rel='noreferrer' href='https://github.com/Savii01'>
              <FaIcons.FaGithub className='text-darkBlue hover:text-white hover:bg-darkBlue hover:px-2 hover:text-4xl hover:py-2 hover:rounded cursor-pointer text-2xl '/>
            </a>
            <a target='_blank' rel='noreferrer' href='https://twitter.com/Savii_01'>
              <FaIcons.FaTwitter className='text-darkBlue hover:text-white hover:bg-darkBlue hover:px-2 hover:text-4xl hover:py-2 hover:rounded cursor-pointer text-2xl '/>
            </a>
            <a target='_blank' rel='noreferrer' href='https://www.instagram.com/andrewsdesign_/'>
              <FaIcons.FaInstagram className='text-darkBlue hover:text-white hover:bg-darkBlue hover:px-2 hover:text-4xl hover:py-2 hover:rounded cursor-pointer text-2xl '/>
            </a>
            <a target='_blank' rel='noreferrer' href='https://api.whatsapp.com/send/?phone=2349049152073&text&type=phone_number&app_absent=0'>
              <FaIcons.FaWhatsapp className='text-darkBlue hover:text-white hover:bg-darkBlue hover:px-2 hover:text-4xl hover:py-2 hover:rounded cursor-pointer text-2xl '/>
            </a>
            <a  target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/saviour-andrew1/'>
              <FaIcons.FaLinkedin className='text-darkBlue hover:text-white hover:bg-darkBlue hover:px-2 hover:text-4xl hover:py-2 hover:rounded cursor-pointer text-2xl '/>
            </a>
            <a target='_blank' rel='noreferrer' href='https://web.facebook.com/anthony.saviour.942/'>
              <FaIcons.FaFacebook className='text-darkBlue hover:text-white hover:bg-darkBlue hover:px-2 hover:text-4xl hover:py-2 hover:rounded cursor-pointer text-2xl '/>
            </a>
          </div>
        </div>
        <span className="text-sm text-grayBlue flex justify-center items-center gap-2"><AiIcons.AiOutlineCopyright className=''/>Saviour. All rights reserved</span>


      </div>
      
      
    </div>
    </BrowserRouter>
 
  )
}

export default LandingPage
