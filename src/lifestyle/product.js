import axios from "axios";
import Spinner from "../spinner";
import { Component } from "react";
class ProductList extends Component{
    state={
        products:[],
       
    }
    componentDidMount(){
        this.getProducts();
    }
     getProducts=async()=>{
       const result=await axios.get("https://dummyjson.com/products")
        this.setState(
            {
                products:result.data.products
            },
           
                this.calculateTotalCost
            
        )
    }
    calculateTotalCost = () => {
        const totalCost = this.state.products.reduce((acc,product)=>{
          return acc+(product.total || 0)
      },0)

        this.setState({ totalCost });
    }
    add = (index) => {
        const newProducts = [...this.state.products]; // Make a shallow copy of the products array
        newProducts[index].count = newProducts[index].count ? newProducts[index].count + 1 : 1; // Increment count
        newProducts[index].total = newProducts[index].count * newProducts[index].price; // Update total
        this.setState({
          products: newProducts
        },
                   this.calculateTotalCost
        )
      }
    
      delete = (index) => {
        const newProducts = [...this.state.products]; // Make a shallow copy of the products array
        if (newProducts[index].count && newProducts[index].count > 0) { // Ensure count is greater than 0
          newProducts[index].count -= 1; // Decrement count
          newProducts[index].total = newProducts[index].count * newProducts[index].price; // Update total
          this.setState({
            products: newProducts
          },
          this.calculateTotalCost
        )
    }
  }

      sortByPriceAsc = () => {
        const sortedProducts = [...this.state.products].sort((a, b) => a.price - b.price);
        this.setState({ products: sortedProducts });
    }

    sortByPriceDesc = () => {
        const sortedProducts = [...this.state.products].sort((a, b) => b.price - a.price);
        this.setState({ products: sortedProducts });
    }
    filterByPriceLessThan500 = () => {
        const filteredProducts = this.state.products.filter(product => product.price < 500);
        this.setState({ products: filteredProducts });
    }
    render(){
      return(
        <>
        <h3>ProductList</h3>
        <button  style={{marginLeft:100}} onClick={this.sortByPriceAsc}>Low to High</button>
        <button  style={{marginLeft:30}} onClick={this.sortByPriceDesc}>High to Low</button>
        <button style={{marginLeft:30}}  onClick={this.filterByPriceLessThan500}>Show Products with Price Less than 500</button>
        <div>
        <h4>Total Cost: ₹{this.state.totalCost}</h4>
        </div>
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
                    {/* <button onClick={() => this.modifyProductPrice(index, true)}>+</button>
                    <button onClick={() => this.modifyProductPrice(index, false)}>-</button> */}
                    {/* <button onClick={()=>this.deleteProducts(index)}>Delete</button> */}
                    <h4>Count: {eachObj.count || 0}</h4>
                    <h4>Total: {eachObj.total || 0}</h4>
                    <button className="add" style={{width:40}} onClick={()=>this.add(index)}>+</button>
                    <button className="del" style={{float:"right",
                    width:40}} onClick={()=>this.delete(index)}>-</button>

                    </div>
                )
                })}
            </div>
            :
            <Spinner></Spinner>
           }
       </>
      );
    }
      }


export default ProductList