import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.min.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Home} from "./componments/home/home";
import {Login} from "./componments/login/login";
import {ShoppingCart} from "./componments/shoppingCart/shoppingCart";
import {ImageSlide} from "./componments/home/imageSlide";
import {ProductDetail} from "./componments/productFruit/productDetail";
import {CardProduct} from "./componments/productFruit/cardProduct";
import {Footer} from "./componments/home/footer";
import {ToastContainer} from "react-toastify";
import {Headers} from "./componments/home/headers";
import {HomePageAdmin} from "./componments/admin/homePageAdmin";
import {Story} from "./componments/home/story";
import {QuantityProvider} from "./componments/context/quantityContext";
import store from "./componments/redux/store";
import {Provider} from "react-redux";
import {History} from "./componments/customer/history";
import {Information} from "./componments/customer/information";
import {CreateProductFruit} from "./componments/admin/CreateProductFruit";

function App() {

    return (
        <>
            <Provider store={store}>
                    <Headers/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/slide" element={<ImageSlide/>}/>
                        <Route path="/cart" element={<ShoppingCart/>}/>
                        <Route path="/card" element={<CardProduct/>}/>
                        <Route path="/detail" element={<ProductDetail/>}/>
                        <Route path="/detail/:id/product" element={<ProductDetail/>}/>
                        <Route path="/:id/product" element={<CardProduct/>}/>
                        <Route path="/homeAdmin" element={<HomePageAdmin/>}/>
                        <Route path="/createFruit" element={<CreateProductFruit/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/story" element={<Story/>}/>
                        <Route path="/history" element={<History/>}/>
                        <Route path="/information" element={<Information/>}/>

                    </Routes>
                <ToastContainer style={{marginTop:"4.7%"}}/>
                <Footer/>
            </Provider>

        </>
    );
}

export default App;
