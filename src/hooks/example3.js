import { useRef, useState } from "react"

function UseStateExample3(){
    const[intial,final]=useState(false)
    const user=useRef("")
    const userMail=useRef("")
    const pwd=useRef("")
    const [userDetail,setuserDetail]=useState([])
    const handleSubmit=(event)=>{
           event.preventDefault()
        
          
           if(user.current.value.length<5 && pwd.current.value.length<5){
              final(true)
           }
           else{
            final(false)
            const details={
                username:user.current.value,
                password:pwd.current.value,
                Mail:userMail.current.value
            }
            setuserDetail([...userDetail, details]);
            // Clear input fields after submission
            user.current.value = "";
            pwd.current.value = "";
            userMail.current.value=""
          }
           

    }
return(
<div className="forms">
  <h2>Registration Form</h2>
<form onSubmit={handleSubmit}>
<>
  <div className="form-group">
    <label htmlFor="usr">Name:</label>
    <input type="text"  style={{width:500}} className="form-control" id="usr" ref={user}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input
       style={{width:500}}
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      ref={userMail}
    />
   </div>
  <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input style={{width:500}} type="password" className="form-control" id="pwd" ref={pwd} />
  </div>
  {/* <label className="radio-inline">
    <input type="radio" name="optradio" defaultChecked="" />
     Male
  </label>
  <label className="radio-inline">
    <input type="radio" name="optradio" />
   Female
  </label> */}
  {intial&&(<span>Username and password should be more than 5 Characters</span>)}
  {/* {userDetail && (
            <div>
              <h2>User Details:</h2>
              <p>Username: {userDetail.username}</p>
              <p>Password: {userDetail.password}</p>
            </div>
          )} */}
  <br></br>
  <div>
  <button type="submit">submit</button>
  </div>
  
</>
</form>
    
      {userDetail.length > 0 && (
        <div>
          <h2>User Details:</h2>
          <table >
            <thead>
              <tr className="tablerow">
                <th  className="tabledata">Username</th>
                <th  className="tabledata">Password</th>
                <th  className="tabledata">Mail</th>
              </tr>
            </thead>
            <tbody>
              {userDetail.map((user, index) => (
                <tr  className="tablerow" key={index} >
                  <td className="tabledata">{user.username}</td>
                  <td  className="tabledata">{user.password}</td>
                  <td  className="tabledata">{user.Mail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>

)
}
export default UseStateExample3