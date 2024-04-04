import { Component } from "react";
class TableComponent extends Component
{
    render(){
      
            return(
                <div className="Table">
              <table>
              <thead>
              <tr>
              <td>S.No</td>
              <td>Name</td>
              <td>Players</td></tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td>Mumbai Indians</td>
                <td>Rohit Sharma</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mumbai Indians</td>
                <td>Jasprit Bhumra</td>
              </tr>
              </tbody>
              </table>
                </div>
            )
        
    }
}
export default TableComponent