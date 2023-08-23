import React, {useState, useEffect} from 'react'
import CardList from '../components/CardList'
import axios from 'axios'

import { ReactComponent as Love } from '../assets/icon-love.svg'
import { ReactComponent as Search } from '../assets/icon-search.svg'
import { ReactComponent as List } from '../assets/icon-list.svg'
import { Link } from 'react-router-dom'
import NavbarBottom from '../components/NavbarBottom'

export default function Museum() {

    const [museum, setMuseum] = useState([])

    useEffect(() => {
       axios.get('/db.json').then((res) =>{
        setMuseum(res.data.museum)
       }).catch((err) => console.log(err))
    }, [])
  return (
    <div className='flex flex-col min-h-screen '>
        <div className='bg-pages-2  h-full flex justify-center mx-auto'>
            <div className='bg-pages-1 shadow-lg border-spacing-3 px-5 pt-5 '>
                <hr className='border' />
            <div className="w-full md:w-1/2 mx-auto md:text-center">
                <h1 className='mb-2.5'>List Museum at Yogyakarta</h1>
                <p className='mb-2.5'>Yogyakarta merupakan Provinsi dengan julukan Kota Pelajar atau sering juga dikenal dengan Istimewa. banyak pelajar yang datang ke jogja untuk mencari ilmu atau hanya sekedar berwisata. Salah satu wisata yang cukup populer di Yogyakarta adalah Museumnya, berikut untuk list museum yang berada di Yogyakarta :</p>
            </div>

                <section className='flex flex-wrap'>
                    {museum ? museum.map((item, index) => {
                        return (
                            <CardList key={index} item={item.id} title={item?.name} src={item?.src} address={item?.address}/>      
                        )
                    }): <div className="mx-auto"> <h1>Data Not Found</h1> </div>}   
                </section>
            </div>
        </div>
        <NavbarBottom/>
    </div>
  )
}
