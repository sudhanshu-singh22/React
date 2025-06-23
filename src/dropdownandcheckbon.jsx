import { useState } from "react";

function Drop(){
    const[gender,setgender]=useState('');
    const[city,setcity]=useState('');
    return(
        <div>
            <h4>Select Gender: </h4>
            <input type="radio" onChange={(event)=>setgender(event.target.value)} name="same" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" onChange={(event)=>setgender(event.target.value)} name="same" id="female" value="female" />
            <label htmlFor="female">Female</label>
            <h3>Your Selected Gender is: {gender}</h3>

            <h4>Select your City: </h4>
            <select name="city" id="city" onChange={(event)=>setcity(event.target.value)}>
                <option value="varnasi">Varanasi</option>
                <option value="delhi">Delhi</option>
                <option value="jalandhar">Jalandhar</option>
            </select>
            <h3>Your selected city is: {city}</h3>
        </div>
    )
}
export default Drop;