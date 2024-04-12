import { useState } from "react";

function UseStateExample2(){
    
  const[fruits,setFruits]=useState(["apple","mango","orange","papaya"])
  const addFruit=()=>{
    const newFruit=[...fruits,"banana"]
    setFruits(newFruit)
  }
  const deleteFruit=(index)=>{
    const newFruit=fruits.filter((val,i)=>i!=index)
    setFruits(newFruit)
  }
  const updateFruit=(index)=>{
    const updatedFruits = [...fruits];
    // Assuming you want to update the fruit at the given index to "banana"
    updatedFruits[index] = "banana";
    setFruits(updatedFruits);
   
  
}
  return(
  <>
  <button onClick={addFruit}>AddFruit</button>
  <ul>
    {
     fruits.map((val,index)=><li  style={{marginTop:30}} key={index}>{val}
     <button style={{marginLeft:30,}} onClick={()=>deleteFruit(index)}>deleteFruit</button>

     <button  style={{marginLeft:30}} onClick={()=>updateFruit(index)}>updateFruit</button>
    </li>
     )
    }
    
  </ul>
  
  </>

  )
  
}
export default UseStateExample2