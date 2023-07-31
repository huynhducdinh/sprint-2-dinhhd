import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";

import {Headers} from "./componments/headers";
import {Footer} from "./componments/footer";
import {Body} from "./componments/body";
import {Login} from "./componments/login";

function App() {
  return (
   <>
   <Routes>
     <Route path="/" element={<Headers/>}/>
     <Route path="/footers" element={<Footer/>}/>
     <Route path="/body" element={<Body/>}/>
     <Route path="/login" element={<Login/>}/>
   </Routes>
   </>
  );
}

export default App;
