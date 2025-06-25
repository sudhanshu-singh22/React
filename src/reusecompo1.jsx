function Reuse({user}){
    return(
        <div style={
            {border:"2px solid green",
             padding:'10px',
             margin:"10px",
             width:"300px",
             borderRadius:"10px"
        }}>
          <h3>Id: {user.id}</h3>
          <h3>Name:{user.name}</h3>
          <h3>Email:{user.email}</h3>
          <h3>Age:{user.age}</h3>
        </div>
    )
}
export default Reuse;