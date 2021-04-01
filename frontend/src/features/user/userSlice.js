import {createSlice} from "@reduxjs/toolkit";
import axios from 'axios';

const initialState={
    token:null,
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
        update_authkey:(state,action)=>{
            state.token=action.payload
        },
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
        },
        logout_user:(state)=>{
            state.token=null
            state.userDetails={}
            state.userAuthDetails={}
            state.userPosts=[]
            state.userProfile={}
            state.users_following=[]
            state.users_followed=[]
            state.subconns_following=[]
            state.subconns_followed=[]
        }

    }
})
export const {fetch_user,fetch_user_authDetails,increment_user_follow,fetch_user_profile,fetch_users_following,fetch_subconns_following,update_authkey,logout_user}=userSlice.actions
export default userSlice.reducer


// ****async action functions****

export const updateAuthKey=(data)=>(dispatch,getState)=>{
    console.log(data)
    axios.post('http://127.0.0.1:8000/rest-auth/login/',data)
    .then(key=>{
        console.log(key.data.key)
        dispatch(update_authkey(key.data.key))
        axios.get('http://127.0.0.1:8000/rest-auth/user/',{headers:{Authorization:'Token '+getState().user.token}})
        .then(data=>{
            
            dispatch(fetch_user_authDetails(data.data))})
    
    })
}


export const fetchUser=(uid)=>(dispatch,getState)=>{
    console.log('*&^%$#@!')
    console.log(getState().user.token)
   axios.get(`http://127.0.0.1:8000/api/users/${uid}/`,{headers:{Authorization:'Token '+getState().user.token}})
    .then(user=>{
        console.log(user)
        dispatch(fetch_user(user.data))
      
       
    })
}


export const fetchUserProfile=(uid)=>(dispatch,getState)=>{
   console.log('Token '+getState().user.token)
    axios.get('http://127.0.0.1:8000/api/users_profile/',{headers:{Authorization:'Token '+getState().user.token}})
    .then(userProfiles=>{
       
        userProfiles.data.forEach(profile=>{
            if(profile.user==uid){
              
                  dispatch(fetch_user_profile(profile))
               
              
               
            }
        })
    })
}

// gets all users the logged in user follows and is followed by
export const fetchUsersFollowing=(uid)=>(dispatch,getState)=>{
    let users_following=[]
    let users_followed=[]
    console.log(uid)
    axios.get('http://localhost:8000/api/users_follow/',{headers:{Authorization:'Token '+getState().user.token}})
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


