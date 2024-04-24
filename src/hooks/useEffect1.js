import axios from "axios"
import { useEffect, useState } from "react"

const UseEffectExample1=()=>{

    const[productList,setProductList]=useState([])
    const [selectedProduct, setSelectedProduct] = useState(null);
    useEffect(()=>{apiClick()},[])
    
    const apiClick=async()=>{
        const response=await axios.get("https://dummyjson.com/products")
         setProductList(response.data.products)
         console.log(response)
    }
    const handleProducts=(product)=>{
     setSelectedProduct(product)
    }
    return(
        <>
        <div>
            {productList.map((product,index)=>(
               <button key={index} onClick={()=>handleProducts(product)}>{index+1}</button>
            ))}
        </div>
        {selectedProduct && (
        <div>
          <img src={selectedProduct.thumbnail} alt="products"></img>
          <p>Price: {selectedProduct.price}</p>
          <p>Description: {selectedProduct.description}</p>
        </div>
      )}
        </>
    )
}
export default UseEffectExample1