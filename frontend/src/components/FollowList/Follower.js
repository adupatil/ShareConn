import React,{useState,useEffect} from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import UserAvatar from '../User/UserAvatar';
import SubConnAvatar from '../SubConn/SubConnAvatar'

// only for users
function Follower() {
    const user=useSelector(state=>state.user)
    const uid=useParams().id
    // state
    const [pFollow,setpFollow]=useState([])
   

    useEffect(() => {
        if(parseInt(uid)===user.userAuthDetails.pk){
            user.users_following.forEach(fuserid=>{
                axios.get('api/users_profile/'+fuserid+'/')
                .then(res=>{
                    setpFollow(prev=>[...prev,res.data])
                })
    
            })
            
        }else{
            
            // fetch users following and dispat
        }
        


    }, [uid,user.users_followed])
    

    

    return (
        <div className='listContainerScroll'>
            <div className="followingWrapper">
            <div className='followingContainer'>
                <div className="peopleFollowing">
                    <h4>People who follow you</h4>
                    <div className='followList'>
                        {
                            pFollow.map(el=>(<UserAvatar option='user' user={el} widthEdit={false}></UserAvatar>))
                        }
                        
                    </div>

                </div>
               
            </div>

            
        </div>

        </div>
        
    )
}

export default Follower

