import React from 'react'
import URLs from '../assets/portfolio/URLs.jpg'
import aarogya from '../assets/portfolio/aarogya.jpg'
import bma from '../assets/portfolio/bma.jpg'
import News from '../assets/portfolio/News.jpg'
import shop from '../assets/portfolio/shop.jpg'
import intern from '../assets/portfolio/inten.jpg'

const Portfolio = () => {
    const portfolio = [
        {
            id : 1,
            src : shop,
            link :  'https://github.com/pratham-svg/ShopingCartFrontend'  ,
        },
        {
            id : 2,
            src : aarogya,
            link : 'https://github.com/pratham-svg/Backend-Developer-Assignment---Arogya-setu'  ,
        },
        {
            id : 3,
            src : bma,
            link : 'https://github.com/dk7696822/Project-3-Book-Management'  ,
        },
        {
            id : 4,
            src : News,
            link :  'https://github.com/pratham-svg/Pratham-s-News'  ,
        },
        {
            id : 5,
            src : URLs,
            link :  'https://github.com/dk7696822/Project-4-URL-Shortner'  ,
        },
        {
            id : 6,
            src : intern,
            link :  'https://github.com/AliAbbas547/functionUp-project2/tree/Project2/internship/Group18'  ,
        },
    ]
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800
     w-full text-white md:h-screen'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center
      w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4
            border-gray-500'>Portfolio</p>
            <p className='py-6'>Check out some of my work right here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8
        px-12 sm:px-0'>
            { portfolio.map(({id , src , link })=>
              <div key={id} className='shadow-md shadow-gray-400 rounded-lg'>
              <img src={src} alt='' className='rounded-md duration-200
              hover:scale-105' />
              <div className=' flex items-center justify-center'>
                <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={link}>Demo</a></button> 
                <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={link}>code</a></button>
              </div>
              </div> )}
      
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Portfolio
