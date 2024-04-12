import { useRef, useState } from "react"



const Formref =()=>{
    const userNameRef=useRef("")
    const passWordRef=useRef("")

    const[errorVisible,setErrorVisible]=useState(false)

    const[currentDetails,updatedDetails]=useState([])

    const handleSubmit=(event)=>{
        event.preventDefault()
console.log("submitted")
const user=userNameRef.current.value
const pw=passWordRef.current.value
if(user.length<5 && pw.length<5){
    setErrorVisible(true) 
}else{
    setErrorVisible(false)
    const details={
        username:userNameRef.current.value,
        password:passWordRef.current.value
    }
   updatedDetails([...currentDetails,details])
   userNameRef.current.value=""
   passWordRef.current.value=""
}
    }

    return(
<div>
<form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Enter email"
      ref={userNameRef}
    />
    <small id="emailHelp" className="form-text text-muted">
    </small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
      placeholder="Password"
      ref={passWordRef}
    />
  </div>
  {errorVisible &&<span style={{color:"red"}}>Username and password shd be greater than 5</span>}

  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
<table>
    <thead>
        <tr>
            <th>username</th>
            <th>password</th>
        </tr>
    </thead>
    <tbody>
        <tr>
           {currentDetails.map((user,index)=>(
            <tr key={index}>
                <td>{user.userNameRef}</td>
                <td>{user.passWordRef}</td>

            </tr>
           ))} 
        </tr>
    </tbody>

</table>
</div>
    )
}
export default Formref