import axios from 'axios';
import React, { useState ,useEffect,Fragment} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import PostList from '../Posts/PostList';
import {incrementSubconnsFollowing,decrementSubconnsFollowing} from '../../features/user/userSlice'


function SubconnProfile(props){
    const [subconnD,setsubconnD]=useState(null)
    const [posts,setposts]=useState([])
    
    const sid=useParams().id;
    
    const loggedInuser=useSelector(state=>state.user)
    const loggedUserAdmined=useSelector(state=>state.user.subconns_admined)
    const admined=loggedUserAdmined.some(el=>el.id===parseInt(sid))?true:false
    const dispatch=useDispatch();

    const getFollowStatus=()=>{
        if(admined){
            return(<div className='adminSticker'>Admin</div>)
        }else{
            if(loggedInuser.subconns_following.includes(parseInt(sid))){
                return(<div className='followingBtn' onClick={handleUnfollow}>Following</div>)
            }
            else{
                return(<div className='followBtn' onClick={handleFollow} >Follow</div>)
            }
        }
        
    }
    const handleFollow=()=>{
        console.log(sid)
        dispatch(incrementSubconnsFollowing(parseInt(sid)))
    }
    const handleUnfollow=()=>{
        dispatch(decrementSubconnsFollowing(parseInt(sid)))
    }
    useEffect(() => {
        if(!admined){
            axios.get('api/subconns/'+sid+'/')
            .then(res=>{
                setsubconnD(res.data)
            })
        }else{
            setsubconnD(loggedUserAdmined.filter(el=>el.id===parseInt(sid))[0])
        }
        
        
    }, [loggedUserAdmined,sid,loggedInuser.subconns_following])
    useEffect(()=>{
        axios.get('api/subconns_posts/')
        .then(res=>{
            res.data.forEach(s=>{
                if(s.subconn===parseInt(sid)){
                    setposts(prev=>[...prev,s])
                }
            })
        })
    },[loggedUserAdmined,sid])

    

    if(subconnD!==null){
    return(
       
            <Fragment>
                    <div className='pictures'>
                        <div className="coverPicContainer">
                            <div className="coverPic">
                                <img src={subconnD.cover_pic} className='coverImg'></img>
                            </div>
                        </div>
                        <div className="profilePicContainer">
                            <div className="profilePic">
                            <img src={subconnD.profile_pic} className='profileImg'></img>
                            </div>
                        </div>
                    </div>
                    <div className="userDetails">
                        <div className="userCredentials">
                            <div id="userName">{subconnD.subconn_name}</div>
                          
                            <div className="userEngagement">
                                <div id="userFollowers"><span className="followerCount">{subconnD.num_subconn_followers}</span> Followers</div>
                                {getFollowStatus()}
                            
                            </div>
                        </div>
                       
                    </div>
                    {posts!==null && <div className="userPostContainer">
                    <PostList postList={posts} userDetails={loggedInuser.userProfile} option='subconn'></PostList>
                </div>}
                    
        
            </Fragment>
                
            )
        }
    
    else{
        return <div>Loading</div>
    }
        
}

export default SubconnProfile