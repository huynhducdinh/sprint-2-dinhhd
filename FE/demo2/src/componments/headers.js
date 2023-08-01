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
                    <nav id="navbar" className="navbar">
                        <ul style={{marginLeft: "-50%"}}>
                            <li>
                                <NavLink to="/body" className="text-white" href="#hero">Trang chủ</NavLink>
                            </li>
                            <li>
                                <NavLink to="/detail " className="text-white" href="#about">Sản phẩm</NavLink>
                            </li>
                            <li>
                                <a className="text-white" href="#events">Tin tức</a>
                            </li>
                            <li>
                                <a className="text-white" href="#chefs">Liên hệ</a>
                            </li>
                            <li>
                                <NavLink to="/login" className="text-white">Đăng nhập</NavLink>
                            </li>

                            <div style={{marginLeft: "30%"}}>
                                <li>
                                    <NavLink to="/cart" className="text-white">
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