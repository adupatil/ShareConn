import {createSlice} from "@reduxjs/toolkit";
import axios from 'axios';

const initialState={
    userDetails:{},
    userAuthDetails:{},
    userPosts:[],
    userProfile:{},
    userFollow:{
        follower:0,
        followee:0
    }
}

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        fetch_user: (state,action)=>{
            state.userDetails=action.payload
        },
        fetch_user_authDetails:(state,action)=>{
            state.userAuthDetails=action.payload
        },
        fetch_user_profile:(state,action)=>{
            state.userProfile=action.payload
        },
        fetch_user_follow:(state,action)=>{
            state.userFollow=action.payload
        },
        increment_user_follow:(state,action)=>{
            state.userFollow[action.payload]+=1
        }

    }
})
export const {fetch_user,fetch_user_authDetails,increment_user_follow,fetch_user_profile}=userSlice.actions
export default userSlice.reducer


// ****async action functions****
export const fetchUser=(uid)=>dispatch=>{
    axios.get(`http://127.0.0.1:8000/api/users/${uid}/`)
    .then(user=>{
        console.log(user.data)
        // dispatch data to reducer
        dispatch(fetch_user(user.data))
    })
}



// export const fetchUserFollow=(uid)=>dispatch=>{
//     axios.get(`http://127.0.0.1:8000/api/users_follow/`)
//     .then(follow=>{
//     //    send folllow details of uid
//         follow.data.forEach(el=>{
//             console.log(el)
//             if(el.fol==uid){
//                 console.log(el)
//                 dispatch(fetch_user_follow(el))
//             }
//         })
        
        
//     }).catch((err)=>{
//         if(err.response){
//             console.log('res err')
//         }if(err.request){
//             console.log('req err')
//         }
//     })
// }

export const fetchUserProfile=(uid)=>dispatch=>{
   
    axios.get('http://127.0.0.1:8000/api/users_profile/')
    .then(userProfiles=>{
       
        userProfiles.data.forEach(profile=>{
            if(profile.user==uid){
              
                dispatch(fetch_user_profile(profile))
            }
        })
    })
}

// ***Selectorrs***
export const selectUser = state => state.user.userDetails
export const selectUserFollow = state => state.user.userFollow
export const selectUserPosts = state => state.user.userPosts


