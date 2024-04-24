import { BrowserRouter, Routes,Route} from "react-router-dom"
import HomeScreen from "../navigation-sections/Home.js"
import AboutSection from "../navigation-sections/about.js"
import InvalidScreen from "../navigation-sections/invalid.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "../navigation-sections/contact.js";
import ProductDetails from "../navigation-sections/product.js";
import { useState } from "react";
import Login from "../navigation-sections/login.js";
import Signup from "../navigation-sections/signup.js";

const NavigationStack=()=>{
  // const[login,setLogin]=useState(false)
 
  // const [hasSignedUp, setHasSignedUp] = useState(true);

  // const handleSignup = () => {
    
  //   setHasSignedUp(true);
  // };


  // const handleLogin = () => {
  //   setLogin(true);
  // };

  return(

    <BrowserRouter>
      <Routes>
        {/* {login ? ( */}
          <>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/aboutsection" element={<AboutSection />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<InvalidScreen />} />
            <Route path=":brand/:id" element={<ProductDetails />} />
          </>
        {/* ) : hasSignedUp ? (
          <Route path="/" element={<Login/>} />
        ) : (
          <Route path="/signup" element={<Signup />} />
        )} */}
      </Routes>
    </BrowserRouter>
  
  
  )

}
export default NavigationStack