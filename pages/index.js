import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Header from '../components/Header'
import { useEffect } from 'react'

import styles from '../styles/Home.module.css'

import { useDispatch } from 'react-redux'
import { getPosts } from '../redux/postsSlice'
import axios from 'axios'
import Modal from '../components/Modal'
import { selector } from 'recoil'

export default function Home({ posts }) {
  return (
    <div className='bg-gray-50 h-screen
      overflow-y-scroll scrollbar-hide'>
      <Head>
        <title>Insta 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Modal */}
      <Modal />

      {/* Feed */}
      <Feed />
    </div>
  )
}

// export async function getStaticProps() {
//     const {data} = await axios('https://jsonplaceholder.typicode.com/posts')

//     return {
//         props: {
//             posts: data.slice(0, 10)
//         }
//     }
// }