import Listdata from './listdata'

const List1=()=>{
   const items=[
    {
        id:1,
        name:"mounika",
    },
    {
        id:2,
        name:"jyothi",
    }
   ]
    return(
<>
<ul>
{
    items.map((eachObject)=>{
        return(
        <Listdata id={eachObject.id} name={eachObject.name}/>
        )
    })
 
}
</ul>
</>
    )
}
export default List1