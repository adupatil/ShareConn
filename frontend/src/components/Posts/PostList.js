import React, { useEffect } from 'react';
import '../../assets/css/Post.css'
import Post from './Post'

function PostList({postList,userDetails}){
    
    console.log(postList)
   
        const posts=postList.map((post,i)=>(<Post postDetail={post} key={"post_"+i} userDetails={userDetails} postType={('subconn' in post)?'subconn':'user'}></Post>))

   

    
    
    return(
        
            <div className='posts'>
                <ul className="post__list">
                   {posts.length>0?posts:<div style={{textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'larger'}}><i class='bx bx-sad'></i>No Posts.</div>}
                </ul>
            </div>
            
       
    )

}
export default PostList