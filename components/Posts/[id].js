import React from 'react'
import Image from 'next/image'

import { ChatIcon, PaperAirplaneIcon, DotsHorizontalIcon, HeartIcon, BookmarkIcon, EmojiHappyIcon} from '@heroicons/react/outline'

import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'

function Post({ post }) {
  return (
    <div className='bg-white my-7 border border-rounded-sm'>
        <div className='flex items-center p-5'>
            <div className='relative h-12 w-12 mr-3'>
                <Image 
                className='rounded-full'
                src={post.img} alt='' layout='fill' objectFit='contain'/>
            </div>
            {/* <img className='rounded-full h-12 w-12 object-contain
            border p-1 mr-3' src={post.userImg} alt="" /> */}
            <p className='mr-auto font-bold'>{post.username}</p>
            <DotsHorizontalIcon className='h-5' />
        </div>

        <div className='relative h-96'>
            <Image className='' src={post.img} layout='fill' objectFit='cover' alt=''/>
        </div>

        <div className='flex justify-between px-4 pt-4'>
            <div className='flex space-x-4'>
                <HeartIcon className='iconBtn' />
                <ChatIcon className='iconBtn' />
                <PaperAirplaneIcon className='iconBtn' />
            </div>

            <BookmarkIcon className='iconBtn' />
        </div>

        <p className='p-5 truncate'>
            <span className='font-bold mr-1'>{post.username}</span> {post.caption}
        </p>

        <form className='flex items-center p-4'>
            <EmojiHappyIcon className='h-7 mr-2'/>
            <input type="text" placeholder='Add a comment...' className='border-none flex-1 focus:ring-0 outline-none'/>
            <button className='text-lg font-semibold text-blue-400'>Post</button>
        </form>
    </div>
  )
}

export default Post