import React from 'react'
import Image from 'next/image'
import { getProviders, signIn } from 'next-auth/react'

function signInPage({ providers }) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <div className='relative h-20 w-80 -mt-56 text-center'>
            <Image src='https://links.papareact.com/ocw' layout='fill' objectFit='contain' alt='' />
        </div>

        <p className='text-gray-400'>Starting today meet amazing people!</p>

        <div className='mt-10'>
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                <button className='p-3 bg-blue-500 
                    rounded-lg text-white hover:bg-blue-400 transition-all duration-150 ease-out' 
                    onClick={() => signIn(provider.id, {
                        callbackUrl: '/'
                    })}>
                    Sign in with {provider.name}
                </button>
                </div>
            ))}
        </div>
    </div>
  )
}

export async function getServerSideProps() {
    const providers = await getProviders()

    return {
        props: {
            providers
        }
    }
}

export default signInPage