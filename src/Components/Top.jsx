import React, {useState} from 'react'
import * as AiIcons from 'react-icons/ai'
import { HashLink as Link } from 'react-router-hash-link'

function Top() {
  const [showMenu, setShowMenu] = useState(false)
// const scrollWidthOffset = (el) => {
//     const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
//     const yOffset = -80; 
//     window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
// }
  return (
    <div className='z-[999] bg-darkBlue flex justify-between items-center fixed bottom-0 h-10 right-0 left-0 px-4  md:fixed md:h-20 md:top-0 md:left-10 md:right-10 lg:right-20 lg:left-20 xl:right-40 xl:left-40'>
      <div className=' text-white md:flex py-10 md:gap-[150px] md:py-7 lg:gap-[400px] xl:gap-[800px]'>
        <span className=' font-bold' >Saviour.</span>
        <div className={`hidden md:flex`}>
            <ul className='md:flex md:gap-5 xl:gap-10 md:font-semibold md:text-sm'>
              <Link to='#home' smooth  exact 
              // scroll={el => scrollWidthOffset(el)}
              >
                <li className='cursor-pointer active:text-lightBlue'>Home</li>
              </Link>
              
              <Link to='#about' smooth  
              // scroll={el => scrollWidthOffset(el)}
              >
                <li className='cursor-pointer active:text-lightBlue'>About</li>
              </Link>  
              
              <Link to='#skills' smooth  
              // scroll={el => scrollWidthOffset(el)}
              >
                <li className='cursor-pointer active:text-lightBlue'>Skills</li>
              </Link>                            

              <Link to='#services' smooth  
              // scroll={el => scrollWidthOffset(el)}
              >
                <li className='cursor-pointer active:text-lightBlue'>Services</li>
              </Link>
                
              <Link to='#portfolio' smooth  
              // scroll={el => scrollWidthOffset(el)}
              >
                <li className='cursor-pointer active:text-lightBlue'>Portfolio</li>
              </Link>
                
              <Link to='#contact' smooth  
              // scroll={el => scrollWidthOffset(el)}
              >
                <li className='cursor-pointer active:text-lightBlue'>ContactMe</li>
              </Link>  
              
            </ul>
        </div>

      </div>
      <div>
        <AiIcons.AiOutlineMenu size={20} className={` text-white ml-[200px]  md:hidden`} onClick={()=>setShowMenu(true)}/>
        <div className= {`${!showMenu && 'hidden animate-fade'}  fixed flex left-0 pl-10 text-white top-0 pb-10 h-full w-full bg-blue border-r border-r-lightBlue sm:fixed sm:left-20 sm:text-white sm:top-0 pt-24 sm:h-full sm:w-[60%] sm:bg-darkBlue sm:border-r sm:border-r-lightBlue md:hidden`}>
              
              <ul className='justify-between intems-center flex flex-col font-semibold text-xl sm:text-xl sm:gap-10 '>
               <Link to='#home' smooth>
                  <li className='cursor-pointer mb-8' onClick={()=>setShowMenu(!showMenu)}>Home</li>
                </Link> 
                <Link to='#about' smooth>
                  <li className='cursor-pointer mb-8' onClick={()=>setShowMenu(!showMenu)}>About</li>
                </Link>
                <Link to='#skills' smooth>
                  <li className='cursor-pointer mb-8' onClick={()=>setShowMenu(!showMenu)}>Skills</li>
                </Link>
                <Link to='#services'>
                <li className='cursor-pointer mb-8' onClick={()=>setShowMenu(!showMenu)}>Services</li>
                </Link>
                <Link to='#portfolio' smooth>
                  <li className='cursor-pointer mb-8' onClick={()=>setShowMenu(!showMenu)}>Portfolio</li>
                </Link>
                <Link to='#contact' smooth>
                  <li className='cursor-pointer mb-8' onClick={()=>setShowMenu(!showMenu)}>ContactMe</li>
                </Link>
            </ul>
            <AiIcons.AiOutlineClose className='text-white text-2xl ml-[120px] mb-10' onClick={()=>setShowMenu(!showMenu)}/>
        </div>
        
      </div>
    </div>
  )
}

export default Top
