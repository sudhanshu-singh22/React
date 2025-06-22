import { useState } from "react";
function Multiple(){
const [count,setCount]=useState(0);
return(
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>CounterM</button>
         {
            count===0 ? <h1>Condition1</h1>:
            count==2?<h1>Condition2</h1>
            :count===3?<h1>Condition3</h1>
            :count===4?<h1>Condition4</h1>
            :count===5?<h1>Condition5</h1>
            :<p>Other Value</p>
        } 
    </div>
)
}
export default Multiple;