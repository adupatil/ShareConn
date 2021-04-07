import axios from 'axios';
import React, { useState ,useEffect,Fragment} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
function SubconnProfile(props){
    const [subconnD,setsubconnD]=useState(null)
    // const [subconnP,setsubconnP]=useState(null)
    const sid=useParams().id;
    // check if logged in user is subconns admin
    // check is subconn is followed 
    const loggedUserAdmined=useSelector(state=>state.user.subconns_admined)
    const admined=loggedUserAdmined.some(el=>el.id===parseInt(sid))?true:false
    console.log(admined)
    useEffect(() => {
        if(!admined){
            axios.get('api/subconns/'+sid+'/')
            .then(res=>{
                setsubconnD(res.data)
            })
        }else{
            setsubconnD(loggedUserAdmined.filter(el=>el.id===parseInt(sid))[0])
        }
        
    }, [loggedUserAdmined,sid])
    if(subconnD!==null){
    return(
       
            <Fragment>
                    <div className='pictures'>
                        <div className="coverPicContainer">
                            <div className="coverPic">
                                <img src={`${process.env.PUBLIC_URL}/assets/img/cover_pic.jpg`} className='coverImg'></img>
                            </div>
                        </div>
                        <div className="profilePicContainer">
                            <div className="profilePic">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/bean.jpeg`} className='profileImg'></img>
                            </div>
                        </div>
                    </div>
                    <div className="userDetails">
                        <div className="userCredentials">
                            <div id="userName">{subconnD.subconn_name}</div>
                          
                            <div className="userEngagement">
                                <div id="userFollowers"><span className="followerCount">{subconnD.num_subconn_followers}</span> Followers</div>
                            
                            </div>
                        </div>
                       
                    </div>
                    
        
            </Fragment>
                
            )
        }
    
    else{
        return <div>Loading</div>
    }
        
}

export default SubconnProfile