import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

const DomManipulation=()=>{
    const[quotes,setquotes]=useState([])
    const[quote,setquote]=useState({})
    const[count,setCount]=useState(1)
    useEffect(()=>{
    hitapi()
    },[])
    useEffect(()=>{
      eachQuote()
    },[count])
    const hitapi=async()=>{
        try{
        const result=await axios.get("https://dummyjson.com/quotes")
        setquotes(result.data)
        }
        catch(error){
            console.error("Error fetching quote:", error);
        }
    }
    const eachQuote=async()=>{
        const response=await axios.get(`https://dummyjson.com/quotes/${count}`)
        setquote(response.data)
    }
    const incrementCount=()=>{
        setCount(count+1)
    }
    const decrementCount=()=>{
        setCount(count-1)
    }
   return(
    < >
    <button className="butngp" onClick={incrementCount} > next</button>
    <button   className="butngp" onClick={decrementCount} >prev</button>
  
        {quote &&
        <div className="quote">
          <h3>{quote.quote}</h3>
          <h5>{quote.author}</h5>
        </div>
          }
  
    </>
   )
}
export default DomManipulation