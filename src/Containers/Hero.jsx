import React from 'react'
import {aipic} from '../Assets'
const Hero = () => {
  return (
    <section className='w-full px-16 p-6 bg-section'>
        <div className='flex flex-row max-lg:flex-col'>
            <div className='flex items-center'>
                <h1 className='text-[40px]'> <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500'>iBlog</span> <br/> 
                
                <span className='text-purple-200 max-lg:mt-7'>
                    Creating Tomorrow’s World Today.
                </span> 
                <p className='text-white text-xl max-lg:mt-2 max-lg:text-base'>ESET anti-virus man graphics art, ESET NOD32 Antivirus software Computer virus Malware, Blue robots, blue, png Material, electronics png </p>
                </h1>
                
            </div>
            <div className='max-lg:mt-10'><img src={aipic} alt="" /></div>
        </div>
    </section>
    )
}

export default Hero