import {createSlice} from "@reduxjs/toolkit";
import axios from 'axios';

const initialState={
    userDetails:{},
    userAuthDetails:{},
    userPosts:[],
    userProfile:{},
    users_following:[],
    users_followed:[],
    subconns_following:[],
    subconns_followed:[]
   
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
        fetch_users_following:(state,action)=>{
            state.users_following=action.payload.users_following
            state.users_followed=action.payload.users_followed
        },
        fetch_subconns_following:(state,action)=>{
            state.subconns_following=action.payload
        },
        increment_user_follow:(state,action)=>{
            state.userFollow[action.payload]+=1
        }

    }
})
export const {fetch_user,fetch_user_authDetails,increment_user_follow,fetch_user_profile,fetch_users_following,fetch_subconns_following}=userSlice.actions
export default userSlice.reducer


// ****async action functions****
export const fetchUser=(uid,loggedIn=true)=>dispatch=>{
    axios.get(`http://127.0.0.1:8000/api/users/${uid}/`)
    .then(user=>{
    
        dispatch(fetch_user(user.data))
      
       
    })
}





export const fetchUserProfile=(uid,loggedIn=true)=>dispatch=>{
   
    axios.get('http://127.0.0.1:8000/api/users_profile/')
    .then(userProfiles=>{
       
        userProfiles.data.forEach(profile=>{
            if(profile.user==uid){
              
                  dispatch(fetch_user_profile(profile))
               
              
               
            }
        })
    })
}

// gets all users the logged in user follows and is followed by
export const fetchUsersFollowing=(uid,loggedIn=true)=>dispatch=>{
    let users_following=[]
    let users_followed=[]
    console.log(uid)
    axios.get('http://localhost:8000/api/users_follow/')
    .then(res=>{
        console.log(res.data)
        res.data.forEach(obj=>{
            if(obj.followee==uid){
                console.log('1')
                users_following.push(obj.follower)
            }else if(obj.follower==uid){
                users_followed.push(obj.followee)
            }
        })
         dispatch(fetch_users_following({users_following:users_following,users_followed:users_followed}))
        
       
    })
}

// ***Selectorrs***
export const selectLoggedInUserId=state=>state.user.userDetails.id
export const selectUser = state => state.user.userDetails
export const selectUserFollow = state => state.user.userFollow
export const selectUserPosts = state => state.user.userPosts


