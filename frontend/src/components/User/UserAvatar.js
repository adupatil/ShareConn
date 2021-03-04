import React, { Component } from 'react';
import '../../assets/css/User.css'
// props will get Username USer Profile pic.
class UserAvatar extends Component{
    constructor(props){
        super(props);
    }

    getUserProfile(){
        return;
    }
    render() {
        return (
            <div className="user_avatar_container">
                <div className="user_avatar">
                    <div className='user_profile_pic'>{this.props.user_profilepic}</div>
                    <div className='username'>{this.props.username}</div>
                    <div>{this.props.children}</div>
                </div>
            </div> 
        );
    }
   


}
export default UserAvatar;