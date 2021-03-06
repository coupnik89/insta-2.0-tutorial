import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router'

import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
} from '@heroicons/react/outline'

import { HomeIcon } from '@heroicons/react/solid'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRecoilState } from 'recoil'
import { ModalState } from '../atoms/modalAtom'
import { useSelector } from 'react-redux'
import store from '../redux/store'
import { useDispatch } from 'react-redux'
import { changeState } from '../redux/modalSlice'

function Header() {
    const { data: session } = useSession()
    // const [open, setOpen] = useRecoilState(ModalState)
    const modal = useSelector(state => state.modal)
    const dispatch = useDispatch()

    const router = useRouter()

    console.log(modal);

  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
        <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
            <div className='relative hidden lg:inline-grid w-24 cursor-pointer'>
                <Image 
                    src='https://links.papareact.com/ocw' 
                    layout='fill' 
                    objectFit='contain' 
                    alt=''
                    onClick={() => router.push('/')}/>
            </div>

            <div className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
                <Image 
                    src='https://links.papareact.com/jjm' 
                    layout='fill' 
                    objectFit='contain' 
                    alt=''
                    onClick={() => router.push('/')}/>
            </div>
     

            <div className='relative mt-1 p-3 bg-pink'>
                <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                    <SearchIcon className='h-5 text-gray-500' />
                </div>
                <input className='bg-gray-50 block w-full pl-10 sm:text-sm 
                 py-2 rounded-md border border-gray-300 focus:bg-white focus:border-purple-300 focus:outline-none' type="text" placeholder='Search' />
            </div>

            <div className='flex items-center justify-end space-x-4'>
                <HomeIcon className='navBtn' onClick={() => router.push('/')}/>
                <MenuIcon className='h-6 md:hidden cursor-pointer'/>
                
                {session ? (
                    <>
                        <div className='relative navBtn'>
                            <PaperAirplaneIcon className='navBtn rotate-45'/>
                            <div className='absolute -top-1 -right-3 text-xs w-5 h-5 
                            bg-violet-600 rounded-full flex items-center justify-center text-white animate-pulse'>3</div>
                        </div>

                        <PlusCircleIcon 
                            className='navBtn'
                            onClick={() => dispatch(changeState())} />
                        <UserGroupIcon className='navBtn' />
                        <HeartIcon className='navBtn' />

                        <div className='relative h-10 w-10'>
                            <Image 
                                onClick={signOut}
                                className='rounded-full cursor-pointer'
                                // src='/img/user-18.jpg' 
                                src={session?.user?.image}
                                layout='fill' 
                                objectFit='contain' 
                                alt='' />
                        </div>
                    </>
                ) : (
                    <button onClick={signIn}>Sign In</button>
                )}

                
            </div>
        </div>
    </div>
  )
}

export default Header