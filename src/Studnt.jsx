import { useContext } from "react"
import { SubjectContext } from "./ContextAPI"

export default function Student(){
    const Student =useContext(SubjectContext)
return (
    <div style={{backgroundColor:'green',padding:10}}>
    <h1>Studnet Component:{Student}</h1>

    </div>
)
}