import React, {useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { ReactComponent as Love } from '../assets/icon-love.svg'
import { ReactComponent as Share } from '../assets/icon-share.svg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Button from '../components/Atoms/Button';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ImgSweper from '../components/Atoms/ImgSweper';


export default function DetailMuseum() {

  const [detail, setDetail] = useState({})
  const {id} = useParams()

  useEffect(() => {
    axios.get('/db.json').then((data) => {
      const detailMuseum = data.data.museum.find(item => item.id == id)
      console.log(detailMuseum)
      setDetail(detailMuseum)
    }).catch((err) => console.log(err))
  }, [])

  return (
    <div>
      
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper mb-5">
        <SwiperSlide>
            <ImgSweper image={detail.src}/>
        </SwiperSlide>
        <SwiperSlide>
            <ImgSweper image='default'/>
        </SwiperSlide>
        <SwiperSlide>
            <ImgSweper image='default'/>
        </SwiperSlide>
        <SwiperSlide>
            <ImgSweper image='default'/>
        </SwiperSlide>
        <SwiperSlide>
            <ImgSweper image='default'/>
        </SwiperSlide>
      </Swiper>
      <section className="px-5 md:w-1/2 mx-auto">
        <div className="flex flex-1  justify-between items-center mb-5">
            <div>
                <span>Museum</span>
            </div>
            <div className='flex items-center'>
                <span className='text-button-1 me-1'>Share </span>
                <Share  className='fill-button-1 w-5'/>
            </div>
            <div className='flex items-center'>
                <span className='text-button-1 me-1'>Save </span>
                <Love  className='fill-button-1 w-5'/>
            </div>
        </div>
      
        <div>
            <h1 className="mb-5 font-bold text-4xl">{detail.name}</h1>
            <span className='mb-5 font-semibold'>Rp. 10.000</span>
            <p className="mt-2"> {detail?.description}</p>
            <Button/>
        </div>
      </section>
    </div>
  )
}
