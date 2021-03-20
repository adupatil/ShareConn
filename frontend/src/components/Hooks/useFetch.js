import { useState,useEffect } from 'react';

function useFetch(url) {
    const [data,setData]=useState(null)
    const [isPending,setisPending]=useState(true)
    const [error,setError]=useState(null)
    useEffect(() => {
        const abortCont=new AbortController();
        setTimeout(()=>{
            fetch(url,{signal:abortCont.signal,mode:'no-cors'})
            .then(res=>{
                if(!res.ok){
                    throw Error('couldnt fetch')
                }
                return res.json()
            }).then(data=>{
                console.log(data)
                setData(data);
                setisPending(false);
                setError(null)
            })
            .catch(err=>{
                if(err.name!=='AbortError'){
                    setError(err);
                    setisPending(false);
                }
            })
        },1000)
        return ()=>abortCont.abort()
    }, [url])
    return {data,isPending,error}
}

export default useFetch
