import { DataTable } from "./table28";
import { ShowData } from "./show";
const Tableshow=()=>{
    return(
        <>
        <table className="Tablespace">
            <tbody>
                <tr className="TableRow">
                    <td>Name</td>
                    <td>Fruit</td>
                </tr>
                {
                    DataTable.map(obj=>{
                        return(
                            <ShowData data={obj}></ShowData>
                        )
                    })
                }
            </tbody>
        </table>
        </>
    )
}
export default Tableshow;