import {createSlice} from "@reduxjs/toolkit";


const initialState={
    mode:'dark'
}


const generalSlice=createSlice({
    name:'posts',
    initialState,
    reducers:{
        toggle_mode_color:(state,action)=>{
            state.mode=action.payload
        }
    }})

    export const {toggle_mode_color}=generalSlice.actions
export default generalSlice.reducer