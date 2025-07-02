import { useState } from "react"

function UpdateObj(){
    const[data,setdata]=useState(
        {name:"Sudhanshu",
         address:{
            city:"Varanasi",
            country:"India"
         }
        }
    )
    const changename=(val)=>{
         data.name=val;
         setdata({...data});
    }
    const changecity=(city)=>{
         data.address.city=city;
         setdata({...data,address:{...data.address,city}});
    }
    return(
        <div>
            <input type="text" placeholder="Write Your name" onChange={(event)=>{changename(event.target.value)}}/>
             <input type="text" placeholder="Write Your City" onChange={(event)=>{changecity(event.target.value)}}/>
             <h4>Name:{data.name}</h4>
             <h4>City:{data.address.city}</h4>
             <h4>Country:{data.address.country}</h4>
        </div>
    )
}
export default UpdateObj;