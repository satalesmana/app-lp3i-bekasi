import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer/counterSlice'
import massageReducer from './reducer/messageSlice'
import userReducer from './reducer/userSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    message: massageReducer
  }
})