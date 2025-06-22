const Sum=(a,b)=>{
 return  alert(a+b);
}
const Fruit=()=>{
    return(
        <div>
            <button onClick={()=>{
                alert("High alert");
            }}>Alert Button</button>
            <button onClick={()=>Sum(10,12)}>Sum Button</button>
        </div>
    )
}
export default Fruit;