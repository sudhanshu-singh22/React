import { useRef } from "react";

function Uncontrol(){
    const nameref=useRef();
    const passRed=useRef();
 const handle=(item)=>{
      item.preventDefault();
      const Name=document.querySelector('#name').value;
      const Pass=document.querySelector('#pass').value;
      console.log(Name,Pass);
 }
 const handleRef=(item)=>{
        item.preventDefault();
        const NameRef=nameref.current.value;
        const PassRef=passRed.current.value;
        console.log(NameRef,PassRef);
 }
return(
    <div>
        <h4>Uncontrolled component using id</h4>
   <form action="" onSubmit={handle} >
    <input type="text" id="name" placeholder="Write your name" />
    <br />
    <br />
    <input type="password" id="pass" placeholder="write your password" />
    <br />
    <br />
    <button>Submit</button>
    <hr />
   </form>
   <h4>Uncontrolled Component using useref</h4>
    <form action="" onSubmit={handleRef} >
    <input type="text" ref={nameref}  placeholder="Write your name" />
    <br />
    <br />
    <input type="password" ref={passRed}  placeholder="write your password" />
    <br />
    <br />
    <button>Submit</button>
   </form>
    </div>
)
}
export default Uncontrol;