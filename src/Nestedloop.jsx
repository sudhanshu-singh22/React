import { use } from "react";

function Nested(){
    const College=[
        {
            name:"LPU",
            address:"Phagwara",
            website:"lpu.in",
            Student:[
                {
                  name:"Sudhanshu Singh",
                  course:"B.Tech CSE",
                  address:"Varanasi"
                }
            ]
        },
          {
            name:"IIT",
            address:"Bombay",
            website:"iitb.in",
            Student:[
                {
                  name:"Shubham Singh",
                  course:"B.Tech CSE",
                  address:"Lucknow"
                }
            ]
        },
          {
            name:"IIT",
            address:"Varanasi",
            website:"iitv.in",
            Student:[
                {
                  name:"Siddharth Singh",
                  course:"B.Tech CSE",
                  address:"Varanasi"
                }
            ]
        }
    ]
    return(
        <div>
            {
                College.map((user,item)=>(
                    <div key={user} style={{backgroundColor:"lightgray", padding:"10px", margin:"10px", border:"2px solid black"
                    }}>
                        <h1>{user.name}</h1>
                        <h3>{user.address}</h3>
                        <h3>{user.website}</h3>
                        <h4>Student Details: </h4>{
                        user.Student.map((item)=>(
                         <div key={item}>
                            <h4>{item.name}</h4>
                            <h4>{item.course}</h4>
                            <h4>{item.address}</h4>
                         </div>
                        ))
                    }
                    </div>
                ))

                
            }
        </div>
    )
}
export default Nested;