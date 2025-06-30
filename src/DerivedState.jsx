import { useState } from "react"

function Derive(){
    const [users,setusers]=useState([]);
    const [user,setuser]=useState('');
    const handleuser=()=>{
        setusers([...users,user]);
    }
    return(
        <div>
            <h1>Total User:{users.length}</h1>
            <h1>Lats Added User:{users[users.length-1]}</h1>
            <h1>Unique User:{[...new Set(users)].length}</h1>
            <input type="text" onChange={(event)=>setuser(event.target.value)} placeholder="New User name" />
            <button onClick={handleuser}>Add New User</button>
            {
                users.map((item)=>(
                    <h4>{item}</h4>
                ))
            }
        </div>
    )
}
export default Derive;