import { useState } from "react"
function Input(){
    const [val,setval]=useState("");
    return(
        <div>
            <input type="text" value={val} onChange={(event)=>setval(event.target.value)} placeholder="Write Your Name" />
            <h1>{val}</h1>
            <button onClick={()=>setval("")}>CLear</button>
        </div>
    )
}
export default Input;