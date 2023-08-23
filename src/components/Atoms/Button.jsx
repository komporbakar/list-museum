import React from 'react'

function Button({title}) {
  return (
    <div>
        <a href="" className='bg-button-1 flex w-1/3  justify-center mx-auto py-2 px-3  text-font-1 rounded-2xl my-3'>{title ?? 'Buy Ticket'}</a>
    </div>
  )
}

export default Button