import React from 'react'
import Image from 'next/image'

function Story({ img, username, }) {
  return (
    <div>
        {/* <div className='relative h-16 w-16'>
            <Image src={avatar} className='rounded-full' 
                layout='fill' objectFit='contain' alt='' priority />
        </div> */}
        <div className='relative h-12 w-12 rounded-full p-2 ring-2 ring-offset-2 ring-purple-900
            cursor-pointer hover:scale-110 transition duration-200 ease-out overflow-hidden mb-1'>
            <Image src={img} layout='fill' objectFit='cover' alt='' />
        </div>
        
        <p className='text-xs w-14 truncate text-center'>{username}</p>
    </div>
  )
}

export default Story