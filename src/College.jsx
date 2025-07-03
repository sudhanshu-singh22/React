import { useState } from "react";
import ClassCompo from "./ClassCompo";
import { SubjectContext } from "./ContextAPI";
import Contextdata from "./ContextData";

export default function College(){
    const [data,setdata]=useState('')
return (
    <div style={{backgroundColor:'yellow',padding:10}}>
        <SubjectContext.Provider value={data}>
        <select onChange={(event)=>setdata(event.target.value)} >
            <option value="">Select Subject</option>
            <option value="maths">Maths</option>
            <option value="science">Science</option>
            <option value="Hindi">Hindi</option>
        </select>
        <button onClick={()=>setdata('')}>Clear</button>
    <h1>College Component</h1>
    <Contextdata/>
    </SubjectContext.Provider>
    </div>
)
}