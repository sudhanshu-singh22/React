import { useState } from "react";

function Check(){
    const[skill,setskill]=useState([])
    const handleskill=(event)=>{
        if(event.target.checked){
            setskill([...skill,event.target.value]);
        }else{
            setskill(skill.filter((item)=>item!=event.target.value))
        }
    }
    return(
        <div>
            <input type="checkbox" onChange={handleskill} value="php" name="php" id="php" />
            <label htmlFor="php">PHP</label>
            <br /><br />
             <input type="checkbox" onChange={handleskill} value="Js" name="Js" id="Js" />
            <label htmlFor="Js">JS</label>
            <br /><br />
             <input type="checkbox" onChange={handleskill} value="React" name="React" id="React" />
            <label htmlFor="React">REACT</label>
            <br /><br />
             <input type="checkbox" onChange={handleskill} value="Python" name="Python" id="Python" />
            <label htmlFor="Python">PYTHON</label>
            <br /><br />
            <h1>{skill.toString()}</h1>
        </div>
    )
}
export default Check;