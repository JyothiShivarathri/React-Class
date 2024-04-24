
import HeaderSection from "../components/header"
import UseEffectExample2 from "../hooks/useEffectEx2"
import { useContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomeScreen=()=>{
    const[productList,setProductList]=useState([])
    const[cartItems,setCartItems]=useState([])
    const[showCart,SetShowCart]=useState(false)
    const[count,setCount]=useState(0)


    useEffect(()=>{
        hitApi()
    },[])
    const hitApi=async()=>{
        const response=await axios.get("https://dummyjson.com/products")
        setProductList(response.data.products)
        console.log(response)
    }
    const addToCart = (id) => {
        let itemToAdd;
        productList.forEach((product) => {
          if (product.id === id) {
            itemToAdd = product;
            
          }
        });
        if (itemToAdd) {
          setCartItems((prevCartItems) => [...prevCartItems, itemToAdd]);
          setCount(count+1)
        }
        else{
            setCount(count-1)
        }
      };
      const toggleCart=()=>{
        SetShowCart(!showCart)
      }
      const deleteProduct = (id) => {
        const index = cartItems.findIndex((item) => item.id === id);
        if (index !== -1) {
          setCartItems((prevCartItems) => {
            const updateCartItems = [...prevCartItems];
            updateCartItems.splice(index, 1);
            setCount(count - 1);
            return updateCartItems;
          });
        }
      };
      
       
      
     
    return(
    <>
    <HeaderSection></HeaderSection>
   
    <h1> Welcome to HomeScreen </h1>
    <button onClick={toggleCart} className="ShowCart">Show Cart {count}</button>
      {showCart && (
        <div className="Cart">
          <h2>Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <img src={item.thumbnail} width={50} height={50} alt="product" />
                  <span>{item.title} - ₹{item.price}
                  <button onClick={()=> deleteProduct(item.id)}>-</button></span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      <div className="ProductList">
        {productList.map((product) => {
          const { id, brand, description, title, thumbnail, price } = product;
          return (
            <div className="Cards" key={id}>
              <img src={thumbnail} width={200} height={200} alt="product" />
              <h3>{title}</h3>
              <p>{description}</p>
              <h4>₹{price}</h4>
              <button onClick={() => addToCart(id)}>Add to cart</button>
            </div>
          );
        })}
      </div>
   </>
)
}
export default HomeScreen