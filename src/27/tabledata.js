import { Tabledisplay } from "./tabledisplay"
import {Tablesdata} from "./tablesdata"
const Tabledata=()=>{
 return(
    <>
    <table>
    <tbody>
        <tr>
            <th>S.No</th>
            <th>Song</th>
            <th>Movie</th>
        </tr>
        {
            Tablesdata.map((eachArr)=>{
                return(
                <Tabledisplay data={eachArr}></Tabledisplay>
                )
            })
        }
        </tbody>
    </table>
    </>
 )

}
export default Tabledata