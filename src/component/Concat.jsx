import React from 'react'
import { AiOutlineFacebook, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";
import AboutImg from '../assets/about.png'

export default function Contat() {
  const config={
    subtitle:"im full stack developer",
    social:{
      twitter:'https://twitter.com/madhusudhananJ5',
      facebook:"https://www.facebook.com/profile.php?id=100010157941391",
      linkedin:"https://www.linkedin.com/in/madhusudhanan-j-13907a199/"
    }
  }
  return (
    <section className='flex  flex-col md:flex-row  bg-primary  px-5'id='concat' >

      <div className='py-5  w-1/2 justify-center md:justify-start' >
      
        <div className="flex ">

          <a href={config.social.facebook}><AiOutlineFacebook  size={40}/></a>   
      <a href={config.social.twitter}className="pr-5 hover:text-white"  ><AiOutlineTwitter size={40} /> </a>
      <a href={config.social.facebookn} className="hover:text-white"><AiOutlineLinkedin size={40}/> </a>
    </div>

    <div className=' flex px3  py-5 mb-3' >
      
       
        <small className=' text-bold '>OR</small>
    
        
      </div>
      <div className='px-5 py-1'>
      
        <input className='mb-3' type='text' name="name" placeholder='write your name'/>

      </div>
      <div className='px-5 py-1'>
        <input className="mb-3" type='email' name='email' placeholder='enter you email '/>
      </div>
      <div className='px-5 py-1 '>
        
        <input className='mb3  h-10 'type='mag ' placeholder='witre your massgge'/>
      
      </div>
      <div className='px-5 py-5'>
        <button className='btn' type='sumbit'>send massgge</button>
      </div>
      </div>

      <div className="md:w-1/3 justify-end  py-5 ">
      <img src={AboutImg} />
      </div>
      
    


    
 
  


    </section>
  )
}