import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800
    to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full'>
        <div className='pd-8 py-3'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'> About</p>
        </div>
        <p className='text-xl mt-20'> Hello and welcome! My name is Pratham Pancahriya, and I am a passionate backend developer with a background in computer science.
        </p>
        <br/>
        <p className='text-xl'> During my college years, I had the privilege of working with Arham Marketing, where I gained valuable experience in the industry and honed my skills as a developer. I also completed an internship at India I Tech, where I had the opportunity to work on exciting projects and collaborate with talented individuals.
        </p>
        <p className='text-xl'> After my internship, I was fortunate enough to become a backend developer trainee at Funtion Up, where I further developed my technical expertise and learned to work effectively in a team setting.
        </p><br/>
        <p className='text-xl'> Since then, I have been freelancing for Digital Shaarthi, where I have had the pleasure of working with various clients and honing my communication and project management skills.
        <br/> <br/>I am a firm believer in staying up-to-date with the latest technologies and industry trends, and I am constantly seeking to expand my knowledge and skill set.
        <br/> <br/>In my free time, I enjoy exploring new technologies, reading books, and staying active.
        <br/> <br/>Thank you for taking the time to read my bio, and I look forward to potentially working with you!
        </p>
      </div>
    </div>
  )
}

export default About
