import React from 'react'
import Content from './component/Content'
import Rating from './component/Rating'
import Testimonials from './component/Testimonials'


const Social = () => {
  return (
    
    <div className='w-full h-full grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-7 p-5 lg:p-20'>
        
        <Content />
        <Rating />
        <Testimonials />
        
    </div>
    
  )   
}

export default Social
