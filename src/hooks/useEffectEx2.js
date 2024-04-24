import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import ProductDetails from "../navigation-sections/product"
const UseEffectExample2=()=>{
    const[productList,setProductList]=useState([])
    useEffect(()=>{
        hitApi()
    },[])
    const hitApi=async()=>{
        const response=await axios.get("https://dummyjson.com/products")
        setProductList(response.data.products)
        console.log(response)
    }
   
    return(
        <>
        <div className="ProductList">
            {productList.map((eachobj,index)=>{
                 const{id,brand,description,title,thumbnail,price}=eachobj
               return(
                <div className="Cards">
                <img src={thumbnail}  width={200} height={200} alt="product"></img>
                <h3>{title}</h3>
                <p>{description}</p>
                <h4>₹{price}</h4>
                <button ><Link to={`${brand}/${id}`}>Add to cart</Link></button>
                </div>
               )
            }

            )}
        </div>
       

        </>
    )
}
export default UseEffectExample2