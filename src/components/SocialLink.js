import React from 'react'
import { FaGithub , FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiOutlineMail } from "react-icons/hi";

// eslint-disable-next-line
const SocialLink = () => {
   const link = [
    {
        id : 1,
        child : (<>Linkedin<FaLinkedin size={30}/></>),
        href : 'https://linkedin.com',
        style : 'rounded-tr-md'
    },
    {
        id : 2,
        child : (<>Github<FaGithub size={30}/></>),
        href : 'https://github.com',
    },
    {
        id : 3,
        child : (<>Mail<HiOutlineMail size={30}/></>),
        href : 'mailto:prathampanchariya@gmail.com',
    },
    {
        id : 4,
        child : (<>Resume<BsFillPersonLinesFill size={30}/></>),
        href : '/resume.pdf',
        style : 'rounded-br-md',
        download : true
    }
   ] 
   // eslint-disable-next-line
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        { link.map(({ id , child , href , style , download})=><li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' + " " + style }>
            <a href={href} className='flex justify-between itmes-center
             w-full text-white'
             download={download}
             target="_black"  
             >
                {child}
        </a></li> ) }
        
      </ul>
    </div>
  )
}

export default SocialLink
