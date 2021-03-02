import React from 'react';

function Button(props){
    const style={
        height: '2.5rem',
        width: '7rem',
        backgroundColor: '#EA8201',
        borderRadius: '6px',
        border: '1px solid #EA8201',
        color:'white'
    }
    return(
        <button style={style}>
            {props.status}
        </button>
    )
}
export default Button;