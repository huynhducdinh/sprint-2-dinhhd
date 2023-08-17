import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.min.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Home} from "./componments/home";
import {Login} from "./componments/login";
import {Shopping_cart} from "./componments/shopping_cart";
import {ImageSlide} from "./componments/ImageSlide";
import {ProductDetail} from "./componments/productDetail";
import {CardProduct} from "./componments/cardProduct";
import {Footer} from "./componments/footer";
import {ToastContainer} from "react-toastify";
import {HeadersPhu} from "./componments/headersPhu";
import {HomePageAdmin} from "./componments/HomePageAdmin";
import {Story} from "./componments/story";
import {QuantityProvider} from "./componments/QuantityContext";


// import {createContext} from "react";


function App() {

    return (
        <>
            <QuantityProvider>
            <HeadersPhu/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/slide" element={<ImageSlide/>}/>
                <Route path="/cart" element={<Shopping_cart/>}/>
                <Route path="/detail" element={<ProductDetail/>}/>
                <Route path="/card" element={<CardProduct/>}/>
                <Route path="/detail/:id/product" element={<ProductDetail/>}/>
                <Route path="/:id/product" element={<CardProduct/>}/>
                <Route path="/homeAdmin" element={<HomePageAdmin/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/story" element={<Story/>}/>
            </Routes>
            <ToastContainer/>
            <Footer/>
            </QuantityProvider>
        </>
    );
}

export default App;
