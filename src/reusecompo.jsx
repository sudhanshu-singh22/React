import Reuse from "./reusecompo1";
function Roopma(){
    const fruits=[
        {
            id:1,
            name:"Sudhanshu Singh",
            email:"sudhanshu@gmail.com",
            age:21
        },
         {
            id:2,
            name:"Aryan Singh",
            email:"aryan@gmail.com",
            age:21
        },
         {
            id:3,
            name:"Siddharth Shiv",
            email:"sid@gmail.com",
            age:21
        },
         {
            id:4,
            name:"Athrv Aryan",
            email:"athrv@gmail.com",
            age:21
        }
    ]
    return(
        <div>
           {
            fruits.map((user)=>(
           <Reuse  user={user} />
            ))
           }
        </div>
    )
}
export default Roopma;