import {FETCH_USER,FETCH_USER_FOLLOW,FETCH_USER_POSTS} from './types'
import axios from 'axios';

export const fetchUser=(uid)=>dispatch=>{
    axios.get(`http://127.0.0.1:8000/api/users/${uid}/`)
    .then(user=>{
        console.log(user.data)
        // dispatch data to reducer
        dispatch({type:FETCH_USER,
        payload:user.data})
    })
}
export const fetchUserPost=(uid)=>dispatch=>{
    axios.get(`http://127.0.0.1:8000/api/posts/`)
    .then(posts=>{
        console.log(posts.data)
        // dispatch data to reducer
        dispatch({type:FETCH_USER_POSTS,
        payload:posts.data})
    }).catch((err)=>{
        if(err.response){
            console.log('res err')
        }if(err.request){
            console.log('req err')
        }
    })
}

export const fetchUserFollow=(uid)=>dispatch=>{
    axios.get(`http://127.0.0.1:8000/api/users_follow/`)
    .then(follow=>{
    //    send folllow details of uid
        follow.data.forEach(el=>{
            console.log(el)
            if(el.id==uid){
                console.log(el)
                dispatch({type:FETCH_USER_FOLLOW,payload:el})
            }
        })
        
        
    }).catch((err)=>{
        if(err.response){
            console.log('res err')
        }if(err.request){
            console.log('req err')
        }
    })
}

