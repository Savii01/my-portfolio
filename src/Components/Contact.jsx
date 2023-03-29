import React,{useState, useEffect} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'
import emailjs from '@emailjs/browser';


function Contact() {
const [values, setValues] = useState({
name: '',
email: '',
project: '',
message: '',
});

const[status, setStatus] = useState('')

const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send( 'service_mmth5pk', 'template_0m923pd', values, 'GkIsYsVg1DFXt89o6' )
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text );
            setValues({
                name:'',
                email: '',
                project: '',
                message: '',
            })
            setStatus('SUCCESS')
        }, function(error){
            console.log('FAILED...', error);
    })
}

useEffect(() => {
   if (status==='SUCCESS'){
    setTimeout(() => {
        setStatus('');
    }, 3000)
   }
}, [status]);

const handleOnChange = (e) =>{
    setValues(values =>({
        ...values,
        [e.target.name]: e.target.value
    }))
}


console.log(values)


  return (
    <div className='py-10 md:pt-40 md:mb:20 flex flex-col justify-between items-center' id='contact'>
       <div className=''>
            <h1 className='text-white font-bold text-center text-3xl '>Contact Me</h1>
            <p className='text-blueWhite text-sm text-center'>Let's Get In Touch.</p>
        </div>
        {status && renderAlert()} 
        <div className="mt-20 grid grid-col-2 gap-10 md:flex text-white text-xl">
            <div className="flex flex-col gap-3">
                <div className="flex gap-4 md:gap-3 items-center">
                    <FaIcons.FaPhone className='rotate-[100deg] text-lightBlue text-4xl md:text-3xl'/>
                    <div className="flex flex-col">
                        <span className='font-medium text-xl'>Call Me</span>
                        <span className='text-grayBlue text-[14px]'>+234-904-915-2073</span>
                    </div>
                </div>
                <div className="flex gap-4 md:gap-4 items-center">
                    <FaIcons.FaEnvelope className='text-lightBlue text-4xl md:text-3xl'/>
                    <div className="flex flex-col">
                        <span className='font-medium tex-2xl'>Email</span>
                        <span className='text-grayBlue text-[14px]'>saviourandrew889@gmail.com</span>
                    </div>
                </div>
                <div className="flex gap-4 md:gap-3 items-center">
                    <AiIcons.AiFillEnvironment className='text-lightBlue text-4xl md:text-3xl '/>
                    <div className="flex flex-col">
                        <span className='font-medium text-xl'>Address</span>
                        <span className='text-grayBlue text-[14px]'>..Nigeria</span>
                    </div>
                </div>
            </div>
            
            <form  onSubmit={handleSubmit}>
                <div className="  md:flex md:gap-5">
                    <div>
                      <input value={values.name}  name='name' type="text" placeholder="Name*" onChange={handleOnChange} className='outline-0 mb-5  text-[14px] bg-blue pt-[3px] px-[20px]  w-full h-[50px] rounded-md focus:border focus:border-lightBlue' required={true}/>
                    </div>
                    <div>
                        <input value={values.email}  name='email' type="text" placeholder="Email*" onChange={handleOnChange} className='outline-0 mb-5  text-[14px] bg-blue pt-[3px] px-[20px] w-full h-[50px] rounded-md focus:border focus:border-lightBlue' required={true}/>
                    </div>
                </div>
                <div>
                   <input value={values.project}  name='project' type="text" placeholder="Project*" onChange={handleOnChange} className='outline-0 mb-5  text-[14px] bg-blue pt-[3px] px-[20px] w-full h-[50px] rounded-md focus:border focus:border-lightBlue' required={true}/>
                </div>
                <div>
                   <textarea value={values.message}  name='message' rows='4' type="text" placeholder="Message*" onChange={handleOnChange} className='outline-0  text-[14px] bg-blue pt-[3px] px-[20px] w-full h-[150px] rounded-md focus:border focus:border-lightBlue' required={true}/>
                </div>
                 <button type='submit' className='ml-16 md:ml-0 bg-blue w-[120px] px-4 py-4 text-white text-base flex gap-2 rounded-md mt-10 items-center hover:bg-lightBlue hover:animate-headShake hover:text-darkBlue'>Send <FaIcons.FaArrowRight className='font-medium text-base'/> </button>
            </form>
        </div>
    </div>
  )
}
const renderAlert =()=> (
<div className="px-4 py-3 text-white leading-normal bg-blue rounded">
    <p>Your message submitted successfully</p>
</div>
)


export default Contact
