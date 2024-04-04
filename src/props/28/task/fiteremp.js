import { employees } from "./dataemp";
function Filterdata(){
    const FilteredArray=employees.filter(employee=>{
      return  employee.salary>55000 && employee.designation=="Manager"
    })
    return(
        <>
        {FilteredArray.map(emp => (

            <div key={emp.name}>
                <p>Name: {emp.name}</p>
                <p>Salary: {emp.salary}</p>
                <p>Designation: {emp.designation}</p>
            </div>
))}
    </>
    );

}
export default Filterdata;