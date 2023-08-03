import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/main.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from "react";
import {Link, NavLink} from "react-router-dom";


export function Headers() {
    return (
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">
                    <div id="header-nav-logo" className="col-md-2">
                        <Link to="/">
                            <img src="/img/fruit%20shop.png" alt="" style={{height: "10.5vh", width: "10.5vh"}}/>
                        </Link>
                    </div>
                    <nav id="navbar" className="navbar-cart">
                        <ul style={{marginLeft: "-35%"}}>
                            <li>
                                <NavLink to="/body" style={{justifyContent:"center"}} className="text-white " href="#hero">Trang chủ</NavLink>
                            </li>
                            <li>
                                <NavLink to="/card" style={{justifyContent:"center"}} className="text-white " href="#about">Sản phẩm</NavLink>
                            </li>
                            <li>
                                <NavLink to="" className="text-white " style={{justifyContent:"center"}} href="#events">Tin tức</NavLink>
                            </li>
                            <li>
                                <a className="text-white " style={{justifyContent:"center"}} href="#chefs">Liên hệ</a>
                            </li>
                            <li>
                                <a className="text-white " style={{justifyContent:"center"}} href="#chefs">Câu chuyện</a>
                            </li>
                            <div style={{marginLeft: "20%"}}>
                            <li>
                                <NavLink to="/login" className="text-white " style={{justifyContent:"center"}}>Đăng nhập</NavLink>
                            </li>
                            </div>
                            <div style={{marginLeft: "5%"}}>
                                <li>
                                    <NavLink to="/cart" className="text-white " style={{justifyContent:"center"}}>
                                        Giỏ hàng <i className='fa fa-shopping-basket'></i>
                                    </NavLink>
                                </li>
                            </div>
                        </ul>
                    </nav>
                    <i className="mobile-nav-toggle mobile-nav-show bi bi-list"/>
                    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"/>
                </div>
            </header>


        </>
    )
}