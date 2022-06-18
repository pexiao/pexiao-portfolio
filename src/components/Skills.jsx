import React from 'react'

import { FaHtml5, FaCss3Alt, FaGithub, FaReact, FaUnity, FaNodeJs} from 'react-icons/fa'

import {SiTailwindcss} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io5'

const Skills = () => {
  return (
    <div name='skills' className='bg-primary text-gray-300 w-full md:h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-indigo-500'> Skills </p>
                <p className='py-4'> Technologies I mainly specialize </p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-3 text-center py-4'>

                <div className='flex flex-col items-center'>
                    <div className='bg-white text-orange-500 icon-wrapper'>
                        <FaHtml5 size = {80}/> 
                    </div>
                    <p className='icon-text-wrapper'> HTML 5 </p>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='bg-white text-blue-500 icon-wrapper'>
                        <FaCss3Alt size = {80}/> 
                    </div>
                    <p className='icon-text-wrapper'> CSS 3 </p>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='bg-white text-yellow-400 icon-wrapper'>
                        <IoLogoJavascript size = {80}/> 
                    </div>
                    <p className='icon-text-wrapper'> Javascript </p>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='bg-white text-blue-400 icon-wrapper'>
                        <FaReact size = {80}/> 
                    </div>
                    <p className='icon-text-wrapper'> React.js </p>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='bg-white text-green-500 icon-wrapper'>
                        <FaNodeJs size = {80}/> 
                    </div>
                    <p className='icon-text-wrapper'> Node.js </p>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='bg-white text-blue-300 icon-wrapper'>
                        <SiTailwindcss size = {80}/> 
                    </div>
                    <p className='icon-text-wrapper'> Tailwind </p>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='bg-white text-gray-800 icon-wrapper'>
                        <FaUnity size = {80}/> 
                    </div>
                    <p className='icon-text-wrapper'> Unity </p>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='bg-white text-black icon-wrapper'>
                        <FaGithub size = {80}/> 
                    </div>
                    <p className='icon-text-wrapper'> Github </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills