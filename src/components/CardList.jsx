import React, { useState } from 'react'
import { ReactComponent as Love } from '../assets/icon-love.svg'
import Button from './Atoms/Button'
import { Link } from 'react-router-dom'

function CardList({...props}) {
    const {title, src, address, item} = props
    const [toggle, setToggle] = useState(false)

    const clickLove = () => {
        setToggle(!toggle)
    }
  return (
    <div className='w-full mb-5 lg:w-1/4 md:w-1/3 lg:px-2 md:px-2'>
            <div className="relative">
            <Link to={`/museum/${item}`}> 
                <img src={`images/${src ?? 'default'}.jpg`} alt="" className='w-full h-60 rounded-lg mb-2 object-cover' />
            </Link>
                <div onClick={clickLove} className='absolute bottom-0 right-0 bg-emerald-100 w-10 h-10 opacity-90  rounded-br-md rounded-tl-md hover:bg-button-1 hover:fill-font-1 cursor-pointer'>
                    <Love  className={`p-2 ${toggle ?  'bg-button-1 fill-font-1 rounded-br-md rounded-tl-md hover:bg-font-1 hover:fill-button-1'  : 'fill-button-1 hover:fill-font-1 '}`}/>
                </div>
            </div>
            <h3>{title}</h3>
            <p>{address}</p>
            <Button/>
    </div>
  )
}

export default CardList