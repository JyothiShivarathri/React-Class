import { useState } from "react"

const ControlledComponent=()=>{
    const[form,setForm]=useState(
      {
        username:"",
        email:"",
        password:"",
        cpwd:""
      }
    )
    const[formErr,setFormErr]=useState({
      usernameErr:null,
      emailErr:null,
      cpwdErr:null
    }
    )
  
    const onChangeHandler=(event)=>{
      const {name,value}=event.target
      setForm(prevstate=>
      ({
        ...prevstate,[name]:value
    } ))
    switch(name){
      case "username":
        if(/^[A-Z]/.test(value)){
          setFormErr(
            {...formErr,usernameErr:"first letter should  not be Capital"})
        }
        else {
          setFormErr((prevErr) => ({
            ...prevErr,
            usernameErr: null }));
       }
        break;
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
      case "cpwd":
        if(value!=form.password){
          setFormErr({
            ...formErr,cpwdErr:"password are not matching"
          })
        }
        else {
          setFormErr((prevErr) => ({
            ...prevErr,
           cpwdErr: null }));
       }
        default:
          break;
        }
       

    }
      const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(form)
        setForm(
          {
            username:"",
            email:"",
            password:"",
            cpwd:""
          }
        )

       }
    
    return(
        <>
          <div className="controllable">
        <title>Form in HTML</title>
        <h2>Signup form</h2>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>User personal information</legend>
            <label>Enter your full name</label>
            <br />
            <input type="text" name="username"  value={form.username}
            onChange={onChangeHandler}/>
            <br />
            {
            formErr.usernameErr && <span style={{color:"red"}} >{formErr.usernameErr}</span>
             }
            <br></br>
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
            <label>confirm your password</label>
            <br />
            <input type="password" name="cpwd" value={form.cpwd} onChange={onChangeHandler}/>
            <br />
            <br />
            {
               formErr.cpwdErr&&<span style={{color:"red"}}>{formErr.cpwdErr}</span>  
            }
            <br />
            <br />
            <input type="submit" defaultValue="sign-up" />
            <p>Already have a Account?<a href="./login.js">Login</a></p>
          </fieldset>
        </form>
      </div>
        </>

    )
}
export default ControlledComponent