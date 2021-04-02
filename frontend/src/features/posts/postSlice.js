import {createSlice} from "@reduxjs/toolkit";
import axios from 'axios'

const initialState={
    user_posts:[],
    followed_posts:[],
    addPost:'none'
}

const postSlice=createSlice({
    name:'posts',
    initialState,
    reducers:{
        add_new_post:(state,action)=>{
            state.addPost=action.payload
        },
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
        },
        logout_user:(state)=>{
            state.user_posts=[]
            state.followed_posts=[]
            state.addPost='none'
        }

    }
})
export const {increment_post_likes,decrement_post_likes,get_comments,add_comment,delete_comment,fetch_user_posts,fetch_followed_posts,add_new_post,logout_user}=postSlice.actions
export default postSlice.reducer

export const addNewPost=(val)=>dispatch=>{
    dispatch(add_new_post(val))
}

export const fetchUserPosts=(uid)=>(dispatch,getState)=>{
    let users_posts=[]
    let followed_posts=[]
    axios.get(`api/posts/`)
    .then(posts=>{
        posts.data.forEach(post=>{
            if(post.user_id==uid){
                users_posts.push(post)
            }
        })
        console.log(users_posts)
        dispatch(fetch_user_posts(users_posts))
        
    
    }).catch((err)=>{
        if(err.response){
            console.log('res err')
        }if(err.request){
            console.log('req err')
        }
    })
}