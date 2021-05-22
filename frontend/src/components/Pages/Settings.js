import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggle_mode_color } from '../../features/general/generalSlice';
import { edit_profile } from '../../features/user/userSlice';
function Settings(){
    const ogMode=useSelector(state=>state.general.mode)
    const [mode,setmode]=useState(ogMode)
    const dispatch=useDispatch()
    const toggleMode=(e)=>{
        if(e.target.checked){
            dispatch(toggle_mode_color('light'))
            setmode('light')
        }else{
            dispatch(toggle_mode_color('dark'))
            setmode('dark')
        }
    }

    return(
        <div style={{padding:'1rem',height:'100%',borderRight:'1px solid lightgray'}}>
            <div className='theme'>
                <h5>Themes</h5>
                <div className='mode'>Mode:
                    <div style={{display:'flex',alignItems:'center'}}>
                    <p>Light</p> 
                        <label  className="modeLabel">
                            
                            <input type='checkbox'  onChange={toggleMode} checked={mode=='light'?true:false}  className="modeInput"></input>
                            <span ></span>
                    
                        </label>
                        <p>Dark</p>
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default Settings;