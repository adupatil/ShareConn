import React,{useState,useEffect} from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import UserAvatar from '../User/UserAvatar';

// only for users
function Following() {
    const user=useSelector(state=>state.user)
    const uid=useParams().id
    // state
    const [pFollow,setpFollow]=useState([])
    const [sFollow,setsFollow]=useState([])

    useEffect(() => {
        if(parseInt(uid)===user.userAuthDetails.pk){
            user.users_followed.forEach(fuserid=>{
                axios.get('api/users_profile/'+fuserid+'/')
                .then(res=>{
                    setpFollow(prev=>[...prev,res.data])
                })
    
            })
            
        }else{
            // fetch users following and dispat
        }
        


    }, [uid,user.users_followed])
    useEffect(() => {

        if(parseInt(uid)===user.userAuthDetails.pk){

        
        user.subconns_following.forEach(fsubconnid=>{
            console.log(fsubconnid)
            axios.get('api/subconns/'+fsubconnid+'/')
            .then(res=>{
                setsFollow(prev=>[...prev,res.data])
            })
        })
    }else{
        // fetch subconns following for user
    }
    }, [uid,user.subconns_following])

    

    return (
        <div className='listContainerScroll'>
            <div className="followingWrapper">
            <div className='followingContainer'>
                <div className="peopleFollowing">
                    <h4>People you follow</h4>
                    <div className='followList'>
                        {
                            pFollow.map(el=>(<UserAvatar option='user' user={el}></UserAvatar>))
                        }
                        
                    </div>

                </div>
                <div className="peopleFollowing">
                    <h4>Subconns you follow</h4>
                    <div className='followList'>
                        {
                            sFollow.map(el=>(<UserAvatar option='subconn' subconn={el}></UserAvatar>))
                        }
                    </div>
                </div>
            </div>

            
        </div>

        </div>
        
    )
}

export default Following
