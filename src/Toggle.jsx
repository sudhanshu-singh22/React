import { useState } from "react"
function Toggle(){
    const [display,setdisplay]=useState(true);
    return(
        <div>
           
            <button onClick={()=>setdisplay(!display)}>Toggle</button>

            {
                display? <p>Sudhanshu</p>:null
            }
        </div>
    )
}
export default Toggle