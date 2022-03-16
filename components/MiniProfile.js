import React from 'react'
import Image from 'next/image'

import { useSession, signOut } from 'next-auth/react'

function MiniProfile() {
    const {data: session} = useSession()

  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
        <div className='relative bg-pink-400 h-16 w-16 rounded-full'>
            <Image
                className='rounded-full' 
                src={session?.user?.image} layout='fill' objectFit='contain' alt=''/>
        </div>

        <div className='flex-1 mx-4'>
            <h2 className='font-bold'>{session?.user?.username}</h2>
            <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
        </div>

        <button onClick={signOut} className='text-blue-400 text-sm font-semibold'>Sign out</button>
    </div>
  )
}

export default MiniProfile