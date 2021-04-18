import React from 'react'
import { useParams } from 'react-router'

function FullPost(props) {
    const pid=useParams().id
    if(props.option==='user'){
        return (
            <div>
                Full post {pid} {props.option}
            </div>
        )

    }else if(props.option==='subconn'){
        return (
            <div>
                Full post {pid} {props.option}
            </div>
        )
    }
    
}

export default FullPost
