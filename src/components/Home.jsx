import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-primary'>
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white">
            <p className='text-indigo-500 font-semibold mb-2'>Hi, my name is </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-gray-300 mb-2'>Peng Xiao</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-gray-400 mb-2'>I'm a Full-Stack Developer.</h2>
            <p className='text-indigo-500 font-semibold mb-2'>I am an inspiring full stack developer specializing in developing modern graphicial interfaces. Currently, I want to focus on building fully responsive full stack web applications</p>
        
            <div>
                <Link to="work" smooth={true} duration={600}>
                    <button className='text-white group border-2 rounded-full px-6 py-3 my-2 flex items-center hover:bg-indigo-500 hover:border-primary hover:text-primary'> View Work 
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3'/>    
                        </span> 
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home