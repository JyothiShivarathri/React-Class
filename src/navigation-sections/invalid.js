import { useNavigate } from "react-router-dom"
import HeaderSection from "../components/header"

const InvalidScreen=()=>{
    const navigate=useNavigate()
    const navigatetoHome=()=>{
        navigate("/")
    }
     return(
        <>
        <HeaderSection></HeaderSection>
        <h4>InvalidScreen</h4>
        <br></br>
        <button onClick={navigatetoHome}>GO Home</button>
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230802153215/Error-404.png" height={300} width={300} alt="invalid" style={{margin:150}}></img>
        </>
     )
}
export default InvalidScreen