import { useEffect, useState } from "react";

function Hook(){
    const [data,setdata]=useState(0);
        function Fruit(){
            console.log("Hello",data);
        }
    useEffect (()=>{
      Fruit();
    },[data])
    return(
        <div>
        <button onClick={()=>{setdata(data+1)}}>Counter{data}</button>
        </div>
    )
}
export default Hook;