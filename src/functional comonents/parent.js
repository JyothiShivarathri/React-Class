import Child from "./prop"

 function Parent(){
    const users=[
        {
            name:"Jyothi",
            age:21
        },
        {
            name:"sathvika",
            age:18
        }

 ]
 return(
    <>
    {
    
        users.map((obj)=>{
            return(
                <Child name={obj.name} age={obj.age}/>
            )

        })
    
    }
    </>
 );
}
export default Parent