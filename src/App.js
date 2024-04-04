import './App.css';

import Heading from './functional comonents/f1';
import Image from './functional comonents/image';
import List from './functional comonents/list';
import Forms from './functional comonents/login';
import Table from './functional comonents/table';
import HeadingComponent from './classComponents/f1';
import ImageComponent from './classComponents/image';
import ListComponent from './classComponents/list';
import FormComponent from './classComponents/form';
import TableComponent from './classComponents/Table'
import All from './functional comonents/all'
import AllComponents from './classComponents/AllC';
import BasicExample from './carousel';
import ShapeExample from './image1';
import Models from './model';
import WithLabelExample from './progress';
import Spinner from './spinner';
import TableComponents from './props/28/table';
import Filterdata from './props/28/task/fiteremp';
import { employees } from './props/28/task/dataemp';
import { imagesData } from './27/imagesdata';
import DisplayImages from './27/imagesprop';
// var a=[
//   {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//       "rate": 3.9,
//       "count": 120
//     }
//   },
//   {"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men's clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","rating":{"rate":4.1,"count":259}},{"id":3,"title":"Mens Cotton Jacket","price":55.99,"description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.","category":"men's clothing","image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg","rating":{"rate":4.7,"count":500}},{"id":4,"title":"Mens Casual Slim Fit","price":15.99,"description":"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.","category":"men's clothing","image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg","rating":{"rate":2.1,"count":430}},{"id":5,"title":"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet","price":695,"description":"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.","category":"jewelery","image":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":4.6,"count":400}},
// ]
// var aa="store"

// var res=a.map((val,indx)=>{
//   return (
//    <div className="box1">
//     <div className="b1">
//      <img id="img"src={val.image} width="200" height="150" alt={aa+indx}></img>
//      <p>{val.description}</p> 
//      <p id="cat">{val.category}</p>
//     </div>
//    </div>
//   )
// })
function App(){
  return(
    <>
   {/* <BasicExample></BasicExample> */}
  
   {/* <WithLabelExample></WithLabelExample>
   <ShapeExample></ShapeExample>
   <TableComponents></TableComponents>
   <Spinner></Spinner> */}
   {<Filterdata employees={employees}></Filterdata>}
   <DisplayImages imagesData={imagesData}></DisplayImages>
   

   </>
  )
};

export default App;
