import React from 'react'

import {FaGithub, FaLinkedin} from 'react-icons/fa'; 
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  return (
    <div id="contact" name="contact" className='w-full h-screen bg-primary text-gray-300 flex justify-center items-center p-4'>
        <div className='flex flex-col'>
            <div className='flex items-center py-3'>
                <a href="mailto:penxiao099@gmail.com" target="blank">
                    <HiOutlineMail size={40} className="w-7 sm:w-10" />
                </a>
                <h3 className='text-1xl sm:text-2xl md:3xl font-semibold px-2'> pengxiao099@gmail.com </h3>
            </div>
            
            <div className='flex items-center py-3'>
                <a href="https://github.com/pexiao" target="blank">
                    <FaGithub size={40} className="w-7 sm:w-10"/> 
                </a>
                
                <h3 className='text-1xl sm:text-2xl md:3xl font-semibold px-2'> https://github.com/pexiao </h3>
            </div>
            
            <div className='flex items-center py-3'>
                <a href="https://www.linkedin.com/in/pe-xiao" target="blank">
                    <FaLinkedin size={40} className="w-7 sm:w-10"/>
                </a>
                
                <h3 className='text-1xl sm:text-2xl md:3xl font-semibold px-2'> https://www.linkedin.com/in/pe-xiao </h3>
            </div>
        </div>

    </div>
  )
}

export default Contact