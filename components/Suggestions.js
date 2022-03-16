import faker from '@faker-js/faker'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

function Suggestions() {
    const [suggestions, setsuggestions] = useState([])

    useEffect(() => {
        const suggestions = [...Array(5)].map((_, i) => ({ 
            ...faker.helpers.contextualCard(),
            id: i
        }))

        setsuggestions(suggestions)
    }, [])

  return (
    <div className='mt-4 ml-10'>
        <div className='flex justify-between text-sm mb-5'>
            <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
            <button className='text-gray-600 font-semibold'>See All</button>
        </div>

        {
            suggestions.map(profile => (
                <div key={profile.id} className='flex items-center justify-between mt-3'>
                    <div className='relative h-10 w-10 rounded-full ring-offset-2 ring-1 ring-gray-300'>
                        <Image className='rounded-full' src={profile.avatar} layout='fill' objectFit='contain' alt='' />
                    </div>

                    <div className='flex-1 ml-4'>
                        <h2 className='font-semibold text-sm'>{profile.username}</h2>
                        <h3 className='text-xs text-gray-400'>Works at {profile.company.name}</h3>
                    </div>

                    <button className='font-semibold text-sm text-blue-400'>Follow</button>
                </div>
            ))
        }
    </div>
  )
}

export default Suggestions