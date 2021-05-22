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
        add_user_posts:(state,action)=>{
            state.user_posts.push(action.payload)
        },
        fetch_followed_posts:(state,action)=>{
            
            state.followed_posts.push(...action.payload)
        },
        add_followed_posts:(state,action)=>{
            state.followed_posts.push(action.payload)
        },
        increment_post_likes:(state,action)=>{
          
            const {option,post_id}=action.payload
            console.log(option)
          console.log(post_id)
          console.log(state[option])
           const gotPost= state[option].find(post=>post.id===post_id)
           
           gotPost.num_likes+=1
        },
        increment_comment:(state,action)=>{
          
            const {option,post_id}=action.payload
            console.log(option)
          console.log(post_id)
           const gotPost= state[option].find(post=>post.id===parseInt(post_id))
           
           gotPost.num_comments+=1
        },
        decrement_post_likes:(state,action)=>{
       
            const {option,post_id}=action.payload
           const gotPost= state[option].find(post=>post.id===post_id)
           console.log(gotPost)
           gotPost.num_likes-=1
        },
        delete_post:(state,action)=>{
            console.log(action.payload)
            const {option,post_id}=action.payload
            state[option]= state[option].filter(post=>post.id!==post_id)
          
       

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
export const {increment_post_likes,decrement_post_likes,get_comments,add_comment,delete_comment,fetch_user_posts,fetch_followed_posts,add_new_post,logout_user,add_user_posts,add_followed_posts,delete_post,increment_comment}=postSlice.actions
export default postSlice.reducer

export const addNewPost=(val)=>dispatch=>{
    dispatch(add_new_post(val))
}
export const addUserPost=(obj)=>(dispatch)=>{
    console.log('adding post')
    console.log(obj);
    axios.post('api/posts/',obj,{headers:{'Content-Type':'multipart/form-data'}})
        .then(data=>{
            console.log(data)
            console.log('post data from api ')
            console.log(data.data)
            dispatch(add_user_posts(data.data))
        })
        .catch(err=>console.log(err))
}

export const fetchUserPosts=(uid)=>(dispatch,getState)=>{
    let users_posts=[]
    let followed_posts=[]
    axios.get(`api/posts/`)
    .then(posts=>{
        
        posts.data.forEach(post=>{
         
            if(post.user_id==uid){
                users_posts.push(post)
            }if(getState().user.users_followed.includes(post.user_id)){
                
                followed_posts.push(post)
            }
        })
       
        dispatch(fetch_user_posts(users_posts))
        dispatch(fetch_followed_posts(followed_posts))


        
    
    }).catch((err)=>{
        if(err.response){
            console.log('res err')
        }if(err.request){
            console.log('req err')
        }
    })
}


export const addSubconnPost=(data)=>(dispatch)=>{
    axios.post('api/subconns_posts/',data)
    .then(res=>{
        console.log(res.data)
        dispatch(add_followed_posts(res.data))
    })
}



export const fetchSubconnsPosts=()=>(dispatch,getState)=>{
    axios.get(`api/subconns_posts/`)
    .then(res=>{
        console.log('------------=======')
        console.log(res.data)
        let arr=[]
        res.data.forEach(spost=>{
            console.log(getState().user.subconns_following.includes(1))
            console.log(spost)
            if( getState().user.subconns_following.includes(spost.subconn)){
                console.log('in tre')
                arr.push(spost)
            }
        })
        dispatch(fetch_followed_posts(arr))
    })
}