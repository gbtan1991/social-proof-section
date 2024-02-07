import React from 'react'
import Content from './component/Content'
import Rating from './component/Rating'
import Testimonials from './component/Testimonials'


const Social = () => {
  return (
    
    <div>
    <div className='w-full h-full flex flex-col gap-7 p-5 lg:p-36 '>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:px-[10%]'>
        <Content />
        <Rating />
        </div>
        <Testimonials />
        </div>        
    </div>
    
  )   
}

export default Social
