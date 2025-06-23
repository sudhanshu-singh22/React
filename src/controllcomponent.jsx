import { useState } from "react";

function Control(){
    const[name ,setname]=useState('');
    const[pass,setpass]=useState('');
    const[mail,setmail]=useState('');
    return(
        <div>
            <form >
                <input type="text" value={name} onChange={(event)=>setname(event.target.value)} placeholder="Enter Your Name" />
                <br /><br />
                 <input type="password" value={pass} onChange={(event)=>setpass(event.target.value)} placeholder="Enter Your Password" />
                 <br /><br />
                  <input type="gmail" value={mail} onChange={(event)=>setmail(event.target.value)} placeholder="Enter Your Gmail" />
                  <br /> <br />
                  <button>Submit</button>
                  <button onClick={()=>{setname('');setmail('');setpass('')}}>Clear</button>
                  <br />
                  <h1>{name}</h1>
                  <h1>{pass}</h1>
                  <h1>{mail}</h1>
            </form>
        </div>
    )
}
export default Control;