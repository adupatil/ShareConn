import React from 'react';
function AddPostBtn(props){
    const style={
        height: '3.5rem',
        width: '10rem',
        backgroundColor: '#EA8201',
        borderRadius: '1000px',
        border: '1px solid #EA8201',
        color:'white',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        fontSize:'large'
    }
    return(
        <button style={style} >
            <i class='bx bx-plus'></i>Add Post
        </button>
    )
}
export default AddPostBtn;