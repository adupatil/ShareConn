import {configureStore} from '@reduxjs/toolkit';
import postReducer from './features/posts/postSlice';
import userReducer from './features/user/userSlice';
const initialState={}

const store=configureStore({
    reducer:{
        user:userReducer,
        posts:postReducer
    }
})
export default store;

