import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-full bg-gradient-to-b from-gray-800
    to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full'>
        <div className='pd-8 py-3 my-20'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 '> About</p>
        <p className='text-xl mt-20'> As a Fullstack Developer with expertise in both backend and frontend development, I bring a wealth of experience in utilizing the MERN stack, Git, Github, AWS S3, Redis, HTML, CSS, JavaScript, Postman, Axios, MongoDB, Express JS, React JS, and Node JS to build high-quality applications.With my strong technical skills and knowledge of best practices, I am able to create efficient, scalable, and maintainable code. Additionally, my proficiency in Git and Github enables me to work collaboratively with teams to ensure seamless version control and code management. 
        </p>
        <br/>
        <p className='text-xl'>  My experience working with AWS S3 and Redis allows me to build reliable and robust applications that are highly available and scalable. Furthermore,
         my expertise in HTML, and JavaScript enables me to create intuitive and user-friendly interfaces that enhance the user experience. I am also proficient in utilizing Postman and Axios for API development and have extensive experience working with MongoDB, 
         and Node JS to build full-stack web applications. Overall,
         my expertise in Fullstack development and my proficiency in these technologies make me a valuable addition to any team seeking to build cutting-edge web applications.
        </p>
        </div>
      </div>
    </div>
  )
}

export default About
