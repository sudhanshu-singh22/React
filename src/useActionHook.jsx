import { useActionState } from "react";

function Actionh(){
    const handlesubmit=async(previousData,formData)=>{
    let name=formData.get('name');
    let password=formData.get('password');
    await new Promise(res=>setTimeout(res,2000));
    console.log(name,password);
    if(name && password){
        return {message:"Data Submitted",name,password};
    }
    else{
        return {error:"Please Fill All Fields"};
    }
    }
    const[data,action,pending]=useActionState(handlesubmit,undefined);
 
    return(
        <div>
            <form action={action} >
                <input type="text" placeholder="Enter Your Name " name="name"/> <br /><br />
                <input type="password" placeholder="Enter Your Password" name="password" /><br /><br />
                
                {
                    data?.error && <span style={{color:'red'}}>{data?.error}</span>

                }
                 {
                    data?.message && <span style={{color:'green'}}>{data?.message}</span>
                    
                } <br /><br />
                <button disabled={pending}>Submit</button>
                <h4>{data?.name}</h4>
                <h4>{data?.password}</h4>
            </form>
        </div>
    )
}
export default Actionh;