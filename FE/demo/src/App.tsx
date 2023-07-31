import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {HeadersAdmin} from "./compoments/admin/HeadersAdmin";


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<HeadersAdmin/>}/>

        </Routes>
    </>
  );
}

export default App;
