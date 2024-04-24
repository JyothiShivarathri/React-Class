import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
const AddToCart=()=>{
    const {brand,id}=useParams()
    const[product,setProduct]=useState({})
    const[addProduct,setAddProduct]=useState([])
    useEffect(()=>{
        fetchProduct()
    },[id])
    const fetchProduct=async()=>{
        try{
        const response=await axios.get(`https://dummyjson.com/products/${id}`)
        if(response.status===200){
           setProduct(response.data)
           setAddProduct(prevProducts => [...prevProducts, response.data])
        }
    }
        catch(error){
            console.log(error)
        }
    }
    
    return(
        <>
   
        {addProduct.map((eachobj,index)=>{
             const{brand,category,thumbnail,price,id}=eachobj
             return(
        <div className="Cards1">
        <h3>Product Details</h3>
        <h4>{brand}</h4>
        <h4>{category}</h4>
        <img src={thumbnail} height={300} width={300} alt="thumbnai"/>
        <h6>₹{price}</h6>
        </div>
             )
        })
    }
        
        </>
    )
}
export default ProductDetails