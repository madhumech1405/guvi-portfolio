import React from 'react'
import ResumeImag from '../assets/resume.jpg'
function Resume() {
  const config={
    link:'https://drive.google.com/file/d/1YlO7Xtnhl5LO2KZweaEiBmCza0PDErmc/view?usp=drive_link'
     }
    

    
  return (
    <section id= "resume" className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className=' py-5 md:w-1/2 flex justify-center md:justify-end' >
            <img className='w-[300px]' src={ResumeImag}/>
        </div>
        <div className='md:w-1/2 flex justify-center '>
            <div className='flex flex-col justify-center  text-white'>
            <h1 className='text-4xl text-white border-b-4 border-primary mb-2 w-[170px] font-bold'>Resume</h1>
            <p className='pb-5'>you can view my resume <a className='btn' href={config.link}>Downlaod</a></p>
           
            </div>
        </div>

    </section>
  )
}

export default Resume