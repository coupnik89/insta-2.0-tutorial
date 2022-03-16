import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'

import { useSession } from 'next-auth/react'

import Story from './Story'

function Stories() {
    const [suggestions, setsuggestions] = useState([])

    const { data: session } = useSession()

    useEffect(() => {
      const data = [...Array(20)].map((_, i) => ({
          ...faker.helpers.contextualCard(),
          id: i
      }))

      setsuggestions(data)
    }, [])

  return (
    <div className='flex space-x-3 p-6 bg-white mt-8 border border-gray-200 
    rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-900 scroll scrollbar-track-gray-100"'>
        {session && (
            <Story key={session.user.uid} 
                img={session.user.image} 
                username={session.user.username} />
        )}
        
        {suggestions.map(user => (
            <Story key={user.id} img={user.avatar} username={user.username} />
        ))}
    </div>
  )
}

export default Stories