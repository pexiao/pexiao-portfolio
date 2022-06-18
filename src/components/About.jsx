import React from 'react'
import profilePicture from '../assets/ProfilePicture.JPG';
import portrait from '../assets/portrait.png'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-primary text-gray-300'>
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                <div className="sm:text-right pb-8 pl-4 flex justify-end items-end">
                    <p className="text-4xl font-bold inline border-b-4 border-indigo-500">
                        About
                    </p>
                </div>

                <div className="sm:text-left pb-8 pr-4 h-72 flex items-end">
                    <img src={portrait} alt="Profile Picture" className='w-auto max-h-full rounded-full' />
                </div>
            </div>

            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                <div className='sm:text-right text-3xl font-bold'>
                    <p> Hi, I'm Peng, nice to meet you. Please take a look around.</p>
                </div>

                <div>
                    <p> I am passionate about building software. I want to specialize in full stack development and want to impact as many lives as possible through my projects.
                        Mostly, I am flexible enough to create builds for small-scale businesses to large scale corporations. 
                    </p>
                </div>
            </div>


        </div>
    </div>
  )
}

export default About