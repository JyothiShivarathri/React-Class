import { useState } from "react"
import { Link } from "react-router-dom"
const Login=()=>{
    const [form,setForm]=useState(
        {
        email:"",
        password:""
        }
    )
    const[formErr,setFormErr]=useState({
        email:null,
        password:null
    })
      
    const onChangeHandler=(event)=>{
        const {name,value}=event.target
        setForm(prevstate=>
        ({
          ...prevstate,[name]:value
      } ))
      switch(name){
        
        case "email":
          if(!value.includes('@gmail.com')){
            setFormErr(
              {...formErr,emailErr:"it should include @gmail.com"})
          }
          else {
            setFormErr((prevErr) => ({
              ...prevErr,
              emailErr: null }));
         }
          break;
          default:
            break;
          }
         
  
      }
    const handleSubmit=(event)=>{
        event.preventDefault()

    }
    return(
        <>
        <div className="controllable">
        <title>Form in HTML</title>
        <h2>Login form</h2>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>Enter your email</label>
            <br />
            <input type="email" name="email"  value={form.email} onChange={onChangeHandler}/> 
        
            {
              formErr.emailErr &&<span style={{color:"red"}}>{ formErr.emailErr}</span>  
            }
            <br></br>
            <br />
            <label>Enter your password</label>
            <br />
            <input type="password" name="password" value={form.password} onChange={onChangeHandler} />
            <br />
            <br></br>
            <input type="submit" defaultValue="sign-up" />
            <p>New user<Link to="/signup">signup</Link></p>
          </fieldset>
        </form>
       </div>
        
        </>
    )
}
export default Login