import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
const ProductDetails=()=>{
    const {brand,id}=useParams()
    const[product,setProduct]=useState({})
   
    useEffect(()=>{
        fetchProduct()
    },[id])
    const fetchProduct=async()=>{
        try{
        const response=await axios.get(`https://dummyjson.com/products/${id}`)
        if(response.status===200){
           setProduct(response.data)
          
        }
    }
        catch(error){
            console.log(error)
        }
    }
    
    return(
        <>

        <div className="Cards1">
        <h3>Product Details</h3>
        <h4>{product?.brand}</h4>
        <h4>{product?.category}</h4>
        <img src={product?.thumbnail} height={300} width={300} alt="thumbnai"/>
        <h6>₹{product?.price}</h6>
        </div>
    
        
        </>
    )
}
export default ProductDetails