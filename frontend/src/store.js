import {configureStore} from '@reduxjs/toolkit';
import postReducer from './features/posts/postSlice';
import userReducer from './features/user/userSlice';
import generalReducer from './features/general/generalSlice';
const initialState={
    
}

const store=configureStore({
    reducer:{
        user:userReducer,
        posts:postReducer,
        general:generalReducer
        
    }
})
export default store;

