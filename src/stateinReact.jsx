import { useState } from "react";

const State=()=>{
    const [count,setcount]=useState(0);
    const [rcount,rsetcount]=useState(100);
    return(
        <div>
            <p>Counter:{count}</p>
            <button onClick={()=>setcount(count+1)}>Increment</button>
                <p>Reverse Counter:{rcount}</p>
            <button onClick={()=>rsetcount(rcount-1)}>Decrement</button>
        </div>
    )
}
export default State;