function Loopma(){
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
         <table border="1">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Age</td>
                </tr>
            </thead>
            <tbody>
                {
                    fruits.map((user)=>(
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))
                }
            </tbody>
         </table>
        </div>
    )
}
export default Loopma;