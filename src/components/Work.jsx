import React from 'react'
import { FaGithub } from 'react-icons/fa'

const workData = [
    {
        "title" : "Neon Blade Impetus",
        "description" : "A unity game made in collaboration with others. Mainly, my role focused on implementing the level design and creation of the map itself.",
        "link" : "https://github.com/bhillig/Project-Slasher" 
    },
    {
        "title" : "Slice the Pie",
        "description" : "Slice the Pie is a website for a final project for a website programming class at UC Davis. The website compares user's allocation with the actual allocation of UC Davis's budget using React.",
        "link" : "https://github.com/pexiao/DavisBudgetComparison"
    },
    {
        "title" : "3D Interactive Space",
        "description" : "A 3D interactive modeling interface using WebGl2 to enforce concepts of computer graphics such as texture mapping, modeling, shaders, lighting, and much more.",
        "link" : "https://github.com/pexiao/3DInteractiveModeler"
    }
]

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-primary'>

        <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border-indigo-500'> Work </p>
                <p className='py-6'> Check out some of my work: </p>
            </div>


            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {workData.map(data => (<WorkCard 
                    title={data.title} 
                    description={data.description} 
                    link={data.link} />))}
            </div>
        </div>
    </div>
  )
}

const WorkCard = (props) => {
  return (
    <div>
        <div className='bg-white hover:bg-gray-100 shadow-lg shadow-gray-600 rounded-lg group container flex flex-col justify-center items-center mx-auto content-div'>
            <div className='flex flex-col p-4 w-full h-full'>
                <h1 className='text-3xl font-bold text-black'> {props.title} </h1>
                <p className='text-indigo-500 font-semibold pt-4'> {props.description} </p>
            </div>
            
            <div className='w-full flex justify-end p-2'>
                <a href={props.link} target="blank" className='hover:scale-110 hover:duration-500 text-gray-700 hover:text-indigo-500'>
                    <FaGithub size={50}/>
                </a>
            </div>
        </div>
    </div>
  )
}


export default Work