import React from 'react';
import '../../assets/css/Buttons.css'
function Button(props){
    
    return(
        <button className="auth_btn">
            {props.status}
        </button>
    )
}
export default Button;