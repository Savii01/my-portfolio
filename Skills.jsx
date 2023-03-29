import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'
import Work from './Work'
import Education from './Education'

function Skills() {
    const [showWork, setShowWork] = useState(false)
    const [showEducation, setShowEducation] = useState(false)
    const [isOpenFront, setIsOpenFront] = useState(false)
    const [isOpenBack, setIsOpenBack] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenWeb, setIsOpenWeb] = useState(false)

    const handleCloseEducation = () => setShowEducation(false)
    const handleCloseWork = () => setShowWork(false)
 
  return (
    <div className='py-10  md:py-40 flex flex-col justify-between items-center' id='skills'>
        <div className=''>
            <h1 className='text-white font-bold text-center text-3xl '>My Skills</h1>
            <p className='text-blueWhite text-sm text-center'>My Design and Technical Skills.</p>
        </div>
        <div className='md:grid md:grid-cols-2 md:gap-5 md:mt-10 lg:gap-10 xl:gap-20'>
            <div>
                <div className='flex text-xl justify-between items-center gap-5 mt-5 cursor-pointer' onClick={()=>setIsOpenFront(!isOpenFront)}>
                    <FaIcons.FaCode className='text-lightBlue '/>
                    <div className="flex flex-col font-medium"> 
                        <span className='text-white '>Frontend Developer</span>
                        <span className='text-sm  text-grayBlue '>More Than 6 months</span>
                    </div>
                    <FaIcons.FaChevronDown className='text-lightBlue'/>
                </div>
                <div className={`${!isOpenFront && 'hidden'}`}>
                    <div className='mt-5'>
                        <div className='flex justify-between mb-2'>
                            <span className="text-white">HTML</span>
                            <span className="text-white">90%</span>
                        </div>
                        <div className='w-[300px] h-2 bg-lightBlueWhite rounded-full'>
                            <div className='w-[250px] h-full bg-blue rounded-full'></div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='flex justify-between mb-2'>
                            <span className="text-white">CSS</span>
                            <span className="text-white">70%</span>
                        </div>
                        <div className='w-[300px] h-2 bg-lightBlueWhite rounded-full'>
                            <div className='w-[200px] h-full bg-blue rounded-full'></div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='flex justify-between mb-2'>
                            <span className="text-white">Tailwind CSS</span>
                            <span className="text-white">90%</span>
                        </div>
                        <div className='w-[300px] h-2 bg-lightBlueWhite rounded-full'>
                            <div className='w-[250px] h-full bg-blue rounded-full'></div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='flex justify-between mb-2'>
                            <span className="text-white">Sass CSS</span>
                            <span className="text-white">80%</span>
                        </div>
                        <div className='w-[300px] h-2 bg-lightBlueWhite rounded-full'>
                            <div className='w-[220px] h-full bg-blue rounded-full'></div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='flex justify-between mb-2'>
                            <span className="text-white">Javascript</span>
                            <span className="text-white">50%</span>
                        </div>
                        <div className='w-[300px] h-2 bg-lightBlueWhite rounded-full'>
                            <div className='w-[150px] h-full bg-blue rounded-full'></div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='flex justify-between mb-2'>
                            <span className="text-white">React js</span>
                            <span className="text-white">70%</span>
                        </div>
                        <div className='w-[300px] h-2 bg-lightBlueWhite rounded-full'>
                            <div className='w-[200px] h-full bg-blue rounded-full'></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <div className='flex text-xl justify-between items-center gap-5 mt-5 cursor-pointer' onClick={()=>setIsOpenBack(!isOpenBack)}>
                    <FaIcons.FaDatabase className='text-lightBlue '/>
                    <div className="flex flex-col font-medium"> 
                        <span className='text-white '>Backend Developer</span>
                        <span className='text-sm  text-grayBlue '>More Than 6 months</span>
                    </div>
                    <FaIcons.FaChevronDown className='text-lightBlue'/>
                </div>
                <div className={`${!isOpenBack && 'hidden'}`}>
                    <div className='mt-5'>
                    <div className='flex justify-between mb-2'>
                        <span className="text-white">Node Js</span>
                        <span className="text-white">50%</span>
                    </div>
                    <div className='w-[300px] h-2 bg-lightBlueWhite rounded-full'>
                        <div className='w-[150px] h-full bg-blue rounded-full'></div>
                    </div>
                </div>
                <div className='mt-5'>
                    <div className='flex justify-between mb-2'>
                        <span className="text-white">MsSql</span>
                        <span className="text-white">70%</span>
                    </div>
                    <div className='w-[300px] h-2 bg-lightBlueWhite rounded-full'>
                        <div className='w-[200px] h-full bg-blue rounded-full'></div>
                    </div>
                </div>
                <div className='mt-5'>
                    <div className='flex justify-between mb-2'>
                        <span className="text-white">MongoDB</span>
                        <span className="text-white">90%</span>
                    </div>
                    <div className='w-[300px] h-2 bg-lightBlueWhite rounded-full'>
                        <div className='w-[250px] h-full bg-blue rounded-full'></div>
                    </div>
                </div>
                
                </div>
            
            </div>

            <div>
                <div className='flex text-xl justify-between items-center gap-5 mt-5 cursor-pointer ' onClick={()=>setIsOpen(!isOpen)}>
                    <FaIcons.FaPaintBrush className='text-lightBlue '/>
                    <div className="flex flex-col font-medium"> 
                        <span className='text-white '>Graphic Designer</span>
                        <span className='text-sm  text-grayBlue '>More Than 6 months</span>
                    </div>
                    <FaIcons.FaChevronDown className='text-lightBlue'/>
                </div>
                <div className={`${!isOpen && 'hidden'}`}>
                    <div className='mt-5'>
                        <div className='flex justify-between mb-2'>
                            <span className="text-white">Adobe Photoshop</span>
                            <span className="text-white">90%</span>
                        </div>
                        <div className='w-[300px] h-2 bg-lightBlueWhite rounded-full'>
                            <div className='w-[250px] h-full bg-blue rounded-full'></div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='flex justify-between mb-2'>
                            <span className="text-white">Adobe Illustrator</span>
                            <span className="text-white">80%</span>
                        </div>
                        <div className='w-[300px] h-2 bg-lightBlueWhite rounded-full'>
                            <div className='w-[240px] h-full bg-blue rounded-full'></div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='flex justify-between mb-2'>
                            <span className="text-white">Adobe InDesign</span>
                            <span className="text-white">70%</span>
                        </div>
                        <div className='w-[300px] h-2 bg-lightBlueWhite rounded-full'>
                            <div className='w-[220px] h-full bg-blue rounded-full'></div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='flex justify-between mb-2'>
                            <span className="text-white">Canva</span>
                            <span className="text-white">90%</span>
                        </div>
                        <div className='w-[300px] h-2 bg-lightBlueWhite rounded-full'>
                            <div className='w-[250px] h-full bg-blue rounded-full'></div>
                        </div>
                    </div>
                </div>           
            </div>
            <div>
                <div className='flex text-xl justify-between items-center gap-5 mt-5 cursor-pointer ' onClick={()=>setIsOpenWeb(!isOpenWeb)}>
                    <FaIcons.FaLaptopCode className='text-lightBlue '/>
                    <div className="flex flex-col font-medium"> 
                        <span className='text-white '>Web Designer</span>
                        <span className='text-sm  text-grayBlue '>More Than 6 months</span>
                    </div>
                    <FaIcons.FaChevronDown className='text-lightBlue'/>
                </div>
                <div className={`${!isOpenWeb && 'hidden'}`}>
                    <div className='mt-5'>
                        <div className='flex justify-between mb-2'>
                            <span className="text-white">Word Press</span>
                            <span className="text-white">90%</span>
                        </div>
                        <div className='w-[300px] h-2 bg-lightBlueWhite rounded-full'>
                            <div className='w-[250px] h-full bg-blue rounded-full'></div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='flex justify-between mb-2'>
                            <span className="text-white">Wix</span>
                            <span className="text-white">80%</span>
                        </div>
                        <div className='w-[300px] h-2 bg-lightBlueWhite rounded-full'>
                            <div className='w-[240px] h-full bg-blue rounded-full'></div>
                        </div>
                    </div>
                </div>           
            </div>
        </div>
        {/* Qualification */}
        <div className='py-20 md:py-24 flex flex-col justify-between items-center'>
            <div className=''>
                <h1 className='text-white font-bold text-center text-3xl '>Qualification</h1>
                <p className='text-blueWhite text-sm text-center'>My career journey</p>
                <p className='text-white text-center text-[12px]'>Click on <span className='font-medium'>Education</span> and on <span className='font-medium'>Work</span> to see details</p>
            </div>
            <div>
                <div className="flex text-white mt-5 justify-center gap-6 items-center ">
                    <span className='flex gap-2 hover:text-lightBlue cursor-pointer ' onClick={()=>setShowEducation(true)}><FaIcons.FaGraduationCap className='text-2xl'/>Education</span>
                    <div className='w-1 h-5 bg-white mx-6'></div>
                    <span className='flex gap-2 hover:text-lightBlue cursor-pointer' onClick={()=>setShowWork(true)}><FaIcons.FaBriefcase className='text-xl'/>Work</span>
                </div>

                {/* Education */}
               <Education onClose={handleCloseEducation} visible={showEducation}/>
                {/* Work */}
               <Work onClose={handleCloseWork} visible={showWork}/>
            </div>
        </div>
    </div>
  )
}

export default Skills
