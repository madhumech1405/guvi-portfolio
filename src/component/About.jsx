import React from 'react'
import AboutImag from '../assets/about.png'
function About() {
    const config={
        line1:"Hi ,my name is  j MADHUSUDHANAN .i am full stack developer .i built websittes with react.js, mango db ,HTML,CSS,tailwindcsc. ",
        line2:"i am  proficaient front skills like react,js ,Redux,redux tool kit ,axios ,css,and many more",
        line3:"in backend i know node.js .express.js,Manogodb and mongosse"
    }
  return (
    <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className=' py-5 md:w-1/2'>
            <img src={AboutImag}/>
        </div>
        <div className='md:w-1/2 flex justify-center '>
            <div className='flex flex-col justify-center  text-white'>
            <h1 className='text-4xl text-white border-b-4 border-primary mb-2 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5' >{config.line1}</p>
            <p  className='pb-5'>{config.line2}</p>
            <p className='pb-5'>{config.line3} </p>
            </div>
        </div>

    </section>
  )
}

export default About