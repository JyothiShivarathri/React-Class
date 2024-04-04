import { Component } from "react";
import img1 from './8.png'
class AllComponents extends Component{
    render(){
        return(
            <>
            <h1>classComponents</h1>
        <button>Start</button>
         <br></br>
         <form>
            <input type="text" placeholder="Name"></input>
            <br></br>
            <input type="pwd" placeholder="Password"></input>
            <br></br>
            <input type="submit"></input>

         </form>
         <table>
            <thead>
                <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>mail</th>
                </tr>
                
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Jyothi</td>
                    <td>Jyothi@gmail.com</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Manasa</td>
                    <td>Manasa@gmail.com</td>
                </tr>
            </tbody>
         </table>
         <ol>
            <li>PatCumins</li>
            <li>Abhishek Agarwal</li>
            <li>Heinrich klassen</li>
         </ol>
         <img src={img1} width="100" alt="img"></img>

            </>
        )
    }
}
export default AllComponents;