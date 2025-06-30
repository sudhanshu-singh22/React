import { useTransition } from "react";

function Trans(){
    const [pending,startTransition]=useTransition();
     const handle = () => {
    startTransition(async() => {
      await new Promise(res=>setTimeout(res,5000))
    });
  };
    return(
    <div>
        <button disabled={pending} onClick={handle}>Click Here</button>
    </div>
)
}
export default Trans;