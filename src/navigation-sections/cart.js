import React, { useState, useEffect } from "react";
import Header from "../16apr comp-nav/header";
import axios from "axios";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes");
      if (response.status === 200) {
        setRecipes(response.data.recipes);
      } else {
        console.log("Error fetching recipes");
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const handleAddToCart = (id) => {
    const itemToAdd = recipes.find((recipe) => recipe.id === id);
    if (itemToAdd) {
      setCart((prevCartItems) => [...prevCartItems, itemToAdd]);
      setCount(count + 1);
    }
  };

  const handleDeleteFromCart = (id) => {
    setCart((prevCartItems) => prevCartItems.filter((recipe) => recipe.id !== id));
    setCount(count - 1);
  };

  return (
    <>
      <Header />
      <button onClick={() => setShowCart(!showCart)}>
        <img src="https://static.vecteezy.com/system/resources/previews/027/381/351/original/shopping-cart-icon-shopping-trolley-icon-shopping-cart-logo-container-for-goods-and-products-economics-symbol-design-elements-basket-symbol-silhouette-retail-design-elements-vector.jpg" alt="cart" height="50" width="50" />
      </button>
      {showCart && (
        <div>
          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            <ul>
              {cart.map((recipe) => (
                <li key={recipe.id}>
                  <img src={recipe.image} width={50} height={50} alt="product" />
                  <button onClick={() => handleDeleteFromCart(recipe.id)}>delete</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      
      {recipes.length > 0 ? (
        recipes.map((eachRecipe) => {
          const { name, image, id } = eachRecipe;
          return (
            <div className="trecipes" key={id}>
              <h2 className="hname">{name}</h2>
              <img
                className="himage"
                src={image}
                alt={name}
                height={200}
                width={200}
              />
              <br />
              <button className="btn3">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/${id}/${name}`}
                >
                  See More
                </Link>
              </button>
              <br />
              <button onClick={() => handleAddToCart(id)} className="btn1">
                Add
              </button>
              <button className="btn2">Remove</button>
            </div>
          );
        })
      ) : (
        <h3>Chef is Working</h3>
      )}
    </>
  );
};

export default HomeScreen;
