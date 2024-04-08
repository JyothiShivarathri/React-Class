import axios from "axios";
import Spinner from "../spinner";
import { Component } from "react";
class ProductList extends Component{
    state={
        products:[]
    }
    componentDidMount(){
        this.getProducts();
    }
     getProducts=async()=>{
       const result=await axios.get("https://dummyjson.com/products")
        this.setState(
            {
                products:result.data.products
            }
        )
    }
    deleteProducts=index=>{
        const newProducts=this.state.products.filter((eachob,i)=>i!=index)
        this.setState({
            products:newProducts
        })
    }
    render(){
      return(
        <>
        <h3>ProductList</h3>
           {
            this.state.products.length>0
            ?
            <div className="ProductList">{
                this.state.products.map((eachObj,index)=>{
                    const{id,description,title,thumbnail,price}=eachObj
                 return(
                    <div className="Cards" >
                    <h3>{title}</h3>
                    <img src={thumbnail} alt="title" width={200} height={200}></img>
                    <p>{description}</p>
                    <h5>₹{price}</h5>
                    <button onClick={()=>this.deleteProducts(index)}>Delete</button>
                    </div>
                )
                })
            }
            </div>
            :
            <Spinner></Spinner>
           }
       </>
      )
    }
  
}
export default ProductList