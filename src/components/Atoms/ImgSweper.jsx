import React from 'react'
import { SwiperSlide } from 'swiper/react';

function ImgSweper({image}) {
  return (
        <>
            <img src={`../../public/images/${image}.jpg`} className='w-full lg:min-h-96 object-cover' alt="" />
        </>
     
    
  )
}

export default ImgSweper