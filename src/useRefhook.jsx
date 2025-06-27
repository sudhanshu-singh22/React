import { useRef } from "react";

function Refer(){
    const first=useRef(null);
    function Handleer(){
        first.current.focus();
        first.current.style.color='red';
        first.current.placeholder="write your password"
        first.current.value="123"
    }
    return(
        <div>
          <input ref={first} type="text" placeholder="Write your name"/>
          <button onClick={Handleer}>Click</button>

        </div>
    )
}
export default Refer;