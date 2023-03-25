import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'
import FullstackModal from './FullstackModal'
import GraphicdesignModal from './GraphicdesignModal'
import WebDesignerModal from './WebDesignerModal'

function Services() {
    const [showFrontendModal, setShowFrontendModal] = useState(false);
    const [showGraphicdesignModal, setShowGraphicdesignModal] = useState(false);
    const [showWebdesignModal, setShowWebdesignModal] = useState(false);
   
    const handleOnCloseFrontend = () => setShowFrontendModal(false)
    const handleOnCloseGraphic = () => setShowGraphicdesignModal(false)
    const handleOnCloseWeb = () => setShowWebdesignModal(false)


  return (
    <div className='py-10 md:py-40 flex flex-col justify-between items-center' id='services'>
       <div className=''>
            <h1 className='text-white font-bold text-center text-3xl '>Services</h1>
            <p className='text-blueWhite text-sm text-center'>My Services.</p>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 mt-20">
            <div className='flex flex-col gap-4 bg-blue pt-20 py-10 pr-20 px-10 rounded-[5px] hover:scale-105  hover:shadow-xl'>
                <FaIcons.FaCode className='text-lightBlue text-3xl'/>
                <div className="flex flex-col gap-4">
                    <span className="text-xl font-semibold text-white">Full Stack<br/> developer</span>
                    <span className="text-sm font-medium flex text-white hover:text-lightBlue gap-2 cursor-pointer items-center " onClick={()=> setShowFrontendModal(true)}>View More <FaIcons.FaArrowRight className='text-sm ml-2'/></span>
                </div>
            </div>
            <div className='flex flex-col gap-4 bg-blue pt-20 py-10 pr-20 px-10 rounded-[5px] hover:scale-105  hover:shadow-xl'>
                <FaIcons.FaLaptopCode className='text-lightBlue text-3xl'/>
                <div className="flex flex-col gap-4">
                    <span className="text-xl font-semibold text-white">Web<br/> designer</span>
                    <span className="text-sm font-medium flex text-white hover:text-lightBlue gap-2 cursor-pointer items-center " onClick={()=> setShowWebdesignModal(true)}>View More <FaIcons.FaArrowRight className='text-sm ml-2'/></span>
                </div>
            </div>
            <div className='flex flex-col gap-4 bg-blue pt-20 py-10 pr-20 px-10 rounded-[5px] hover:scale-105  hover:shadow-xl'>
                <FaIcons.FaPaintBrush className='text-lightBlue text-2xl'/>
                <div className="flex flex-col gap-4">
                    <span className="text-xl font-semibold text-white">Graphic<br/> designer</span>
                    <span className="text-sm font-medium flex text-white hover:text-lightBlue gap-2 cursor-pointer items-center " onClick={()=> setShowGraphicdesignModal(true)}>View More <FaIcons.FaArrowRight className='text-sm ml-2'/></span>
                </div>
            </div>
            <div>
                <FullstackModal onClose={handleOnCloseFrontend} visible={showFrontendModal} />
                <GraphicdesignModal onClose={handleOnCloseGraphic} visible={showGraphicdesignModal} />
                <WebDesignerModal onClose={handleOnCloseWeb} visible={showWebdesignModal} />
            </div>
        </div>
    </div>
  )
}

export default Services 
