import { useState } from 'react';
import image from './Anu.jpg';
function Dynamic(){
     const[col,setcol]=useState(
        {
            color:"black",
            border:"2px solid black",
            backgroundColor:"white",
            margin:"10px"
        }

     )
      const[text,settext]=useState('black')
     function change(a,b){
         setcol({...col,backgroundColor:b})
         settext(a)
     }
    return(
        <div>
            <button onClick={()=>change("red", "yellow")}>Chnage Theme</button>
            <button onClick={()=>change("black", "white")}>Default Theme</button>
             <div style={{width:"200px" , ...col}}>
              <img style={{width:"200px", height:"300px"}} src={image} alt="" /> 
              <h4 style={{color:text}}>Anushka Sharma</h4>
           </div>
        </div>
    )
}
export default Dynamic;