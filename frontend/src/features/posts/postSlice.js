import {createSlice} from "@reduxjs/toolkit";
import axios from 'axios'

const initialState={
    user_posts:[],
    followed_posts:[]
}

const postSlice=createSlice({
    name:'posts',
    initialState,
    reducers:{
        fetch_user_posts:(state,action)=>{
            state.user_posts=action.payload
        },
        fetch_followed_posts:(state,action)=>{
            state.followed_posts=action.payload
        },
        increment_post_likes:(state,action)=>{
            const {option,post_id}=action.payload
           const gotPost= state[option].find(post=>post.id===post_id)
           gotPost.num_likes+=1
        },
        decrement_post_likes:(state,action)=>{
            state[action.payload.option].num_likes-=1
        },
        get_comments:(state)=>{
            state=state
        },
        add_comment:(state,action)=>{
            state=state
        },
        delete_comment:(state,action)=>{
            state=state
        }

    }
})
export const {increment_post_likes,decrement_post_likes,get_comments,add_comment,delete_comment,fetch_user_posts,fetch_followed_posts}=postSlice.actions
export default postSlice.reducer

export const fetchUserPosts=(uid)=>dispatch=>{
    axios.get(`http://127.0.0.1:8000/api/posts/`)
    .then(posts=>{
        console.log(posts.data)
        
        dispatch(fetch_user_posts(posts.data))
    }).catch((err)=>{
        if(err.response){
            console.log('res err')
        }if(err.request){
            console.log('req err')
        }
    })
}