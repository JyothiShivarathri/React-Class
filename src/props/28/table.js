import { arrayOfArrays } from "./data"
import { TableRowComponent } from "./tableRow"

const TableComponents=()=>{

    return(
      
        <table>
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