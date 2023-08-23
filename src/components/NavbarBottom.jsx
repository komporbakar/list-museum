import React from 'react'

import { ReactComponent as Love } from '../assets/icon-love.svg'
import { ReactComponent as Search } from '../assets/icon-search.svg'
import { ReactComponent as List } from '../assets/icon-list.svg'
import { Link } from 'react-router-dom'

export default function NavbarBottom() {
  return (
    <div className='sticky bottom-5  mx-auto w-2/5 flex flex-nowrap justify-between bg-pages-1 shadow  rounded-xl lg:hidden'>
        <div className='flex ps-3 py-2 items-center'>
            <Search  className='fill-button-1 w-6'/>
        </div>
        <div className='flex items-center px-3 rounded-lg  bg-teal-100 -my-0.5'>
            <Link to='/museum'>
                <List  className='fill-button-1 w-6'/>
            </Link>
        </div>
        <div className='flex items-center pe-3 py-2'>
            <Love  className='fill-button-1 w-6 '/>
        </div>
    </div>
  )
}
