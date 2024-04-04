import { Component} from "react"
class FormComponent extends Component{
    render(){
  
            return(
                <div className="form">
                    <h5>Book Tickets</h5>
                    <form>
                        <input type="text" placeholder="Name"></input>
                        <br></br>
                        <input type="tel" placeholder="Phone Number"></input>
                        <br></br>
                        <br></br>
                        <input type="submit" placeholder="submit"></input>
                    </form>
                </div>
            )   
        
    }
}
export default FormComponent