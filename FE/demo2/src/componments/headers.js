import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/main.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from "react";
import {Footer} from "./footer";
import {Body} from "./body";
import {Link} from "react-router-dom";


export function Headers() {
    return(
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">
                    <div id="header-nav-logo" className="col-md-2">
                        <img src="/img/fruit%20shop.png" alt="" style={{height: "10.5vh", width: "10.5vh"}}/>
                    </div>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li>
                                <a className="text-white" href="#hero">Trang chủ</a>
                            </li>
                            <li>
                                <a  className="text-white" href="#about">Sản phẩm</a>
                            </li>
                            <li>
                                <a  className="text-white" href="#menu">Giới thiệu</a>
                            </li>
                            <li>
                                <a  className="text-white" href="#events">Tin tức</a>
                            </li>
                            <li>
                                <a  className="text-white" href="#chefs">Liên hệ</a>
                            </li>
                            <li>
                                <a  className="text-white" href="#gallery">Chính Sách & Quy định</a>
                            </li>
                            <li>
                                <a className="text-white" href="/login">Đăng nhập</a>
                            </li>
                        </ul>
                    </nav>
                    {/* .navbar */}
                    <div>
                    <a className="btn btn-outline-success" style={{color:"white"}} href="">
                       <span>Giỏ hàng  <i className='fa fa-shopping-basket'></i></span>
                    </a>
                    </div>
                    <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
                    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
                </div>
            </header>



        </>
    )
}