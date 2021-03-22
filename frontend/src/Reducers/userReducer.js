import {FETCH_USER,FETCH_USER_POSTS,FETCH_USER_FOLLOW,FETCH_USER_AUTHDETAILS} from '../actions/types'

const initialState={
    userDetails:{},
    userAuthDetails:{},
    userPosts:[],
    userFollow:{
        follower:0,
        followee:0
    }
}
// evaluate the type dealing with

export default function(state=initialState,action){
    switch(action.type){
        case FETCH_USER:
            console.log('red')
            return {
                ...state,
                userDetails:action.payload
            }
        case FETCH_USER_POSTS:
            return{
                ...state,
                userPosts:action.payload
            }
        case FETCH_USER_FOLLOW:
            return{
                ...state,
                userFollow:action.payload
            }
       
        case FETCH_USER_AUTHDETAILS:
            return{
                ...state,
                userAuthDetails:action.payload
            }
        default:
            return state;
    }
}