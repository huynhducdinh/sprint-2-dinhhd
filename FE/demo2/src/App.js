import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";

import {Headers} from "./componments/headers";
import {Footer} from "./componments/footer";
import {Body} from "./componments/body";
import {Login} from "./componments/login";
import {Shopping_cart} from "./componments/shopping_cart";
import {ImageSlide} from "./componments/ImageSlide";
import {ProductDetail} from "./componments/productDetail";
import {CardProduct} from "./componments/cardProduct";

function App() {
  return (
   <>
       <Headers/>
   <Routes>

     <Route path="/slide" element={<ImageSlide/>}/>

     <Route path="/body" element={<Body/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/cart" element={<Shopping_cart/>}/>
     <Route path="/detail" element={<ProductDetail/>}/>
     <Route path="/card" element={<CardProduct/>}/>

   </Routes>
       <Footer/>
   </>
  );
}

export default App;
