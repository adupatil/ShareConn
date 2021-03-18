import React from 'react';
import '../../assets/css/Page.css'
import UserProfile from '../User/UserProfile';
import SubconnProfile from '../SubConn/SubconnProfile'

// check if person is checking theri own profile or not
// check if person if following 

function Profile(props){
    
    if(props.option==='user'){
        return(
            <div className="listContainerScroll">
                <UserProfile></UserProfile>
               
    
            </div>
        )
    }else if(props.option==='subconn'){
        return(
            <SubconnProfile></SubconnProfile>
        )
    }
    
}
export default Profile;