import { configureStore } from '@reduxjs/toolkit'

import postsReducer from './postsSlice'
import modalReducer from './modalSlice'

const store = configureStore({
  reducer: {
    posts: postsReducer,
    modal: modalReducer
  }
})

export default store