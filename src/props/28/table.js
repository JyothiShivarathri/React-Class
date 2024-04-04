import { arrayOfArrays } from "./data"
import { TableRowComponent } from "./tableRow"

const TableComponents=()=>{

    return(
      
        <table style={"border: 2px solid black"}>
        <tbody>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          {
            arrayOfArrays.map(eachArr=>{
              return(
               <TableRowComponent data={eachArr}/>
              )
            })
          }
        </tbody>
      </table>

    )
}
export default TableComponents