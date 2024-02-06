import React from 'react'
import Content from './component/Content'
import Rating from './component/Rating'
import Testimonials from './component/Testimonials'


const Social = () => {
  return (
    
    <div className='w-full h-full flex flex-col gap-7 p-5'>
        <Content />
        <Rating />
        <Testimonials />
    </div>
    
  )   
}

export default Social
