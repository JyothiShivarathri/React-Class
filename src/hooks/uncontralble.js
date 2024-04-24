import { useRef, useState } from "react"

const Controllable=()=>{
    const [username,setUserName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const[cpwd,setpwd]=useState("")
    const [userNameErr,setuserNameErr]=useState(null)
    const [userMailErr,setuserMailErr]=useState(null)
    const[userpwdErr,setuserpwdErr]=useState(null)
    const [tableData, setTableData] = useState([])

    const userNameHandler=(event)=>{
        const userName=event.target.value
        setUserName(userName)
        if(userName.trim().length>10){
            setuserNameErr("input must be less than 10")
        }
        else{
            setuserNameErr(null)
        }

    }
    const mailHandler=(event)=>{
        const Mail=event.target.value
        setEmail(Mail)
        if(!Mail.includes('@gmail.com')){
            setuserMailErr("it should include @gmail.com")
        }
        else{
            setuserMailErr(null)
        }
    }
     const pwdHandler=(event)=>{
        const password=event.target.value
        setPassword(password)
     }
   
    const cpwdHandler=(event)=>{
        const cpwd=event.target.value
     
        setpwd(cpwd)
        if(password!=cpwd){
            setuserpwdErr("passwords are not matching")
        }
        else{
            setuserpwdErr(null)
        }
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        setTableData([...tableData, { username, email, password, cpwd }]);
        setUserName("");
        setEmail("");
        setPassword("");
        setpwd("");
    }
  
    return(
        <>
        <div className="controllable">
        <title>Form in HTML</title>
        <h2>Registration form</h2>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>User personal information</legend>
            <label>Enter your full name</label>
            <br />
            <input type="text" name="name"  value={username}
            onChange={userNameHandler}/>
            <br />
            {
            userNameErr && <span style={{color:"red"}} >username should contain less than 10 characters</span>
             }
            
            <label>Enter your email</label>
            <br />
            <input type="email" name="email"  value={email} onChange={mailHandler}/> 
            {
              userMailErr &&<span style={{color:"red"}}>{userMailErr}</span>  
            }
            <br />
            <label>Enter your password</label>
            <br />
            <input type="password" name="pass" value={password} onChange={pwdHandler} />
            <br />
            <label>confirm your password</label>
            <br />
            <input type="password" name="pass" value={cpwd} onChange={cpwdHandler}/>
            <br />
            <br />
            {
                userpwdErr&&<span style={{color:"red"}}>{userpwdErr}</span>  
            }
            <br />
            <br />
            <input type="submit" defaultValue="sign-up" />
          </fieldset>
        </form>
      </div>
      <table className="tabledata">
        <thead>
        <tr>
            <th className="headings">Name</th>
            <th  className="headings">Mail</th>
            <th  className="headings">password</th>
            <th  className="headings">Confirm password</th>
        </tr>
        </thead>
        <tbody>
    
            {tableData.map((data, index) => (
             
            <tr key={index} >
              <td className="headings">{data.username}</td>
              <td className="headings">{data.email}</td>
              <td className="headings">{data.password}</td>
              <td className="headings">{data.cpwd}</td>
            </tr>
         
     )
    )
    }
        </tbody>

      </table>
</>
      
    )
}
export default Controllable