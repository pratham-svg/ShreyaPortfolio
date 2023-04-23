import React from 'react'
import {MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'
import Shreya from '../assets/portfolio/ShreyaSingh.jpeg'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black
    via-black  to-gray-800 '>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center
       justify-center h-full px-4 md:flex-row'>
      <div className='flex flex-col justify-center h-full '>
        <h2 className='text-3xl py-3 sm:text-5xl w-full text-white
         font-bold'>I'm a Mern Stack Developer</h2>
        <p className='text-gray-400 py-4 max-w-md'> I am a firm believer in staying up-to-date with the latest technologies and industry trends, and I am constantly seeking to expand my knowledge and skill set.
        </p>
        <div><Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2
        flex items-center rounded-md bg-gradient-to-r from-red-500 to-orange-400
         cursor-pointer'>Portfolio<span className='group-hover:rotate-90 duration-300'> 
            <MdOutlineKeyboardArrowRight size={25}/></span></Link>
            </div>
        </div>
        <div><img src={Shreya} alt='my profile'
             className='rounded-2xl mx-auto w-2/3 md:w-2/3'></img></div>
      </div>
    </div>
  )
}

export default Home