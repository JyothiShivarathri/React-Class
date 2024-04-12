import React,{useState} from "react"
function UseStateExample(){
    const[count,setCount]=useState(100)
    const changeHandler=(type)=>{
        if(type==="increment"){
          setCount(count+1)
        }else if(type==="decrement"&& count>0){
         setCount(count-1);
        }else{
          setCount(0)
        }
     }

    
    return(
        <div className="buttonsgp">
        <button onClick={()=>changeHandler("increment")}>increment</button>
        <button onClick={()=>changeHandler("decrement")}>start</button>
        <button onClick={()=>changeHandler()}>reset</button>

            <h4 className="heading" style={
                {
                color:count<=10?"red":"blue"
                }
            }>{count}</h4>
            {
                count<=10 && <h3>Exam about to end</h3>
            }
        </div>
    )
}
export default UseStateExample