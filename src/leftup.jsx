function Leftup({setuser}){
    return(
        <div>
         <input type="text " onChange={(event)=>setuser(event.target.value)} placeholder=" Write your Name" />
        </div>
    )
}
export default Leftup;