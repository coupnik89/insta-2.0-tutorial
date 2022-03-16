import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import store from '../../redux/store'
import Post from './[id]'

import axios from 'axios'

function Posts() {
    // const posts = useSelector(state => state.posts)

    // console.log(posts);
    const posts = [
        {
            id: '123',
            username: 'sangian',
            userImg: 'https://links.papareact.com/3ke',
            img: 'https://links.papareact.com/3ke',
            caption: 'Something cool is happening. Fucking this place'
        }
    ]

  return (
    <div>
        {posts.map(post => (<Post key={post.id} post={post} />))}
    </div>
  )
}

export default Posts
