import {createSlice} from "@reduxjs/toolkit";
import axios from 'axios';
import {fetchSubconnsPosts, fetchUserPosts} from '../posts/postSlice'

const initialState={
    editProfile:'none',
    subconnForm:'none',
    editPostForm:{
        style:'none',
        post:{}
    },
    userDetails:{},
    userAuthDetails:{},
    userProfile:{},
    users_following:[],
    users_followed:[],
    subconns_following:[],
    subconns_admined:[],
    randomUsers:[],
    randomSubconns:[]
   
}

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        toggle_edit_post:(state,action)=>{
            state.editPostForm.style=action.payload
        },
        set_to_editPost:(state,action)=>{
            state.editPostForm.post=action.payload
        },
       
        toggle_edit_profile:(state,action)=>{
            state.editProfile=action.payload
        },
        toggle_subconn_form:(state,action)=>{
            state.subconnForm=action.payload
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
        increment_user_following:(state,action)=>{
            state.users_followed.push(parseInt(action.payload))
        },
        decrement_user_following:(state,action)=>{
            state.users_followed.splice(state.users_followed.indexOf(parseInt(action.payload)),1)
        },
        fetch_subconns_admined:(state,action)=>{
            state.subconns_admined = action.payload
        },
        increment_subconns_following:(state,action)=>{
            state.subconns_following.push(parseInt(action.payload))
        },
        decrement_subconns_following:(state,action)=>{
            state.subconns_following.splice(state.subconns_following.indexOf(parseInt(action.payload)),1)
        },
        edit_profile:(state,action)=>{
            state.userDetails.first_name=action.payload.first_name;
            state.userDetails.last_name=action.payload.first_name;
            state.userProfile.user.first_name=action.payload.first_name;
            state.userProfile.user.last_name=action.payload.last_name;

        },
        add_subconn:(state,action)=>{
            state.subconns_admined.push(action.payload)
            state.subconns_following.push(action.payload.id)
        },
        reset_random_users:(state)=>{
            state.randomUsers=[]
        },
        add_random_users:(state,action)=>{
            state.randomUsers.push(...action.payload)
        },
        reset_random_subconns:(state)=>{
            state.randomSubconns=[]
        },
        add_random_subconns:(state,action)=>{
            state.randomSubconns.push(...action.payload)
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
        },
        add_admin_as_follower:(state,action)=>{
            console.log(action.payload)
            let newsubconn=state.subconns_admined.find(s=>s.id===parseInt(action.payload))
            console.log(newsubconn)
           
        }

    }
})
export const {fetch_user,fetch_user_authDetails,fetch_user_profile,fetch_users_following,fetch_subconns_following,fetch_subconns_admined,update_authkey,logout_user,update_authkey_register,decrement_user_following,increment_user_following,increment_subconns_following,decrement_subconns_following,toggle_edit_profile,edit_profile,toggle_subconn_form,add_subconn,add_random_users,reset_random_users,add_random_subconns,reset_random_subconns,add_admin_as_follower,toggle_edit_post,set_to_editPost}=userSlice.actions
export default userSlice.reducer


// ****async action functions****
export const toggleSubconnForm=(val)=>dispatch=>{
    dispatch(toggle_subconn_form(val))
}
export const fetchRandomUsers=()=>(dispatch,getState)=>{
    console.log(getState().user.randomUsers)
    let randomUser=[]
    axios.get('api/users/')
    .then(res=>{
        res.data.forEach(user=>{
            if(!(getState().user.users_followed.includes(user.id)) && randomUser.length<5 &&(user.id!==getState().user.userDetails.id)){
                randomUser.push(user)
            }if(randomUser.length===5){
                return;
            }
        })
        dispatch(add_random_users(randomUser))
        
    })
       
}
export const fetchRandomSubconns=()=>(dispatch,getState)=>{
    let randomSubconns=[]
    axios.get('api/subconns/')
    .then(res=>{
        res.data.forEach(subconns=>{
            if(!(getState().user.subconns_following.includes(subconns.id)) && randomSubconns.length<5 &&(subconns.subconn_admin!==getState().user.userDetails.id)){
                randomSubconns.push(subconns)
            }if(randomSubconns.length===5){
                return;
            }
        })
        dispatch(add_random_subconns(randomSubconns))
        
    })
       
}


export const toggleEditProfile=(val)=>dispatch=>{
    dispatch(toggle_edit_profile(val))
}

export const updateAuthKeyRegister=(data)=>dispatch=>{
    axios.post('rest-auth/registration/',data)
    .then(key=>{
        localStorage.setItem('token',key.data.key);
        axios.get('rest-auth/user/',{headers:{Authorization:'Token '+localStorage.getItem('token')}})
        .then(data=>{
           dispatch(fetch_user_authDetails(data.data))
        })

    })
}

export const fetchUser=(uid)=>(dispatch)=>{
   
   axios.get(`api/users/${uid}/`)
    .then(user=>{
        console.log('got data from fetchUSer')
        dispatch(fetch_user(user.data))
        
         
            dispatch(fetchUsersFollowing(uid))
            dispatch(fetchSubconnsAdmined())
            dispatch(fetchSubconnsFollowed())
      
       
    })
}


export const fetchUserProfile=(uid)=>(dispatch,getState)=>{
   
    axios.get('api/users_profile/')
    .then(userProfiles=>{
        console.log('got data from fetchProfile')
        userProfiles.data.forEach(profile=>{
            if(profile.user.id===parseInt(uid)){
            
              console.log(profile)
                  dispatch(fetch_user_profile(profile))
               
              
               
            }
        })
    })
}

// gets all users the logged in user follows and is followed by
export const fetchUsersFollowing=(uid)=>(dispatch,getState)=>{
    let users_following=[]
    let users_followed=[]
    

    axios.get('api/users_follow/')
    .then(res=>{
        console.log('got data from fetchFollowing')
        res.data.forEach(obj=>{
            if(obj.followee==uid){
                // the accounts taht follow the user
                users_following.push(obj.follower)
            }else if(obj.follower==uid){
                // the accounts the user follows
                users_followed.push(obj.followee)
            }
        })
    
         dispatch(fetch_users_following({users_following:users_following,users_followed:users_followed}))
         dispatch(fetchUserPosts(uid))
         dispatch(reset_random_users())
         dispatch(fetchRandomUsers())
        
       
    })
}

export const updateAuthKey=(data)=>(dispatch,getState)=>{
    console.log(data)
    axios.post('rest-auth/login/',data)
    .then(key=>{
        console.log('UPdating auth key')
        localStorage.setItem('token',key.data.key)
        axios.get('rest-auth/user/',{headers:{Authorization:'Token '+localStorage.getItem('token')}})
        .then(data=>{
           dispatch(fetch_user_authDetails(data.data))
            
        
        
        })
    
    })
}

export const incrementUserFollowing=(fid)=>(dispatch,getState)=>{

    axios.post('api/users_follow/',{follower:getState().user.userAuthDetails.pk,followee:fid})
    .then(data=>{
       console.log('incrementing following')
        dispatch(increment_user_following(fid))
        dispatch(fetchUsersFollowing(getState().user.userAuthDetails.pk))
        dispatch(fetchUserProfile(getState().user.userAuthDetails.pk))
     
    })
}




export const decrementUserFollowing=(fid)=>(dispatch,getState)=>{
   
    axios.get('api/users_follow/')
    .then(res=>{
        let deleteFollow=res.data.filter(el=>(el.follower===parseInt(getState().user.userAuthDetails.pk) && el.followee===parseInt(fid)))
       console.log('decrementing follow')
        axios.delete('api/users_follow/'+deleteFollow[0].id+'/')
        .then(data=>{
            dispatch(decrement_user_following(fid))
            dispatch(fetchUsersFollowing(getState().user.userAuthDetails.pk))
            dispatch(fetchUserProfile(getState().user.userAuthDetails.pk))
         
        })
        .catch(err=>{
            console.log(err)
           
        })
       
    })
}

export const incrementSubconnsFollowing=(sid)=>(dispatch,getState)=>{

    axios.post('api/subconns_follower/',{follower_s:getState().user.userAuthDetails.pk,followee_s:sid})
    .then(data=>{
       console.log('incrementing s following')
        dispatch(increment_subconns_following(sid))
        dispatch(fetchSubconnsFollowed(getState().user.userAuthDetails.pk))
        dispatch(fetchUserProfile(getState().user.userAuthDetails.pk))
      
     
    })
}
export const decrementSubconnsFollowing=(sid)=>(dispatch,getState)=>{
   
    axios.get('api/subconns_follower/')
    .then(res=>{
        let deleteFollow=res.data.filter(el=>(el.follower_s===parseInt(getState().user.userAuthDetails.pk) && el.followee_s===parseInt(sid)))
       console.log('decrementing s follow')
        axios.delete('api/subconns_follower/'+deleteFollow[0].id+'/')
        .then(data=>{
            dispatch(decrement_subconns_following(sid))
            dispatch(fetchSubconnsFollowed(getState().user.userAuthDetails.pk))
            dispatch(fetchUserProfile(getState().user.userAuthDetails.pk))
         
        })
        .catch(err=>{
            console.log(err)
           
        })
       
    })
}



export const fetchSubconnsAdmined=()=>(dispatch,getState)=>{
    axios.get('api/subconns/')
    .then(res=>{
        let arr=[]
        res.data.forEach(el=>{
            if(getState().user.userAuthDetails.pk===el.subconn_admin){
                arr.push(el)
            }})
            dispatch(fetch_subconns_admined(arr))
    })
}
export const fetchSubconnsFollowed=()=>(dispatch,getState)=>{
    let fsubconnsid=[]
   

    axios.get('api/subconns_follower/')
    .then(res=>{
        
       
        res.data.forEach(el=>{

            if(el.follower_s===parseInt(getState().user.userAuthDetails.pk)){
                fsubconnsid.push(el.followee_s)
            }
        })
     
        console.log(fsubconnsid)
        dispatch(fetch_subconns_following(fsubconnsid))
        dispatch(fetchSubconnsPosts())
        dispatch(reset_random_subconns())
        dispatch(fetchRandomSubconns())
   
        
    })

}

export const editProfile=(editData)=>(dispatch,getState)=>{
    axios.put('api/users/'+getState().user.userDetails.id+'/',editData)
    .then(res=>{
        console.log(res.data)
        let data={
            first_name:res.data.first_name,
            last_name:res.data.last_name
        }
        dispatch(edit_profile(data))
        
    })
}

// ***Selectorrs***
export const selectLoggedInUserId=state=>state.user.userDetails.id
export const selectUser = state => state.user.userDetails
export const selectUserFollow = state => state.user.userFollow
export const selectUserPosts = state => state.user.userPosts


