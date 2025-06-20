function CurleyBraces(){
    let x=10;
    let y=20;
    let name="Sudhanhsu"
    function op(a,b){
        return a+b;
    }
    return (
        <div>
            <p>{x+y}</p>
            <p>{name}</p>
            <p>{op(2,9)}</p>
        </div>
    )
}
export default CurleyBraces;