import React, {useState} from 'react'; 
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'; 
import { BsFillPersonLinesFill } from 'react-icons/bs'
import profilePicture from '../assets/ProfilePicTransparent.png' 
import {Link} from 'react-scroll'

const NavBar = () => {
    const [nav, setNav] = useState(false); 
    const handleClick = () => setNav(!nav); 

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-primary text-gray-300 ">
        <div className="image-container-wrapper">
            <img src={profilePicture} alt="Logo" className="rounded-xl" style={{width: '44px', height: '44px'}} />
        </div>

        {/* Menu */}
        
        <ul className='hidden md:flex'>
            <Link to="home" smooth={true} duration={600}> 
                <li className='hover:text-indigo-600 duration-300 pt-2 pb-2 hover:bg-indigo-200 rounded-xl font-semibold'> 
                        Home 
                </li>
            </Link>
            
            <Link to="about" smooth={true} duration={600}> 
                <li className='hover:text-indigo-600 duration-300 pt-2 pb-2 hover:bg-indigo-200 rounded-xl font-semibold'> 
                        About
                </li>
            </Link>

            <Link to="skills" smooth={true} duration={600}> 
                <li className='hover:text-indigo-600 duration-300 pt-2 pb-2 hover:bg-indigo-200 rounded-xl font-semibold'> 
                        Skills 
                </li>
            </Link>

            <Link to="work" smooth={true} duration={600}> 
                <li className='hover:text-indigo-600 duration-300 pt-2 pb-2 hover:bg-indigo-200 rounded-xl font-semibold'> 
                        Work 
                </li>
            </Link>

            <Link to="contact" smooth={true} duration={600}> 
                <li className='hover:text-indigo-600 duration-300 pt-2 pb-2 hover:bg-indigo-200 rounded-xl font-semibold'> 
                        Contact 
                </li>
            </Link>
            
        </ul>

        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'> <Link onClick={handleClick} to="home" smooth={true} duration={600}> Home </Link> </li>
            <li className='py-6 text-4xl'> <Link onClick={handleClick} to="about" smooth={true} duration={600}> About </Link> </li>
            <li className='py-6 text-4xl'> <Link onClick={handleClick} to="skills" smooth={true} duration={600}> Skills </Link>  </li>
            <li className='py-6 text-4xl'> <Link onClick={handleClick} to="work" smooth={true} duration={600}> Work </Link> </li>
            <li className='py-6 text-4xl'> <Link onClick={handleClick} to="contact" smooth={true} duration={600}> Contact </Link>  </li>
        </ul>

        {/* Social Icons */}
        <div className="hidden lg:flex fixed flex-col top-[10%] left-0">
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between rounded-md items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a href="https://www.linkedin.com/in/pe-xiao" target="blank" className='flex justify-between items-center w-full text-gray-300 font-bold'>
                        Linked-in <FaLinkedin  size={30}/> 
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between rounded-md items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800'>
                    <a href="https://github.com/pexiao" target="blank" className='flex justify-between items-center w-full text-gray-300 font-bold'>
                        Github <FaGithub  size={30}/> 
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between rounded-md items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-indigo-500'>
                    <a href="https://drive.google.com/file/d/14gGBCXvcAzE_NlnMXKM7ur9WDCYz1IIv/view?usp=sharing" target="blank" className='flex justify-between items-center w-full text-gray-300 font-bold'>
                        Resume <BsFillPersonLinesFill  size={30}/> 
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default NavBar